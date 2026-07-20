# Architecture: simple NAS + optional compute later

The learner chose to keep the NAS as simple storage (no GPU, no transcoding)
and may later build a separate compute box for Jellyfin/Immich, reusing the
ROG Crosshair VII Hero there rather than under the disk farm.

Why it matters: shopping and OS lessons should treat Cart S (quiet RAIDZ2 NAS)
as the immediate build; reserve Crosshair for Cart C; do not trap the reuse
board under a live pool “temporarily.” Media apps mount the library over LAN.
