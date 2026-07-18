# Pool layouts (mirror vs RAIDZ) grasped

The learner confirmed understanding of Lesson 5: vdevs carry redundancy (lose a
vdev → lose the pool), RAIDZ2 ~6–8 wide is the default for a home media/photo
NAS, and RAIDZ1 is a poor fit for large modern drives because of long resilver
windows.

Why it matters: layout is locked in; teaching can move to *which physical disks*
to buy (recording technology and interface) without re-teaching topology. The
learner is already asking about zoned storage and SATA vs SAS — right next step
in the zone of proximal development.
