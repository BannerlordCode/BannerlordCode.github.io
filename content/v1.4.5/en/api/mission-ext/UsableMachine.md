---
title: "UsableMachine"
description: "Scene-backed Mission owner that collects StandingPoints, coordinates Agent detachment slots, and delegates machine-specific AI behavior."
---
# UsableMachine

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class UsableMachine : SynchedMissionObject, IFocusable, IOrderable, IDetachment`  
**Base:** [`SynchedMissionObject`](../SynchedMissionObject)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMachine.cs`

## One-line responsibility

This is the Mission-scene owner that discovers a machine's [`StandingPoint`](../StandingPoint) components, exposes them as detachment slots, and routes Agent movement, use, synchronization, and teardown to the concrete machine.

## Overview

`UsableMachine` is an abstract scene component for ladders, siege engines, gates, piles, and similar objects. It does not define the action text or the machine's animation; derived classes provide those contracts and usually override `CreateAIBehaviorObject()` to return a machine-specific [`UsableMachineAIBase`](../UsableMachineAIBase). The base class owns the common collection and reservation rules so every machine can participate in Team detachment evaluation.

## Mental model

Treat a usable machine as a **detachment with scene geometry**. During `OnInit`, it recursively collects `StandingPoint` components from the machine entity or its `machine_parent`, classifies pilot and ammo points by entity tags, initializes defending-agent lists, and captures the active wait entity. Its `IDetachment` implementation then filters those points by side, occupancy, Agent eligibility, navmesh, and ammo-loading state.

The `Ai` property is lazy: it calls the derived `CreateAIBehaviorObject()` the first time it is read. The returned AI object is attached to this machine through its protected constructor and is ticked by the host. A base implementation that returns `null` leaves the machine without specialized AI; that is different from manually constructing a detached AI object.

This is a live Mission object, not a Campaign save entity. It must be attached to a scene `GameEntity` before `StandingPoints`, `GameEntity`, `Mission`, or native physics are used.

## Dependencies

- [`SynchedMissionObject`](../SynchedMissionObject) supplies scene registration and synchronized visibility/physics boundaries.
- [`StandingPoint`](../StandingPoint) supplies the individual interaction slots collected from the entity hierarchy.
- [`UsableMachineAIBase`](../UsableMachineAIBase) owns machine-specific AI movement, alternative-point handling, and stopping logic.
- [`Mission`](../../mission/Mission), [`Agent`](../../mission/Agent), [`Team`](../Team), and [`Formation`](../../mission/Formation) provide the live detachment participants.
- [`UsableMissionObjectComponent`](../UsableMissionObjectComponent) receives machine-level add, tick, disable, reset, editor, and removal callbacks.

## When to use and when not to

**Use it when:**

- A scene object has one or more `StandingPoint` children and must be usable by players or AI formations.
- A custom machine needs one shared place for component lifecycle, synchronized physics, detachment selection, and Mission cleanup.
- A derived class can implement `GetActionTextForStandingPoint`, `GetDescriptionText`, and its machine-specific AI factory.

**Do not use it when:**

- The feature is one interaction position without machine-level detachment; use [`StandingPoint`](../StandingPoint).
- The feature is Mission-wide rules or callbacks; use [`MissionBehavior`](../../mission/MissionBehavior) or [`MissionLogic`](../MissionLogic).
- The state must survive a save or Campaign transition. This object is torn down with its Mission and is not a persistence boundary.

## Discovery and lifecycle

`CollectAndSetStandingPoints()` uses the parent entity when it is tagged `machine_parent`; otherwise it recursively collects from the machine's own entity. `OnInit` then identifies the first `Pilot` point, appends `ammopickup` points to `AmmoPickUpPoints`, initializes every point's defending agents, and selects the first child tagged `Wait` as `ActiveWaitStandingPoint`.

The machine requests a tick when a component needs one, when authoritative ammo pickup is active, or when the entity is sinking. `OnTick` skips invisible machines when `MakeVisibilityCheck` is enabled, disables a sinking entity once it crosses the water level, clears a finished ammo-pickup reservation, and ticks each attached component.

`OnMissionEnded` stops users and deactivates every standing point. `Disable` is stronger: it stops current and moving Agents, destroys Team detachment registrations, deactivates non-ammo points, notifies components, optionally removes ticking, and calls `SetDisabled`. `OnRemoved` releases component references through `OnRemoved`; it is not a place to start new Agent assignments.

## Point and detachment selection

- `GetVacantStandingPointForAI` prefers a valid pilot point when present, then scores other valid points by distance while protecting weapon-required points from being bypassed by an active ammo request.
- `GetValidVacantReachableStandingPointForAgent` and `GetValidStandingPointForAgentWithoutDistanceCheck` return a `WeakGameEntity`, not a `StandingPoint`; they are lookup helpers for movement code and apply different reachability filters.
- `GetTargetStandingPointOfAIAgent` finds the point an Agent is currently moving toward.
- `IsStandingPointAvailableForAgent` checks deactivation, occupancy/movement ownership, point eligibility, and ammo-loading exclusion.
- The explicit `IDetachment` methods compute side weight, slot costs, candidate Agents, occupancy, formation membership, and scripted movement. `AddAgentAtSlotIndex` removes conflicting moving or defending Agents before assigning the selected slot.

`GetBestPointAlternativeTo` defaults to the same point. A machine such as an ammo system can override it, while `UsableMachineAIBase` only asks for alternatives when the point reports `HasAlternative()` and the Agent is within `IsInRangeToCheckAlternativePoints`.

## State and machine policy

- `StandingPoints`, `PilotStandingPoint`, `PilotAgent`, `WaitEntity`, and `WaitFrame` expose scene-owned roles after `OnInit`.
- `Ai` caches the object returned by `CreateAIBehaviorObject`; `SetAI` replaces that cache and should be reserved for the machine owner.
- `CurrentlyUsedAmmoPickUpPoint` drives ticking while an Agent is moving to an ammo point.
- `UserCountNotInStruckAction` and `UserCountIncludingInStruckAction` count current users with different struck-action policies.
- `IsDestroyed` reflects `DestructionComponent`; `IsDeactivated` also includes the explicit `Deactivate()` latch.
- `IsDisabledForBattleSideAI` rejects base-disabled, AI-disabled, or deactivated machines and may additionally reject a side when `EnemyRangeToStopUsing` detects an enemy through the cached `QueryData<bool>` values.
- `Activate` and `Deactivate` update the machine and every point's `IsDeactivated`; `SetIsDisabledForAI` controls AI selection without destroying the scene entity.

## Real acquisition example

The machine is obtained from the current Mission's active object collection. The helper asks the machine to choose a real point for an existing Agent and leaves movement and reservation to the detachment host:

```csharp
using TaleWorlds.MountAndBlade;

static StandingPoint FindMachinePointForAgent(Agent agent)
{
    Mission mission = Mission.Current;
    if (mission == null || agent == null)
    {
        return null;
    }

    foreach (UsableMachine machine in
             mission.ActiveMissionObjects.FindAllWithType<UsableMachine>())
    {
        BattleSideEnum side = agent.Team?.Side ?? BattleSideEnum.None;
        if (!machine.IsDisabledForBattleSideAI(side))
        {
            StandingPoint point = machine.GetVacantStandingPointForAI(agent);
            if (point != null)
            {
                return point;
            }
        }
    }

    return null;
}
```

Do not call `OnInit`, `OnMissionEnded`, or the explicit `IDetachment` methods to simulate a lifecycle. The Mission and Team systems own those transitions.

## Risks and crash boundaries

- `StandingPoints` is populated during `OnInit`; reading it from a constructor, before scene attachment, or after removal is invalid.
- `Ai` may be `null` when a derived machine's `CreateAIBehaviorObject` intentionally returns `null`. Do not assume every abstract/base instance has an AI controller.
- `Disable` affects current users, detachment registrations, point deactivation, component callbacks, and ticking. Use it only from the owner that controls the machine's lifetime.
- `SetPhysicsStateSynched` also updates navigation-face ability and invalidates every point's cached world position. A client-only or out-of-phase physics mutation can desynchronize movement and native scene state.
- `CurrentlyUsedAmmoPickUpPoint`, `UserFormations`, and standing-point Agent references are Mission-scoped. Clear or stop them before Mission end; they are not save-safe references.
- `UsableTeam` and point-level filters can still reject a machine's slots after the machine itself is available. Machine availability is not a guarantee that a particular Agent can use a point.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Siblings: [StandingPoint](../StandingPoint) · [UsableMachineAIBase](../UsableMachineAIBase) · [SynchedMissionObject](../SynchedMissionObject)
- Components: [UsableMissionObjectComponent](../UsableMissionObjectComponent)
- Mission context: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [Agent](../../mission/Agent)
- Concrete consumers: [Ballista](../Ballista) · [SiegeTower](../SiegeTower) · [StonePile](../StonePile)
- 中文/English: [UsableMachine](../../../../zh/api/mission-ext/UsableMachine)
