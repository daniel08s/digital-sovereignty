# Mission: Digital Sovereignty (Self-Hosted Homelab)

## Why
Own digital life instead of renting it: run a personal media center, keep
photos/documents on hardware you control, block ads and tracking for every device
in the house, and reach all of it securely from anywhere. The end state is a
homelab that replaces paid streaming + cloud storage + ad-ridden browsing with
self-hosted equivalents you understand and control.

## Success looks like
- Can explain, from memory, how the home network routes traffic (ISP router →
  main router → LAN devices) and why each layer exists.
- Has a media center running the *arr stack (Jellyfin + Sonarr/Radarr/etc.) that
  automatically finds, organises, and serves movies and shows.
- Blocks ads and trackers network-wide via DNS (AdGuard Home), covering phones,
  TVs, and IoT with no per-device software.
- Can securely reach the homelab from outside the house (WireGuard and/or
  Tailscale) without exposing services to the raw internet.
- Stores photos/documents/media on a NAS with a redundancy + backup strategy you
  can reason about (understands RAID/ZFS trade-offs and the 3-2-1 rule).

## Constraints
- **Learning style:** concepts-first — understand the "why" solidly before
  building. Lessons lead with clear explainers and light recall checks, not
  "go reconfigure your router now" tasks.
- **Prior knowledge:** comfortable following tutorials / editing configs (Linux
  "some"); has used Docker & docker-compose; no Kubernetes; networking is the
  weakest area (subnetting, NAT, DNS, VPN mostly new).
- **Hardware:** GL.iNet Flint 2 (or equivalent) as the main router. Other
  hardware TBD.
- **Time/budget:** not yet specified — revisit before big purchase decisions.

## Out of scope (for now)
- Kubernetes / Talos Linux as the *arr stack platform. It's on the radar, but for
  a home media stack Docker Compose is far simpler and sufficient; revisit k8s
  only if a concrete need appears. (See NOTES.md.)
- Advanced NixOS. Interesting, but not required to hit the mission; parked until
  the core homelab works.
- Running a public-facing server exposed directly to the internet. Remote access
  will go through a VPN, not open ports.
