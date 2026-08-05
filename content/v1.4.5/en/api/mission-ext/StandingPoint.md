---
title: "StandingPoint"
description: "Mission-scene interaction slot used by UsableMachine to select, position, and release Agents through a real lifecycle."
---
# StandingPoint

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class StandingPoint : UsableMissionObject`  
**Base:** `UsableMissionObject`  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPoint.cs`

## One-line responsibility

This object is the scene-backed slot at which an [`Agent`](../../mission/Agent) can use a machine, including eligibility, target position, path-based AI scoring, and use-stop cleanup.

## Overview

`StandingPoint` is normally authored as a script component on a machine scene entity. The owning [`UsableMachine`](../UsableMachine) recursively collects these components during `OnInit`, initializes their defending-agent state, and asks them whether a candidate Agent may use each slot. A derived point changes the selection rule; it does not replace the machine's ownership or create a second Mission registry.

## Mental model

Think of a standing point as a **reservation and movement contract**, not as the gameplay action itself. `UsableMachine` filters points by deactivation, current users, battle side, and `IsDisabledForAgent`; then it uses `GetUserFrameForAgent` and `GetUsageScoreForAgent` to choose where an Agent should move. `OnUse` and `OnUseStopped` are lifecycle callbacks from the host, while the actual siege, loading, or attack behavior belongs to the machine and its components.

`OnInit` creates the path-distance cache and infers `StandingPointSide` from the entity's `attacker` and `defender` tags. A point is therefore meaningful only after its scene entity has entered the current [`Mission`](../../mission/Mission). Do not instantiate one with `new` to obtain a usable slot; that bypasses scene attachment and `UsableMachine` collection.

## Dependencies

- [`UsableMachine`](../UsableMachine) owns the `StandingPoints` collection and calls the selection, use, and end-of-Mission paths.
- [`UsableMissionObject`](../UsableMissionObject) supplies occupancy, `UserAgent`, `MovingAgent`, lock flags, and base availability checks.
- [`Mission`](../../mission/Mission) and [`Agent`](../../mission/Agent) provide the live scene and actor state used by frame and path calculations.
- [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement), [`StandingPointWithAgentLimit`](../StandingPointWithAgentLimit), and [`StandingPointWithTeamLimit`](../StandingPointWithTeamLimit) specialize this contract for common machine layouts.

## When to use and when not to

**Use it when:**

- A scene machine needs one or more Agent interaction positions.
- A Mission object needs to inspect or configure points already collected from its `GameEntity`.
- A custom point needs to override eligibility, scoring, target frame, or stop behavior while retaining the machine contract.

**Do not use it when:**

- The feature is a Mission-wide listener; use [`MissionBehavior`](../../mission/MissionBehavior).
- The feature changes campaign state; use the relevant campaign Action or Behavior after the Mission event instead of hiding campaign mutation in a point callback.
- A point is not scene-backed. A standalone C# object has no valid `GameEntity`, Mission registration, or host selection loop.

## Selection and use lifecycle

`UsableMachine` calls `IsUsableBySide` for detachment slots and `IsDisabledForAgent` for individual candidates. The base implementation rejects the wrong tagged side, then `GetUsageScoreForAgent` calculates the negative navmesh path distance. An unreachable path becomes `float.MinValue`; `FavoredUser` changes the score so a machine can prefer a designated Agent without bypassing the other checks.

`OnUse` first releases an existing moving Agent when automatic reattachment is disabled, calls the base reservation logic, and applies a target frame or target position when the lock flags require it. `OnUseStopped` clears that target frame. `GetTickRequirement` adds authoritative ticks while a user exists; the tick path may stop the Agent when its action becomes incompatible and performs weapon sheathing or wielding on the single-thread side.

## Key members

### Eligibility and ownership

- `FavoredUser` is an optional score preference. It is cleared by `OnEndMission`; it does not grant access to a disabled or wrong-side point.
- `SetUsableByAIOnly`, `SetUsableByPlayerOnly`, and `SetUsableByPlayerOrAI` change the controller filter used by `IsUsableByAgent`.
- `IsUsableBySide` also checks `IsDeactivated`, instant-use status, and current occupancy before accepting a detachment side.

Configure these after the scene component is available and before the machine begins assigning Agents. The method `GetDescriptionText` intentionally returns `null` in this base class, so UI text must come from the owning machine or a derived type.

### Position and weapon handling

- `GetUserFrameForAgent` derives the target from Mission teleport state, lock flags, interaction distance, and the Agent's look direction.
- `AutoSheathWeapons`, `AutoEquipWeaponsOnUseStopped`, and `AutoWieldWeapons` control the base tick's equipment transitions. `StandingPointForRangedArea` disables auto-sheathing because the held ranged item is part of its eligibility.
- `SetupOnUsingStoppedBehavior` controls whether the stopped Agent is automatically attached again and registers the host callback. The callback is invoked from use-stop processing, not from arbitrary Mission code.
- `HasAlternative` tells the machine whether another point may be considered; the base implementation returns `false`.

### Lifecycle callbacks

`OnInit`, `OnUse`, `OnUseStopped`, `OnTick`, `OnTickParallel3`, and `OnEndMission` are host callbacks. `OnParentMachinePhysicsStateChanged` invalidates the entity world-position cache after the parent machine moves. A custom override should preserve the base call unless it deliberately owns the corresponding reservation or cleanup contract.

## Real acquisition example

The point is obtained from the current Mission's active object collection. The Agent is supplied by the machine or Mission callback, so no detached point or fake actor is created:

```csharp
using TaleWorlds.MountAndBlade;

static StandingPoint FindPointForAgent(Agent agent)
{
    Mission mission = Mission.Current;
    if (mission == null || agent == null)
    {
        return null;
    }

    foreach (StandingPoint point in
             mission.ActiveMissionObjects.FindAllWithType<StandingPoint>())
    {
        if (!point.IsDisabledForAgent(agent) && point.IsUsableByAgent(agent))
        {
            return point;
        }
    }

    return null;
}
```

This only identifies a valid candidate. The owning `UsableMachine` must still perform movement and reservation; calling `OnUse` manually would skip the machine's detachment bookkeeping.

## Risks and crash boundaries

- `Mission.Current`, `Scene`, `GameEntity`, and `UserAgent` are lifecycle-bound. Delayed callbacks after `OnEndMission` or entity removal must not reuse them.
- `GetUserFrameForAgent` and path scoring assume a live Mission scene. Calling them during module loading or after Mission teardown can fail through native scene access.
- `FavoredUser` and the distance cache contain live Agent references. Do not carry them into another Mission.
- `StandingPointWithTeamLimit` reads `UsableTeam.Side` in its side check, so an unconfigured Team-limited point is unsafe during detachment evaluation.
- The point is not a saveable campaign object. Do not use it to persist world state or mutate campaign entities from a Mission-end callback.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Siblings: [StandingPointForRangedArea](../StandingPointForRangedArea) · [StandingPointWithAgentLimit](../StandingPointWithAgentLimit) · [StandingPointWithTeamLimit](../StandingPointWithTeamLimit)
- Specialized points: [StandingPointWithVolumeBox](../StandingPointWithVolumeBox) · [StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement)
- Host and base: [UsableMachine](../UsableMachine) · [UsableMissionObject](../UsableMissionObject) · [Mission](../../mission/Mission)
- Documentation contract: [Doc Contract](../../../architecture/doc-contract)
- 中文/English: [StandingPoint](../../../../zh/api/mission-ext/StandingPoint)
