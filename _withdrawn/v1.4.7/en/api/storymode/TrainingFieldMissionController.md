---
title: "TrainingFieldMissionController"
description: "TrainingFieldMissionController — class in StoryMode.Missions. 18 public members (0 static)."
---

<!-- v147-skeleton -->
# TrainingFieldMissionController

**Namespace:** `StoryMode.Missions`  
**Module:** `StoryMode`  
**Type:** `public class TrainingFieldMissionController : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `StoryMode/Missions/TrainingFieldMissionController.cs`

## Overview

`TrainingFieldMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Instance members** (13): `InitialCurrentObjective`, `OnCreated`, `AfterStart`, `OnEndMission`, `OnRenderingStarted`, `OnMissionTick`, ….
- **Extension points** (7): `OnCreated`, `AfterStart`, `OnEndMission`, `OnRenderingStarted`, `OnMissionTick`, `OnAgentShootMissile`, ….
- **Data and constants** (5): `UIStartTimer`, `UIEndTimer`, `TimerTick`, `CurrentObjectiveTick`, `AllObjectivesTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentShootMissile` | method (override) | Overrides the base member. Takes 7 arguments: `Agent shooterAgent`, `EquipmentIndex weaponIndex`, `Vec3 position`, `Vec3 velocity`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCreated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRenderingStarted` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnScoreHit` | method (override) | Overrides the base member. Takes 10 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `WeaponComponentData attackerWeapon`, `bool isBlocked`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `DelayedAction` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `InitialCurrentObjective` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `LoadCrossbowForStarting` | method | Instance entry point. Takes no arguments. |
| `MouseObjectives` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `ObjectivePerformingType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `TutorialObjective` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `AllObjectivesTick` | field | Instance entry point `Action<List<TrainingFieldMissionController.TutorialObjective>>` field — direct storage with no validation or notification. |
| `CurrentObjectiveTick` | field | Instance entry point `Action<TextObject>` field — direct storage with no validation or notification. |
| `TimerTick` | field | Instance entry point `Action<string>` field — direct storage with no validation or notification. |
| `UIEndTimer` | field | Instance entry point `Func<float>` field — direct storage with no validation or notification. |
| `UIStartTimer` | field | Instance entry point `Action` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyTrainingFieldMissionController : MissionLogic
{
    // Register from the game starter, exactly once.
    public override void RegisterEvents()
    {
        // forward the notification this controller reacts to
    }
}
```

## Risks and Boundaries

- Re-entrancy is the main hazard: a callback that comes back into the controller while it is mid-update can loop.
- Controllers hold no durable state — anything that must survive a save belongs on a saveable object.
- Assume callbacks arrive on the main thread; locking around them usually deadlocks the engine.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/Missions/TrainingFieldMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionConversationLogic](../../sandbox/MissionConversationLogic/) — `SandBox.Conversation.MissionLogics`.
- [SandBoxHelpers](../../sandbox/SandBoxHelpers/) — `SandBox`.
- [TutorialPhase](../TutorialPhase/) — `StoryMode.StoryModePhases`.
- [StoryModeHeroes](../StoryModeHeroes/) — `StoryMode.StoryModeObjects`.
- [PartyAgentOrigin](../../campaign/PartyAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationComplex](../../campaign/LocationComplex/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [LocationCharacter](../../campaign/LocationCharacter/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [AgentBehaviorManager](../../sandbox/AgentBehaviorManager/) — `SandBox.AI`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.

Section: [api/storymode/](../) — the other types in this bucket.
