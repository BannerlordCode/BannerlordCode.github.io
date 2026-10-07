---
title: "BattleEndLogic"
description: "Auto-generated class reference for BattleEndLogic."
---
# BattleEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleEndLogic : MissionLogic, IBattleEndLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleEndLogic.cs`

## Overview

`BattleEndLogic` is the `MissionLogic` that decides whether a battle is over and, if so, how it ended. It
implements `IBattleEndLogic`, whose only member is `SetNotificationDisabled(bool)`
(`IBattleEndLogic.cs:9`) — a hook so external code can suppress the scoreboard notifications without
touching the logic. Everything else is concrete.

`BannerlordMissions` adds an instance to the battle, siege and tournament initializers
(`BannerlordMissions.cs:125`, `BannerlordMissions.cs:174`, `BannerlordMissions.cs:264`), so it is present
in every battle-shaped mission.

Its public read surface is three booleans with no setters: `PlayerVictory`, `EnemyVictory` and
`IsEnemySideRetreating`. They are computed, not stored — `PlayerVictory` is
`(isEnemyRetreating || isEnemyDepleted) && !isEnemyDefenderPulledBack` (`BattleEndLogic.cs:19`) and
`EnemyVictory` is `isPlayerSideRetreating || isPlayerSideDepleted` (`BattleEndLogic.cs:29`).

The underlying flags are refreshed by a private poll, not by events: `OnMissionTick` calls
`CheckIsEnemySideRetreatingOrOneSideDepleted` every three seconds of mission time, and again seven seconds
after the mission has started ending (`BattleEndLogic.cs:91`, `BattleEndLogic.cs:67`). That method reads
`IsSideDepleted` from the spawn logic for both sides and compares retreat timers against
`GetReinforcementInterval() + 3f` (`BattleEndLogic.cs:284`).

## Mental Model

Read it as a polled state machine with a siege-specific override, not as an event-driven observer. The
boundaries:

- **`PlayerVictory` is deliberately false after a defender pullback.** The `&& !isEnemyDefenderPulledBack`
  term (`BattleEndLogic.cs:19`) exists so `MissionEnded` can report
  `MissionResult.CreateDefenderPushedBack()` instead of a plain victory — the check order is pushed-back
  first, then successful, then defeated (`BattleEndLogic.cs:176`). "Did the player win?" is therefore not
  what `PlayerVictory` answers once `EnableEnemyDefenderPullBack` has been used.
- **The pullback flag only ever moves in one direction and only under a narrow condition.**
  `OnAgentRemoved` decrements the counter when the removed agent was a *human* on the enemy defender side,
  routed, and not on the player's side (`BattleEndLogic.cs:165`). Ordinary troop deaths never move it.
- **The siege end check has a one-shot gate.** `CheckIsEnemySideRetreatingOrOneSideDepleted` starts with
  `if (!_canCheckForEndConditionSiege)`, sets that flag to "there is no `BattleDeploymentHandler` in this
  mission", and **returns without checking anything** (`BattleEndLogic.cs:265`). During a deployment phase
  the end condition is suppressed by construction.
- **`_canCheckForEndCondition` is write-only.** `ChangeCanCheckForEndCondition(bool)`
  (`BattleEndLogic.cs:217`) sets it and nothing exposes it back; `_notificationsDisabled` is likewise a
  private property behind `SetNotificationDisabled` (`BattleEndLogic.cs:46`).
- **`TryExit` is host-authoritative.** It returns `ExitResult.False` immediately on a client or replay
  (`BattleEndLogic.cs:225`). Clients never get the surrender prompt or the mission-end call from here.
- **`OnEndMission` writes back to the campaign.** On an enemy retreat it walks the enemy's active agents and
  calls `IAgentOriginBase.SetRouted(!hasCollapsedMorale)` on each survivor (`BattleEndLogic.cs:210`), which
  is how routed enemies persist after the battle.

## How to use

**Getting one.** Do not add one — the mission already has instances. Read it by concrete type with
`Mission.GetMissionBehavior<BattleEndLogic>()`; only `SetNotificationDisabled` is reachable through the
`IBattleEndLogic` interface.

**Typical use** — reacting to the battle outcome, and asking the siege-aware question:

```csharp
public class OutcomeWatcher : MissionLogic
{
    private BattleEndLogic _end;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _end = Mission.GetMissionBehavior<BattleEndLogic>();
    }

    public override void OnMissionTick(float dt)
    {
        if (_end == null) { return; }

        // These are derived flags refreshed on a timer, not events - do not expect
        // them to change on the frame a unit routes.
        if (_end.EnemyVictory) { Debug.Print("player side lost or is routing"); }
        if (_end.IsEnemySideRetreating) { Debug.Print("enemy is fleeing"); }
    }

    // Suppress the scoreboard toast without touching the class - IBattleEndLogic.cs:9
    public override void OnEndMission()
    {
        base.OnEndMission();
        Mission.GetMissionBehavior<IBattleEndLogic>()?.SetNotificationDisabled(true);
    }
}
```

**The mistake that bites.** Treating `PlayerVictory` as "the battle was won". In a siege where the
defenders have pulled back — the `EnableEnemyDefenderPullBack` path — the flag is forced to `false` by
design (`BattleEndLogic.cs:19`), so a mod that shows "Victory" or triggers its win rewards on that property
never fires at all in exactly the sieges where the player pushed the garrison out. Watch
`Mission.MissionResult` instead, or check `IsEnemySideRetreating` alongside.



## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerVictory` | `public bool PlayerVictory { get; }` |
| `EnemyVictory` | `public bool EnemyVictory { get; }` |
| `IsEnemySideRetreating` | `public bool IsEnemySideRetreating { get; set; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Executes the MissionEnded logic.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
var result = battleEndLogic.MissionEnded(missionResult);
```

### ChangeCanCheckForEndCondition
`public void ChangeCanCheckForEndCondition(bool canCheckForEndCondition)`

**Purpose:** Executes the ChangeCanCheckForEndCondition logic.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.ChangeCanCheckForEndCondition(false);
```

### TryExit
`public BattleEndLogic.ExitResult TryExit()`

**Purpose:** Attempts to retrieve exit, usually returning success through an out parameter.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
var result = battleEndLogic.TryExit();
```

### EnableEnemyDefenderPullBack
`public void EnableEnemyDefenderPullBack(int neededTroopNumber)`

**Purpose:** Executes the EnableEnemyDefenderPullBack logic.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.EnableEnemyDefenderPullBack(0);
```

### SetNotificationDisabled
`public void SetNotificationDisabled(bool value)`

**Purpose:** Assigns a new value to notification disabled and updates the object's internal state.

```csharp
// Obtain an instance of BattleEndLogic from the subsystem API first
BattleEndLogic battleEndLogic = ...;
battleEndLogic.SetNotificationDisabled(false);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleEndLogic>();
```

## See Also

- [Area Index](../)
- [CasualtyHandler](../CasualtyHandler)
- [BattlePowerCalculationLogic](../BattlePowerCalculationLogic)
- [BattleMissionAgentInteractionLogic](../BattleMissionAgentInteractionLogic)
- [AgentVictoryLogic](../AgentVictoryLogic)
- [中文页面](../../../../zh/api/mission-ext/BattleEndLogic)