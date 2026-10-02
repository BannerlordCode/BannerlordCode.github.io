---
title: "BaseBattleMissionController"
description: "BaseBattleMissionController — class in TaleWorlds.MountAndBlade.Source.Missions. 18 public members (0 static)."
---

<!-- v147-skeleton -->
# BaseBattleMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class BaseBattleMissionController : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs`

## Overview

`BaseBattleMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BaseBattleMissionController`.
- **Instance members** (16): `EarlyStart`, `AfterStart`, `SetupTeam`, `CreateDefenderTroops`, `CreateAttackerTroops`, `GetTeamAI`, ….
- **Extension points** (11): `EarlyStart`, `AfterStart`, `SetupTeam`, `CreateDefenderTroops`, `CreateAttackerTroops`, `GetTeamAI`, ….
- **Data and constants** (1): `game`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `EarlyStart` | method (override) | Overrides the base member. Takes no arguments. |
| `MissionEnded` | method (override) | Overrides the base member. Takes 1 argument: `ref MissionResult missionResult`. Returns `bool`. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow killingBlow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMissionRequest` | method (override) | Overrides the base member. Takes 1 argument: `out bool canPlayerLeave`. Returns `InquiryData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetTeamAI` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 3 arguments: `Team team`, `float thinkTimerTime`, `float applyTimerTime`. Returns `TeamAIComponent`. Read path: prefer it over reaching for the backing store. |
| `CreateAttackerTroops` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateDefenderTroops` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreatePlayer` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `SetupTeam` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Team team`. |
| `BecomeEnemy` | method | Protected — for subclasses only. Takes no arguments. |
| `BecomePlayer` | method | Protected — for subclasses only. Takes no arguments. |
| `IncrementDeploymedTroops` | method | Protected — for subclasses only. Takes 1 argument: `BattleSideEnum side`. |
| `IsPlayerDead` | method | Protected — for subclasses only. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SwapTeams` | method | Protected — for subclasses only. Takes no arguments. |
| `BaseBattleMissionController` | ctor | Protected — for subclasses only. Takes 1 argument: `bool isPlayerAttacker`. Returns ``. |
| `game` | field | Protected — for subclasses only `Game` field — direct storage with no validation or notification. |

- Constructed as `protected BaseBattleMissionController(bool isPlayerAttacker)`.

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyBaseBattleMissionController : MissionLogic
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
- 11 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Source/Missions/BaseBattleMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CreatePlayer](../CreatePlayer/) — `TaleWorlds.MountAndBlade.Network.Messages`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.

Section: [api/mission-ext/](../) — the other types in this bucket.
