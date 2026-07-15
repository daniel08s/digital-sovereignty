# RAID ≠ backup + ZFS integrity concepts understood

The learner confirmed understanding of Lesson 4: redundancy (RAID / ZFS pool)
is for uptime when a drive dies; backups (3-2-1) are separate copies for
recovery from deletes, ransomware, and site loss. Also grasped why ZFS
checksums/self-healing matter for irreplaceable photos/docs beyond classic RAID.

Why it matters: the storage mental model floor is in place. Teaching can move to
pool layout decisions (mirror vs RAIDZ, drive counts) — the next mission step
before hardware shopping and the media stack. Do not re-teach "RAID is not a
backup"; build on it when discussing layouts.
