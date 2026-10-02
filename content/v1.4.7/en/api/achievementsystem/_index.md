---
title: "Achievementsystem — achievement unlocks"
description: "Where TaleWorlds.AchievementSystem lives: 4 .cs files, the smallest bucket. No pages."
---
# Achievementsystem — achievement unlocks

`TaleWorlds.AchievementSystem`, 4 `.cs` files: `Achievement`, `AchievementManager` and `IAchievementService`, plus a test service. It is the smallest bucket in the taxonomy.

The structure fits in one sentence: `Achievement` is the definition, `AchievementManager` decides when it unlocks and grants it, `IAchievementService` is the service interface. The stat keys an achievement watches are read by `AchievementManager`, and a mod can contribute its own counts to that.

This bucket arrived in 1.4.7 — the 1.4.5 tree has no matching directory, because `TaleWorlds.AchievementSystem` is a later namespace.

## Pages in this area (0)

There are no pages in this bucket.

## Not yet written

All 4 types: `Achievement` (the definition), `AchievementManager` (unlock detection and granting), `IAchievementService` (the service interface) and `TestAchievementService`.

The consequence is direct: **adding an achievement to a mod currently has no answer anywhere in this documentation.** It is the smallest gap in the tree and it is a whole feature rather than a thread at the end of a long tail.

## Sibling areas

[campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [sandbox](../sandbox/) · [activitysystem](../activitysystem/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [core](../core/) · [core-extra](../core-extra/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/)

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [Module System](../../architecture/module-system)