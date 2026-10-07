---
title: "BattlePowerCalculationLogic"
description: "Auto-generated class reference for BattlePowerCalculationLogic."
---
# BattlePowerCalculationLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePowerCalculationLogic : MissionLogic, IBattlePowerCalculationLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattlePowerCalculationLogic.cs`

## Overview

`BattlePowerCalculationLogic` is a `MissionLogic` that answers one question: how much *nominal* power does
each `Team` start a battle with. It implements `IBattlePowerCalculationLogic`
(`BattlePowerCalculationLogic.cs:8`), whose entire surface is `float GetTotalTeamPower(Team)`
(`IBattlePowerCalculationLogic.cs:9`), and it is retrieved by interface, not by concrete type —
`TeamQuerySystem` resolves it with `GetMissionBehavior<IBattlePowerCalculationLogic>()`
(`TeamQuerySystem.cs:282`). The stock instances are added by `BannerlordMissions` in both the battle and
the siege mission initializers (`BannerlordMissions.cs:120`, `BannerlordMissions.cs:180`).

The number is computed once, lazily. `GetTotalTeamPower` triggers `CalculateTeamPowers` on first use and
then never again (`BattlePowerCalculationLogic.cs:29`). That calculation walks
`IMissionAgentSpawnLogic.GetAllTroopsForSide` for each of the two sides and accumulates
`BasicCharacterObject.GetPower()` per troop origin (`BattlePowerCalculationLogic.cs:57`), then expires the
cached team query results (`BattlePowerCalculationLogic.cs:62`) and latches `IsTeamPowersCalculated`.

Crucially it sums over *troop origins*, not over living agents. It is the team's opening strength, frozen.

## Mental Model

Read it as a starting-strength snapshot with a casualty correction applied by the consumer, not as live
power. The boundaries:

- **It never changes during the battle.** There is no invalidation path anywhere in the class —
  `IsTeamPowersCalculated` is set once and never cleared. Consumers that want *current* power must subtract
  casualties themselves, and `TeamQuerySystem` does exactly that, calling
  `CasualtyHandler.GetCasualtyPowerLossOfFormation(formation)` and subtracting it from the team total
  (`TeamQuerySystem.cs:772`). If you read `GetTotalTeamPower` directly, you get the number from frame zero.
- **It depends on the spawn logic existing.** `CalculateTeamPowers` fetches
  `IMissionAgentSpawnLogic` from the mission (`BattlePowerCalculationLogic.cs:44`) and dereferences it with
  no null check. Calling `GetTotalTeamPower` before the spawn behaviour is registered is a null
  reference, not a zero.
- **It hard-assumes exactly two sides.** `_sidePowerData` is a two-element array indexed by
  `(int)team.Side` in both directions (`BattlePowerCalculationLogic.cs:18`,
  `BattlePowerCalculationLogic.cs:42`). A team on any other side value indexes out of range.
- **Per-team sums start at zero, so an unlisted team reads as absent.** `Add(team, 0f)` seeds every team
  that exists at calculation time (`BattlePowerCalculationLogic.cs:42`); a team added to the mission after
  that point is not a key and `GetTotalTeamPower` throws on lookup.
- The `isPlayerSide` flag passed into `Mission.GetAgentTeam` (`BattlePowerCalculationLogic.cs:53`) is what
  splits troop origins between player-controlled and AI-controlled teams — the logic attributes origins,
  not agents.

## How to use

**Getting one.** Do not construct it. It arrives with the mission: `BannerlordMissions` adds it to the
behaviour list (`BannerlordMissions.cs:120`), and you reach it through the interface so a mod can substitute
its own.

**Typical use** — reading a team's strength, with the casualty correction the engine itself applies:

```csharp
public class PowerAudit : MissionLogic
{
    public override void OnMissionTick(int tick)
    {
        if (tick % 300 != 0 || Mission.Current == null) { return; }

        IBattlePowerCalculationLogic power =
            Mission.Current.GetMissionBehavior<IBattlePowerCalculationLogic>();

        CasualtyHandler casualties = Mission.Current.GetMissionBehavior<CasualtyHandler>();

        foreach (Team team in Mission.Current.Teams)
        {
            float nominal = power.GetTotalTeamPower(team);   // frozen at first read
            float lost = 0f;
            foreach (Formation f in team.FormationsIncludingSpecialAndEmpty)
            {
                lost += casualties.GetCasualtyPowerLossOfFormation(f);   // TeamQuerySystem.cs:772
            }
            Debug.Print(team.Name + " nominal " + nominal + ", remaining " + (nominal - lost));
        }
    }
}
```

**The mistake that bites.** Using `GetTotalTeamPower` as a live strength readout — for a surrender check, a
rebalance trigger, or an AI reinforcement decision. The value is latched on first read and never updated,
so it reports the team's full opening strength for the whole battle no matter how many men have died, and a
mod that trusts it will refuse to surrender or will keep reinforcing a wiped-out side. Subtract
`CasualtyHandler.GetCasualtyPowerLossOfFormation` per formation, exactly as `TeamQuerySystem` does.



## Key Properties

| Name | Signature |
|------|-----------|
| `IsTeamPowersCalculated` | `public bool IsTeamPowersCalculated { get; }` |

## Key Methods

### GetTotalTeamPower
`public float GetTotalTeamPower(Team team)`

**Purpose:** Reads and returns the total team power value held by the this instance.

```csharp
// Obtain an instance of BattlePowerCalculationLogic from the subsystem API first
BattlePowerCalculationLogic battlePowerCalculationLogic = ...;
var result = battlePowerCalculationLogic.GetTotalTeamPower(team);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattlePowerCalculationLogic>();
```

## See Also

- [Area Index](../)
- [CasualtyHandler](../CasualtyHandler)
- [BattleEndLogic](../BattleEndLogic)
- [BaseNetworkComponentData](../BaseNetworkComponentData)
- [中文页面](../../../../zh/api/mission-ext/BattlePowerCalculationLogic)