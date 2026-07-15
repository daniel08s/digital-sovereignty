# Remote access end-to-end working (mission goal achieved)

The learner built and debugged a full WireGuard remote-access setup: static WAN
on the second router, a single UDP port-forward for WireGuard on the ISP router
(preferring a surgical port mapping over a full DMZ), DDNS, a client profile, and
a successful full-tunnel connection from cellular. Also diagnosed the common
"tunnel up but LAN unreachable" case down to the router's "allow remote access to
the LAN" / masquerading options.

Why it matters: the second mission goal (reach the homelab from outside, securely,
without exposing services) is achieved, with real troubleshooting skill —
handshake/rx/tx stats, control-plane vs data-plane, reading router options.
Teaching can move to DNS ad-blocking, where full-tunnel + AdGuard becomes
"ad-blocking anywhere". Use the address examples in the lessons; do not record
live public IPs, DDNS hostnames, or key material here.
