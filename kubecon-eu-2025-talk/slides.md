---
theme: apple-basic

title: "API Gateway Maturity Matrix: Where Do You Rank?"

mdc: true
fonts:
  sans: Euclid Square
  mono: Fira Code
  local: Euclid Square

layout: intro
---

<div class="center-v">

# The API Gateway Maturity Matrix

*Where Do You Rank?*

</div>

<div class="absolute bottom-10">
  Joel Hans — Senior Developer Educator at ngrok<br />
  April 2, 2025
</div>

<!--

FOR KUBECON

About me: I'm Joel, and I do all things DevRel at ngrok, the universal gateway
company. I love stories, so let me start with a short one loosely based on
ngrok itself.

-->

---

# Let’s start with a story…

![](./assets/python.png){width=120 v-click.hide="3" .center style="rotate: 5deg;"}
![](/assets/nginx.png){width=300 v-click .center style="margin-top: -70px; margin-left: -40px; rotate: -8deg;"}
![](./assets/k8s.png){width=180 v-click .center style="margin-top: 60px; margin-left: 100px;"}

<div v-click style="position: absolute; display: block; left: 80px; top: 80px; rotate: 3deg;">

![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}

<v-click at="8">
    <span class="v2">
        v2
    </span>
</v-click>
<v-click at="8">
    <span class="v2" style="top: 168px;">
        v2
    </span>
</v-click>
<v-click at="8">
    <span class="v2" style="top: 310px;">
        v2
    </span>
</v-click>

</div>

![](./assets/docusaurus.png){v-click width=130 .center style="margin-left: -120px; margin-top: 120px; rotate: 3deg"}
![](./assets/webflow.png){v-click width=130 style="position: absolute; top: -30px; right: -40px; rotate: -20deg"}
![](./assets/vercel.png){v-click width=120 height=120 style="position: absolute; bottom: 40px; right: 140px;"}
![](./assets/remix.png){v-click width=150 style="position: absolute; top: -20px; right: -20px; rotate: -10deg"}

<div v-click style="position: absolute; display: block; top: -120px; right: 340px; rotate: 102deg;">

![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}
![](./assets/go.png){width=80}

</div>

<style>
    .v2 {
        position: absolute; 
        top: 27px; 
        left: 34px; 
        font-family: monospace; 
        font-size: 0.9rem; 
        background: white;
        color: var(--purple);
        padding: 0 0.2rem; 
        border: 1px solid red;
    }
</style>

<!--

It starts with just a simple Python app. It's a one-page marketing site and the rest of the backend.

Then at some point you need to slap NGINX on it. You need that reverse proxy, and NGINX is free and trusted.

Then you decide, wait, let's go Kubernetes. Slap that on there. Nice easy project.

Oh look, some new Go-based API services want to sneak in behind your proxy.

And there's Docusaurus, asking for a little space for your new developer documentation. Slap that on there and get the routing wired up.

Then a few of your APIs need to get moved from here to there, requiring redirects and new version numbers, which is another thing to worry about. They become moving targets.

What's that? Webflow peeking in? Then there’s some apps hosted on Vercel, or maybe Remix is coming to gobble up Webflow.

Then you have even more API services barging in…

I'm sure many of you have been in this situation before. This is a story of people who have no way to self-assess themselves and figure out how to take even a single step away from this chaos to a well-managed, scalable, and developer-friendly API platform. A more mature platform.

If you’re a CTO or engineering leader, you don’t want this happening under your watch. If you’re platform engineer, the path isn’t so much golden as it is covered in a rockslide. If you’re a DevOps or infrastructure engineer, you’re that this is fine dog until the day you hang up your hat.

In some cases, you might have an API gateway in place—you know, that front door to all your APIs and a way to offload non-functional requirements AuthN/AuthZ, load balancing, observability, rate limiting, failover, and much more from your individual services. A control plane.

Most API gateways come with a hundred buttons you can press and things to turn on—maturity means knowing which to turn on first. Which problems do you try to solve first?

ngrok is going down this path on every from every angle—both as a company building an API gateway, and a company dogfooding the heck out of an API gateway.

You might think that’s why I care, but that’s not the whole story.

-->

---
layout: statement
---

# Detroit, Michigan. 

## October 27, 2022.

<!--

I was with 15 or so CTOs and tech leaders from the heaviest hitters of CNCF's end user community.

If you know nothing about me, you might think I was there to contribute!

Nope—I was there to be quiet and listen.

I was there to absorb everything they thought about CNCF's Cloud Native Maturity Model, how they thought about applying it to their organizations, especially from a platform engineering perspective.

Well, if you’re not familiar…

-->

---

# Our starting point: CNCF’s Cloud Native Maturity Model

A framework for starting—and succeeding!—in a cloud native journey, starting with inception into full adoption of cloud native technologies across the CNCF landscape.

- Launched in 2021, reached 3.0 in Autumn 2023.
- Includes five Levels: **Build**, **Operate**, **Scale**, **Improve**,
  **Adapt**.
- Started with 4 dimensions of **People**, **Process**, **Policy**, and **Technology**, with **Business Outcomes** added later and since promoted to top spot on the model with 3.0.

<!--

Build: You have a baseline cloud native implementation in pre-production.

Operate: you’re on cloud native and moving into production.

Scale: You’re defining automation like CI/CD, GitOps, IaC to make cloud native smoother.

Improve: You’re defining security, policy, and governance across your environment.

Adapt: You’re revisiting earlier decisions to optimize and future-proof.

-->

---

# Our lens: Where maturity and a specific technology meet

Most maturity models, like CNCF's, are built for sweeping cultural change. "Digital transformation" and so on.

What about tactical decisions about a *single* technology?

- "My API gateway offers 100 features. Which ones do I need Day 0, Day 1, and Day 1,000?"
- "What value does my API gateway offer as part of an internal developer platform?"
- "Things are actually quiet right now... what should I think about building next?"
- "Woof. That outage was a bad one. What do I need to build right now to make sure I never have to experience that again?"

<!--

Back in Detroit, these leaders loved having a roadmap to look forward to, but the feedback that really resonated with me was:

They didn’t know how to apply this model to how they might get better about a single technological “thread” of the CNCF landscape.

The CNCF model gives us the forest, but this API gateway maturity matrix helps you navigate a critical tree within it.

-->

---

# Hold up: What is maturity, anyway?

To paraphrase the Capability Maturity Model (CMM), maturity is how formal and
actively optimized your processes are, from ad hoc to formally defined.

I’ve been asking around at ngrok, too.

- "The API won't change underneath me."
- "When I get paged because something is broken, it's because of a bug in my
software and not the infrastructure breaking down. :lolsob:"
- "Don't conflate maturity with quality."
- "Wide adoption, but sometimes crusty."

---

# Maturity isn’t always a good thing.

- There's a fine line between *mature* and *legacy*.
- Mature platforms are difficult for you to modify and others to build upon.
- No one understands how a mature platform works anymore, whether that’s lost institutional knowledge or it just worked once so leave it alone.
- Hard to steer the ship quickly if you need to do something complex... like
multicloud (yikes).

## But it _can_ be a conscious effort to get you:

- Reliability without surprises.
- Velocity without chaos.
- Scalability without rip-and-replace (again).
- Governance without bureaucracy.

---
layout: statement
---

## As teams mature, they shift _away_ from building API gateways for themselves and _torward_ enabling others to ship fast without giving up control over policy and governance.

---

# Is this matrix right for you?

## Tech leads and architects

→ "I need to make build vs. buy decisions and define an API strategy that scales."

## Platform engineers 

→ "I'm building an internal developer platform and need to define how API gateways fit into our developer experience."

## DevOps and infrastructure engineers 

→ "I want to standardized ingress and API governance without slowing devs down... and not making more incidents for myself."

<!--

To reiterate, I’m really focused on the platform engineering story here.

If you can ask yourself, “How does maturing my API gateway help you build an amazing platform for my team?” then you’re on the right track.

Junior engineers might use this as roadmap of what to learn next, or API gateway providers might want to see where they stack up and what features to build next.

-->

---

# Why should you care?

API gateways are a core of your platform and your business. You need to:

- Think critically about where you are and what you could bring to the table for improvements.
- Evaluate new technologies or what capabilities your current stack provides that you haven't yet turned on.
- Find places where you can invest time as the users of your platform—or the scale of your business—demand.

That requires:

A way to reflect on yourself, your team, and your offering... then find ways to improve or figure out where you're falling behind.

---

# Everybody *loves* a caveat!

## This model is:

- Designed to help you self-assess where your API gateway implementation is today and plan ahead for what's next.
- A way to focus on solving problems and enabling value or return on investment.
- A collaborative effort that needs contributions from *you*!

## This model is not:

- A way to judge your implementation or tell you how to do your job.
- A prescriptive, "all or nothing" approach to building a mature API gateway.
- Designed to cover *all* the cultural and technological complexity of building an internal developer platform.
- A way to pitch any particular API gateway product or service.

<!--

I’d love for you to take two feelings away from today:

1. First, that understand and feel the value of doing a self-assessment of your API gateway as one piece of technology within a wider platform.

2. Second, that you know how to and want to contribute to make this whole thing better.

-->

---

# Where do you think you stand?

- 🚀 "Our API gateway is in good shape."
- 🏗️ "We're duct-taping stuff together."
- 🔥 "NGINX config copy-pasted from Stack Overflow. Send help."

<!--

I was going to try out some snazzy polling feature, but I want things to feel
more human. I want to see some hands in the air!

-->

---

# Onto the API Gateway Maturity Matrix™️

<div style="font-size:0.8rem">

|    |    |
| -- | -- |
| Build   | **Is this thing on?** We have a basic ingress with a reverse proxy masquerading as an API gateway. The infra team (or the one person who understands it) owns the manual configuration, holds all the knowledge, and manages things ad-hoc. |
| Operate | **Time to make this API gateway thing a little less Swiss cheese-y.** We’ve upgraded to a dedicated API gateway, managed by our infra or DevOps team, which is declaratively configured with CI/CD and supported by minimal-to-acceptable documentation. |
| Scale   | **How do I make this thing multi-region, multi-team, multicloud, and not terrible to work on at the same time?** Our API gateway now standardizes services from deployment to observability to incident response, and offers reusable configs for developers to ship quickly while our newfangled platform team manages the scale. |
| Improve | **All the things are important now. And how do I help devs move quick without losing control?** The platform team constantly modulates how the API gateway works to create a golden path for self-service while isolating different teams’ work, automating policy enforcement, and providing built-in observability for every service. |
| Adapt   | **How do we keep innovating... without over-engineering?** The API gateway is now fully dynamic, policy-driven, and responsive to signals like traffic patterns, active threats, or cost. It’s the foundation of a unified platform that everyone not just relies on, but actually enjoys using. |

</div>

<!--

Let’s start with a broad look at how API gateways transform over these five Levels from both a technological and team/process angle.

-->

---

# Five problems to solve (capability threads)

- Traffic management & reliability
- Authentication & security
- Observability & debugging
- Developer/team experience
- Governance & compliance

<!--

Next, we’re going to move into each problem/thread one at a time and see how it evolves over time based on what problems you’re solving or value you’re creating, plus examples of which capabilities get you to that goal.

These capability threads are our five dimensions—each one transforms at each of the five levels of maturity.

I’m focused more on capabilities because we’re talking about a specific technology—unlike the CNCF’s maturity model, which focuses on categories like People and Business Outcomes, I don’t think any of can defensibly argue than an API gateway is going to drive your entire platform engineering culture.

API gateways can, on the other hand, play a major role in how those successful that culture is.

-->

---
layout: statement
---

# Traffic management & reliability

---

|    |    |
| -- | -- | 
| Build   | Our APIs are protected from unauthorized access, but the application of AuthN is inconsistent—sometimes at our gateway, sometimes embedded in your services. <ul><li>Static routing on paths, subdomains (+ redirects!)</li><li>Basic rate limits (e.g. 100 req/min across all endpoints)</li><li>Simple load balancing and manual failover</li></ul> |
| Operate | Our APIs can handle high traffic safely and without overloading our upstream services, and we can handle new versions or changed paths. <ul><li>Client- and service-specific rate limiting</li><li>Geoblocking and IP restrictions</li><li>DDoS protection and global load balancing</li></ul> |
| Scale   | We now optimize traffic for performance and availability environments, with automatic failover when things go wrong, and support more sophisticated deployments. <ul><li>Multi-environment and -region routing (multicloud?)</li><li>Weighted traffic splitting for blue/green or canaries</li><li>Load balancing: latency-based, or sticky, round robin</li></ul> |
| Improve | Teams can self-manage routing, rate limits, and other traffic management rules while staying within platform guardrails. <ul><li>Dynamic throttling based on load or error rates</li><li>Custom LB: PEWMA+weighting, proximity+load</li><li>Request hedging for latency optimization</li></ul> |
| Adapt   | We can route traffic dynamically based on cost, latency, congestion, usage patterns, availability, and beyond. <ul><li>Dynamic routing for user priority or slow starts</li><li>Dynamic limits based on predicted workload patterns</li><li>Multicloud LB based on cost and capacity</li></ul> |

<!--

Now, I'm going to apoplogize *once* for the amount of text on these next handful
of slides, and then I won't apologize again!

Turns out making a maturity models involve a lot of text. And I'm a writer at
heart! Information density is still in, right?

I will give you a ton of details on how to get this same information after the
talk is over so you can do all your self-assessment magic.

At the very beginning, you might not even have an API gateway—you might expose
APIs more directly through a reverse proxy or (heaven forbid) port forwarding.

Whatever your method, even if your are implementing and building on an API
gateway, everything starts static.

Same idea goes for rate limiting or load balancing—we start with the basics,
then add capability when required based on requests from the org or pain points
you’re experiencing.

Something really important to mention here is that it’s totally normal to have
an uneven maturity across these problems and dimensions. For example, if you’re
just starting up your API gateway, you might make it all the way to Level 3 of
traffic management before you give a single hoot about developer experience.

-->

---
layout: image-right
image: '/assets/2-person.png'
---

# A two-person… *thing*?

With a single service and two technical co-founders, it's easy to collaborate and write directly into the app layer rather than blow up the archeticture... and no need for complex automation. Manual deploys and NGINX, TYVM!

- ✅ Can we route API requests correctly?<br />
- ✅ Can we prevent our backend from crashing under load?<br />
- ✅ Do we have *any* authentication in place?

<!--

Going deep on traffic management, followed by auth (which I’ll talk about on the
next slide), is probably the most common pattern you’ll see with maturity across
these five threads.

Turns out it’s really important to be able to lock in ingress to your services
and add in at least some way of controlling access, before you give a hoot about
DX. You care about redirects more than you do policy as code.

-->

---
layout: statement
---

# Authentication & security

---

|    |    |
| -- | -- | 
| Build   | Our APIs are protected from unauthorized access, but the application of AuthN is inconsistent—sometimes at our gateway, sometimes embedded in your services. <ul><li>API keys and basic authentication</li><li>Mix-and-match of AuthN/AuthZ services</li><li>TLS termination at the gateway edge</li></ul> |
| Operate | Security enforcement is increasingly centralized at the API gateway, reducing per-service misconfigurations that lead to risk or breaches. <ul><li>JWTs or OAuth2</li><li>Centralized AuthN/AuthZ via the API gateway</li><li>Basic role-based access control</li></ul> |
| Scale   | TWe have a unified and repeatable security model that supports multiple distributed teams.<ul><li>Geoblocking and IP reputation filtering</li><li>mTLS for service-to-service AuthN/AuthZ</li><li>Multi-tenant isolation in gateway routes</li></ul> |
| Improve | Developers can implement proper Zero Trust fundamentals via the API gateway without writing tickets or waiting for approvals. <ul><li>Self-service policy enforcement via OPA/Kyverno</li><li>Automated API posture checks</li><li>Fine-grained access control per team or service</li></ul> |
| Adapt   | Our API security model is adaptive and capable of preventing breaches before they happen. <ul><li>Risk-based authentication and rate limiting</li><li>AI-powered threat detection/intelligence feeds</li><li>Just-in-time access control</li></ul> |

<!--

Your journey starts with most essential auth functions being embedded directly
into your services, which equates to inconsistency, difficulty for you trying to
maintain all these systems, and more risk for vulnerabilities.

As you mature, you increasingly use the API gateway as a single place for
centralized enforcement of Zero Trust fundamentals to protect your APIs no
matter who’s built or is deploying them.

When you standardize security at your API gateway across your whole platform,
you’re not a bottleneck, but an accelerator for your dev peers.

-->

---
layout: statement
---

# Observability & debugging

---

|    |    |
| -- | -- | 
| Build   | We can see what our API services are doing in a deployed environment to help us identify issues. <ul><li>Basic logs generated at the API gateway</li><li>Error rate monitoring (5xx API errors)</li><li>Basic health check endpoints</li></ul> |
| Operate | We have a unified view of API health via dashboards, making troubleshooting a lot easier and helping us resolve issues faster. <ul><li>Distributed tracing with Jaeger, OpenTelemetry, etc</li><li>Structured logs</li><li>Unified monitoring across multiple gateway instances</li></ul> |
| Scale   | Our API gateway is seen as the first place to look in incident response. <ul><li>Real-time incident alerting for relevant stakeholders</li><li>Unified API monitoring across clusters/regions/clouds</li><li>Anomaly detection for traffic patterns</li></ul> |
| Improve | Our API gateway can react to its monitoring on its own and prevent a person from having to step in, while also offering way more observability features for those who opt-in to the platform. <ul><li>Automated remediation runbooks</li><li>Editable request replay for debugging</li><li>Team-specific gateway traffic dashboards</li></ul> |
| Adapt   | API issues are fully self-healing, minimizing the need for us (platform team) or others (API developers) to intervene manually. <ul><li>AI-driven anomaly detection and automated RCA</li><li>Automated incident response and rerouting</li><li>Business outcome correlation with ingress patterns</li></ul> |

<!--

The API gateway starts as a data source, but quickly becomes the go-to place for debugging. If all external requests are coming in through the API gateway, what better place to start looking when things go wrong?

Observability is a great place to make your platform the feature-rich golden path, which I’ll talk about more in developer and team experience. If you give them more metrics, more dashboards, and better error handling—especially without them having to instrument a single thing in their services—they’ll be much more likely to hop onboard.

-->

---
layout: image-right
image: '/assets/50-person.png'
---

# A 50-person startup?

Now they're bigger—like hundreds of thousands of requests every day bigger. They need rate limiting and ways to figure out error rates or percentage of late responses, and the small-but-mighty infra team is getting tired of pulling logs and running queries. All this optimization requires better deployment strategies, too.

- ✅ Can we protect our APIs from excessive traffic or bad actors?<br />
- ✅ Can we deploy API changes without manual intervention?<br />
- ✅ Have me moved past basic metrics and into structured logs?

---
layout: statement
---

# Developer/team experience

---

|    |    |
| -- | -- | 
| Build   | API configurations are managed with manual changes, with developers cobbling together ways to ship to prod. It works, but it’s slow. <ul><li>API configs in YAML</li><li>Ticket-based (or YOLO) configuration changes</li><li>Little to no documentation</li></ul> |
| Operate | API changes are automated, clearing our Linear/Jira/etc board of tickets and freeing up our team’s engineering time. <ul><li>Standardized API definitions</li><li>Config and deploy with GitOps, IaC, and CI/CD</li><li>Basic API catalog derived from routing topology</li></ul> |
| Scale   | API management (via automation and IaC) helps us manage APIs at scale across multiple clusters, environments, and growing teams. <ul><li>Devs provision new gateways per project/function</li><li>Many deployment options (K8s, hybrid, multicloud)</li><li>API versioning strategies at the API gateway</li></ul> |
| Improve | Developers can self-service isolated API gateway configurations while we (now a platform team!) enforce policy, reducing operational overhead on a golden path. <ul><li>Golden path templates/recipes for gateway patterns</li><li>Rich documentation of gateway best practices</li><li>Extensive API catalog/developer portal</li></ul> |
| Adapt   | We give developers more than guardrails—we support them with best practices on designing and deploying APIs. <ul><li>Support for advanced customization and plugins</li><li>Shift-lefted, AI-driven gateway recommendations</li><li>Automatic detection of unused/deprecated services</li></ul> |

<!--

The complete lack of an API gateway, or a very underutilized one, transforms
into a repeatable pattern for ingress. That might not reflect right away in an
improvement in the developer experience, but the tendency of thinking toward
building a platform equates to DX improvements across the board.

As you reach the Scale into Improve phases, you’re much more focused on
providing golden paths, but that’s often a place where teams stall out. You’re
always trying to strike a balance between offering an “easy” button and exposing
advance settings, and if your platform doesn’t support that one thing, folks
will go elsewhere.

Everyone’s service is a special snowflake, right?

At Improve, devs follow these golden paths. At Adapt, the car is self-driving.

-->

---
layout: statement
---

# Governance & compliance

---

|    |    |
| -- | -- | 
| Build   | APIs meet basic security and compliance standards, but inconsistently, leading to risk and ad-hoc responses. <ul><li>No enforced API standards at the gateway</li><li>Infrequent/ad-hoc audits of gateway compliance</li><li>Manual configuration reviews</li></ul> |
| Operate | We enforce standards across multiple APIs and teams to reduce the risk of being non-compliant. <ul><li>Basic API lifecycle management (e.g. versioning)</li><li>Standardized API security policies</li><li>Semi-regular scanning of API gateway policy</li></ul> |
| Scale   | Governance of API gateways scales across teams and cloud environments without blocking development velocity. <ul><li>Configs controlled with policy-as-code and CI/CD</li><li>Traffic auditing across multiple environments</li><li>Gateway-enforced data sovereignty</li></ul> |
| Improve | Anyone can configure APIs within a predefined, platform-wide governance model. <ul><li>Role- or team-based API gateway management</li><li>Fine-grained access control for config changes</li><li>Configuration change tracking for compliance</li></ul> |
| Adapt   | Our compliance is now automated and capable of adapting to new regulations or security risks dynamically. <ul><li>AI-driven, continuous compliance monitoring</li><li>Threat-based security policy updates</li><li>Automatic policy updates for regulatory changes</li></ul> |

<!--

Compliance is a tricky one, because more than the other threads, you might have
to get really big before it’s much of a concern for you. It could be an area
where, if you were to map out your Level on all 5 threads like the radars I’ve
been showing you, it could dramatically lower your average score, right?

The problem is that you don’t really need it until your partners or customers
tell you they NEED IT NOW if you have even the smallest shot of working with
them.

Early on, you’re facing a lot of pendulum swings between your team and
developers who want to ship. One day they’ll say, “we need API versioning,
STAT,” and the next day, they’ll say they’ve figured out the problem themselves.
By the Scale phase, you’ve codified enough of the implications these processes
have on your API gateway, like multicloud, and the problems you

The more mature you get, the more your platform enforces the control you need
without adding development friction… and people stop fearing audits or
regulatory changes.

-->

---
layout: image-right
image: '/assets/200-developer.png'
---

# A 200-developer machine?

They handle 10 million requests and need to stand up a new API every day. *All of a sudden, all the things are important*. They're getting DDoSed on the regular, but they're also acquiring a company in a new and scary regulatory environment!

- ✅ Are individual teams configuring and deploying APIs without causing chaos?<br />
- ✅ Can we scale API security across multiple regions and teams?<br />
- ✅ Do we have a way to automate governance instead of enforcing it manually?

---

# We’ve built and tested the algorithm. Let’s run it through some real-world data!

(This is a surprise.)

---

# Where do you think you stand now?

- 🏆 "Feeling mature, but not legacy!"
- 🚧 "We’ve got work to do."
- 🤡 "I just realized we don’t actually have an API gateway."

---
layout: two-cols
---

# The Matrix is ready for you!

A single-page website for focused self-assessment: `https://api-gateway-maturity.joelhans.xyz`

Your action items:

<div style="font-size: 0.8rem;">

- Take *2 minutes* here at KubeCon to rate yourself across the five problem threads. 
  - Where are you strongest? Weakest?
- Take the model back to your team next week and explore each thread+level to explore where you stand on the:
  - Problems you're solving
  - Value you deliver to your organization
  - Capabilities you've mastered
- Let me know about your experience! j.hans@ngrok.com

</div>

::right::

![Link to api-gateway-maturity.joelhans.xyz](./assets/qr-code-web.png)

---
layout: two-cols
---

# Help make the Matrix better!

<div style="font-size: 0.8rem;">

Full text + OSS project on GitHub: `joelhans/api-gateway-maturity`

- Contribute your experiences on running this "algorithm" or add new illustrations
- Add more example capabilities to each thread+level
- Help develop a Myers-Briggs-esque questionnaire for even smoother self-assessment

</div>

::right::

![Link to github.com/joelhans/api-gateway-maturity](./assets/qr-code-github.png)

<!--

My hope is that by making this all open for you to use and contribute to, we’re can all take a  step forward in our own maturity as people who think about, architect, implement, debug, observe, and yes, even just stand on stage talk about, our beloved API gateways.

-->

---
layout: two-cols
---

# Questions?

Find me *beyond the Matrix*:

- j.hans@ngrok.com
- At the ngrok booth at **N611** (where I have to go right after this and finish
  up my shift \[instead of hiding like I would probably like to\])
- Wandering around KubeCon in an ngrok shirt

::right::

![Link to api-gateway-maturity.joelhans.xyz](./assets/qr-code-web.png)

<style>
p {
    margin: 0;
}
</style>
