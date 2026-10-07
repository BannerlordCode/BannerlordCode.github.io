---
title: "CasualtyHandler"
description: "Auto-generated class reference for CasualtyHandler."
---
# CasualtyHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CasualtyHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/CasualtyHandler.cs`

## Overview

`CasualtyHandler` is the mission's per-formation ledger of who died or ran away, and how much character power that cost. It is a `MissionLogic` holding two dictionaries keyed by `Formation` object identity — `_casualtyCounts` (`CasualtyHandler.cs:75`) and `_powerLoss` (`CasualtyHandler.cs:78`) — and it is added to *every* mission by `MissionState` right after `BasicMissionHandler` (`MissionState.cs:358`).

Two behaviour hooks feed it, and both do the same thing: `OnAgentRemoved` calls `RegisterCasualty(affectedAgent)` (`CasualtyHandler.cs:13`) and `OnAgentFleeing` calls it too (`CasualtyHandler.cs:19`). So a fleeing agent is recorded exactly like a killed one — there is no separate accounting for routs, and no way to tell the two apart from the outside. `RegisterCasualty` reads `agent.Formation` and does nothing at all if it is `null` (`CasualtyHandler.cs:50`) — agents outside any formation, including most mission objects, are invisible to this class.

The two getters are what the rest of the game asks. `GetCasualtyCountOfFormation(Formation)` (`CasualtyHandler.cs:23`) feeds `FormationQuerySystem` (`FormationQuerySystem.cs:1231`), and `GetCasualtyPowerLossOfFormation(Formation)` (`CasualtyHandler.cs:35`) feeds the retreat behaviour (`BehaviorRetreat.cs:40`) and the charge tactic (`TacticCharge.cs:85`). `TeamQuerySystem` caches the behaviour reference for its own callers (`TeamQuerySystem.cs:290`).

## Mental Model

Both getters write. On a miss they insert a zero entry before returning — `_casualtyCounts[formation] = 0` (`CasualtyHandler.cs:29`) and `_powerLoss[formation] = 0f` (`CasualtyHandler.cs:41`). So a query is not a pure read: asking about a formation that has taken no casualties creates the entry. The practical consequences are that the dictionary grows with every formation you ever ask about, including formations created after the casualties happened, and that a `Formation` you query is now strongly referenced by this behaviour for the rest of the mission.

Nothing is ever removed. There is no `Clear`, no `OnEndMission`, and no eviction — `_casualtyCounts` and `_powerLoss` are `readonly` fields initialised once (`CasualtyHandler.cs:75`). The behaviour is per-mission, so this is usually harmless; it becomes a leak only if you keep the behaviour (or the mission) alive longer than the battle, for example by holding a reference from a singleton.

Power loss is a sum of *character* power, not agent power: `RegisterCasualty` adds `agent.Character.GetPower()` (`CasualtyHandler.cs:67`). An upgrade applied after the agent spawned is therefore not reflected in the loss figure for that casualty.

The two dictionaries are updated independently but always together, because both branches are inside the same `formation != null` guard. There is no state in which a formation has a count but no power loss, or the reverse.

## How to use

**Getting one.** It is already there — `MissionState` adds it to every mission (`MissionState.cs:358`) — so read it with `Mission.Current.GetMissionBehavior<CasualtyHandler>()`. Note that game code defensively null-checks it (`FormationQuerySystem.cs:1230`) even though `MissionState` guarantees it, because a mission built by hand may not have it.

**Typical use** — reading the ledger from your own behaviour:

```csharp
using TaleWorlds.MountAndBlade;

public class MyCasualtyReporter : MissionLogic
{
    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
    {
        CasualtyHandler casualties = Mission.GetMissionBehavior<CasualtyHandler>();
        if (casualties == null)
        {
            return;
        }

        Formation formation = affectedAgent.Formation;
        if (formation == null)
        {
            // RegisterCasualty ignores these agents entirely (CasualtyHandler.cs:50).
            return;
        }

        // Note: fleeing agents are counted here too, indistinguishably.
        MyScoreboard.Report(
            formation.RepresentativeClass,
            casualties.GetCasualtyCountOfFormation(formation),
            casualties.GetCasualtyPowerLossOfFormation(formation));
    }
}
```

`Formation` is keyed by reference (`CasualtyHandler.cs:75`), so pass the same instance the agent reported — `agent.Formation` — not a re-looked-up formation. This class exposes no way to enumerate formations; the only entry points are the two getters, and a caller such as `FormationQuerySystem.cs:1231` supplies whichever formation it is already working with, including empty ones that never took casualties. Each such call inserts a zero entry into both dictionaries via the getters.

**Most common mistake:** reading the count and assuming it means "killed".

```csharp
int dead = handler.GetCasualtyCountOfFormation(formation);
```

`OnAgentFleeing` feeds the same counter (`CasualtyHandler.cs:19`), so after a rout the number includes everyone who ran, and the ledger exposes nothing that separates the two. Use it for "how much of this formation is gone", never for a kill statistic — for that, subscribe to `OnAgentRemoved` yourself and check `agentState`, since this behaviour throws the state away.

## Key Methods

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of CasualtyHandler from the subsystem API first
CasualtyHandler casualtyHandler = ...;
casualtyHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentFleeing
`public override void OnAgentFleeing(Agent affectedAgent)`

**Purpose:** Invoked when the agent fleeing event is raised.

```csharp
// Obtain an instance of CasualtyHandler from the subsystem API first
CasualtyHandler casualtyHandler = ...;
casualtyHandler.OnAgentFleeing(affectedAgent);
```

### GetCasualtyCountOfFormation
`public int GetCasualtyCountOfFormation(Formation formation)`

**Purpose:** Reads and returns the casualty count of formation value held by the this instance.

```csharp
// Obtain an instance of CasualtyHandler from the subsystem API first
CasualtyHandler casualtyHandler = ...;
var result = casualtyHandler.GetCasualtyCountOfFormation(formation);
```

### GetCasualtyPowerLossOfFormation
`public float GetCasualtyPowerLossOfFormation(Formation formation)`

**Purpose:** Reads and returns the casualty power loss of formation value held by the this instance.

```csharp
// Obtain an instance of CasualtyHandler from the subsystem API first
CasualtyHandler casualtyHandler = ...;
var result = casualtyHandler.GetCasualtyPowerLossOfFormation(formation);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CasualtyHandler>();
```

## See Also

- [Area Index](../)
- [FormationQuerySystem — a caller of the casualty count](../FormationQuerySystem)
- [BehaviorRetreat — a caller of the power loss](../BehaviorRetreat)
- [TacticCharge — another caller of the power loss](../TacticCharge)
- [TeamQuerySystem — caches this behaviour for its own callers](../TeamQuerySystem)
- [中文页面](../../../../zh/api/mission-ext/CasualtyHandler)