---
title: "TeamQuerySystem"
description: "Mission-scoped Team statistics and tactical snapshots with lazy, differently timed QueryData caches; use it for battle decisions, not persistence or guaranteed real-time state."
---
# TeamQuerySystem

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TeamQuerySystem`
**Base:** none
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamQuerySystem.cs`

## Responsibility in one sentence

`TeamQuerySystem` is the Mission-scoped, lazily refreshed tactical snapshot behind `Team.QuerySystem`: it aggregates team/formations, positions, power, siege state, and death counters for the active battle.

## Mental model

Treat this object as a cache attached to a live `Team`, not as an independent data store. `Team.Initialize()` creates it after `Mission.Current` is valid; the constructor stores that Mission and builds `QueryData<T>` readers. Each property is calculated on demand and may remain cached for a different Mission-time lifetime. The normal Mission tick does not eagerly refresh every query.

`Team.Reset()` resets formations and replaces the entire `TeamQuerySystem`. A reference kept by a mod can therefore point at an obsolete object whose death counters and cached values will never follow the new Team state. The same rule applies at Mission teardown: stop using the query object before `Mission.Current` is cleared.

## When to use it

- Read `Mission.Current.AttackerTeam?.QuerySystem`, `Mission.Current.DefenderTeam?.QuerySystem`, or `team.QuerySystem` from a live Mission callback.
- Use the values to choose or explain tactical behavior, display battle state, or compare a Team with nearby enemy power.
- Use `Formation.QuerySystem` for formation-local data and `Team.QuerySystem` for team-wide aggregates. They have separate caches and invalidation paths.
- Call `Expire()` only when the caller owns a known broad state transition and understands that the next property read will recompute lazily.

## When not to use it

- Do not `new TeamQuerySystem(team)` in ordinary mod code. Its constructor captures the `Mission.Current` at that instant and can bind a query to the wrong or uninitialized Mission.
- Do not treat `MemberCount` or any ratio as a per-frame truth. Values are snapshots with different lifetimes, and `ExpireAfterUnitAddRemove()` is deliberately partial.
- Do not use `RegisterDeath()` or `RegisterDeathByRanged()` to invent a casualty event. The game increments them from `Agent.Die`; consumers should read them.
- Do not serialize this object, its `QueryData<T>`, or its death counters. They are runtime battle state, not save schema.
- Do not read any cached property after Mission teardown. `QueryData.Value` consults `Mission.Current.CurrentTime`, so a cleared `Mission.Current` is a hard lifetime boundary.

## Real acquisition path

The safe path is to start with a live Mission-owned Team:

```csharp
using TaleWorlds.MountAndBlade;

public sealed class TeamQueryReadoutBehavior : MissionBehavior
{
    public override void AfterStart()
    {
        Mission mission = Mission.Current;
        if (mission == null)
        {
            return;
        }

        Team team = mission.PlayerTeam;
        if (team == null)
        {
            return;
        }

        TeamQuerySystem query = team.QuerySystem;
        if (query == null)
        {
            return;
        }

        int units = query.MemberCount;
        float remainingPower = query.RemainingPowerRatio;
        int deaths = query.DeathCount;
    }
}
```

The instance is owned by `Team`; the behavior only reads it while the Mission is active. A formation-level consumer should use `formation.QuerySystem` for formation metrics and reach the team aggregate through `formation.Team.QuerySystem` when needed.

## Cache semantics

`QueryData<T>.Value` compares the current `Mission.Current.CurrentTime` with its expiration time. A read before expiration returns the cached value; a read after expiration evaluates the value function and records a new expiration. `Expire()` sets expiration to zero but does not clear the old value. The next `.Value` read performs the recomputation.

`GetCachedValue()` and `GetCachedValueUnlessTooOld()` are not freshness checks in the current implementation: they return the stored value without consulting the Mission clock. Do not use either as proof that a metric is current. Synchronized query groups can also evaluate a group member and then evaluate the requested property again in the same access, so a getter is not a side-effect-free promise of exactly one calculation.

### Team metric lifetimes

| Metric family | Representative members | Cache lifetime and meaning |
|---|---|---|
| Team counts | `MemberCount`, `AllyUnitCount`, `EnemyUnitCount`, `AllyRangedUnitCount`, `AllCavalryUnitCount`, `EnemyRangedUnitCount` | Base counts cache for 2 seconds. `MemberCount` sums `CountOfUnits` across `FormationsIncludingSpecialAndEmpty`; it is not `ActiveAgents`. The three derived int counts multiply a cached ratio by a cached unit count and truncate; they do not have independent QueryData caches. |
| Team/space positions | `AveragePosition`, `MedianPosition`, `AverageEnemyPosition` | 5 seconds. `AverageEnemyPosition` has a siege-deployment fallback when there is no usable enemy position. |
| Target and flanks | `MedianTargetFormation`, `MedianTargetFormationPosition`, `LeftFlankEdgePosition`, `RightFlankEdgePosition` | Target selection is about 1 second; position/flank values are about 5 seconds. Target formation can be null. |
| Unit composition | infantry, ranged, cavalry, and ranged-cavalry ratios for self, allies, and enemies | 15 seconds. Ratios are weighted by unit count and include the Team's `Heroes` classifications. |
| Battle power | `TeamPower`, `RemainingPowerRatio` | About 5 seconds. Remaining power accounts for casualty power loss and depends on `IBattlePowerCalculationLogic` and `CasualtyHandler`. |
| Total power | `TotalPowerRatio` | 10 seconds and does not apply casualty loss. |
| Siege | `InsideWallsRatio` | 10 seconds. Non-siege Teams return `1`; a siege Team with no allies returns `0` before navigation-grid calculation. |
| Ranged pressure | `MaxUnderRangedAttackRatio` | 3 seconds for the current calculation, but the value keeps the greater old cached result. It is a high-water mark for this query object, not a clean rolling window. |

The Team's own membership counts as friendly because `Team.IsFriendOf` returns true for the Team itself. “Ally” therefore does not mean “other allied Teams.”

## Key query groups

### Composition and locations

`MemberCount`, `AllyUnitCount`, and `EnemyUnitCount` answer different questions from Agent counts: they use formation `CountOfUnits`, including detached units in the formation accounting. Composition ratios are weighted by actual unit counts rather than averaging each formation's ratio equally. The Team's hero classification is added to the composition result.

`AveragePosition` and `MedianPosition` summarize the Team's own formations. `AverageEnemyPosition` can return a siege-deployment estimate when the attacking side has no usable enemy formation position, and otherwise falls back according to the source's battle-mode logic. `MedianTargetFormation` can be `null`; its position must be treated as optional.

`LeftFlankEdgePosition` and `RightFlankEdgePosition` are tactical boundaries consumed by formation behaviors. They are not stable map landmarks and should be read inside the current Mission only.

### Power and siege state

- `TeamPower` sums formation power.
- `RemainingPowerRatio` applies casualty power loss, clamps the remaining friendly/enemy terms to non-negative values, and compares them using the source formula `(friendly + 1) / (enemy + 1)`.
- `TotalPowerRatio` compares total power without casualty loss and therefore answers a different question from remaining power.
- `InsideWallsRatio` is a siege metric, not a generic “defensive posture” score. Outside siege it is fixed at `1`; siege values depend on the available navigation/deployment state.
- `BattlePowerLogic` and `CasualtyHandler` are lazily obtained from Mission behaviors. A custom Mission missing the expected behaviors can make `RemainingPowerRatio` unsafe to read.

### Ranged pressure and deaths

`MaxUnderRangedAttackRatio` scans at most the first eight formations of each allied Team, looking at units hit by ranged attacks during the last ten Mission seconds and excluding shielded units. Because the implementation retains the maximum of the old cached value and the current calculation, calling `Expire()` does not reset the high-water mark.

`DeathCount` and `DeathByRangedCount` are ordinary counters, not `QueryData<T>` values. `Agent.Die()` increments the Team counter when the Agent has a Formation; when `Blow.IsMissile` is true it also increments the ranged counter. Mission removal does not itself increment the counters. They can briefly disagree with `MemberCount` because death registration occurs before the Agent is removed from its Formation, and repeated calls are not documented as deduplicated.

### Local power queries

`GetLocalAllyPower(Vec2)` and `GetLocalEnemyPower(Vec2)` walk current formations and calculate power relative to the supplied point each time. They are not `QueryData<T>` snapshots. Supply a valid battle-space position, call them only during an active Mission, and do not infer that zero or an invalid position has special protection from the API.

## Invalidation

`Expire()` invalidates the Team query values listed in its source and calls `Formation.QuerySystem.Expire()` for current non-empty formations. It does not directly expire the `MedianTargetFormation` selector; that selector follows its own roughly one-second lifetime. It also does not clear cached values, reset death counters, or turn a query into a live stream.

`ExpireAfterUnitAddRemove()` is a narrower invalidation path. It refreshes the member/position/self-composition/power/wall/ranged-pressure subset, but it does not invalidate every enemy count, enemy composition value, average enemy position, or target-formation selector. Treating it as a full refresh can make a tactical decision use mixed-time data.

Formation membership changes already invoke the appropriate formation and Team invalidation path. Other systems can explicitly invalidate formation query caches, such as the Order of Battle UI after a banner-bearer update. Mod code should use the existing owner path for a known change rather than manually calling `RegisterDeath*` or repeatedly forcing every cache.

## Dependency map

**Upstream**

- [`Team`](../Team) creates, owns, resets, and exposes `QuerySystem`.
- [`Formation`](../../mission/Formation) supplies units, power, positions, and formation-level query caches.
- `QueryData<T>` provides lazy Mission-time caching and synchronized evaluation groups.
- [`Agent`](../../mission/Agent) supplies the death-registration call site.
- `IBattlePowerCalculationLogic`, `CasualtyHandler`, and siege deployment logic supply derived power/position inputs.

**Downstream**

- [`TeamAIComponent`](../TeamAIComponent), [`TeamAIGeneral`](../TeamAIGeneral), [`BehaviorFlank`](../BehaviorFlank), and [`BehaviorSergeantMPMounted`](../BehaviorSergeantMPMounted) use counts, ratios, positions, and power to choose battle behavior.
- Mission Order of Battle and mission HUD view models consume formation/team composition values for display.
- [`BattlePowerCalculationLogic`](../BattlePowerCalculationLogic) and [`CasualtyHandler`](../CasualtyHandler) feed the casualty-adjusted power path.
- Siege AI consumes wall and enemy-position values; local-power consumers use the uncached distance query.

## Failure and save-safety boundaries

1. **Old Team after reset:** `Team.Reset()` creates a new query object. A cached reference will not receive new counters or values.
2. **Old Mission:** the constructor stores one Mission while `QueryData.Value` reads the global `Mission.Current`. Cross-Mission references can therefore combine an old Team with a new clock or a cleared clock.
3. **Mission teardown:** cleanup removes Agents and Teams and eventually clears `Mission.Current`. Any later property read can dereference the missing Mission clock.
4. **Partial invalidation:** after unit movement, `ExpireAfterUnitAddRemove()` does not make all enemy and target metrics current. Make decisions with the documented freshness boundary, not the method name alone.
5. **Optional results:** no enemy can produce fallback positions; `MedianTargetFormation` can be null; formation and Agent references can disappear during teardown. Branch before using them.
6. **Missing behavior dependencies:** `BattlePowerLogic` and `CasualtyHandler` are lazy MissionBehavior lookups. Do not read casualty-adjusted ratios in a custom Mission until those behaviors are installed.
7. **Counter misuse:** death counters are runtime observations from `Agent.Die`, not a public casualty ledger. Do not manually increment them, persist them, or interpret them as a deduplicated final casualty count.
8. **High-water ranged value:** `MaxUnderRangedAttackRatio` can remain high after the current ten-second observation would have fallen. Do not use it as a strict current-window measurement.

## Version note

This page describes the 1.4.5 `TaleWorlds.MountAndBlade` implementation. Cache lifetimes and the exact set invalidated by `ExpireAfterUnitAddRemove()` are implementation contracts worth rechecking when targeting an older game version. The stable rule is to reacquire `Team.QuerySystem` inside the active Mission and never save or carry it across reset/teardown.

## Navigation

- [↑ Parent: Mission extension API](../)
- [↔ Sibling: Team](../Team)
- [↔ Sibling: TeamAIComponent](../TeamAIComponent)
- [Related: Mission](../../mission/Mission)
- [Related: Formation](../../mission/Formation)
- [Related: Agent](../../mission/Agent)
