# Rise Blocks Workbench (working title)

A proof of concept: a small library of original, single-file custom blocks for
Rise 360, built for technical training, plus the showcase site that catalogs them.

Inspired by the wider Rise custom-block community (Cognito Blox's catalog model,
Forged Frameworks' case-study presentation, and individual community blocks) —
but every block here is an original implementation: original code, design,
scenarios, and sample content.

## The blocks

| Block | What it does | File |
|---|---|---|
| Comeback Quiz | Quiz where later rounds re-ask only the questions the learner missed, until everything is mastered | `blocks/comeback-quiz.html` |
| Code Walkthrough | Step through a code snippet one idea at a time, with per-step highlighting, explanation, and a spot-the-bug finish | `blocks/code-walkthrough.html` |
| Discovery Roleplay | Scripted stakeholder chat (keyword matching, no AI) with mood meter, meeting clock, case notes, and a scorecard | `blocks/discovery-roleplay.html` |

Planned: Before / After Slider (compare two states of a screen).

## House rules for blocks

1. **One file, zero dependencies.** All HTML/CSS/JS inline. No libraries, no
   build step, no external calls, no API keys.
2. **Honest mechanics.** If a block is scripted, it says so, in the block.
3. **Content lives in one obvious place.** A clearly marked data section at the
   top of the script (QUESTIONS / CODE+STEPS / TOPICS) so adapting a block
   means editing text, not logic.
4. **A teaching note ships with it.** Every showcase page has when to use the
   block, how to run it live, and a variation.

## Site structure

```
index.html            catalog + principles
library/<block>.html  one showcase page per block: live demo (iframe of the
                      block file itself), copy/download, Rise steps,
                      customization notes, teaching note, full source
blocks/<block>.html   the blocks — these are the artifacts you paste into Rise
assets/               showcase-only CSS/JS (blocks never depend on these)
```

The showcase page's demo and its displayed source are the *same file*, loaded
by `assets/site.js`, so the code a visitor copies can never drift from the
demo they tried.

## Run it locally

```
cd rise-blocks
python3 -m http.server 8000
# open http://localhost:8000
```

(Any static server works. Opening index.html via file:// mostly works too, but
the source viewer uses fetch, which needs http.)

## Use a block in Rise 360

1. Copy the block's full source from its showcase page (or download the file).
2. In Rise, insert a custom code block and paste the entire file in — or
   upload it as a zip package if your Rise version asks for one.
3. Preview, then publish as usual.

## Status / next steps

- Proof of concept built 2026-11-18.
- Hosted on GitHub Pages from this repo (speediefarf/rise-blocks):
  https://speediefarf.github.io/rise-blocks/
- Open decision: the library's real name (repo and site title are easy renames).
- Possible additions: a Rise Review course with the blocks in situ
  (the Dan Boyland pattern), more blocks, per-block screenshots for the catalog.
