---
title: "Formation"
description: "The Mission-time formation owned by a Team: it coordinates Agents, orders, layout, detached units, and tactical caches while preserving Agent.Formation ownership."
---

# Formation

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public sealed class Formation : IFormation`  
**Contract:** [`IFormation`](../../mission-ext/IFormation)  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Formation.cs`

## One-line responsibility

Within a Team, `Formation` organizes a group of Agents, their class identity, layout, movement and combat orders, detached state, and position caches for Mission updates.

## Mental model

`Formation` is not an independent campaign object. It is a Mission-time child owned by Team. A Team creates ordinary and special Formations, and mods normally obtain one through `team.GetFormation(FormationClass.Infantry)` or `team.FormationsIncludingEmpty`. `Team`, `Index`, and `FormationIndex` identify the owning Team and runtime slot; Team cleanup invalidates them when the Mission ends.

Formation has two coupled state lines: Agent membership with Captain/PlayerOwner, and Arrangement/orders with logical and physical classes, QuerySystem data, and position caches. Changing membership must update the Agent's reverse `Formation` property, native/network state, detachment, and caches. That is why a mod must not treat the Formation list as the ownership API or tick a Formation outside its Mission.

## When to use it, and when not to

**Use it when:**

- A Mission callback needs the unit count, Captain, position, logical/physical class, or current orders of a real Formation.
- An existing Agent should move to another formation through `agent.Formation = target`, or the current Formation needs a movement, facing, arrangement, form, riding, or firing order.
- A MissionBehavior needs to observe `OnUnitAdded`, `OnUnitRemoved`, `OnTick`, or deployment completion.

**Do not use it when:**

- Constructing a normal battle formation. Engine simulation Formations are an internal case; obtain ordinary Formations from Team.
- Changing ownership with only `AddUnit` or `RemoveUnit`. Use `Agent.Formation = target` so the setter maintains both sides of the relationship.
- Calling `Split` or `TransferUnits` across Teams, or replacing Arrangement to bypass the owning OrderController.
- Persisting a Formation or caching it across Missions. Save intent or stable identifiers, then reacquire the runtime Formation after a new Mission opens.

## Creation, ownership, and classes

Team initializes ordinary and special Formations and addresses them through `FormationClass`. Infantry, Ranged, Cavalry, HorseArcher, and special slots must be interpreted through the enum and Team API, not guessed from an integer. `Formation.Team` is read-only ownership; `Index` and `FormationIndex` locate the object only within its current Team.

During Agent construction, `AgentBuildData.AgentFormation` supplies the initial formation and the `Agent.Formation` setter performs later transfers. When an Agent is removed or escapes, it leaves the Formation; a cached Agent reference can therefore stop belonging to the Formation before a delayed callback runs.

## Key members and side effects

### Ownership, membership, and roles

- `Team`, `Index`, `FormationIndex`, and `CountOfUnits` describe identity and size inside the current Mission.
- `Captain`, `PlayerOwner`, `HasPlayerControlledTroop`, and `IsPlayerTroopInFormation` reflect role assignment and can change when Agents are removed or control changes.
- `DetachedUnits` and `LooseDetachedUnits` are still managed by the Formation even though their units are outside the main layout; they do not mean that the Agents have left the Formation.
- `GetFirstUnit`, `GetUnitWithIndex`, `GetCountOfUnitsWithCondition`, and `ApplyActionOnEachUnit` are traversal APIs. Do not mutate the same collection from a callback unless using the source's backup-list variant.

### Class, query, and position data

- `LogicalClass` and `SecondaryLogicalClasses` describe AI classification; `PhysicalClass` and `SecondaryPhysicalClasses` describe current unit composition; `RepresentativeClass` is a summary. Do not substitute one for every tactical decision.
- `QuerySystem`, `GetAveragePositionOfUnits`, `GetMedianAgent`, `GetCurrentGlobalPositionOfUnit`, and `GetUnderAttackTypeOfUnits` depend on Mission scene state and cache timing.
- `CurrentPosition`, `OrderPosition`, `Direction`, and `OrderPositionIsValid` can be transiently invalid during deployment or order changes. Validate before passing them to scene or navigation APIs.

### Orders, layout, and AI

- `Arrangement` is the layout implementation. Prefer `Rearrange` when replacing it so unit movement and related events follow the supported path.
- `SetMovementOrder`, `SetFacingOrder`, `SetArrangementOrder`, `SetFormOrder`, `SetRidingOrder`, and `SetFiringOrder` change separate order dimensions and can invalidate positions or caches.
- `SetControlledByAI`, `IsAIControlled`, `IsSplittableByAI`, and `TargetFormation` control AI ownership and split targets; do not let player and AI orders overwrite one another in the same phase.
- `Split` and `TransferUnits` use the owning Team's `MasterOrderController`; they are not general cross-Team copy operations.

### Events and timing

- `OnUnitAdded`, `OnUnitRemoved`, `OnUnitAttached`, `OnUnitCountChanged`, and `OnUnitSpacingChanged` are observation boundaries. Release any external Agent reference when the event removes it.
- `OnBeforeMovementOrderApplied` and `OnAfterArrangementOrderApplied` observe order boundaries; do not re-enter the same setter from its callback.
- `OnTick` and `Tick(float dt)` are driven by Mission's Team update phase. `Reset`, `OnFormationDispersed`, and batch add/remove events are rebuild and cleanup boundaries, not places to create new battle objects after teardown.

## Dependency graph

- **Owner:** [`Team`](../../mission-ext/Team) creates and holds Formation; [`Mission`](../Mission) defines the lifetime of Team and Formation.
- **Members:** [`Agent`](../Agent) joins, transfers, and leaves through its `Formation` setter; do not bypass that reverse reference.
- **Class and contract:** [`FormationClass`](../../core-extra/FormationClass), [`IFormation`](../../mission-ext/IFormation), and [`FormationAI`](../../mission-ext/FormationAI) define class, layout, and AI boundaries.
- **Rule consumers:** [`MissionBehavior`](../MissionBehavior) and [`MissionLogic`](../../mission-ext/MissionLogic) read Formation state from valid Mission callbacks; Formation is not a Campaign save field.
- **Queries:** [`FormationQuerySystem`](../../mission-ext/FormationQuerySystem) consumes unit and position state; cache details follow the target version source.

## Real acquisition and transfer examples

This example gets the infantry Formation from the current Mission's player Team and assigns an existing Agent through the real `Agent.Formation` setter. It does not construct a Formation or edit the Formation's internal lists.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class FormationReassignmentBehavior : MissionBehavior
{
    protected override void OnBehaviorInitialize()
    {
        Team playerTeam = Mission.PlayerTeam;
        if (playerTeam == null || !playerTeam.IsValid)
        {
            return;
        }

        Formation infantry = playerTeam.GetFormation(FormationClass.Infantry);
        Agent mainAgent = Mission.MainAgent;
        if (infantry != null && mainAgent != null && mainAgent.IsActive())
        {
            mainAgent.Formation = infantry;
        }
    }
}
```

Orders should also be issued from a real Formation acquired from the current Team and remain inside Mission timing:

```csharp
public sealed class FormationOrderBehavior : MissionBehavior
{
    protected override void OnBehaviorInitialize()
    {
        Formation ranged = Mission.PlayerTeam?.GetFormation(FormationClass.Ranged);
        if (ranged != null && ranged.IsValid)
        {
            ranged.SetControlledByAI(false);
            ranged.SetMovementOrder(MovementOrder.MovementOrderMove);
        }
    }
}
```

## Risks and crash boundaries

1. **Bypassing the Agent reverse reference:** Calling `Formation.AddUnit` or `RemoveUnit` alone does not replace `Agent.Formation`; Team, Formation, Agent, detachment, and QuerySystem state can disagree.
2. **Cross-Team transfer:** `Split` and `TransferUnits` depend on the current Team's `MasterOrderController`, Formation class, and order state. Cross-Team or wrong-phase calls can corrupt orders, detachments, and network state.
3. **Teardown references:** Team clears Formation at Mission end and Agents can be removed. Delayed callbacks, UI, or background work that holds the old Formation can touch invalid native or scene state.
4. **Wrong-phase ticking:** `Tick`, position calculations, layout updates, and query caches depend on an active `Mission.Current`. Do not tick after `EndMission` or from Campaign threads.
5. **Cache and re-entry:** Position, enemy, and unit-count values can be cached. Do not call the same order setter again from its order event, which can cause re-entry and repeated layout work.
6. **Network synchronization:** Agent ownership, attach/detach, orders, and Formation creation can produce native/network messages. Multiplayer code must not update only local state or migrate units from a non-authoritative thread.

## Version note

In 1.4.5, Formation is in `TaleWorlds.MountAndBlade`, with Team/Agent ownership, ordinary/special slots, and order APIs defined by the target `Formation.cs`. 1.3.15 is conceptually similar, but layout, AI, and network members can differ; verify public members and events against the version being compiled.

## See also and bidirectional navigation

- ↑ Parent module: [Mission API](../)
- ↔ Siblings: [Mission](../Mission) · [Agent](../Agent) · [MissionBehavior](../MissionBehavior)
- ↔ Cross-module: [Team](../../mission-ext/Team) · [TeamQuerySystem](../../mission-ext/TeamQuerySystem)
- Class and AI: [FormationClass](../../core-extra/FormationClass) · [FormationAI](../../mission-ext/FormationAI)
- Rule entry: [MissionLogic](../../mission-ext/MissionLogic)
- Writing contract: [Doc Contract](../../../architecture/doc-contract)
