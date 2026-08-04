---
title: "API Reference - Find the Entry Point (v1.4.5)"
description: "A v1.4.5 task-first Bannerlord API map organized by runtime layer, lifecycle, and crash boundaries before entering the type and family handbooks."
---
# API Reference: Find the Entry Point (v1.4.5)

> Choose an entry point by task, then follow its dependency chain. The complete module catalogs remain available for known-type lookup, but they do not replace mental models, timing, or risk guidance.

## Start here

| I want to... | Start with | Then read |
| --- | --- | --- |
| Load a module at the correct phase | [MBSubModuleBase](./core/MBSubModuleBase) | [Game](./core/Game) -> [CampaignGameStarter](./campaign/CampaignGameStarter) |
| Register campaign behavior and events | [CampaignGameStarter](./campaign/CampaignGameStarter) | [CampaignBehaviorBase](./campaign/CampaignBehaviorBase) -> [CampaignEvents](./campaign/CampaignEvents) |
| Give a Hero gold, kill, declare war, or change a kingdom | [Hero](./campaign/Hero) / [GiveGoldAction](./campaign-ext/GiveGoldAction) | [KillCharacterAction](./campaign-ext/KillCharacterAction) / [ChangeKingdomAction](./campaign-ext/ChangeKingdomAction) / [DeclareWarAction](./campaign-ext/DeclareWarAction) |
| Query or replace campaign calculations | [GameModelsManager](./core-extra/GameModelsManager/) | The matching `*Model` -> registration timing -> each consumer's return contract |
| Write a Mission behavior and handle Agents | [Mission](./mission/Mission) | [MissionBehavior](./mission/MissionBehavior) -> [Agent](./mission/Agent) |
| Persist custom campaign state | [CampaignBehaviorBase](./campaign/CampaignBehaviorBase) | [IDataStore](./campaign/IDataStore) -> [SaveManager](./save-system/SaveManager) |
| Register a new saveable object type | [SaveableTypeDefiner](./save-system/SaveableTypeDefiner) | [SaveManager](./save-system/SaveManager) -> Saveable field/property metadata |
| Build a Gauntlet UI | [ScreenManager](./gui/ScreenManager) | [GauntletLayer](./engine/GauntletLayer) -> [ViewModel](./core-extra/ViewModel) |
| Read localized text | [TextObject](./localization/TextObject) | Localization module -> UI or notification lifetime |

## Runtime layers

```
SubModule -> Game -> Campaign -> (Action / Model / Behavior) -> Entity
                     ↘ Mission -> (MissionBehavior / Agent / Team)
                     ↘ SaveManager (stable state)
             UI / ViewModel reads Campaign or Mission state
```

- **Foundation / Core:** creation, registration, and global object identity; start with the lifetime of `MBSubModuleBase`, `Game`, and `MBObjectManager`.
- **Campaign:** persistent world state lives in entities, Models calculate policy, Actions coordinate mutations, and Behaviors connect events to custom state.
- **Mission:** one battle scene owns its `Mission`, `Agent`, `Team`, and behavior set; those references are no longer reliable after the scene ends.
- **UI:** `ScreenManager` and `GauntletLayer` own screens while `ViewModel` owns binding state; UI is not a Campaign mutation boundary.
- **Save:** `SyncData(IDataStore)` is for Behavior-owned state; a new reachable object type belongs in the `SaveableTypeDefiner` and Attribute definition chain.

## Dependencies and crash boundaries

1. Module callbacks register types and UI; acquire `Campaign.Current` only after the game and Campaign lifecycle exists.
2. Before changing Hero, Settlement, Kingdom, or other world state, find the matching `*Action.Apply`; a field assignment is not its substitute.
3. A replacement Model must be the exact compatible type and be registered at the correct phase; `null` breaks tick and UI consumers.
4. Listen for Agent removal inside the Mission and clean up at `OnMissionEnded`; do not persist Agent or Mission objects in cross-scene Behavior state.
5. Save local IDs, Behavior `StringId`, `SyncData` keys, and value types are persistent contracts; read the [crash and save boundaries](../architecture/crash-boundary) before changing them.

## Reading order

1. Read the [Architecture Overview](../architecture/) and [Roadmap](../architecture/roadmap) to identify the layer and task.
2. On the entry page, read the mental model, when/when-not guidance, dependencies, and risks first.
3. For world mutation, read the Actions family and [crash boundaries](../architecture/crash-boundary); for calculations, read the Models family.
4. Use the module catalogs for long-tail lookup only after the runtime boundary is clear.

## Complete module indexes

- [Campaign](./campaign/) · [Campaign-Ext](./campaign-ext/) · [Core](./core/) · [Core Extra](./core-extra/)
- [Engine](./engine/) · [GUI](./gui/) · [Localization](./localization/) · [Mission](./mission/) · [Mission-Ext](./mission-ext/)
- [Save System](./save-system/) · [System](./system/) · [ViewModel](./viewmodel/)

## Navigation

- Up: [v1.4.5 version home](../)
- Siblings: [Architecture Overview](../architecture/) · [Roadmap](../architecture/roadmap) · [Crash and Save Boundaries](../architecture/crash-boundary)
- Cross-version: [Class comparison](../../../versions/)
