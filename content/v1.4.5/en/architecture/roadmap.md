---
title: "Developer Roadmap — v1.4.5"
description: "Task-oriented map of the v1.4.5 docs: find what you want to build, follow the dependency chain to the classes and clusters you need. Also the H0–H10 rebuild wave plan and status."
---
# Developer Roadmap (v1.4.5)

A task-oriented map of the documentation. Find what you want to build, follow the dependency chain to the classes/clusters you need.

## ↑ Parent Navigation

- [Architecture index](./)
- [Crash boundaries](./crash-boundary)
- [Doc contract](./doc-contract)

## The rebuild waves (H0–H10)

| Wave | Scope | Status |
|------|-------|--------|
| H0 | Contract + retire generators + inventory/coverage tooling | ✅ done |
| H1 | Bidirectional nav tree + per-module mental maps + roadmap/crash-boundary | 🟡 in progress |
| H2 | L0–L1 hub deep pages (~40): MBSubModuleBase, Game, MBObject*, Saveable*, Campaign*, Mission*, Agent, ViewModel | 🟡 seeded (5 pages this cycle) |
| H3 | L2 domain entities (~30): Hero, MobileParty, Settlement, Clan, Kingdom, MapEvent, TroopRoster, ItemObject | ⬜ |
| H4 | L3 Actions: family cluster + all handwritten entries; ~20 key deep pages | ⬜ |
| H5 | L4 Models: map + ~40 priority deep pages + rest entries | ⬜ |
| H6 | L5 content: Quest/Issue/Menu/Conversation/Encounter | ⬜ |
| H7 | L6 UI patterns + key VM/View | ⬜ |
| H8 | L7 SandBox/Native examples | ⬜ |
| H9 | L9 long-tail by namespace zero-out | ⬜ |
| H10 | Guides aligned + BROKEN_LINKS=0 + stub features=0 + coverage=0 | ⬜ |

## By intent (start here)

- Register a SubModule & add a Behavior → `MBSubModuleBase` → `CampaignBehaviorBase` → `CampaignGameStarter`
- Change the world safely → `*Action` family (H4)
- Compute/read each tick → `*Model` (H5) or `CampaignBehaviorBase`
- Battle/combat logic → `Mission` + `MissionBehavior` (H2/H7)
- UI panel → `ViewModel` + `GauntletLayer` (H7)
- Persist custom data → `SaveableTypeDefiner` + `SyncData` (H0/H2)
- Crash/save safety → [crash boundaries](./crash-boundary)

## See also

- [Architecture index](./)
- [Crash boundaries](./crash-boundary)
- [Doc contract](./doc-contract)
