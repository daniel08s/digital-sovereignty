# Digital Sovereignty

A personal teaching workspace for building a self-hosted homelab that's
understandable and controlable - networking, remote access,
network-wide ad blocking, storage reliability, and
(next) a media stack - without renting our digital life from
someone else.

Lessons are short, concepts-first HTML pages with retrieval quizzes. They track
a concrete mission (see [`MISSION.md`](MISSION.md)), not a generic “learn
networking” syllabus.

## Open the course

Start here (open in a browser):

1. [Lesson 1 - Read your own network map](lessons/0001-read-your-network-map.html)
2. [Lesson 1a - How two routers chain together](lessons/0001a-how-two-routers-chain.html)
3. [Lesson 2 - Getting home from outside](lessons/0002-getting-home-from-outside.html)
4. [Lesson 3 - Blocking ads & tracking network-wide](lessons/0003-blocking-ads-network-wide.html)
5. [Lesson 4 - RAID is not a backup](lessons/0004-raid-is-not-a-backup.html)

Reference: [networking glossary](reference/networking-glossary.html) ·
[storage glossary](reference/storage-glossary.html)

## What’s in this repo

| Path | Purpose |
|------|---------|
| `MISSION.md` | Why this exists - the real-world goal every lesson serves |
| `lessons/` | One self-contained HTML lesson each (numbered) |
| `reference/` | Glossaries and cheat sheets built for quick revisit / print |
| `assets/` | Shared course CSS + quiz widget |
| `learning-records/` | Short notes on what’s been demonstrated / learned |
| `RESOURCES.md` | Curated high-trust sources lessons cite |
| `NOTES.md` | Teaching preferences and sequencing scratchpad |

## How to use it

- Open any `lessons/*.html` file in a browser (no build step).
- Prefer understanding the “why” before reconfiguring hardware.
- Ask follow-ups in the teaching chat - each lesson ends with that reminder.

## Hardware context (current)

Home network shape for the course: ISP router → GL.iNet Flint 2 → LAN devices.
Remote access via WireGuard; DNS ad-blocking via AdGuard Home on the Flint 2.
(Lesson diagrams use example private ranges — not a live inventory.)
