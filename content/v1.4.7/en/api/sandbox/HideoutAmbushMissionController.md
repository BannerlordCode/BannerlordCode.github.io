---
title: "HideoutAmbushMissionController"
description: "HideoutAmbushMissionController — class in SandBox.Missions.MissionLogics.Hideout. 20 public members (2 static)."
---

<!-- v147-skeleton -->
# HideoutAmbushMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`  
**Module:** `SandBox`  
**Type:** `public class HideoutAmbushMissionController : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs`

## Overview

`HideoutAmbushMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `HideoutAmbushMissionController`.
- **Static entry points** (2): `StartBossFightDuelMode`, `StartBossFightBattleMode`.
- **Instance members** (17): `IsReadyForCallTroopsCinematic`, `OnBehaviorInitialize`, `OnCreated`, `AfterStart`, `OnRemoveBehavior`, `OnMissionTick`, ….
- **Extension points** (11): `OnBehaviorInitialize`, `OnCreated`, `AfterStart`, `OnRemoveBehavior`, `OnMissionTick`, `OnAgentBuild`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentAlarmedStateChanged` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `Agent.AIStateFlag flag`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentBuild` | method (override) | Overrides the base member. Takes 2 arguments: `Agent agent`, `Banner banner`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow blow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCreated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionStateFinalized` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnObjectUsed` | method (override) | Overrides the base member. Takes 2 arguments: `Agent userAgent`, `UsableMissionObject usedObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRemoveBehavior` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `StartBossFightBattleMode` | method (static) | Static entry point. Takes no arguments. |
| `StartBossFightDuelMode` | method (static) | Static entry point. Takes no arguments. |
| `OnEndMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsReadyForCallTroopsCinematic` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsSideDepleted` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAgentsShouldBeEnabled` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnStealthMissionCounterFailed` | method | Instance entry point. Takes 1 argument: `OnStealthMissionCounterFailedEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetOverriddenHideoutBossCharacterObject` | method | Instance entry point. Takes 1 argument: `CharacterObject characterObject`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `TroopData` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `HideoutAmbushMissionController` | ctor | Instance entry point. Takes 3 arguments: `IMissionTroopSupplier[] suppliers`, `BattleSideEnum playerSide`, `int playerTroopCount`. Returns ``. |

- Constructed as `public HideoutAmbushMissionController(IMissionTroopSupplier[] suppliers, BattleSideEnum playerSide, int playerTroopCount)`.

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyHideoutAmbushMissionController : MissionLogic
{
    // Register from the game starter, exactly once.
    public override void RegisterEvents()
    {
        // forward the notification this controller reacts to
    }
}

// Static helpers: HideoutAmbushMissionController.StartBossFightDuelMode();
```

## Risks and Boundaries

- Re-entrancy is the main hazard: a callback that comes back into the controller while it is mid-update can loop.
- Controllers hold no durable state — anything that must survive a save belongs on a saveable object.
- Assume callbacks arrive on the main thread; locking around them usually deadlocks the engine.
- 11 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Hideout](../../campaign/Hideout/) — `TaleWorlds.CampaignSystem.Settlements`.
- [BattleAgentLogic](../BattleAgentLogic/) — `SandBox.Missions.MissionLogics`.
- [MissionObjectiveLogic](../../mission-ext/MissionObjectiveLogic/) — `TaleWorlds.MountAndBlade.Missions.MissionLogics`.
- [HideoutAmbushBossFightCinematicController](../HideoutAmbushBossFightCinematicController/) — `SandBox.Missions.MissionLogics.Hideout`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [SandBoxHelpers](../SandBoxHelpers/) — `SandBox`.
- [StealthAreaMarker](../StealthAreaMarker/) — `SandBox.Objects.AreaMarkers`.
- [LocateTheMainCampObjective](../LocateTheMainCampObjective/) — `SandBox.Missions.MissionLogics.Hideout.Objectives`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/sandbox/](../) — the other types in this bucket.
