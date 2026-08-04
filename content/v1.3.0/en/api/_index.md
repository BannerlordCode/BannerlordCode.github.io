---
title: "API Reference - Find the Entry Point (v1.3.0)"
description: "A v1.3.0 task-first API map organized by runtime layer, lifecycle, events, Actions, Models, Mission, UI, and save boundaries."
---
# API Reference: Find the Entry Point (v1.3.0)

> This is a development map, not a signature wall. Choose the lifecycle or system boundary first, then use the module indexes at the bottom to look up a known type name.

## Start here

| I want to... | Start with | Then read |
| --- | --- | --- |
| Load a module at the correct phase | [MBSubModuleBase](./core/MBSubModuleBase) | [Game](./core-extra/Game) -> [CampaignGameStarter](./campaign/CampaignGameStarter) |
| Register campaign behavior and events | [CampaignGameStarter](./campaign/CampaignGameStarter) | [CampaignBehaviorBase](./campaign/CampaignBehaviorBase) -> [CampaignEvents](./campaign/CampaignEvents) |
| Safely give gold, kill, or change war state | [GiveGoldAction](./campaign-ext/GiveGoldAction) | The matching `*Action.Apply` -> [Hero](./campaign/Hero) / [Kingdom](./campaign/Kingdom) |
| Query or replace campaign calculations | [GameModels](./campaign/GameModels) | The target `*Model` -> behavior, menu, or UI consumers |
| Write a Mission behavior and handle Agents | [Mission](./mission/Mission) | [MissionBehavior](./mission/MissionBehavior) -> [Agent](./mission/Agent) |
| Persist custom campaign state | [IDataStore](./campaign/IDataStore) | [Save architecture](../architecture/save-system) -> the behavior's `SyncData` |
| Build UI bindings | [ViewModel](./core-extra/ViewModel) | UI guide -> screen lifetime; do not cache runtime objects across Missions |
| Use native interfaces | [Native interop](../architecture/native-interop) | Confirm there is no managed entry point before reaching `TaleWorlds.Native.dll` |

## Runtime layers

```
Foundation / Systems -> Core -> Campaign
                              ↘ Mission
                              ↘ ViewModel / UI
                              ↘ IDataStore / Save
```

- **Foundation / Systems:** text, object registration, input, and screen primitives; start with the [Core](./core/) and [System](./system/) indexes.
- **Core:** `ItemObject`, character templates, equipment, and shared data; new objects must respect `MBObjectManager` identity registration.
- **Campaign:** `Campaign` owns persistent world state; Behaviors subscribe to events, Actions mutate the world, and Models calculate policy.
- **Mission:** `Mission`, `MissionBehavior`, `Agent`, and `Formation` are valid only during the current battle lifetime.
- **UI / ViewModel:** UI reads Campaign or Mission state but must follow the lifetime of the screen and binding object.
- **Save:** v1.3.0 details live in the [save architecture](../architecture/save-system) and [IDataStore](./campaign/IDataStore); do not treat a later version's SaveSystem types as this version's API.

## Safety boundaries

1. Module callbacks establish entry points and register types; acquire Campaign objects after game state exists.
2. Prefer `*Action.Apply` for Campaign mutations; do not write entity fields directly from a tick or event handler.
3. Use `Mission.Current` and `Agent` only while a Mission exists, and clear references when it ends.
4. A `GameModels` replacement must be the exact expected Model subtype; never remove a required Model with `null`.
5. `SyncData` should persist stable state only; do not create world objects or invoke Actions during save/load.

## Complete module indexes

- [Campaign](./campaign/) · [Campaign-Ext](./campaign-ext/) · [Core](./core/) · [Core Extra](./core-extra/)
- [Engine](./engine/) · [Gameplay (early module)](./gameplay/) · [GUI](./gui/) · [Localization](./localization/)
- [Mission](./mission/) · [Mission-Ext](./mission-ext/) · [System](./system/) · [ViewModel](./viewmodel/)

## Version and navigation

- Up: [v1.3.0 version home](../)
- Siblings: [Architecture Overview](../architecture/) · [SDK Overview](../architecture/sdk-overview) · [Version Delta](../architecture/version-delta)
- For cross-version work, start with the [v1.3.15 task-first API map](../../../v1.3.15/en/api/), then verify that each type exists in this version.
