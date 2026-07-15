# Starting point: prior knowledge established (session 1)

The learner self-assessed before any lessons: Linux "some" (edits configs,
follows tutorials), comfortable with Docker/docker-compose but **no Kubernetes**,
and **networking is the weakest area** (subnetting, NAT, DNS, VPN mostly new).
Prefers a **concepts-first** approach and is building around a GL.iNet Flint 2
(or equivalent) as the main router.

Why it matters: networking is both the weakest area and the foundation for the
whole mission (remote access, ad-blocking, and the media stack all sit on top of
it), so teaching starts there. Because Docker is known but not k8s, and
understanding comes before building, the *arr stack will be taught on Docker
Compose first, with k8s/Talos parked as optional. These bounds set the initial
zone of proximal development and are reflected in MISSION.md and NOTES.md.
