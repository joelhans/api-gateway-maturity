const fs = require("fs");
require("dotenv").config();
const { exec } = require("child_process");
const { marked } = require("marked");

const NGROK_ENDPOINT_ID = process.env.NGROK_ENDPOINT_ID;
const TARGET_URL = process.env.TARGET_URL;

// Markdown input and output filenames
const MD_FILE = "README.md";
const POLICY_FILE = "policy.yaml";

// HTML Template
const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The API Gateway Maturity Model</title>
    <link rel="preload" href="https://assets.ngrok.com/fonts/euclid-square/EuclidSquare-Regular-WebS.woff" as="font" type="font/woff" crossorigin="anonymous">
    <link rel="preload" href="https://assets.ngrok.com/fonts/euclid-square/EuclidSquare-Semibold-WebS.woff" as="font" type="font/woff" crossorigin="anonymous">
    <style type="text/css">
      @media screen {
        @font-face {
          font-family: 'EuclidSquare';
          font-style: normal;
          font-weight: 400;
          src: url(https://assets.ngrok.com/fonts/euclid-square/EuclidSquare-Regular-WebS.woff) format('woff2');
        }
        @font-face {
          font-family: 'EuclidSquare';
          font-style: normal;
          font-weight: 600;
          src: url(https://assets.ngrok.com/fonts/euclid-square/EuclidSquare-Semibold-WebS.woff) format('woff2');
        }
      }
    </style>
    <style>
        body { font-family: EuclidSquare,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"; max-width: 800px; margin: auto; padding: 20px; }
        h1, h2, h3 { color: #333; }
        pre { background: #f4f4f4; padding: 10px; overflow-x: auto; }
        code { font-family: monospace; background: #eee; padding: 2px 4px; }
        .wrapper { margin: 2rem 0; }
    </style>
</head>
<body>
  <div class="wrapper">
    {{content}}
  </div>
</body>
</html>`;

// Read and convert Markdown to HTML
function convertMarkdownToHTML(mdFile) {
    try {
        const markdownContent = fs.readFileSync(mdFile, "utf-8");
        const htmlContent = marked(markdownContent);
        return HTML_TEMPLATE.replace("{{content}}", htmlContent);
    } catch (error) {
        console.error("Error reading Markdown file:", error);
        process.exit(1);
    }
}

// Indent HTML content correctly for YAML (12 spaces)
function indentForYaml(htmlString, indentSize = 12) {
    const indent = " ".repeat(indentSize);
    return htmlString
        .split("\n")
        .map((line) => indent + line) // Add 12 spaces to each line
        .join("\n");
}

// Generate Traffic Policy YAML file
function createTrafficPolicy(htmlString) {
    const indentedHTML = indentForYaml(htmlString);

    const yamlContent = `on_http_request:
  - actions:
      - type: custom-response
        config:
          status_code: 200
          headers:
            Content-Type: text/html
          content: |
${indentedHTML}`;

    fs.writeFileSync(POLICY_FILE, yamlContent, "utf-8");
    console.log(`✅ Traffic Policy YAML written to ${POLICY_FILE}`);
}

// Apply the policy using `ngrok api`
function applyTrafficPolicy() {
    const command = `ngrok api endpoints update ${NGROK_ENDPOINT_ID} --url ${TARGET_URL} --traffic-policy "$(<${POLICY_FILE})"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error("❌ Error applying Traffic Policy:", error);
            return;
        }
        if (stderr) {
            console.error("⚠️ STDERR:", stderr);
        }
        console.log("✅ ngrok Traffic Policy updated:\n", stdout);
    });
}

// Main execution
function main() {
    const htmlString = convertMarkdownToHTML(MD_FILE);
    createTrafficPolicy(htmlString);
    applyTrafficPolicy();
}

main();
