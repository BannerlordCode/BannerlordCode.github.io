---
title: "Mission — the mission entry classes only"
description: "Four name-carved entry classes out of mission-ext. 0 pages in this tree; the 4 pages are Chinese-tree-only."
---
# Mission — the mission entry classes only

Four classes live in this directory: `Mission`, `MissionState`, `MissionBehavior`, `Agent`. They were **carved out by name** from [mission-ext](../mission-ext/) (669 `.cs` files), not by any namespace rule, so that "I want to change a battle" is one click away instead of a search inside a 669-page directory.

`Formation` belongs here by the same carve-out but has no page in either tree.

## Pages in this area (0 in English)

No pages in this bucket have been written in this tree. The four pages that do exist are in the Chinese tree:

| Page | What it covers |
| --- | --- |
| [zh/api/mission/Mission](../../../zh/api/mission/Mission) | the battle-scene object; created through its mission logic, not by `new` |
| [zh/api/mission/MissionState](../../../zh/api/mission/MissionState) | the state enum a mission ends on |
| [zh/api/mission/MissionBehavior](../../../zh/api/mission/MissionBehavior) | the abstract behaviour base you register on a mission |
| [zh/api/mission/Agent](../../../zh/api/mission/Agent) | one soldier or horse on the battlefield |

Read together those four are the minimum useful set for a mod author: derive a `MissionBehavior`, register it on the mission, get the `Mission` reference from it, check `MissionState` to know which phase you are in, and walk `Agent` when you need to touch individual units.

One thing the pages cannot tell you from this directory: you do not create a `Mission` with `new Mission()`. The game creates it through the `MissionLogic` family, which sits in `mission-ext/` and has no page.

## Not yet written

In this tree, all four. Across both trees, only `Formation` — everything else that resolves to `mission-ext/` is roughly 665 classes that are not in this bucket.

## Sibling areas

[mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [core](../core/) · [core-extra](../core-extra/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [UI Stack](../../architecture/ui-stack)