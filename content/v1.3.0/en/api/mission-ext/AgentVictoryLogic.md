---
title: "AgentVictoryLogic"
description: "Auto-generated class reference for AgentVictoryLogic."
---
# AgentVictoryLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVictoryLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`

## Overview

`AgentVictoryLogic` is the mission behavior that decides *who celebrates* once a battle has resolved. One instance is pushed onto the behaviour list of every battle mission — `SandBoxMissions` builds it with a plain `new AgentVictoryLogic()` (`SandBoxMissions.cs:452`). It owns no persistent state between missions: `OnClearScene` empties its candidate list (`AgentVictoryLogic.cs:89`) and `OnEndMission` unsubscribes from `Mission.Current.IsBattleInRetreatEvent` (`AgentVictoryLogic.cs:113`).

The interesting split is *where the timing lives*. The logic holds only a `List<CheeringAgent>` — a thin record of an `Agent` plus three flags (`GotOrderRecently`, `IsCheeringPaused`, `IsCheeringOnRetreat`). The actual countdown is a `VictoryComponent` attached to the Agent itself, wrapping a `RandomTimer` seeded from `Mission.CurrentTime` (`AgentVictoryLogic.cs:235`). So the per-agent schedule is destroyed if anything removes that component from the agent, while the logic's own list still holds a stale entry.

It never self-starts. `BattleEndLogic` pokes it once the mission is ending, calling `SetTimersOfVictoryReactionsOnBattleEnd` (`AgentVictoryLogic.cs:208`) for a wipeout or `SetTimersOfVictoryReactionsOnRetreat` (`AgentVictoryLogic.cs:242`) for a rout (`BattleEndLogic.cs:130`, `BattleEndLogic.cs:142`). Which cheer set is used is chosen once, by casualty ratio, in `SelectVictoryCondition` (`AgentVictoryLogic.cs:179`).

## Mental Model

Think of it as three separate decisions that are easy to confuse.

**Which gestures are available.** `SetCheerActionGroup` selects one of three `ActionIndexCache[]` arrays — ten `act_cheering_low_*`, four `act_cheer_*`, eight `act_cheering_high_*` — or, for `CheerActionGroupEnum.None`, sets the selected array to `null` (`AgentVictoryLogic.cs:75`). The group is picked from `BattleObserverMissionLogic.GetDeathToBuiltAgentRatioForSide`, with `< 0.25` meaning high and `< 0.75` meaning mid.

**Who is eligible.** The rout path is not "everyone": it targets half of the side (`list.Count * 0.5f`, `AgentVictoryLogic.cs:249`) and then filters out anyone in water, using a game object, on a ladder-synchronised animation, carrying a weapon flagged `DropOnAnyAction` in either hand, or currently moving a game object under `HumanAIComponent` (`AgentVictoryLogic.cs:262`). Because the half-count is taken from the *unfiltered* list, a side where most troops are ineligible cheers noticeably less than half.

**When.** `OnMissionTick` only does work while the list is non-empty (`AgentVictoryLogic.cs:117`); each tick it pauses and resumes cheering as agents become eligible/ineligible, and interrupts a cheer outright if an order arrives during a retreat.

Two boundaries bite. Mounted agents silently override the chosen group: `ChooseWeaponToCheerWithCheerAndUpdateTimer` swaps in the *mid* set whenever `HasMount` is true (`AgentVictoryLogic.cs:358`), so requesting `HighCheerActions` never reaches cavalry. And `_selectedCheerActions` is dereferenced unguarded at `AgentVictoryLogic.cs:355`, so if you set the group to `None` and a later cheer tick fires for an unarmed agent, you get a `NullReferenceException` rather than a skipped cheer.

## How to use

**Getting it.** It is a `MissionLogic`, so during a mission you reach it through the mission behaviour list rather than constructing it. `BattleEndLogic` itself does exactly this at `BattleEndLogic.cs:124`:

```csharp
Mission mission = Mission.Current;
AgentVictoryLogic cheerLogic = mission.GetMissionBehavior<AgentVictoryLogic>();
if (cheerLogic != null)
{
    // Called by BattleEndLogic when the enemy formation is wiped out.
    cheerLogic.SetTimersOfVictoryReactionsOnBattleEnd(mission.PlayerTeam.Side);
}
```

`SetTimersOfVictoryReactionsOnTournamentVictoryForAgent` is the other public entry, and it hardcodes the mid set for one agent.

**Typical use** — widen the cheer after an overwhelming win, then inspect the chosen group:

```csharp
AgentVictoryLogic cheerLogic = Mission.Current.GetMissionBehavior<AgentVictoryLogic>();
if (cheerLogic != null)
{
    cheerLogic.SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum.HighCheerActions);
    cheerLogic.SetCheerReactionTimerSettings(0.5f, 3f);
    cheerLogic.SetTimersOfVictoryReactionsOnBattleEnd(Mission.Current.PlayerEnemyTeam.Side);
}
```

**Most common mistake, and what it costs.** The three thresholds read as constants are dead code. `HighCheerThreshold`, `MidCheerThreshold` and `YellIfOrderedInRetreatProbability` are declared at `AgentVictoryLogic.cs:374`, `AgentVictoryLogic.cs:377` and `AgentVictoryLogic.cs:380`, but nothing in the file ever references them — the live values are the inline literals `0.25f` at `AgentVictoryLogic.cs:145`, `0.25f` at `AgentVictoryLogic.cs:187` and `0.75f` at `AgentVictoryLogic.cs:192`. Editing the constants in a decompiled patch changes nothing at all; the rout-yell frequency and the cheer-tier cut-offs stay exactly as shipped.

## Key Properties

| Name | Signature |
|------|-----------|
| `CheerActionGroup` | `public AgentVictoryLogic.CheerActionGroupEnum CheerActionGroup { get; }` |
| `CheerReactionTimerData` | `public AgentVictoryLogic.CheerReactionTimeSettings CheerReactionTimerData { get; }` |
| `GotOrderRecently` | `public bool GotOrderRecently { get; }` |
| `IsCheeringPaused` | `public bool IsCheeringPaused { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.AfterStart();
```

### SetCheerActionGroup
`public void SetCheerActionGroup(AgentVictoryLogic.CheerActionGroupEnum cheerActionGroup = AgentVictoryLogic.CheerActionGroupEnum.None)`

**Purpose:** Assigns a new value to cheer action group and updates the object's internal state.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetCheerActionGroup(agentVictoryLogic.CheerActionGroupEnum.None);
```

### SetCheerReactionTimerSettings
`public void SetCheerReactionTimerSettings(float minDuration = 1f, float maxDuration = 8f)`

**Purpose:** Assigns a new value to cheer reaction timer settings and updates the object's internal state.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetCheerReactionTimerSettings(0, 0);
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OnClearScene();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OnMissionTick(0);
```

### SetTimersOfVictoryReactionsOnBattleEnd
`public void SetTimersOfVictoryReactionsOnBattleEnd(BattleSideEnum side)`

**Purpose:** Assigns a new value to timers of victory reactions on battle end and updates the object's internal state.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetTimersOfVictoryReactionsOnBattleEnd(side);
```

### SetTimersOfVictoryReactionsOnRetreat
`public void SetTimersOfVictoryReactionsOnRetreat(BattleSideEnum side)`

**Purpose:** Assigns a new value to timers of victory reactions on retreat and updates the object's internal state.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetTimersOfVictoryReactionsOnRetreat(side);
```

### SetTimersOfVictoryReactionsOnTournamentVictoryForAgent
`public void SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(Agent agent, float minStartTime, float maxStartTime)`

**Purpose:** Assigns a new value to timers of victory reactions on tournament victory for agent and updates the object's internal state.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.SetTimersOfVictoryReactionsOnTournamentVictoryForAgent(agent, 0, 0);
```

### OrderReceived
`public void OrderReceived()`

**Purpose:** Executes the OrderReceived logic.

```csharp
// Obtain an instance of AgentVictoryLogic from the subsystem API first
AgentVictoryLogic agentVictoryLogic = ...;
agentVictoryLogic.OrderReceived();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentVictoryLogic>();
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic)
- [BattleEndLogic](../BattleEndLogic)
- [HumanAIComponent](../HumanAIComponent)
- [MissionAgentSpawnLogic](../MissionAgentSpawnLogic)