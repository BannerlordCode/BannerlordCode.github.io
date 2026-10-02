---
title: "MissionPathGenerationLogic"
description: "MissionPathGenerationLogic — class in SandBox.Missions.MissionLogics. 29 public members (11 static)."
---

<!-- v147-skeleton -->
# MissionPathGenerationLogic

**Namespace:** `SandBox.Missions.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class MissionPathGenerationLogic : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`MissionPathGenerationLogic` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends MissionLogic, so the members it does not redeclare are inherited from there. 19 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionPathGenerationLogic`.
- **Static entry points** (9): `MinimumPathDistance`, `MaximumPathDistance`, `MinimumVisitPointCountInPath`, `MaximumVisitPointCountInPath`, `MinimumCrossRoadCountInPath`, `MaximumCrossRoadCountInPath`, ….
- **Instance members** (16): `OnObjectUsed`, `OnEndMission`, `InitializeBehavior`, `OnMissionTick`, `GetAllPossiblePaths`, `IsOnLeftSide`, ….
- **Extension points** (4): `OnObjectUsed`, `OnEndMission`, `OnMissionTick`, `PointOfInterestBaseData`.
- **Data and constants** (3): `MaximumLookBackPointCountInPath`, `ScoreToAchieve`, `_startAndFinishPointPool`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `MaximumCrossRoadCountInPath` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MaximumPathDistance` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MaximumStandingGuardCountInPath` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MaximumVisitPointCountInPath` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MinimumCrossRoadCountInPath` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MinimumGuardSpawnPathRatio` | property (static) | Static entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `MinimumPathDistance` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MinimumStandingGuardCountInPath` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MinimumVisitPointCountInPath` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnObjectUsed` | method (override) | Overrides the base member. Takes 2 arguments: `Agent userAgent`, `UsableMissionObject usedObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PointOfInterestBaseData` | property (abstract) | Abstract — a subclass must supply it `class` property. Read it for current state; a declared setter writes that state in place. |
| `OnEndMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CrossRoadMaximumDistance` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `CrossRoadMinimumDistance` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `GetAllPossiblePaths` | method | Instance entry point. Takes no arguments. Returns `List<MissionPathGenerationLogic.PointOfInterestScorePair>`. Read path: prefer it over reaching for the backing store. |
| `InitializeBehavior` | method | Instance entry point. Takes no arguments. |
| `IsOnLeftSide` | method | Instance entry point. Takes 3 arguments: `Vec2 lineA`, `Vec2 lineB`, `Vec2 point`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MaximumLookBackPointCountInPath` | field (static) | Static entry point `int` field — direct storage with no validation or notification. |
| `MaximumVisitPointDistance` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MinimumDistanceToBlendPointToVisitPoint` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `MinimumVisitPointDistance` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `NavigationPathData` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `PointOfInterests` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public MissionPathGenerationLogic(CharacterObject defaultDisguiseCharacter)`.

5 further public members follow the same patterns.
## Usage Example

```csharp
public class MyMissionPathGenerationLogic : MissionLogic
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyMissionPathGenerationLogic());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AnimationPoint](../AnimationPoint/) — `SandBox.Objects.AnimationPoints`.
- [NavigationMeshDeactivator](../../mission-ext/NavigationMeshDeactivator/) — `TaleWorlds.MountAndBlade.Source.Objects`.
- [DisguiseMissionLogic](../DisguiseMissionLogic/) — `SandBox.Missions.MissionLogics`.
- [Location](../../campaign/Location/) — `TaleWorlds.CampaignSystem.Settlements.Locations`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [Chair](../Chair/) — `SandBox.Objects.Usables`.

Section: [api/sandbox/](../) — the other types in this bucket.
