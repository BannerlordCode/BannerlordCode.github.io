---
title: "StandingPointForRangedArea"
description: "StandingPoint specialization for Agents already holding a usable ranged or throwing weapon in a scene firing area."
---
# StandingPointForRangedArea

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class StandingPointForRangedArea : StandingPoint`  
**Base:** [`StandingPoint`](../StandingPoint)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointForRangedArea.cs`

## One-line responsibility

This point admits an Agent whose primary hand contains a ranged weapon and scores that position according to whether the weapon is a throwing item or another ranged item.

## Overview

The class is a scene firing-area slot, not an inventory provider. `UsableMachine` still discovers and reserves it as a normal [`StandingPoint`](../StandingPoint), while this class adds weapon eligibility and a preference multiplier. Its `NoAttack` and `ConsiderRotation` scripted-frame flags tell the AI movement layer how to approach the area.

## Mental model

At initialization the point keeps the held weapon in place (`AutoSheathWeapons = false`), locks the Agent's position rather than its full frame, and reschedules its tick requirement. `IsDisabledForAgent` then accepts only a non-empty primary slot whose `CurrentUsageItem.IsRangedWeapon` is true. The extra weapon slot uses `ThrowingValueMultiplier`; other ranged weapons use `RangedWeaponValueMultiplier`. A non-positive multiplier disables that category.

While occupied, the parallel tick checks the current weapon again. If the Agent changes to an ineligible weapon, it is stopped through `StopUsingGameObjectMT`. `HasAlternative` always returns true, allowing the host to consider another firing position.

## Dependencies

- [`StandingPoint`](../StandingPoint) supplies Mission registration, reservation, target positioning, and base side/controller checks.
- [`UsableMachine`](../UsableMachine) filters this point and uses its score when selecting a slot for an AI detachment.
- [`Agent`](../../mission/Agent) provides the live equipment state, including the primary slot and `CurrentUsageItem` used by the eligibility check.
- [`RangedSiegeWeapon`](../RangedSiegeWeapon) is a real consumer of ranged standing points in siege-machine scenes.

## When to use and when not to

**Use it when:**

- A scene weapon needs an Agent to occupy a firing or ranged-use position while retaining the held ranged item.
- The machine needs distinct AI preference for throwing weapons and other ranged weapons.

**Do not use it when:**

- The point gives an item to the Agent or checks a required item identity; use [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement).
- The point should accept melee users or an empty hand. This class intentionally rejects those states.
- You need a generic use point with no ranged semantics; use [`StandingPoint`](../StandingPoint).

## Key members and timing

- `ThrowingValueMultiplier` defaults to `5f`; it is added to the base path score for the extra weapon slot.
- `RangedWeaponValueMultiplier` defaults to `2f`; it is added for other ranged primary weapons.
- `DisableScriptedFrameFlags` returns `NoAttack | ConsiderRotation`, so the assigned Agent is not told to perform a normal attack through the scripted frame.
- `OnInit` sets `AutoSheathWeapons` to false, disables frame locking, enables position locking, and requests the resulting tick requirement.
- `GetUsageScoreForAgent` adds the appropriate multiplier after the base point calculates path distance. An unreachable base path remains `float.MinValue` before the preference can make it attractive.
- `GetTickRequirement` asks for `TickParallel2` while a user exists, and `OnTickParallel2` stops a now-ineligible user.
- `HasAlternative` is always true; callers may safely ask the machine to search another point.

## Real acquisition and configuration example

The machine owns the point. A Mission-time tool can inspect the already registered point and adjust the two documented preferences before its next selection pass:

```csharp
using TaleWorlds.MountAndBlade;

static void PreferThrowingAreas()
{
    Mission mission = Mission.Current;
    if (mission == null)
    {
        return;
    }

    foreach (StandingPointForRangedArea point in
             mission.ActiveMissionObjects.FindAllWithType<StandingPointForRangedArea>())
    {
        point.ThrowingValueMultiplier = 6f;
        point.RangedWeaponValueMultiplier = 2f;
    }
}
```

The scene still has to contain the component and its owning [`UsableMachine`](../UsableMachine); changing a field on an unrelated object does not create a firing position.

## Risks and crash boundaries

- The eligibility test reads the Agent's current equipment. Do not configure or score the point after the Agent has been removed from the Mission.
- The class deliberately disables auto-sheathing. A machine that expects the Agent to relinquish the weapon must stop use and manage that transition explicitly.
- Parallel tick code calls `StopUsingGameObjectMT`; custom overrides must not add unsynchronized scene or inventory mutation to that path.
- A multiplier is a preference, not a reachability override. Do not use a large value to compensate for a broken navmesh or a missing scene point.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Siblings: [StandingPoint](../StandingPoint) · [StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement)
- Related limits: [StandingPointWithTeamLimit](../StandingPointWithTeamLimit) · [StandingPointWithVolumeBox](../StandingPointWithVolumeBox)
- Host: [UsableMachine](../UsableMachine) · [Mission](../../mission/Mission) · [Agent](../../mission/Agent)
- 中文/English: [StandingPointForRangedArea](../../../../zh/api/mission-ext/StandingPointForRangedArea)
