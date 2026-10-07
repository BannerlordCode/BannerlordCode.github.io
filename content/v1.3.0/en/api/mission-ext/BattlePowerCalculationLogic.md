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

`BattlePowerCalculationLogic` answers one question — "how strong is this team?" — and answers it once. It is a `MissionLogic` implementing `IBattlePowerCalculationLogic` (`BattlePowerCalculationLogic.cs:8`), added to every shipped battle definition (`BannerlordMissions.cs:146`), and reached indirectly through `TeamQuerySystem.BattlePowerLogic`, which lazily pulls the behavior out of the mission on first access (`TeamQuerySystem.cs:276`).

The measurement itself is a straight sum. `CalculateTeamPowers` walks the mission's teams, seeds each to `0f`, asks the spawn logic for every troop on each side, and adds `troop.GetPower()` per troop into the dictionary keyed by that troop's team (`BattlePowerCalculationLogic.cs:42`, `BattlePowerCalculationLogic.cs:57`). Nothing about formations, upgrades, or equipment is consulted — it is a headcount weighted by each `BasicCharacterObject`'s own power rating (`BasicCharacterObject.cs:412`).

## Mental Model

Read it as a memoised snapshot, not as a live gauge. `GetTotalTeamPower` is the only public method; the first call runs `CalculateTeamPowers` and then every later call returns the stored float (`BattlePowerCalculationLogic.cs:29`). `IsTeamPowersCalculated` is set to `true` at the very end and is **never reset anywhere in the type** — there is no invalidation hook, no override point and no public setter, because it is `{ get; private set; }` (`BattlePowerCalculationLogic.cs:13`). Once anyone has asked, the number is frozen for the rest of the mission.

Two consequences follow. First, reinforcements are invisible to it: the totals come from `GetAllTroopsForSide` at the moment of calculation, so a side that receives troops later keeps its pre-reinforcement power. Second, the population is written with `Dictionary.Add`, not the indexer (`BattlePowerCalculationLogic.cs:42`), which makes the whole thing genuinely one-shot — if the flag were ever cleared and the method re-entered, it would throw on the duplicate key rather than recompute.

The boundary that surprises people is the side effect. After summing, the method calls `team2.QuerySystem.Expire()` for every team in the mission (`BattlePowerCalculationLogic.cs:62`). Merely *asking* how strong a team is invalidates every team's cached query data. Anything downstream that had already memoised a query result will recompute it, and any query in flight during that tick observes the cleared cache. Measurement is not free here, and it is not read-only.

Finally, the storage is indexed by `(int)team.Side`, and the fill loop runs only `i` in `0..1` (`BattlePowerCalculationLogic.cs:45`). `BattleSideEnum` has exactly two real values — `Defender = 0`, `Attacker = 1`, with `None = -1` and `NumSides = 2` as sentinels (`BattleSideEnum.cs:9`). A team whose `Side` is `None` indexes `_sidePowerData[-1]` and throws.

## How to use

**Getting one.** Add it to the mission's behavior list; every shipped battle does. Then reach it either directly or, as the engine does, through a team's query system.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// Add once, alongside the rest of the battle's mission logic.
Mission.Current.AddMissionBehavior(new BattlePowerCalculationLogic());

// Ask. The first call computes; every later call returns the frozen value.
IBattlePowerCalculationLogic power = Mission.Current.GetMissionBehavior<IBattlePowerCalculationLogic>();
float attackerPower = power.GetTotalTeamPower(Mission.Current.AttackerTeam);
float defenderPower = power.GetTotalTeamPower(Mission.Current.DefenderTeam);

// Or through the team's query system, which resolves the behavior for you.
Team team = Mission.Current.PlayerTeam;
float cached = team.QuerySystem.BattlePowerLogic.GetTotalTeamPower(team);

// Treat the ratio as a one-shot reading, not a live gauge: it will not move
// when reinforcements arrive.
float ratio = defenderPower > 0f ? attackerPower / defenderPower : 0f;
```

Because the type is not sealed and `CalculateTeamPowers` is private, overriding the behaviour means reimplementing the public surface — subclass it and call the base implementation to keep the real numbers.

```csharp
using TaleWorlds.MountAndBlade;

public class MyModPowerLogic : BattlePowerCalculationLogic
{
    // Re-query rather than trusting the frozen snapshot.
    public float GetFreshPower(Team team)
    {
        float frozen = base.GetTotalTeamPower(team);
        return frozen > 0f ? frozen : 0f;
    }
}
```

**The most common mistake** is reading the total as a live balance-of-power indicator during a battle. It is a snapshot taken at the first read and never refreshed (`BattlePowerCalculationLogic.cs:64`), so a UI that shows "your army is winning" and updates it on tick will freeze at its opening value for the whole engagement, and a reinforcement-heavy side looks permanently weak. Worse, the first read fires `QuerySystem.Expire()` on every team in the mission (`BattlePowerCalculationLogic.cs:62`), so reading it during mission initialization quietly throws away cached query results other systems were relying on. Ask once, early, and treat the answer as fixed.

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
- [IBattlePowerCalculationLogic](../IBattlePowerCalculationLogic) — the interface this behavior exposes and `TeamQuerySystem` resolves
- [TeamQuerySystem](../TeamQuerySystem) — the `BattlePowerLogic` property that looks this behavior up lazily
- [IAgentOriginBase](../../core-extra/IAgentOriginBase) — the troop origins whose `GetPower()` values are summed
- [BattleSideEnum](../../core-extra/BattleSideEnum) — the two-value enum the storage array is indexed by