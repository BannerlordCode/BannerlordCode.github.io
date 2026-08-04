---
title: "Developer Roadmap - v1.4.5"
description: "Choose a v1.4.5 entry point by modding task and follow its dependency and safety boundary across modules, Campaign, Actions, Models, Missions, UI, and saves."
---
# Developer Roadmap (v1.4.5)

This page is an entry-point chooser, not a list of class names. Describe the runtime state you want to change, then follow the upstream creator, downstream consumers, and lifetime boundary into the API pages. The complete class catalogs remain available for known-type lookup, but a catalog cannot replace timing and risk guidance.

## ↑ Parent Navigation

- [Architecture overview](../)
- [Current rebuild waves](../roadmap)
- [Crash and save boundaries](../crash-boundary)
- [Documentation contract](../doc-contract)

## One runtime path: module to stable state

```text
MBSubModuleBase
    -> Game / IGameStarter
    -> CampaignGameStarter -> CampaignBehaviorBase -> CampaignEvents
    -> Action.Apply or a rule in GameModels
    -> Campaign entities and SaveManager

Mission -> MissionBehavior -> Agent / Team / Formation
UI -> ScreenManager / GauntletLayer -> ViewModel
```

Module callbacks provide the entry timing. Behaviors hold campaign state and subscribe to events. Actions coordinate world mutations, while Models calculate rules. Missions and UI have their own lifetimes; their objects must not become long-lived Campaign state.

## Find the entry by task

### 1. Register a SubModule and add a Campaign Behavior

Read in this order:

1. [MBSubModuleBase](../../api/core/MBSubModuleBase) for `OnSubModuleLoad`, `OnGameStart`, and phase boundaries.
2. [CampaignGameStarter](../../api/campaign/CampaignGameStarter) for Behavior and Model registration.
3. [CampaignBehaviorBase](../../api/campaign/CampaignBehaviorBase) for `RegisterEvents`, ticks, and `SyncData`.
4. [CampaignEvents](../../api/campaign/CampaignEvents) to subscribe to a real event instead of polling the whole world.

A minimal registration path acquires `CampaignGameStarter` in the game-start callback:

```csharp
protected override void OnGameStart(Game game, IGameStarter starter)
{
    base.OnGameStart(game, starter);
    if (starter is CampaignGameStarter campaignStarter)
    {
        campaignStarter.AddBehavior(new MyCampaignBehavior());
    }
}
```

Do not read `Campaign.Current` from `OnSubModuleLoad`. At that point assemblies and module metadata may exist while the Campaign objects do not.

### 2. Safely give a Hero gold, kill, declare war, or change a kingdom

Read [Hero](../../api/campaign/Hero) for entity identity, then choose the Action that owns the mutation:

- Gold transfer: [GiveGoldAction](../../api/campaign-ext/GiveGoldAction)
- Death: [KillCharacterAction](../../api/campaign-ext/KillCharacterAction)
- Relation change: [ChangeRelationAction](../../api/campaign-ext/ChangeRelationAction)
- Kingdom membership: [ChangeKingdomAction](../../api/campaign-ext/ChangeKingdomAction)
- War declaration: [DeclareWarAction](../../api/campaign-ext/DeclareWarAction)

Acquire real objects through `Hero.MainHero`, `Hero.Find(...)`, or Campaign-registered objects. Do not fabricate a `Hero`, and do not treat `hero.Gold += amount` as a transaction. An Action performs validation, object-manager updates, event notification, and related faction, quest, and task cascades.

The safe sequence is: read entity state -> check the Campaign phase -> choose the `*Action.Apply` overload -> let events and downstream Behaviors synchronize the world. If the code only needs to answer how a war score is calculated, read a Model instead of invoking an Action.

### 3. Add custom save state

Start with `SyncData(IDataStore)` on [CampaignBehaviorBase](../../api/campaign/CampaignBehaviorBase), then read [SaveManager](../../api/save-system/SaveManager) for load ordering. Only continue to [SaveableTypeDefiner](../../api/save-system/SaveableTypeDefiner), [SaveableFieldAttribute](../../api/save-system/SaveableFieldAttribute), and [SaveablePropertyAttribute](../../api/save-system/SaveablePropertyAttribute) when defining a new saveable type or field metadata.

A Behavior persistence example uses a stable key and does not create world objects or invoke Actions during save/load:

```csharp
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("myModState", ref _state);
}
```

The persistence contract includes the key, value type, object SaveId, and load order. Read the [crash and save boundaries](../crash-boundary) before changing any of them, and decide how old saves should be handled.

### 4. Write a MissionBehavior and handle Agent removal

Read [Mission](../../api/mission/Mission), [MissionBehavior](../../api/mission/MissionBehavior), [Agent](../../api/mission/Agent), [Team](../../api/mission-ext/Team), and [Formation](../../api/mission/Formation). A Mission behavior enters at the Mission creation/initialization boundary:

```csharp
public override void OnMissionBehaviorInitialize(Mission mission)
{
    base.OnMissionBehaviorInitialize(mission);
    mission.AddMissionBehavior(new MyMissionBehavior());
}
```

Handle Agent removal/death callbacks inside the behavior and clear references in `OnMissionEnded`. Do not store Agents in a Campaign Behavior or reuse the previous `Mission.Current` in the next battle.

### 5. Decide whether the problem belongs to a Model or an Action

- “What value should be calculated?” such as war score, wages, speed, or morale: start at [GameModels](../../api/campaign/GameModels) and [GameModelsManager](../../api/core-extra/GameModelsManager), then follow the specific `*Model`.
- “Make the world enter another state now”: find the matching `*Action.Apply`, then verify its event cascade and call phase.
- “Hold custom state over time or events”: use `CampaignBehaviorBase` and connect it through [CampaignEvents](../../api/campaign/CampaignEvents).

A Model is a policy contract read by many consumers. An Action is a world mutation and side-effect boundary. Using an Action to calculate a value repeats mutations; writing an entity from a Model bypasses synchronization.

## Other common routes

| Goal | Start with | Boundary |
|------|------------|----------|
| UI panel | [ScreenManager](../../api/gui/ScreenManager) | [GauntletLayer](../../api/engine/GauntletLayer) -> [ViewModel](../../api/core-extra/ViewModel); UI does not own Campaign state |
| Localized text | [TextObject](../../api/localization/TextObject) | Pass text objects to UI, messages, or dialogue lifetimes |
| Create or query a Campaign object | [Campaign](../../api/campaign/Campaign) | Preserve the registered identity through [MBObjectManager](../../api/campaign-ext/MBObjectManager); do not bypass StringId with `new` |
| Aggregate Mission logic | [MissionLogic](../../api/mission-ext/MissionLogic) | Consume Agents and scene objects only during the Mission lifetime |

## Crash-prevention checklist

- Confirm that the game has entered the Campaign lifetime before reading `Campaign.Current`.
- Find `*Action.Apply` before mutating world state; do not write entity fields or collections directly.
- Keep `SyncData` to stable state; do not create objects, start diplomacy, or replay events during save/load.
- Release Agent, Mission, GauntletLayer, and ViewModel references in their respective end callbacks.
- When replacing a Model, preserve the expected concrete type and registration phase; never remove a required rule with `null`.

## See also

- [Architecture overview](../)
- [Crash and save boundaries](../crash-boundary)
- [Noise and non-business type policy](../noise-policy)
- [SandBox/StoryMode/Native reading policy](../sandbox-native-policy)
- [Task-first API reference](../../api/)
