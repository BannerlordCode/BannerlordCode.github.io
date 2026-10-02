---
title: "Activitysystem — activities: campaign-side minigames"
description: "Where TaleWorlds.ActivitySystem lives: 5 .cs files. Activity definitions and lifecycle. No pages."
---
# Activitysystem — activities: campaign-side minigames

`TaleWorlds.ActivitySystem`, 5 `.cs` files: `Activity`, `ActivityManager`, `ActivityOutcome`, `ActivityTransition` and `IActivityService`. It is the second smallest bucket in the taxonomy.

"Activity" means something specific here: a small encounter triggered from the campaign that has a win/lose result — a duel, a tournament match, an ambush on the road. It is **campaign-side content**. The definition lives in this namespace, but the battle the activity actually runs is in [mission-ext](../mission-ext/) and its screens are in [gui](../gui/).

The four non-interface types map onto the activity lifecycle: `Activity` is the definition, `ActivityManager` owns which activity is current, `ActivityTransition` handles moving between activities, and `ActivityOutcome` carries the result for whatever settlement follows.

One more bucket belongs to the same domain by rule: `StoryMode`, the campaign story content (18 `.cs` files), which is also campaign-side and also opens a mission. The mixed 1.4.5 `gameplay/` directory was split into `sandbox` and storymode — and **there is no `storymode/` directory in this version's documentation tree**, so it cannot be linked at all. The 1.4.5 tree has the pages; this tree does not.

## Pages in this area (0)

There are no pages in this bucket.

## Not yet written

All 5 types: `Activity` (the definition), `ActivityManager` (the current activity), `ActivityTransition` (movement between activities), `ActivityOutcome` (the result) and `IActivityService` (the service interface).

The bucket is tiny, but read the consequence: if a mod wants to hook a custom activity, no page in this documentation tree says where to start. The definition sits in this pageless bucket and the battle logic sits in [mission-ext](../mission-ext/), which is also pageless.

## Sibling areas

[campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [sandbox](../sandbox/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [core](../core/) · [core-extra](../core-extra/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [Module System](../../architecture/module-system)