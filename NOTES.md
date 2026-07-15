# Notes

Working notes on how the learner wants to be taught and things to keep in mind.

## Learning preferences
- **Concepts-first.** Lead with clear explanations and the "why". Save
  hands-on build steps for later, once the mental model is solid. Light recall
  quizzes are welcome; heavy "go configure this now" tasks are not (yet).
- Comfortable reading configs and following tutorials, so lessons can show real
  config snippets as illustration without hand-holding every line.
- **Quiz answer order:** `assets/quiz.js` shuffles each question's options on
  every page reload (Fisher–Yates). Do not hard-code a fixed correct position in
  HTML — write options in any order; the widget randomises. Still keep answers
  the same length (no formatting tells). Applies to every lesson.
- **Course / mission map:** every lesson ends (after ask-teacher, before
  lesson-nav) with the same "Where your mission lives on this map" table —
  current lesson marked `class="here"`. When adding a lesson, update the table
  in *all* existing lessons (titles must match each lesson's `<h1>`).

## Prior knowledge (as of session 1)
- Linux: "some" — edits configs, runs given commands, follows tutorials.
- Docker / docker-compose: yes. Kubernetes: no.
- Networking: beginner — subnets, NAT, DNS, VPN mostly new terms.
- Router for the course: GL.iNet Flint 2 (or equivalent dual-router setup).

## Teaching decisions / open threads
- **k8s vs Docker Compose:** original plan named "k8s with radarr, sonarr, …".
  For a single-node home media stack, Docker Compose is dramatically simpler and
  is what the *arr community assumes. Recommendation: build the stack on Docker
  Compose first; treat k8s/Talos as an optional "phase 2" learning goal, not a
  prerequisite. Flag this explicitly when we reach the *arr lessons. Parked in
  MISSION "Out of scope".
- **AdGuard Home vs Pi-hole:** leaning AdGuard Home (built-in encrypted DNS,
  per-client rules, simpler first setup). Confirm at the DNS lesson.
- **Where DHCP lives:** ONE DHCP server on the LAN (the Flint 2). If AdGuard
  Home runs DHCP instead, that is a deliberate choice — don't run two. Nuance:
  the ISP router may still run DHCP on its own upstream subnet where the only
  client is the Flint 2's WAN — that is a separate subnet, not a violation of
  the one-DHCP-per-network rule.
- **DMZ vs port-forward:** GL.iNet docs recommend a targeted UDP WireGuard
  port-forward to the Flint 2 over a full DMZ (more surgical). Present
  port-forward as primary; DMZ as plan B.
- **CGNAT prerequisite:** always check before promising inbound access (compare
  ISP WAN IP to a public "what is my IP" site; `100.64.0.0/10` = CGNAT). Course
  path assumes a real public IP so raw WireGuard is viable; Tailscale remains
  the fallback if behind CGNAT.
- **Address examples in lessons:** diagrams may use example private ranges
  (e.g. `192.168.1.0/24` upstream, a separate Flint LAN, a separate WireGuard
  tunnel net). Prefer the lesson diagrams over inventing new numbers; don't
  document live hostnames, public IPs, or device inventories in this file.
- **Remote access:** WireGuard-on-router path is the mission default once the
  public-IP check passes. Common gotcha after "tunnel up": enable LAN access /
  masquerading options on the WG server so clients can reach the LAN, not only
  the tunnel interface.

## Requested future lesson: network segmentation / IoT isolation
- Learner wants an isolated IoT subnet separate from the main LAN where home
  automation lives. Good security instinct.
- Teaching note: cross-subnet device discovery (mDNS/multicast) often fails —
  add devices by IP with DHCP reservations, and open only the specific firewall
  traffic rules the controller needs (not a blanket allow).
- Build a dedicated lesson later: VLANs/subnets for segmentation, firewall zones
  & traffic rules, when to isolate IoT, and mDNS reflectors. Ties back to
  Lesson 1 (subnets) and Lesson 2 (stateful firewall).

## Sequencing plan (rough, revisable)
1. Networking foundations (read your own map) ✓
2. Public exposure & remote access (WireGuard) ✓
3. DNS & network-wide ad blocking (AdGuard Home) ✓ concepts
4. Storage & data reliability
   - 4: RAID ≠ backup + 3-2-1 + why ZFS ✓ concepts
   - 5: Pool layouts (mirror vs RAIDZ) & drive counts ← current
   - later: hardware pick + backup tool for the off-site leg
5. Compute host + the *arr stack on Docker Compose (Jellyfin, Sonarr, etc.)
6. (Optional) network segmentation / IoT isolation (requested — see above)
7. (Optional) k8s/Talos/NixOS as advanced re-platforming
