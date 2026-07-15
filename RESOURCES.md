# Digital Sovereignty Resources

Curated, high-trust sources grouped by the mission's five areas. Knowledge in
lessons is drawn from here, not from parametric guesses.

## Knowledge

### Networking fundamentals
- [Networking Basics for Beginners (2026) — The CyberSec Guru](https://thecybersecguru.com/networking/networking-basics-guide-2026/)
  Clear beginner walk-through of IP, public vs private, DHCP, NAT, ports, DNS.
  Use for: the foundational "how does a home network move packets" mental model.
- [Homelab Networking Basics — corelab.tech](https://corelab.tech/homelab-networking-basics/)
  Homelab-flavoured intro to private IP ranges, subnetting, DHCP, NAT, port
  forwarding. Use for: connecting networking theory to a self-hosting setup.
- [Networking Fundamentals: IP, DNS & Subnetting — techwilla](https://techwilla.com/tutorials/networking-fundamentals.html)
  Concise reference on what `/24` means and the three private ranges. Use for:
  quick subnetting refreshers.

### Remote access (VPN)
- [WireGuard vs. Tailscale — Tailscale's own comparison](https://tailscale.com/compare/wireguard)
  Honest breakdown from the Tailscale team: Tailscale is WireGuard + a
  coordination layer. Use for: deciding raw WireGuard vs Tailscale.
- [Official WireGuard site](https://www.wireguard.com/)
  Primary source for the protocol itself. Use for: understanding what a tunnel,
  peer, key, and endpoint actually are.
- [Tailscale vs WireGuard for a Home Lab — HomeLab Starter](https://homelabstarter.com/tailscale-vs-wireguard-comparison/)
  Practical homelab framing (NAT traversal, CGNAT, when to run both). Use for:
  the real-world "which do I pick, and why" decision.
- [Build your own WireGuard home server — GL.iNet official docs](https://docs.gl-inet.com/router/en/4/tutorials/build_your_own_wireguard_home_server_with_two_glinet_routers)
  The exact device workflow: reserve the router's IP on the main router, check if
  port forwarding is needed (public IP vs behind-NAT), enable DDNS, start the
  WireGuard server (listen port 51820/UDP). Use for: the Flint 2 build steps.
- [How to Detect If You Are Behind CGNAT — OneUptime](https://oneuptime.com/blog/post/2026-03-20-detect-cgnat/view)
  How to confirm you actually have a public IP (compare WAN IP vs `ipconfig.io`;
  `100.64.0.0/10` = CGNAT). Use for: the prerequisite check before relying on
  port-forwarding/DMZ for inbound access.

### Ad & tracker blocking (DNS)
- [AdGuard Home — official repo & docs](https://github.com/AdguardTeam/AdGuardHome)
  Primary source. Explains DNS sinkholing and the built-in encrypted-DNS
  advantage over Pi-hole. Use for: how network-wide DNS blocking works.
- [Pi-hole vs AdGuard Home — HomeLab Starter](https://homelabstarter.com/homelab-dns-pihole-adguard/)
  Head-to-head with a feature table. Use for: choosing between the two (we lean
  AdGuard Home for built-in DoH/DoT and per-client rules).

### *arr stack / self-hosted media
- [Servarr Wiki](https://wiki.servarr.com/)
  THE official documentation for Sonarr, Radarr, Prowlarr, etc. Use for:
  install, first-run setup, and what each app does.
- [TRaSH Guides](https://trash-guides.info/)
  Community gold-standard, developed with the Sonarr/Radarr teams. Use for:
  folder structure (hardlinks/atomic moves), quality profiles, custom formats.
- [Awesome-Selfhosted](https://awesome-selfhosted.net/)
  Curated catalogue of self-hostable software. Use for: discovering what's
  possible (Jellyfin, Jellyseerr, alternatives).

### Storage / NAS
- [TrueNAS ZFS Primer](https://cdn.truenas.com/docs/references/zfsprimer/)
  Primary source on ZFS: checksums, self-healing, scrubs, RAIDZ/mirrors, and the
  explicit note that redundancy ≠ backup. Use for: integrity mental model (Lesson 4+).
- [ZFS Storage Pool Layout white paper (TrueNAS, 2023)](https://www.truenas.com/wp-content/uploads/2023/11/ZFS_Storage_Pool_Layout_White_Paper_November_2023.pdf)
  Deep dive on capacity/IOPS/fault-tolerance trade-offs per topology. Use for:
  deciding how many drives and which layout.
- [RAIDZ vs Mirrors for a Home NAS — truenasguide.com](https://truenasguide.com/posts/zfs-pool-design-raidz-vs-mirrors/)
  Practical "what should I actually build" for home. Use for: picking a pool
  layout (RAIDZ2, 6–8 wide is the home sweet spot).
- [ServeTheHome](https://www.servethehome.com/)
  Trusted hardware reviews (mini PCs, NAS, drives). Use for: choosing hardware.

### Backups (3-2-1)
- [CISA: Back Up Business Data](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data)
  Authoritative plain-language 3-2-1 (3 copies, 2 media, 1 off-site) plus test
  restores. Use for: Lesson 4 baseline and any "is this enough?" check.
- [CISA: Data Backup Options (PDF)](https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf)
  Pros/cons of backup media under the 3-2-1 rule. Use for: choosing home off-site
  shapes (external drive vs cloud).
- [CISA #StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide)
  Offline/encrypted backups and testing restores against ransomware. Use for:
  why the off-site copy should not be always-online on the same network.

## Wisdom (Communities)
- [r/homelab](https://www.reddit.com/r/homelab/) — ~1M members. Hardware, builds,
  networking. Read the wiki before posting. Use for: hardware advice, topology
  critique.
- [r/selfhosted](https://www.reddit.com/r/selfhosted/) — the software layer:
  Jellyfin, *arr, reverse proxies, backups. Use for: app-level help.
- [r/DataHoarder](https://www.reddit.com/r/DataHoarder/) — storage & archiving.
  Use for: drive reliability, backup strategy.
- [TRaSH Guides Discord](https://trash-guides.info/) — real-time *arr help from
  people who wrote the guides. Use for: media-stack troubleshooting.
- [Self-Hosted Podcast](https://selfhosted.show/) — biweekly news on apps and
  hardware. Use for: staying current, discovering tools.

## Gaps
- No chosen resource yet for **backup software** (e.g. Restic, Kopia, Duplicati,
  or Borg) to implement the off-site leg of 3-2-1. Fill when Lesson 4 concepts
  are solid and we pick a concrete tool.
