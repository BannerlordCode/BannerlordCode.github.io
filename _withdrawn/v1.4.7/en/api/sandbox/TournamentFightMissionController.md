---
title: "TournamentFightMissionController"
description: "TournamentFightMissionController — class in SandBox.Tournaments.MissionLogics. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# TournamentFightMissionController

**Namespace:** `SandBox.Tournaments.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class TournamentFightMissionController : MissionLogic, ITournamentGameBehavior`  
**Base:** `MissionLogic, ITournamentGameBehavior`  
**Source:** `SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs`

## Overview

`TournamentFightMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, ITournamentGameBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TournamentFightMissionController`.
- **Instance members** (14): `OnBehaviorInitialize`, `AfterStart`, `PrepareForMatch`, `StartMatch`, `OnEndMission`, `SkipMatch`, ….
- **Extension points** (6): `OnBehaviorInitialize`, `AfterStart`, `OnEndMission`, `OnAgentRemoved`, `OnScoreHit`, `OnEndMissionRequest`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow killingBlow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMissionRequest` | method (override) | Overrides the base member. Takes 1 argument: `out bool canPlayerLeave`. Returns `InquiryData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnScoreHit` | method (override) | Overrides the base member. Takes 10 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `WeaponComponentData attackerWeapon`, `bool isBlocked`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CanAgentRout` | method | Instance entry point. Takes 1 argument: `Agent agent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CheckIfIsThereAnyEnemies` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `IsMatchEnded` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnMatchEnded` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMatchResultsReady` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PrepareForMatch` | method | Instance entry point. Takes no arguments. |
| `SkipMatch` | method | Instance entry point. Takes 1 argument: `TournamentMatch match`. |
| `StartMatch` | method | Instance entry point. Takes 2 arguments: `TournamentMatch match`, `bool isLastRound`. |
| `TournamentFightMissionController` | ctor | Instance entry point. Takes 1 argument: `CultureObject culture`. Returns ``. |

- Constructed as `public TournamentFightMissionController(CultureObject culture)`.

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyTournamentFightMissionController : MissionLogic, ITournamentGameBehavior
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
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Tournaments/MissionLogics/TournamentFightMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ITournamentGameBehavior](../ITournamentGameBehavior/) — `SandBox.Tournaments`.
- [TournamentBehavior](../TournamentBehavior/) — `SandBox.Tournaments.MissionLogics`.
- [TournamentMatch](../../campaign/TournamentMatch/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [TournamentGame](../../campaign/TournamentGame/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [SandBoxHelpers](../SandBoxHelpers/) — `SandBox`.
- [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.

Section: [api/sandbox/](../) — the other types in this bucket.
