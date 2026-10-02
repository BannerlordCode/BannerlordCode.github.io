---
title: "TournamentJoustingMissionController"
description: "TournamentJoustingMissionController — class in SandBox.Tournaments.MissionLogics. 25 public members (0 static)."
---

<!-- v147-skeleton -->
# TournamentJoustingMissionController

**Namespace:** `SandBox.Tournaments.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class TournamentJoustingMissionController : MissionLogic, ITournamentGameBehavior`  
**Base:** `MissionLogic, ITournamentGameBehavior`  
**Source:** `SandBox/Tournaments/MissionLogics/TournamentJoustingMissionController.cs`

## Overview

`TournamentJoustingMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, ITournamentGameBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TournamentJoustingMissionController`.
- **Instance members** (12): `AfterStart`, `StartMatch`, `SkipMatch`, `IsMatchEnded`, `OnMatchEnded`, `IsAgentInTheTrack`, ….
- **Extension points** (4): `AfterStart`, `OnMissionTick`, `OnAgentHit`, `OnAgentRemoved`.
- **Data and constants** (12): `VictoryAchieved`, `PointGanied`, `Disqualified`, `Unconscious`, `AgentStateChanged`, `RegionBoxList`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentHit` | method (override) | Overrides the base member. Takes 5 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `in MissionWeapon attackerWeapon`, `in Blow blow`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow killingBlow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsAgentInTheTrack` | method | Instance entry point. Takes 2 arguments: `Agent agent`, `bool inCurrentTrack`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsMatchEnded` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `JoustingAgentStateChangedEventDelegate` | method | Instance entry point. Takes 2 arguments: `Agent agent`, `JoustingAgentController.JoustingAgentState state`. Returns `delegate void`. |
| `JoustingEventDelegate` | method | Instance entry point. Takes 2 arguments: `Agent affectedAgent`, `Agent affectorAgent`. Returns `delegate void`. |
| `OnJoustingAgentStateChanged` | method | Instance entry point. Takes 2 arguments: `Agent agent`, `JoustingAgentController.JoustingAgentState state`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMatchEnded` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SkipMatch` | method | Instance entry point. Takes 1 argument: `TournamentMatch match`. |
| `StartMatch` | method | Instance entry point. Takes 2 arguments: `TournamentMatch match`, `bool isLastRound`. |
| `TournamentJoustingMissionController` | ctor | Instance entry point. Takes 1 argument: `CultureObject culture`. Returns ``. |
| `AgentStateChanged` | field | Instance entry point `TournamentJoustingMissionController.JoustingAgentStateChangedEventDelegate` field — direct storage with no validation or notification. |
| `CornerBackStartList` | field | Instance entry point `List<MatrixFrame>` field — direct storage with no validation or notification. |
| `CornerFinishList` | field | Instance entry point `List<MatrixFrame>` field — direct storage with no validation or notification. |
| `CornerMiddleList` | field | Instance entry point `List<MatrixFrame>` field — direct storage with no validation or notification. |
| `CornerStartList` | field | Instance entry point `List<GameEntity>` field — direct storage with no validation or notification. |
| `Disqualified` | field | Instance entry point `TournamentJoustingMissionController.JoustingEventDelegate` field — direct storage with no validation or notification. |
| `IsSwordDuelStarted` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `PointGanied` | field | Instance entry point `TournamentJoustingMissionController.JoustingEventDelegate` field — direct storage with no validation or notification. |
| `RegionBoxList` | field | Instance entry point `List<GameEntity>` field — direct storage with no validation or notification. |
| `RegionExitBoxList` | field | Instance entry point `List<GameEntity>` field — direct storage with no validation or notification. |
| `Unconscious` | field | Instance entry point `TournamentJoustingMissionController.JoustingEventDelegate` field — direct storage with no validation or notification. |

- Constructed as `public TournamentJoustingMissionController(CultureObject culture)`.

1 further public members follow the same patterns.
## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyTournamentJoustingMissionController : MissionLogic, ITournamentGameBehavior
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
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Tournaments/MissionLogics/TournamentJoustingMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ITournamentGameBehavior](../ITournamentGameBehavior/) — `SandBox.Tournaments`.
- [TournamentBehavior](../TournamentBehavior/) — `SandBox.Tournaments.MissionLogics`.
- [TournamentMatch](../../campaign/TournamentMatch/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [SandBoxHelpers](../SandBoxHelpers/) — `SandBox`.
- [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.
- [JoustingAgentController](../JoustingAgentController/) — `SandBox.Tournaments.AgentControllers`.

Section: [api/sandbox/](../) — the other types in this bucket.
