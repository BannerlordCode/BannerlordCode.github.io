---
title: "Architecture Overview - v1.3.0"
description: "The v1.3.0 modding map: runtime layers, task entry points, lifecycle boundaries, and version notes before entering the API reference."
---
# Architecture Overview (v1.3.0)

The v1.3.0 API is not a flat class list. Most mods start at module loading, enter the game lifecycle, and then choose a Campaign, Mission, UI, or save boundary. Pick the layer that matches the task, then follow its dependency chain into the type and guide pages; this avoids calling objects in the wrong phase.

## Mental model: loading to runtime state

Treat the runtime as a directed chain:

```
SubModule -> Game -> Campaign / Mission -> Behavior / Action / Model -> Entity
                                      ↘ ViewModel / UI
                         Campaign behavior -> IDataStore -> save state
```

Upstream types create objects and schedule their lifetime; downstream types own one state or calculation. A mod may reference several layers, but entities should not reach back and control Campaign, and an Agent should not be cached outside its Mission. Use the matching `*Action` for world mutation, a `*Model` for calculation policy, and `CampaignBehaviorBase` for long-lived state and event reactions.

## Find the entry point by task

| Goal | Start with | Read next |
| --- | --- | --- |
| Load a module at the correct phase | [MBSubModuleBase](../api/core/MBSubModuleBase) | [Game](../api/core-extra/Game) -> [CampaignGameStarter](../api/campaign/CampaignGameStarter) |
| Add campaign behavior and events | [CampaignBehaviorBase](../api/campaign/CampaignBehaviorBase) | [CampaignEvents](../api/campaign/CampaignEvents) -> [Campaign](../api/campaign/Campaign) |
| Give gold, kill, declare war, or change ownership | [GiveGoldAction](../api/campaign-ext/GiveGoldAction) | The matching `*Action.Apply` -> [Hero](../api/campaign/Hero) / [Kingdom](../api/campaign/Kingdom) |
| Calculate or replace campaign rules | [GameModels](../api/campaign/GameModels) | The target `*Model` -> its behavior or UI consumers |
| Write battle logic and handle Agents | [Mission](../api/mission/Mission) | [MissionBehavior](../api/mission/MissionBehavior) -> [Agent](../api/mission/Agent) |
| Persist custom campaign state | [IDataStore](../api/campaign/IDataStore) | [Save System](./save-system) -> the behavior's `SyncData` |
| Build UI bindings | [ViewModel](../api/core-extra/ViewModel) | UI guide -> screen lifetime; do not cache Mission objects across scenes |
| Call native capabilities | [Native interop](./native-interop) | Confirm there is no managed API before reaching `TaleWorlds.Native.dll` |

## Layers and boundaries

| Layer | What it solves | Typical entry | Do not do this |
| --- | --- | --- | --- |
| Foundation / Systems | Logging, text, object system, input, and screen primitives | `TextObject`, `MBObjectManager`, input types | Do not drive Campaign rules from a low-level object |
| Core | Items, character templates, equipment, and shared game data | `Game`, `ItemObject`, `CharacterObject` | Do not bypass object registration and StringId identity with `new` |
| Campaign | Persistent world, factions, parties, and rules | `Campaign`, `CampaignBehaviorBase`, `*Action`, `*Model` | Do not write entity fields directly from an event or tick |
| Mission | One battle scene and Agent lifetime | `Mission`, `MissionBehavior`, `Agent` | Do not use an Agent after the Mission ends |
| UI | Screen stack, ViewModels, and binding | `ViewModel` and Gauntlet/UI types | Do not update a removed ViewModel |
| Save | Stable state across save/load | `CampaignBehaviorBase.SyncData` and this version's save architecture | Do not replay world mutations inside a save callback |

## Version boundary

v1.3.0 is the early 1.3-series baseline. Its source and public surface must not be assumed identical to v1.3.15 or v1.4.5; save assemblies, module splits, and some Action/Model locations changed over time. Use [Version Delta](./version-delta) for cross-version decisions, then consult the [recommended v1.3.15 architecture](../../../v1.3.15/en/architecture/) for the later contract. Do not copy a later version's type name or lifecycle hook into v1.3.0 without checking its source.

## Risk checklist

1. Is the callback in module loading, Campaign, or Mission phase?
2. Should the mutation come from `*Action.Apply` or a registered behavior?
3. Is the saved value stable data rather than an Agent, Mission, UI control, or delegate?
4. Is the object registered through `MBObjectManager`, and is a replacement Model the exact expected type?
5. Can the event fire after loading, Mission end, or object disposal?

## Navigation

- Up: [v1.3.0 version home](../)
- Siblings: [SDK Overview](./sdk-overview) · [Module System](./module-system) · [Save System](./save-system) · [Version Delta](./version-delta) · [Native Interop](./native-interop)
- Children: use the linked architecture topics above; task-first API entry points are in the [API Reference](../api/)
