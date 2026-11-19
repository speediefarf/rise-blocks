# Design inspiration

Where this library's ideas come from, what we're borrowing, and what we're
deliberately not. Everything in the library itself is an original
implementation — these are references for *patterns*, never for code, copy,
or branding.

Reviewed 2026-11-18/19.

## Cognito Blox — Akshay (cognitoblox.netlify.app)

A free component library for Rise 360 custom code blocks: a catalog grid,
one page per component with the block running live, and a "Preview in
Rise 360" course where everything sits in a real lesson. Blocks are
single-file, zero-dependency, copy-and-paste.

**Borrowed:** the catalog model itself — grid of cards, per-block page,
live demo before download, and the in-situ Rise preview course idea.
**Not borrowed:** his code, layouts, component selection, or branding.
His catalog is generic corporate eLearning; ours leans technical training.

## Forged Frameworks — Dan "Wig" Boyland (danforgedframeworks.github.io/Portfolio/)

A portfolio, not a library. Case studies of real client work: the problem,
the design decisions, outcome metrics (completion rates, knowledge gain),
screenshots, walkthrough videos, and "Open the course in Rise 360"
Articulate Review links. His custom blocks ("Codex") are shown in situ,
inside real courses, never as downloads.

**Borrowed:** proof by context — present each block with the story of why
it exists and how it runs in a real session (our per-block teaching note),
and let blocks graduate into case studies as they get used in real classes.
**Not borrowed:** the portfolio-first model. Ours is a working library
first; the storytelling wraps the block, it doesn't replace the code.

## "Missed Questions Only" quiz — Jennifer Lynch (E-Learning Heroes)

A single community-shared block: a Rise quiz whose later rounds re-ask only
the questions the learner missed. Shared as a community post with a live
Review link and the full code.

**Borrowed:** the pedagogical pattern — mastery through targeted retry —
implemented from scratch as our Comeback Quiz, with observability content.
**Not borrowed:** her code, styling, or question bank.

## "AI role play with no AI" — SMcNicol (E-Learning Heroes)

A scripted stakeholder persona ("Jordan Blake") in a Rise code block:
keyword/trigger matching against topic tables, follow-ups, a coaching panel
(mood, meeting clock, case notes), and an end scorecard. Built with Claude's
help, shared openly, and honest with learners that no AI is involved.

**Borrowed:** the pattern and the honesty stance — a scripted persona with
visible mechanics — implemented from scratch as our Discovery Roleplay,
with an original persona, scenario, dialogue, and scoring.
**Not borrowed:** her persona, scenario, dialogue, or code.

## The Art of Digital Learning — Stephanie Harnett (learning.stephanieharnett.ca)

The most complete operation of the five. Her site is the funnel — tutorials
and templates as blog posts, plus a YouTube channel (@StephanieHarnett-slhice,
~75 videos) whose tutorials mirror the posts. The library itself is not a
website at all: it's a Rise course in Articulate Review holding ~44 blocks
in functional sections (Interactions, Effects & Media, Graphics, Knowledge
Checks & Quizzes, User Input, Utilities, Challenges & Fun).

Each block lesson has a consistent anatomy worth noting: live demo, full
code shown in the lesson with a Copy button (no downloads), a single CONFIG
object as the edit point, an audio narration, an "Alternative Uses" section,
a customization guide, an update log with dates, and an accessibility
rating ("Accessibility: Full"). A "Getting Help" section publishes her
build *process*: Master / Intake / Revision prompts as downloadable files
and a 21-point QC checklist for Rise-compliant code (single file, CONFIG,
completion signal, height behaviour, focus outlines, reduced motion,
44px targets). A Suggestion Box block lets visitors request and vote on
new blocks.

**Borrowed:**
- Per-block metadata discipline: updated date, update log, accessibility
  statement. Cheap to keep, high trust.
- The CONFIG convention — one obvious edit point per block. Already our
  house rule #3; her library is proof it scales to 40+ blocks.
- Publishing the build standards, not just the blocks. Our house rules
  should grow into a real QC checklist (see below).
- A request/suggestion loop so the roadmap comes from users.
- The tutorial-post-plus-video rhythm for releases (see "Video" below).

**Not borrowed:** her code, CONFIG contents, prompts text, or block list.
Also not her hosting model — a library that lives only inside a Review
course has no per-block URLs and no downloads; ours stays web-first with
permalinks, and treats a Review course as a complement, not the home.

## What this adds up to — our direction

- **Catalog + context.** Akshay's browsable library, Dan's story around
  each block, Stephanie's metadata discipline.
- **House rules, extended.** Her QC checklist is a prompt to grow ours:
  add reduced-motion support, visible focus states, minimum target sizes,
  a stated accessibility level per block, an updated date and changelog
  per block.
- **Block backlog from these references** (patterns, our implementations,
  technical-training flavour):
  - Query Builder — tap tokens to assemble a query (from her Sentence
    Builder pattern; a natural fit for NRQL).
  - Labeled Graphic — clickable markers on an image; architecture diagrams
    and dashboard tours.
  - Hover Definitions — inline glossary for terms inside dense text.
  - True-to-scale Timeline — incident and deploy timelines.
  - Pulse / Sentiment Check — confidence at the start and end of a lesson,
    shown side by side.
  - Before / After Slider — already in the workshop; both Akshay and
    Stephanie ship one, which mostly proves the pattern's demand.
- **Video (future).** Stephanie's model is a tutorial post + a walkthrough
  video per release, with the channel as the subscribe surface — not
  per-block demo clips (her library lessons use audio narration instead).
  Michael has a YouTube channel (@speediefarf) but it's not curated for
  this; the working assumption is that video waits until there's a brand
  identity — and possibly a dedicated channel — to build around. The
  library doesn't block on it: live demos carry the site until then.
- **Brand identity (open).** "Rise Blocks Workbench" is a placeholder.
  A real name, a visual identity, and the channel decision belong
  together and are still to come.
