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

`CasualtyHandler` is a `MissionLogic` that keeps two running tallies per formation: how many of its agents
have left the fight, and how much nominal power that represents. It is added by default to every mission
that opens with default behaviours, right alongside `BasicMissionHandler` and `AgentCommonAILogic`
(`MissionState.cs:345`), so you never have to add it yourself.

It maintains two dictionaries keyed by `Formation` (`CasualtyHandler.cs:75`,
`CasualtyHandler.cs:78`). `RegisterCasualty` increments the count and adds `agent.Character.GetPower()` to
the power loss (`CasualtyHandler.cs:67`). It is driven from two hooks: `OnAgentRemoved`
(`CasualtyHandler.cs:11`) and `OnAgentFleeing` (`CasualtyHandler.cs:17`).

Its output is the correction term that other systems add to the frozen team power. `TeamQuerySystem`
subtracts `GetCasualtyPowerLossOfFormation(formation)` from the team's nominal power
(`TeamQuerySystem.cs:772`), because `BattlePowerCalculationLogic` only ever reports the opening strength.

## Mental Model

Read it as an append-only, per-formation ledger — and note that the *readers* also write. The boundaries:

- **Fleeing counts as a casualty.** `OnAgentFleeing` routes into the same `RegisterCasualty`
  (`CasualtyHandler.cs:19`). An agent that routs is recorded immediately, before it dies.
- **There is no de-duplication.** `RegisterCasualty` increments unconditionally
  (`CasualtyHandler.cs:57`), so an agent that first flees and is later killed is counted **twice** — once
  on rout and once on removal. Neither dictionary tracks which agents it has already seen.
- **The getters have a write side-effect.** `GetCasualtyCountOfFormation` and
  `GetCasualtyPowerLossOfFormation` both *insert a zero entry* when the formation is absent
  (`CasualtyHandler.cs:29`, `CasualtyHandler.cs:41`). A "read" therefore mutates the dictionary, and the
  first query for a formation with no casualties permanently adds it as a key.
- **Agents with no formation are ignored.** `RegisterCasualty` null-checks `formation` before touching
  either dictionary (`CasualtyHandler.cs:50`), so a casualty that is not in a formation is lost entirely.
- **Nothing ever removes a key.** There is no clear, no reset, and no mission-end hook; the two dictionaries
  live exactly as long as the behaviour instance.
- **`agent.Character` is dereferenced without a guard** (`CasualtyHandler.cs:67`), unlike the formation
  check immediately above it.

## How to use

**Getting one.** `Mission.Current.GetMissionBehavior<CasualtyHandler>()` — it is already present in every
default mission. Do not add a second one, or the tallies diverge from the ones `TeamQuerySystem` reads.

**Typical use** — asking how badly a formation has been hit, using the same access path the team query does:

```csharp
public class FormationAttrition : MissionLogic
{
    public override void OnMissionTick(float tick)
    {
        if (tick % 600 != 0 || Mission.Current == null) { return; }

        CasualtyHandler handler = Mission.Current.GetMissionBehavior<CasualtyHandler>();
        if (handler == null) { return; }

        foreach (Formation f in Mission.Current.PlayerTeam.FormationsIncludingSpecialAndEmpty)
        {
            int losses = handler.GetCasualtyCountOfFormation(f);        // CasualtyHandler.cs:23
            float power = handler.GetCasualtyPowerLossOfFormation(f);   // CasualtyHandler.cs:35
            Debug.Print(f.ToString() + " lost " + losses + " (" + power + " power)");
        }
    }
}
```

**The mistake that bites.** Treating the count as a headcount and comparing it against
`Formation.CountOfUnits` to decide whether a formation is broken. The count includes agents that *fled* as
well as agents that died, and it double-counts anyone who routed and was then killed
(`CasualtyHandler.cs:19`, `CasualtyHandler.cs:57`). The tally therefore overshoots the real losses, and the
overshoot grows with routs — so a formation that routed under fire and then died in the rout reads as
roughly twice as depleted as it is, and a mod that surrenders or changes AI behaviour on that number fires
far too early.



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
- [BattlePowerCalculationLogic](../BattlePowerCalculationLogic)
- [AgentCommonAILogic](../AgentCommonAILogic)
- [BattleEndLogic](../BattleEndLogic)
- [中文页面](../../../../zh/api/mission-ext/CasualtyHandler)