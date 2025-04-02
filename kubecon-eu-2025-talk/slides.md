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

## *Where Do You Rank?*

</div>

<div class="absolute bottom-10">
  Joel Hans — Senior Developer Educator at ngrok<br />
  April 2, 2025
</div>

<!--

FOR KUBECON

About me: I'm Joel, and I do all things DevRel at ngrok, the universal gateway
company. I love stories, so let me start with a short one that will,
unfortunately, ring true with many of you.

-->

---
name: story
---

# Let’s start with a story…

<div id="dvd-container">

![](./assets/k8s.png){width=180 .center}

<v-click>

![](./assets/python.png){width=80 .center style="rotate: 5deg; margin-left: 180px; margin-top: -20px;"}
![](./assets/python.png){width=80 .center style="rotate: 5deg; margin-left: 180px; margin-top: 20px;"}
![](./assets/python.png){width=80 .center style="rotate: 5deg; margin-left: 180px; margin-top: 60px;"}

</v-click>

<v-click>

![](/assets/nginx.png){width=120 .center style="margin-top: -110px; margin-left: -200px; rotate: -7deg;"}
![](/assets/caddy.svg){width=120 .center style="margin-top: -70px; margin-left: -200px; rotate: -6deg;"}
![](/assets/cert-manager.svg){width=140 .center style="margin-top: -30px; margin-left: -200px; rotate: -6deg;"}

</v-click>

<div class="logo-group" v-click style="position: absolute; left: 40px; top: 80px; rotate: 2deg;">
    
<img src="/assets/go.png" class="service-go" />
<img src="/assets/go.png" class="service-go" />
<img src="/assets/go.png" class="service-go" />
<img src="/assets/go.png" class="service-go" />
<img src="/assets/go.png" class="service-go" />
<img src="/assets/go.png" class="service-go" />

</div>

![](./assets/webflow.png){v-click width=120 height=120 .center style="margin-left: 300px; margin-top: -180px;"}
![](./assets/docusaurus.png){v-click width=110 .center style="margin-left: -160px; margin-top: 150px; rotate: 3deg"}

<div class="logo-group" v-click style="position: absolute; right: 80px; bottom: 20px; rotate: 12deg;">
    
![](./assets/go.png){.service-go}
![](./assets/go.png){.service-go}
![](./assets/go.png){.service-go}
![](./assets/go.png){.service-go}
![](./assets/go.png){.service-go}
![](./assets/go.png){.service-go}

</div>

<div v-click>

<img src="/assets/go.png" class="service-go logo" />
<img src="/assets/go.png" class="service-go logo" />
<img src="/assets/go.png" class="service-go logo" />
<img src="/assets/go.png" class="service-go logo" />
<img src="/assets/go.png" class="service-go logo" />
<img src="/assets/go.png" class="service-go logo" />
<img src="/assets/go.png" class="service-go logo" />
<img src="/assets/go.png" class="service-go logo" />
<img src="/assets/go.png" class="service-go logo" />
<img src="/assets/go.png" class="service-go logo" />
<img src="/assets/go.png" class="service-go logo" />
<img src="/assets/go.png" class="service-go logo" />

</div>

</div>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
  const container = document.getElementById('dvd-container')
  const logos = Array.from(container.getElementsByClassName('logo'))
  const containerWidth = container.offsetWidth
  const containerHeight = container.offsetHeight
  const size = 80

  logos.forEach((logo) => {
    // Create a new independent scope per logo
    let x = Math.random() * (containerWidth - size)
    let y = Math.random() * (containerHeight - size)
    let dx = (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2)
    let dy = (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2)

    logo.style.position = 'absolute'
    logo.style.width = `${size}px`
    logo.style.left = `${x}px`
    logo.style.top = `${y}px`

    function animate() {
      x += dx
      y += dy

      if (x <= 0 || x + size >= containerWidth) dx = -dx
      if (y <= 0 || y + size >= containerHeight) dy = -dy

      logo.style.left = `${x}px`
      logo.style.top = `${y}px`

      requestAnimationFrame(animate)
    }

    animate() // call it *inside* this logo’s closure
  })

  // Watch for route changes to match /2?clicks=7
  const removeIfNeeded = () => {
    if (route.path.endsWith('/2') && route.query.clicks === '7') {
      const logoGroups = container.querySelectorAll('.logo-group')
      logoGroups.forEach(el => el.remove())
      console.log('💥 Removed .logo-group because ?clicks=7')
    }
  }

  // Run on mount and whenever route updates
  removeIfNeeded()
  watch(() => route.fullPath, removeIfNeeded)
})
</script>

<style>
  .service-go {
    width: 80px;
    rotate: 3deg;
  }

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

It starts with a little baby Kubernetes cluster.

- Then there's some Python services...
- And a marketing site you get up and running with this reliable trio.
- Then you get more services—this time in a different language.
- Then you hire a marketing team that wanted to manage blog content with an
  external service, and since they want it to be on the `/blog` path, all of a
  sudden you need to think about the routing topology in a whole new way. Do you
  use your cluster as a reverse proxy or maybe stand up a load balancer
  somewhere?
- Then comes an internal project to revamp developer docs without having to
  rewrite the whole site. Similar problem, more trouble with routing.
- Then you get more services.
- Then you need to move few APIs around with rewrites and push a few services to
  v2 while carefully deprecating v1...
- And everything just becomes a moving target.
- Then trying to take back control of all this, and make it work better, feels
  insurmountable.

If you’re a CTO or engineering leader, you don’t want this happening under your
watch. If you’re platform engineer, the path isn’t so much golden as it is
covered in a rockslide. If you’re a DevOps or infrastructure engineer, you’re
that this is fine dog until the day you hang up your hat.

And it's a story of people who have no way to self-assess themselves and figure
out how to take even a single step away from this chaos to a well-managed,
scalable, and developer-friendly API platform. A more mature platform.

With a good API gateway—you know, that front door for all your APIs and the way
to offload non-functional requirements—finding a way to solve these problems
doesn't have to be hard.

The harder part is knowing which of the hundred buttons you should press next.
Can you see *the next* high ROI thing to turn on to get more adoption of your
platform and improve your internal processes?

So, whether you've found yourself in this story before, or maybe you've picked
out an API gateway and got super excited to turn on all the cool features only
to find yourself dragged into chaos...

The whole point of this is to say that there can and should be a way to help
yourself find what the next best thing is, even if that means *not* turning on
one of those features you were so excited about.

-->

---

# Is this Matrix right for you?

## Tech leads and architects

→ "I need to make build vs. buy decisions and define an API strategy that
scales."

## Platform engineers 

→ "I'm building an internal developer platform and need to define how API
gateways fit into our developer experience."

## DevOps and infrastructure engineers 

→ "I want to standardized ingress, security, and observability while also
enabling others with self-serfice... and not making more incidents to deal with."

<!--

Maybe you remember that I mentioned three personas in this long and painful
story. 

In this talk, I'm hoping to leave you wanting two things depending on who you
are:

If you're using an API gateway and you fit one of these personas, I want you to
walk away feeling like you can self-assess the maturity of how you've adopted what's
available in your API gateway and where you can find the next best ROI.

As a builder of an API gateway—I know you're out there—you can think about the
user journey and ergonomics of how your product could better lead them down the
product path you've created.

And, either way, I'd love for this to start up a much larger conversation around
contribution.

-->

---

# Why should you care?

API gateways are the front door of your platform and your business. You need to:

- Think critically about where you are and what you could bring to the table for
  improvements.
- Evaluate new technologies or what capabilities your current stack provides
  that you haven't yet turned on.
- Find places where you can invest time as the users of your platform—or the
  scale of your business—demand.

That requires:

A way to reflect on yourself, your team, and your offering... then find ways to
improve or figure out where you're falling behind.

<!--

Here's the first time I'm going to say this, and I'm going to repeat it quite a
few more times: You don't need to be at the top of the maturity mountain on
everything. That's not the goal.

It's about evaluating the landscape of capabilities ahead of you, comparing that
to what your company actually needs right now, and knowing whether you can worry
about problem A tomorrow because you need to address problem Z today.

-->

---

# This model is:

- Designed to help you self-assess where your API gateway implementation is
  today and plan ahead for what's next.
- A way to focus on solving problems and enabling value or return on investment.
- A collaborative effort that needs contributions from *you*!

## This model is not:

- A way to judge your implementation or tell you how to do your job.
- A prescriptive, "all or nothing" approach to building a mature API gateway.
- Designed to cover *all* the cultural and technological complexity of building
  an internal developer platform.
- A way to pitch any particular API gateway product, service, or capability
  *without a business need*.

<!--

In terms of what I want you to take away from today's talk:

1. First, that you understand and feel the value of doing a self-assessment of your
   API gateway as one piece of technology within a wider platform and a way to
   explore what you could do next—and lean on your team to identify the right
   time and place.

2. Second, that you know how to and want to contribute to make this whole thing
   better.

So. Hopefully all this means you care.

But why do I care?

You might think it's just because ngrok is going down this path on every from
every angle—both as a company building an API gateway, and a company dogfooding
the heck out of an API gateway.

-->

---
layout: statement
---

# Detroit, Michigan. 

## October 27, 2022.

<!--

But that’s not the whole story.

I was with 15 or so CTOs and tech leaders from the heaviest hitters of CNCF's
end user community.

If you know nothing about me, you might think I was there to contribute!

Nope—I was there to be quiet and listen.

I was there to absorb everything they thought about CNCF's Cloud Native Maturity
Model, how they thought about applying it to their organizations, especially
from a platform engineering perspective.

Well, if you’re not familiar…

-->

---

# Our starting point: CNCF’s Cloud Native Maturity Model

A framework for starting—and succeeding!—in a cloud native journey, starting
with inception into full adoption of cloud native technologies across the CNCF
landscape.

- Launched in 2021, reached 3.0 in Autumn 2023.
- Includes five Levels: **Build**, **Operate**, **Scale**, **Improve**,
  **Adapt**.
- Started with 4 dimensions of **People**, **Process**, **Policy**, and
  **Technology**, with **Business Outcomes** added later and since promoted to
  top spot on the model with 3.0.

<!--

Build: You have a baseline cloud native implementation in pre-production.

Operate: you’re on cloud native and moving into production.

Scale: You’re defining automation like CI/CD, GitOps, IaC to make cloud native smoother.

Improve: You’re defining security, policy, and governance across your environment.

Adapt: You’re revisiting earlier decisions to optimize and future-proof.

-->

---

# Our lens: Where maturity and a specific technology meet

Most maturity models, like CNCF's, are built for sweeping cultural change.
"Digital transformation" and so on.

What about tactical decisions about a *single* technology?

- "My API gateway offers 100 features. Which ones do I need Day 0, Day 1, and
  Day 2?"
- "What value does my API gateway offer as part of an internal developer
  platform?"
- "Things are actually quiet right now... what should I think about building
  next?"
- "Woof. That outage was a bad one. What do I need to build right now to make
  sure I never have to experience that again?"

<!--

Back in Detroit, these leaders loved having a roadmap to look forward to, but
the feedback that really resonated with me was:

They didn’t know how to apply this model to how they might get better about a
single technological “thread” of the CNCF landscape.

The CNCF model gives us the forest, but this API gateway maturity matrix helps
you navigate a critical tree within it.

-->

---

# Hold up: What is maturity, anyway?

Well, it's *not* about:

- How old an API gateway product is or how long you've been using it.
- Whether you've written down your processes or not.
- How many features an API gateway offers.

<v-click>

Instead, let's think about:

- How you've adopted new features based on new requirements or inciting
  incidents.
- Whether your API gateway and processes are flexible enough to deal with new
  problems.
- How good the ergonomics are when you *do* turn on new features.

</v-click>

<!--

This idea of maturity through the smart adoption of features can be a conscious
effort to get you:

- Reliability without surprises.
- Velocity without chaos.
- Scalability without rip-and-replace (again).
- Governance without bureaucracy.

-->

---
layout: statement
---

## As adoption of an API gateway matures, engineers shift _away_ from building API gateways for themselves and _torward_ enabling others to ship fast without giving up control over policy and governance.

---

# Where do you think you stand?

- 🧱 "I think there's something in front of my APIs… but I'm not totally sure
  what it’s doing."
- 🔒 "Building on the API gateway involves lots of tickets and praying someone
  still remembers how it works."
- 🚀 "I'm just here to validate how much further along we are than everyone
  else." 

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
| Scale   | **How do we make this thing get 10X (or 100X!) bigger... and not terrible to work on at the same time?** Our API gateway now standardizes services from deployment to observability to incident response, and offers reusable configs for developers to ship quickly while our newfangled platform team manages the scale. |
| Improve | **All the things are important now. And how do I help devs move quick without losing control?** The platform team constantly modulates how the API gateway works to create a golden path for self-service while isolating different teams’ work, automating policy enforcement, and providing built-in observability for every service. |
| Adapt   | **How do we keep innovating... without over-engineering?** The API gateway is now fully dynamic, policy-driven, and responsive to signals like traffic patterns, active threats, or cost. It’s the foundation of a unified platform that everyone not just relies on, but actually enjoys using. |

</div>

<!--

Let’s start with a broad look at how API gateways transform over these five
Levels from both a technological and team/process angle.

-->

---

# Five problems to solve (capability threads)

- Traffic management
- Authentication & security
- Observability & debugging
- Developer/team experience
- Governance & compliance

<!--

From here, we're going to move into each thread and see how they evolve over
time.

Something really important to mention here is that it’s totally normal to have
an uneven maturity across these problems and dimensions. For example, if you’re
just starting up your API gateway, you might make it all the way to Level 3 of
traffic management before you give a single hoot about developer experience.

For each level, I'll give a general statement about where the API gateway stands
and the big problems it's solving, along with example features that, if you have
them turned on and they're working well, might be a signal that you've reached a
certain level.

I’m focused more on capabilities because we’re talking about a specific
technology—unlike the CNCF’s maturity model, which focuses on categories like
People and Business Outcomes, I don’t think any of us can defensibly argue an
API gateway is going to drive your entire platform engineering culture.

API gateways can, on the other hand, play a major role in how those successful
that culture is.

-->

---
layout: statement
---

# Traffic management

---

|    |    |
| -- | -- | 
| Build   | Our APIs are protected from unauthorized access, but the application of AuthN is inconsistent—sometimes at our gateway, sometimes embedded in your services. <ul><li>Static routing on paths, subdomains, etc</li><li>Hardcoded rewrites and redirects</li><li>Simple load balancing and manual failover</li></ul> |
| Operate | We centrally manage, configure, and turn on features like routing on behalf of development teams, some driven by their asks and some driven by protecting our infrastructure. <ul><li>Basic per-client rate limits for fairness and abuse</li><li>Geoblocking and IP restrictions</li><li>DDoS protection and global load balancing</li></ul> |
| Scale   | Our APIs can handle high traffic safely and without overloading our upstream services, and we're optimizing for performance and availability... and automatically fail over when things go wrong. <ul><li>Multi-environment and -region routing (multicloud?)</li><li>Weighted traffic splitting for blue/green or canaries</li><li>Load balancing: latency-based, or sticky, round robin</li></ul> |
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

-->

---
layout: image-right
image: '/assets/2-person.png'
---

# A two-person… *thing*?

With a single service and two technical co-founders, it's easy to collaborate
and write directly into the app layer rather than blow up the archeticture...
and no need for complex automation. Manual deploys and a basic API gateway,
TYVM!

- ✅ Can we route API requests correctly?<br />
- ✅ Do we know if things crash because we have basic monitoring?<br />
- ✅ Do we have *any* authentication in place?

<!--

Going deep on traffic management, followed by auth (which I’ll talk about on the
next slide), is probably the most common pattern you’ll see with maturity across
these five threads.

Turns out it’s really important to be able to lock in ingress to your services
and add in at least some way of controlling access, before you give a hoot about
DX. You care about redirects more than you do policy as code.

And, honestly, at this point you're not really being proactive anywhere—you'd
kind of love if you got enough customers to worry about managing load or rate
limiting. Then you can start throwing more time and money into the gateway black
hole.

-->

---
layout: statement
---

# Authentication & security

---

|    |    |
| -- | -- | 
| Build   | Our APIs are protected from unauthorized access, but the application of AuthN is inconsistent—sometimes at our gateway, sometimes embedded in our services. <ul><li>API keys and basic authentication</li><li>Mix-and-match of AuthN/AuthZ services</li><li>TLS termination at the gateway edge</li></ul> |
| Operate | Security enforcement is increasingly centralized at the API gateway, reducing per-service misconfigurations that lead to risk or breaches. <ul><li>JWTs or OAuth2</li><li>Centralized AuthN/AuthZ via the API gateway</li><li>Basic role-based access control</li></ul> |
| Scale   | Our API gateway is a central hardening point, and we have a unified and repeatable security model that supports multiple distributed teams.<ul><li>Geoblocking and IP reputation filtering</li><li>mTLS for service-to-service AuthN/AuthZ</li><li>Multi-tenant isolation in gateway routes</li></ul> |
| Improve | Developers can implement new Zero Trust fundamentals via the API gateway without writing tickets or waiting for approvals. <ul><li>Self-service policy enforcement via OPA/Kyverno</li><li>Automated API posture checks</li><li>Fine-grained access control per team or service</li></ul> |
| Adapt   | Our API security model is adaptive and capable of preventing breaches before they happen. <ul><li>Risk-based authentication and rate limiting</li><li>Threat detection/intelligence feeds</li><li>Just-in-time access control</li></ul> |

<!--

I'd like to point out one other limitation of these slides. Maybe the model
itself.

1. I can only cram so much onto a single slide, so later I'll also show you
   where you can find some extra examples of capabilities that signal which
   maturity level you might be at.

2. You might find that your API gateway makes some capability you see here, like
   geoblocking, trivial and you already have it enabled even if you're not using
   JWTs, for example. You have a kind of mix-up of capabilities. That's
   expected, and in those cases, I would encourage you to look back to the core
   statement and see whether you're solving that problem or creating that value.

Now, for authentication, your journey starts with most essential auth functions
being embedded directly into your services, which equates to inconsistency,
difficulty for you trying to maintain all these systems, and more risk for
vulnerabilities.

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
| Build   | We can see *what* our API services are doing, mostly via logs, in a deployed environment to help us identify issues. <ul><li>Basic logs generated at the API gateway</li><li>Error rate monitoring (5xx API errors)</li><li>Basic health check endpoints</li></ul> |
| Operate | We have a unified view *how* our APIs are doing via dashboards, making troubleshooting a lot easier and helping us resolve issues faster. <ul><li>Gateway metrics published to observability platforms</li><li>Structured logs</li><li>Unified monitoring for one gateway+environment</li></ul> |
| Scale   | Our API gateway is seen as the first place to look (and often to blame!) when we're monitoring the API landscape or developers need to do distributed debugging. <ul><li>Unified monitoring across clusters/regions/clouds</li><li>Tracing to help find distributed bottlenecks</li><li>Real-time incident alerting for relevant stakeholders</li></ul> |
| Improve | Other teams can extend the API gateway to add their own metrics or tracing based on new requirements without having to change the main API surface beneath everyone's feet. <ul><li>Automated remediation runbooks</li><li>Editable request replay for debugging</li><li>Team-specific gateway traffic dashboards</li></ul> |
| Adapt   | API issues are fully self-healing, minimizing the need for us (platform team) or others (API developers) to intervene manually. <ul><li>AI-driven anomaly detection and automated RCA</li><li>Automated incident response and rerouting</li><li>Business outcome correlation with ingress patterns</li></ul> |

<!--

The API gateway starts as a data source, but quickly becomes the go-to place for
debugging. If all external requests are coming in through the API gateway, what
better place to start looking when things go wrong?

As you get into operate and scale levels, you also start seeing the API gateway
become a central monitoring point for wider KPIs, like response times and usage
patterns.

Observability is a great place to make your platform the
feature-rich golden path, which I’ll talk about more in developer and team
experience. If you give them more metrics, more dashboards, and better error
handling—especially without them having to instrument a single thing in their
services—they’ll be much more likely to hop onboard.

Finally, AI rears its head—even if we don't have a ton of confidence that's
necessarily where things are headed.

-->

---
layout: image-right
image: '/assets/50-person.png'
---

# A 50-person startup?

Now they're bigger—like hundreds of thousands of requests every day bigger. They
need rate limiting and ways to figure out error rates or percentage of late
responses, and the small-but-mighty infra team is getting tired of pulling logs
and running queries. All this optimization requires better deployment
strategies, too.

- ✅ Can we protect our APIs from excessive traffic or bad actors?<br />
- ✅ Can we deploy API changes without manual intervention?<br />
- ✅ Have me moved past basic metrics and into structured logs?

<!--

The radar is expanding, which means they’ve gone past basic logs for
observability and have a defined process for configuring API gateways, plus some
more automation and IaC for deployments, which has given a nice little boost to
the developer and team experience—maturity in one thread can pull up others with
it.

They’ve matured a little bit on the observability front, but part of the problem a
lot of these teams face is that they’re still not consistently using the API
gateway as the standardized technology for understanding ingress. Given the
problems they’re experiencing, that’s probably where they’re going to focus
their efforts next.

Another thing that's happening here is that they have more than one team
using the API gateway. Before, it was the two co-founders, then for a time it
was just a single team. Now? Multiple teams own their own path on
`api.example.com` and it's no longer optional to have the API gateway be the
central point.

-->

---
layout: statement
---

# Developer/team experience

---

|    |    |
| -- | -- | 
| Build   | API configurations are managed with manual changes, with developers cobbling together ways to ship to prod. It works, but it’s slow. <ul><li>No IaC for API gateway configs</li><li>Ticket-based (or YOLO) configuration changes</li><li>Little to no documentation</li></ul> |
| Operate | API changes have a clearly-defined process, streamlining Linear/Jira/etc board of tickets and freeing up our team’s engineering time. <ul><li>Standardized API definitions</li><li>IaC + CI/CD for all gateway configurations</li><li>Basic API catalog derived from routing topology</li></ul> |
| Scale   | API management (via automation and IaC) helps us manage APIs at scale across multiple clusters, environments, and growing teams. <ul><li>GitOps and CI/CD++ (regions, canaries, rollbacks)</li><li>Many deployment options (K8s, hybrid, multicloud)</li><li>API versioning strategies at the API gateway</li></ul> |
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
advanced settings, and if your platform doesn’t support "that one thing," folks
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
| Operate | We enforce standards across multiple APIs and teams to reduce the risk of being non-compliant. <ul><li>Basic API lifecycle management (e.g. versioning)</li><li>Standardized security (TLS requirements/versioning)</li><li>Semi-regular scanning of API gateway policy</li></ul> |
| Scale   | Governance of API gateways scales across teams and cloud environments without blocking development velocity. <ul><li>Configs controlled with policy-as-code and CI/CD</li><li>Traffic auditing across multiple environments</li><li>Gateway-enforced data sovereignty</li></ul> |
| Improve | Anyone can configure APIs within a predefined, platform-wide governance model. <ul><li>Role- or team-based API gateway management</li><li>Fine-grained access control for config changes</li><li>Configuration change tracking for compliance</li></ul> |
| Adapt   | Our compliance is now automated and capable of adapting to new regulations or security risks dynamically. <ul><li>AI-driven, continuous compliance monitoring</li><li>Threat-based security policy updates</li><li>Automatic policy updates for regulatory changes</li></ul> |

<!--

Compliance is a tricky one for two reasons.

First, it reaches into all the other threads and muddies things up.

Second, you might have to get really big before it’s much of a concern for you.

You don’t really need it until your partners or customers tell you they NEED IT
NOW if you have even the smallest shot of working with them.

Early on, you’re facing a lot of pendulum swings between your team and
developers who want to ship. One day they’ll say, “we need API versioning,
STAT,” and the next day, they’ll say they’ve figured out the problem themselves.
But by the Scale phase, you’ve codified enough of the implications these processes
have on your API gateway that you can start asking: 

How are we taking that last step to enable people in a safe and compliant way
that doesn't turn our API gateway into utter chaos?

-->

---
layout: image-right
image: '/assets/200-developer.png'
---

# A 200-developer machine?

They handle 10 million requests and need to stand up a new API every day. *All
of a sudden, all the things are important*. DDoSes happen every now and then,
but also oddities like a single customer hitting them on a loop—same time every
day. On top of that, they're also acquiring a company in a new and scary regulatory
environment!

- ✅ Are individual teams configuring and deploying APIs without causing chaos?<br />
- ✅ Can we scale API security across multiple regions and teams?<br />
- ✅ Do we have a way to automate governance instead of enforcing it manually?

<!--

I want to hate the shape of this, just aesthetically, but again, it's all about
adoption of features and capabilities based on the requirements of the
company—yours will most certainly be different, and your shape will be beautiful
no matter how it ends up.

For this illustative company, you can see that they've made strides in
observability as a proactive response to those past incidents and new oddities,
like these customers who forgot to turn off some automation that goes into a
black hole.

They've also optimized for governance because of the acquisition. This might
look like they've neglected on certain areas, like authentication & security,
but it could also mean that they haven't had a legitimate need to adopt more in
those areas.

And, because their platform is matured in other ways, they no longer need to
worry about the features they have adopted, because the platform just does it.
That's not a bad end state too, right?

It might not be Level 5, but it's what they need right now.

-->

---

# Where do you think you stand now?

- 😅 "We just realized no one actually owns the gateway config."
- 🌱 “We’re maturing, but still figuring out how to scale safely.”
- 🏆 "We've got solid foundations and room to grow."

---
layout: two-cols
---

# The Matrix is *live*!

A GitHub project with full text (and extra examples!) for self-assessment:

`joelhans/api-gateway-maturity`{style="font-size: 1.2rem;"}

::right::

![Link to github.com/joelhans/api-gateway-maturity](./assets/qr-code-github.png)

---

# Your TODOs

- *Today*: Take 2 minutes here at KubeCon to rate yourself across the five
  problem threads. 
- *Next week*: Take the model back to your team next week and explore each
  thread+level to explore where you stand on the:
  - Problems you're solving
  - Value you deliver to your organization
  - Capabilities you've mastered
  - Are you held back by?
    - No business case?
    - A lack of resources?
    - Your API gateway?
- *At your leisure*: Help make the Matrix better with your contribution!
- Let me know about your experience! j.hans@ngrok.com

<!--

- Contribute your experiences on running this "algorithm" or add new illustrations
- Add more example capabilities to each thread+level
- Help develop a Myers-Briggs-esque questionnaire for even smoother self-assessment

My hope is that by making this all open for you to use and contribute to, we’re
can all take a  step forward in our own maturity as people who think about,
architect, implement, debug, observe, and yes, even just stand on stage talk
about, our beloved API gateways.

-->

---
layout: two-cols
---

# Questions?

<div style="font-size: 0.8rem;">

Find me *beyond the Matrix*:

- j.hans@ngrok.com
- At the ngrok booth at **N611** (where I have to go right after this and finish
  up my shift \[instead of hiding like I would probably like to\])
- Wandering around KubeCon in an ngrok shirt

Thank you to the folks who helped me along the way!

- Alex
- Jeremy
- Alice
- Abdallah
- Peter
- Euan
- Jack

</div>

::right::

![Link to feedback page](./assets/qr-code-feedback.png)

<!--

This is my very first talk, so I would love your honest and constructive
feedback on what I could do to make my next talk even better.

Thank you for coming, everyone! Stay safe and happy travels.

-->

