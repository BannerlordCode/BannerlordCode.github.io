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

`BattleEndLogic` is the mission behaviour that decides *when a battle has a result*. It implements `MissionLogic` and `IBattleEndLogic` (`BattleEndLogic.cs:11`) and is pushed into every battle mission alongside the spawn logic — `SandBoxMissions` builds it with `new BattleEndLogic()` (`SandBoxMissions.cs:447`). There is one instance per battle; it owns six booleans and two `MissionTime` stamps and nothing more.

It answers two separate questions. `MissionEnded(ref MissionResult)` is the gate the engine polls: return `true` and the mission stops, having written a result (`BattleEndLogic.cs:173`). The `PlayerVictory` / `EnemyVictory` properties are for *readers* — UI, other behaviours — and are computed differently from the result, which is the first place to get caught out.

The underlying state is fed from two places. Depletion is polled from the spawn logic, `IMissionAgentSpawnLogic.IsSideDepleted(side)`, fetched once in `OnBehaviorInitialize` (`BattleEndLogic.cs:53`, `BattleEndLogic.cs:274`). Retreat is *derived*: a side counts as retreating only after every active agent on it has been `IsRunningAway` continuously for longer than `GetReinforcementInterval() + 3f` (`BattleEndLogic.cs:283`, `BattleEndLogic.cs:319`). `OnMissionTick` drives both, on a `BasicMissionTimer` — every second while the mission is live, then every three seconds for the "battle lost/won" banner and every seven for the "press Tab for results" prompt.

## Mental Model

Understand the three suppression switches, because each one silently changes what the logic will ever conclude.

**`_canCheckForEndCondition`**, flipped by `ChangeCanCheckForEndCondition` (`BattleEndLogic.cs:216`, assignment at `BattleEndLogic.cs:218`). While false, the entire body of the check is skipped — no depletion polling, no retreat detection — and the previously computed flags simply persist. This is the switch to use if your mission wants to reach a different conclusion.

**`_canCheckForEndConditionSiege`**, a one-shot latch with no setter. Its very first read does `if (!this._canCheckForEndConditionSiege)` → assign `(GetMissionBehavior<BattleDeploymentHandler>() == null)` → **`return`** (`BattleEndLogic.cs:264`, `BattleEndLogic.cs:266`, `BattleEndLogic.cs:267`). The first invocation is therefore always a no-op regardless of the outcome, and from the second call onward the answer is frozen from whatever the deployment situation was at that moment. Read it as "wait one tick, then decide once whether this mission ever checks end conditions", not as a per-tick guard.

**Hideout missions.** `if (GetMissionBehavior<HideoutPhasedMissionController>() != null) return;` (`BattleEndLogic.cs:279`, `BattleEndLogic.cs:281`) exits before any retreat logic runs. In a hideout, neither side can ever be marked retreating — only depleted.

Then the pull-back rule. `EnableEnemyDefenderPullBack(int)` arms it (`BattleEndLogic.cs:249`) and `OnAgentRemoved` counts down one step per *routed* human defender on the enemy side (`BattleEndLogic.cs:163`, `BattleEndLogic.cs:167`). Once the counter hits zero, `_isEnemyDefenderPulledBack` becomes true, and `PlayerVictory` — which reads `(_isEnemySideRetreating || _isEnemySideDepleted) && !_isEnemyDefenderPulledBack` (`BattleEndLogic.cs:19`) — flips to false even though the enemy is wiped out. `MissionEnded` compensates by testing that pair *first* and returning `MissionResult.CreateDefenderPushedBack()` (`BattleEndLogic.cs:178`) rather than a plain success.

`TryExit` is the player's leave-battle key and is deliberately narrow: it returns `False` immediately on a client or replay (`BattleEndLogic.cs:224`), and otherwise only ends the mission outright if it has already ended or the enemy is retreating. If you are close to an enemy within 5 units it declines (`BattleEndLogic.cs:231`), which is the "are you sure you want to run away" prompt path.

## How to use

**Getting it.** From any other behaviour in the same mission:

```csharp
BattleEndLogic battleEnd = Mission.Current.GetMissionBehavior<BattleEndLogic>();
if (battleEnd == null) return;
```

`MissionResult` is set for you; you do not construct one directly. To influence the outcome, arm the pull-back rule or toggle the end-condition switch from your own behaviour.

**Typical use** — arm defender pull-back so a routed defender produces a distinct result instead of a plain win:

```csharp
public class PullbackWatcher : MissionLogic
{
    public override void AfterStart()
    {
        BattleEndLogic battleEnd = Mission.Current.GetMissionBehavior<BattleEndLogic>();
        if (battleEnd != null)
            battleEnd.EnableEnemyDefenderPullBack(neededTroopNumber: 15);

        // Later, when you need to hold the battle open regardless of casualties:
        // battleEnd.ChangeCanCheckForEndCondition(false);
    }
}
```

Reading the result from elsewhere, knowing that the property and the result disagree while pulled back:

```csharp
BattleEndLogic battleEnd = Mission.Current.GetMissionBehavior<BattleEndLogic>();
if (battleEnd != null && battleEnd.IsEnemySideRetreating)
    Debug.Print("routed — PlayerVictory is " + battleEnd.PlayerVictory);
```

**Most common mistake, and what it costs.** Treating `PlayerVictory` as "the battle is won". It is not the result; it is a convenience flag with an extra veto bolted on, and the veto is invisible from the property's name. With pull-back armed, the enemy side can be fully depleted while `PlayerVictory` still reports `false` (`BattleEndLogic.cs:19`) and `EnemyVictory` reports `false` too, so a naive check on either property shows the battle as undecided. Meanwhile `MissionEnded` has already returned `DefenderPushedBack`. Any mod gating a reward or a campaign event on `PlayerVictory` silently drops the payout. Read `Mission.MissionResult` instead, and note that `OnEndMission` only calls `origin.SetRouted()` on the enemy when the enemy *retreated* (`BattleEndLogic.cs:204`) — not when it was depleted — so a wipe-out leaves their campaign origin untouched.

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
- [MissionLogic](../MissionLogic)
- [AgentVictoryLogic](../AgentVictoryLogic)
- [BattleSpawnLogic](../BattleSpawnLogic)
- [HideoutPhasedMissionController](../HideoutPhasedMissionController)
- [BattleEndLogic (中文页面)](../../../../zh/api/mission-ext/BattleEndLogic)