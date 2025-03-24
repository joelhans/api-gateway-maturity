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

# The API Gateway Maturity Matrix

*Where Do You Rank?*

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

# Traffic management & reliability

***TK***

<!--

At the very beginning, you might not even have an API gateway—you might expose APIs more directly through a reverse proxy or (heaven forbid) port forwarding.

Whatever your method, even if your are implementing and building on an API gateway, everything starts static.

Same idea goes for rate limiting or load balancing—we start with the basics, then add capability when required based on requests from the org or pain points you’re experiencing.

Something really important to mention here is that it’s totally normal to have an uneven maturity across these problems and dimensions. For example, if you’re just starting up your API gateway, you might make it all the way to Level 3 of traffic management before you give a single hoot about developer experience.

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

Going deep on traffic management, followed by auth (which I’ll talk about on the next slide), is probably the most common pattern you’ll see with maturity across these five threads.

Turns out it’s really important to be able to lock in ingress to your services and add in at least some way of controlling access, before you give a hoot about DX. You care about redirects more than you do policy as code.

-->


---
transition: fade
layout: two-cols
---

# Questions?

::right::

![Link to api-gateway-maturity.joelhans.xyz](./assets/qr-code.png)

<style>
p {
    margin: 0;
}
</style>
