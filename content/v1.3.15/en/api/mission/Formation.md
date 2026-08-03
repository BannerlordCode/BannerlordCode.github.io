---
title: "Formation"
description: "The Mission runtime object for Team unit grouping, formation orders, query caches, and unit transfer or splitting."
---
# Formation

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public sealed class Formation : IFormation`  
**Base:** `IFormation`  
**Source:** `TaleWorlds.MountAndBlade/Formation.cs`

## Responsibility in one line

It maintains a Team formation's membership, physical/logical classes, arrangement and current orders, then exposes that state to Formation AI and query systems.

## Mental model

`Formation` is a **tactical control unit inside a Team**, not a static list of soldiers.

- After Mission creates a Team, the Team initializes `FormationsIncludingEmpty` and `FormationsIncludingSpecialAndEmpty`; obtain a slot with `Team.GetFormation(FormationClass)`.
- A formation maintains its arrangement, detached units, `FormationAI`, `FormationQuerySystem`, and Movement/Arrangement/Form orders. Membership and order changes invalidate caches and affect AI.
- `FormationClass` identifies a slot/logical category. `LogicalClass` and `PhysicalClass` can change as membership changes; neither is a permanent troop occupation tag.
- Mission teardown clears the Team's formations and their native dependencies. A Formation is valid only inside the current Mission.

## How to obtain a Formation

```csharp
Mission mission = Mission.Current;
Team player = mission?.PlayerTeam;
if (player == null || !player.IsValid)
{
    return;
}

Formation infantry = player.GetFormation(FormationClass.Infantry);
if (infantry.CountOfUnits == 0)
{
    return;
}

int activeUnits = infantry.CountOfUnitsWithoutDetachedOnes;
WorldPosition median = infantry.CachedMedianPosition;
```

Do not call `new Formation` and do not retain a Formation from a previous Mission. The slot belongs to the current Mission's Team.

## Formation classes

Common classes include `Infantry`, `Ranged`, `Cavalry`, and `HorseArcher`. `FormationIndex` is the slot, `LogicalClass` is the tactical classification, and `PhysicalClass` is derived from the current unit composition. Special and empty formations can exist, so a slot is not ready merely because a Formation object exists.

## When to use and when not to

**Use it for:** querying a formation during deployment or Mission ticks, issuing movement/charge/arrangement orders, applying a short operation to its units, transferring units, or reading its spatial statistics.

**Do not use it for:** treating every Agent position as durable formation state, accessing it after teardown, splitting/rearranging while AI is mutating the same collection, or using it to change Campaign party size or casualties.

## Dependencies

- Upstream: [`Mission`](../Mission/) owns the scene; [`Team`](../Team/) creates, owns, and clears formations.
- Members: [`Agent`](../Agent/) enters a formation through Team/Formation membership.
- Callbacks: [`MissionBehavior`](../MissionBehavior/) can access formations from `OnDeploymentFinished`, `OnMissionTick`, or Agent events.
- Downstream: Formation AI, OrderController, and FormationQuerySystem use Formation state for movement, tactics, and queries; [`MissionLogic`](../../mission-ext/MissionLogic/) may read it for an end condition.

## Risks and lifetime

1. **Null/invalid formation:** When Team is absent, Mission is not continuing, or the Formation is being cleared, QuerySystem, orders, and native positions may be unavailable.
2. **Stale caches:** Add/Remove/Detach/Attach, Transfer, and orders trigger query/position recalculation. Do not assume a statistic saved before a mutation remains current.
3. **Detached units:** `CountOfUnits`, `CountOfUnitsWithoutDetachedOnes`, and `CountOfUnitsWithoutLooseDetachedOnes` use different definitions. Choose the count intentionally for strength or UI.
4. **Collection mutation:** Do not change the same Formation membership from inside `ApplyActionOnEachUnit`; copy the units to process before transferring or removing them.
5. **AI conflict:** `SetControlledByAI`, orders, and `FormationAI` interact. A hard-coded order outside the correct deployment/player/AI phase can be overwritten on the next AI tick.
6. **Teardown:** Mission ending clears Team/Formation. Never hand a Formation, QuerySystem, or cached position to asynchronous work.

## Key members and timing

| Member | Use | Side effect or boundary |
|---|---|---|
| `FormationIndex`, `LogicalClass`, `PhysicalClass` | Identify the slot and current classification | Classification changes with membership; it is not a Campaign type |
| `CountOfUnits`, `CountOfDetachedUnits`, `CountOfUnitsWithoutDetachedOnes` | Choose a unit-count definition | Detached and loose-detached exclusions differ |
| `UnitsWithoutLooseDetachedOnes`, `DetachedUnits`, `LooseDetachedUnits` | Read distinct member sets | Sets change immediately as membership changes |
| `QuerySystem`, `CachedAveragePosition`, `CachedMedianPosition` | Read spatial and tactical statistics | Membership/order changes can expire or recompute caches |
| `SetMovementOrder`, `SetArrangementOrder`, `SetFormOrder` | Set movement, looseness, and arrangement | Changes the active order and query state |
| `SetRidingOrder`, `SetFiringOrder`, `SetFacingOrder` | Set mounted, firing, and facing behavior | Call only during a phase where the mod owns control |
| `SetTargetFormation` | Set a follow/target formation | Target must be in the same valid Mission |
| `SetControlledByAI` | Toggle Formation AI control | May override player orders; coordinate Team authority |
| `ApplyActionOnEachUnit` | Perform a short read/local operation on members | Do not mutate the collection from inside the callback |
| `TransferUnits`, `Split` | Move or split membership | Changes both sides' counts, classes, caches, and AI state |
| `AddUnit`, `RemoveUnit`, `DetachUnit`, `AttachUnit` | Manage formation membership | Must respect current Mission ownership and Agent state |
| `Tick`, `Reset`, `OnDeploymentFinished` | Drive AI/cache/deployment lifetime | Normally called by Team/Mission; do not tick it arbitrarily |

## Real example: move the current player's infantry formation

The source `HideoutPhasedMissionController` and `HideoutMissionController` use `CachedMedianPosition` to create a Movement order. A mod MissionBehavior can follow the same acquisition chain:

```csharp
public override void OnDeploymentFinished()
{
    Mission mission = Mission.Current;
    Formation infantry = mission?.PlayerTeam?.GetFormation(FormationClass.Infantry);
    if (infantry == null || infantry.CountOfUnits == 0)
    {
        return;
    }

    WorldPosition target = infantry.CachedMedianPosition;
    target.SetVec2(infantry.CachedAveragePosition);
    infantry.SetMovementOrder(MovementOrder.MovementOrderMove(target));
}
```

## Real example: issue orders by formation class

```csharp
public override void OnMissionTick(float dt)
{
    Mission mission = Mission.Current;
    Team player = mission?.PlayerTeam;
    if (player == null || !player.IsValid)
    {
        return;
    }

    foreach (Formation formation in player.FormationsIncludingSpecialAndEmpty)
    {
        if (formation.CountOfUnits == 0)
        {
            continue;
        }

        if (formation.LogicalClass == FormationClass.Infantry ||
            formation.LogicalClass == FormationClass.HeavyInfantry)
        {
            formation.SetArrangementOrder(ArrangementOrder.ArrangementOrderShieldWall);
        }

        formation.SetMovementOrder(MovementOrder.MovementOrderCharge);
    }
}
```

Both examples use the real `Mission.Current → PlayerTeam → Formation` path and public order factories. They do not construct a Formation or assume a Team collection index.

## Cross-version notes

- 1.3.15 and 1.4.5 keep the same Formation acquisition and public order path: `Team.GetFormation`, `CachedMedianPosition`, `SetMovementOrder`, `SetArrangementOrder`, and the unit counters.
- Concrete AI behavior varies by Mission mode and SandBox logic. Cross-version mods should prefer public Formation/Team APIs rather than internal `FormationAI` state.

## Navigation

- [↑ Mission API module](./)
- [↔ Mission](../Mission/)
- [↔ Team](../Team/)
- [↔ Agent](../Agent/) · [MissionBehavior](../MissionBehavior/)
- [MissionLogic](../../mission-ext/MissionLogic/)
- [Mission extension type index](../../mission-ext/)
