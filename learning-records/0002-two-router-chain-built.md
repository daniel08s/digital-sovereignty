# Two-router chain built (demonstrated understanding)

Between early sessions, the learner independently set up the second router with a
static WAN address on the ISP LAN, created a MAC-based DHCP reservation for it,
and moved LAN devices onto the second router. This is hands-on evidence of the
Lesson 1 / 1a model (WAN = guest on the ISP subnet, one real border, chain of
gateways) — not just exposure.

Why it matters: the networking foundation is now real, not theoretical. Teaching
shifts from "read the map" to the practical build (port-forward or DMZ, DDNS,
WireGuard server, remote-access test). Also flags a prerequisite before promising
inbound access: confirm a real public IP, not CGNAT.
