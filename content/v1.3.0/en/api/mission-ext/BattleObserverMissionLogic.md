---
title: "BattleObserverMissionLogic"
description: "Auto-generated class reference for BattleObserverMissionLogic."
---
# BattleObserverMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleObserverMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleObserverMissionLogic.cs`

## Overview

`BattleObserverMissionLogic` is the mission behaviour that translates raw agent lifecycle events into the count-based vocabulary an `IBattleObserver` understands. It derives from `MissionLogic` (`BattleObserverMissionLogic.cs:8`) and is one instance per battle. It never decides anything itself; it is a translator plus two `int[2]` counters, one per `BattleSideEnum`, indexed by casting the side to an int.

The counting rule is asymmetric in a way that matters. A *build* is reported as `TroopNumberChanged(side, combatant, character, +1, 0, 0, 0, 0, 0)` — increment only. A *removal* reports `-1` plus exactly one of the killed / unconscious / routed flags set, and then, if the killer is human and the victim was killed or unconscioused rather than routed, a second zero-delta call credits the killer (`BattleObserverMissionLogic.cs:52`). So a routed agent generates no kill credit, which is why routs and kills are tracked separately all the way up.

The observer is attached late. `SetObserver` is the entry point, and anything built before it arrives is replayed from `_onAgentBuildCache` with a synthetic build event before the cache is cleared (`BattleObserverMissionLogic.cs:16`, `BattleObserverMissionLogic.cs:24`).

## Mental Model

The whole design is "tolerant on the way in, unforgiving on the way out", and that asymmetry is the thing to hold on to.

`OnAgentBuild` checks `BattleObserver != null && agent.Team != Team.Invalid` before reporting (`BattleObserverMissionLogic.cs:40`). If either fails, the agent goes into `_onAgentBuildCache` (`BattleObserverMissionLogic.cs:47`) to be replayed when an observer attaches. `SetObserver` then walks that cache and calls `agent.Team.Side` and `agent.Origin.BattleCombatant` with no guards at all — and the guard that put the agent in the cache (`Team == Team.Invalid`) is precisely the case where `Team` may no longer be a usable reference by replay time.

`OnAgentRemoved` and `OnAgentTeamChanged` have **no** observer null check at all. `OnAgentRemoved` goes straight to `this.BattleObserver.TroopNumberChanged(...)`, and so does `OnAgentTeamChanged` for an agent moving from `Team.Invalid` onto a real team. So the ordering rule is absolute: call `SetObserver` before any agent can be removed. There is no "it will be fine if nothing happens", because an agent being removed is the *normal* case.

`OnAgentRemoved` also throws on an unexpected `AgentState`: routed, unconscious and killed have cases, and anything else hits `throw new ArgumentOutOfRangeException` (`BattleObserverMissionLogic.cs:69`). Any other terminal `AgentState` reaching a battle with an observer attached is a hard failure, not a no-op.

`GetDeathToBuiltAgentRatioForSide` is `removed / built` as plain `int` division widened to float (`BattleObserverMissionLogic.cs:99`, `BattleObserverMissionLogic.cs:101`). For a side that never spawned anyone the denominator is zero, which yields `NaN` or infinity rather than an error — and `NaN` fails every `<` comparison, so a caller testing `< 0.25f` falls through to its else branch instead of picking the high tier. `AgentVictoryLogic` reads exactly this ratio to pick its cheer set.

Finally, `OnMissionResultReady` notifies the observer **only on a player victory** (`BattleObserverMissionLogic.cs:90`). A defeat calls nothing. If your observer needs to run cleanup or settle stats after a lost battle, the callback never arrives.

## How to use

**Getting it.** Fetch the behaviour and attach your observer during mission setup, before agents spawn:

```csharp
public class MyObserverBehaviour : MissionLogic
{
    public override void EarlyStart()
    {
        BattleObserverMissionLogic observerLogic =
            Mission.Current.GetMissionBehavior<BattleObserverMissionLogic>();
        if (observerLogic != null)
        {
            // Anything already built is replayed synchronously inside this call.
            observerLogic.SetObserver(myObserver);
        }
    }
}
```

**Typical use** — read the casualty ratio the cheer logic itself uses:

```csharp
BattleObserverMissionLogic logic = Mission.Current.GetMissionBehavior<BattleObserverMissionLogic>();
if (logic != null)
{
    float ratio = logic.GetDeathToBuiltAgentRatioForSide(Mission.Current.PlayerEnemyTeam.Side);
    // ratio is removed/built; guard the zero-built case yourself.
    Debug.Print("enemy casualties ratio: " + ratio);
}
```

**Most common mistake, and what it costs.** Attaching the observer after the mission is underway and assuming the cache makes it safe. It does not, because the cache only covers *builds*. Builds that happened before `SetObserver` are replayed correctly; the *removals* that happened in the same window are not buffered at all, and `OnAgentRemoved` will have dereferenced a null `BattleObserver` (`BattleObserverMissionLogic.cs:52`) and taken the mission down. Attach in `EarlyStart`, which runs before any agent build, and the symmetry holds for the whole battle.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleObserver` | `public IBattleObserver BattleObserver { get; }` |

## Key Methods

### SetObserver
`public void SetObserver(IBattleObserver observer)`

**Purpose:** Assigns a new value to observer and updates the object's internal state.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.SetObserver(observer);
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.EarlyStart();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** Invoked when the agent team changed event is raised.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**Purpose:** Invoked when the mission result ready event is raised.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
battleObserverMissionLogic.OnMissionResultReady(missionResult);
```

### GetDeathToBuiltAgentRatioForSide
`public float GetDeathToBuiltAgentRatioForSide(BattleSideEnum side)`

**Purpose:** Reads and returns the death to built agent ratio for side value held by the this instance.

```csharp
// Obtain an instance of BattleObserverMissionLogic from the subsystem API first
BattleObserverMissionLogic battleObserverMissionLogic = ...;
var result = battleObserverMissionLogic.GetDeathToBuiltAgentRatioForSide(side);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleObserverMissionLogic>();
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic)
- [BattleEndLogic](../BattleEndLogic)
- [AgentVictoryLogic](../AgentVictoryLogic)
- [BattleObserverMissionLogic (中文页面)](../../../../zh/api/mission-ext/BattleObserverMissionLogic)