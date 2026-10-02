---
title: "HideoutAmbushBossFightCinematicController"
description: "HideoutAmbushBossFightCinematicController — class in SandBox.Missions.MissionLogics.Hideout. 32 public members (0 static)."
---

<!-- v147-skeleton -->
# HideoutAmbushBossFightCinematicController

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`  
**Module:** `SandBox`  
**Type:** `public class HideoutAmbushBossFightCinematicController : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs`

## Overview

`HideoutAmbushBossFightCinematicController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, so the members it does not redeclare are inherited from there. 11 of its own members are properties, which is where most reads and writes land.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `HideoutAmbushBossFightCinematicController`.
- **Instance members** (23): `State`, `InStateTransition`, `IsCinematicActive`, `CinematicDuration`, `TransitionDuration`, `BehaviorType`, ….
- **Extension points** (3): `BehaviorType`, `OnBehaviorInitialize`, `OnMissionTick`.
- **Data and constants** (8): `OnCinematicFinished`, `OnCinematicStateChanged`, `HideoutSceneEntityTag`, `DefaultTransitionDuration`, `DefaultStateDuration`, `DefaultCinematicDuration`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BehaviorType` | property (override) | Overrides the base member `MissionBehaviorType` property. Read it for current state; a declared setter writes that state in place. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CinematicDuration` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `GetAllyFrames` | method | Instance entry point. Takes 6 arguments: `out List<MatrixFrame> initialFrames`, `out List<MatrixFrame> targetFrames`, `MatrixFrame initialPlayerFrame`, `MatrixFrame targetPlayerFrame`, …. Read path: prefer it over reaching for the backing store. |
| `GetBanditFrames` | method | Instance entry point. Takes 6 arguments: `out List<MatrixFrame> initialFrames`, `out List<MatrixFrame> targetFrames`, `MatrixFrame initialBossFrame`, `MatrixFrame targetBossFrame`, …. Read path: prefer it over reaching for the backing store. |
| `GetBanditsInitialFrame` | method | Instance entry point. Takes no arguments. Returns `MatrixFrame`. Read path: prefer it over reaching for the backing store. |
| `GetBossStandingEyePosition` | method | Instance entry point. Takes 1 argument: `out Vec3 eyePosition`. Read path: prefer it over reaching for the backing store. |
| `GetPlayerStandingEyePosition` | method | Instance entry point. Takes 1 argument: `out Vec3 eyePosition`. Read path: prefer it over reaching for the backing store. |
| `GetScenePrefabParameters` | method | Instance entry point. Takes 3 arguments: `out float innerRadius`, `out float outerRadius`, `out float walkDistance`. Read path: prefer it over reaching for the backing store. |
| `GetSpineTroopCount` | method | Instance entry point. Takes 1 argument: `int totalTroopCount`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `HideoutAgentType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `HideoutCinematicAgentInfo` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `HideoutCinematicState` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `HideoutPostCinematicPhase` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `HideoutPreCinematicPhase` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `InStateTransition` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `IsCinematicActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnHideoutCinematicFinished` | method | Instance entry point. Takes no arguments. Returns `delegate void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialFadeOutFinished` | method | Instance entry point. Takes 6 arguments: `ref Agent playerAgent`, `ref List<Agent> playerCompanions`, `ref Agent bossAgent`, `ref List<Agent> bossCompanions`, …. Returns `delegate void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `StartCinematic` | method | Instance entry point. Takes 6 arguments: `HideoutAmbushBossFightCinematicController.OnInitialFadeOutFinished initialFadeOutFinished`, `Action cinematicFinishedCallback`, `float transitionDuration`, `float stateDuration`, …. |
| `State` | property | Instance entry point `HideoutAmbushBossFightCinematicController.HideoutCinematicState` property. Read it for current state; a declared setter writes that state in place. |
| `TransitionDuration` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `DefaultCinematicDuration` | const | Instance entry point. Takes no arguments. Returns `float`. |

- Constructed as `public HideoutAmbushBossFightCinematicController()`.

8 further public members follow the same patterns.
## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyHideoutAmbushBossFightCinematicController : MissionLogic
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
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Hideout](../../campaign/Hideout/) — `TaleWorlds.CampaignSystem.Settlements`.
- [HideoutBossFightBehavior](../HideoutBossFightBehavior/) — `SandBox.Objects.Cinematics`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.

Section: [api/sandbox/](../) — the other types in this bucket.
