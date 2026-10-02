---
title: "TournamentArcheryMissionController"
description: "TournamentArcheryMissionController — class in SandBox.Tournaments.MissionLogics. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# TournamentArcheryMissionController

**Namespace:** `SandBox.Tournaments.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class TournamentArcheryMissionController : MissionLogic, ITournamentGameBehavior`  
**Base:** `MissionLogic, ITournamentGameBehavior`  
**Source:** `SandBox/Tournaments/MissionLogics/TournamentArcheryMissionController.cs`

## Overview

`TournamentArcheryMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, ITournamentGameBehavior, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TournamentArcheryMissionController`.
- **Instance members** (9): `AgentControllers`, `AfterStart`, `StartMatch`, `SkipMatch`, `IsMatchEnded`, `OnMatchEnded`, ….
- **Extension points** (3): `AfterStart`, `OnMissionTick`, `OnAgentHit`.
- **Data and constants** (1): `ShootingPositions`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentHit` | method (override) | Overrides the base member. Takes 5 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `in MissionWeapon attackerWeapon`, `in Blow blow`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AgentControllers` | property | Instance entry point `IEnumerable<ArcheryTournamentAgentController>` property. Read it for current state; a declared setter writes that state in place. |
| `IsMatchEnded` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnMatchEnded` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTargetDestroyed` | method | Instance entry point. Takes 5 arguments: `DestructableComponent destroyedComponent`, `Agent destroyerAgent`, `in MissionWeapon attackerWeapon`, `ScriptComponentBehavior attackerScriptComponentBehavior`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SkipMatch` | method | Instance entry point. Takes 1 argument: `TournamentMatch match`. |
| `StartMatch` | method | Instance entry point. Takes 2 arguments: `TournamentMatch match`, `bool isLastRound`. |
| `TournamentArcheryMissionController` | ctor | Instance entry point. Takes 1 argument: `CultureObject culture`. Returns ``. |
| `ShootingPositions` | field | Instance entry point `List<GameEntity>` field — direct storage with no validation or notification. |

- Constructed as `public TournamentArcheryMissionController(CultureObject culture)`.

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyTournamentArcheryMissionController : MissionLogic, ITournamentGameBehavior
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
- The declaration in `SandBox/Tournaments/MissionLogics/TournamentArcheryMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ITournamentGameBehavior](../ITournamentGameBehavior/) — `SandBox.Tournaments`.
- [ArcheryTournamentAgentController](../ArcheryTournamentAgentController/) — `SandBox.Tournaments.AgentControllers`.
- [TournamentBehavior](../TournamentBehavior/) — `SandBox.Tournaments.MissionLogics`.
- [TournamentMatch](../../campaign/TournamentMatch/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [SandBoxHelpers](../SandBoxHelpers/) — `SandBox`.
- [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.

Section: [api/sandbox/](../) — the other types in this bucket.
