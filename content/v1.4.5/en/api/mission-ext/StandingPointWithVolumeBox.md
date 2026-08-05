---
title: "StandingPointWithVolumeBox"
description: "Weapon-gated StandingPoint with a compact vertical and spatial interaction envelope for scene volume-box mechanics."
---
# StandingPointWithVolumeBox

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class StandingPointWithVolumeBox : StandingPointWithWeaponRequirement`  
**Base:** [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithVolumeBox.cs`

## One-line responsibility

This point combines the weapon requirement contract with a 10-meter spatial and 2-meter vertical eligibility envelope used by volume-box interactions.

## Overview

`StandingPointWithVolumeBox` is the specialized point used when a weapon-qualified Agent must be close to a scene volume. Its `IsDisabledForAgent` first runs the inherited weapon and base point checks, then rejects Agents more than two meters above or below the point and Agents whose three-dimensional distance exceeds ten meters. It also disables normal attack flags while the Agent is assigned.

## Mental model

The class does not locate a volume or perform the gameplay effect. It remains a scene component collected by [`UsableMachine`](../UsableMachine); the volume owner, such as [`StonePile`](../StonePile), uses the public `VolumeBoxTag` to match a tagged `VolumeBox` entity and owns the surrounding timer/effect logic. The point only answers whether a suitably equipped Agent is close enough to use it.

The inherited weapon configuration must be initialized first when the scene point is used for a specific item or class. Distance is measured against `GameEntity.GlobalPosition`, with a squared-distance threshold of `100f`; elevation is checked independently with `MathF.Abs`.

## Dependencies

- [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement) supplies required/given weapon matching and side configuration.
- [`StandingPoint`](../StandingPoint) and [`UsableMachine`](../UsableMachine) supply Mission registration, occupancy, and candidate selection.
- [`StonePile`](../StonePile) is a source-confirmed consumer that reads `VolumeBoxTag` to pair the point with a `VolumeBox` entity.
- [`Mission`](../../mission/Mission), [`Agent`](../../mission/Agent), and the point's `GameEntity` provide the live positions used by the distance check.

## When to use and when not to

**Use it when:**

- An interaction requires a weapon condition and must happen in a bounded scene volume, such as a throwing or pickup setup.
- The owning machine can provide a tagged volume entity and a live Mission point.

**Do not use it when:**

- Only weapon identity or class matters; use [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement).
- The interaction should work at arbitrary distance or across elevation; use [`StandingPoint`](../StandingPoint) and implement a domain-specific range rule.
- You need to create the volume itself. `VolumeBoxTag` is a matching convention, not a factory or physics query.

## Key members and timing

- `VolumeBoxTag` defaults to `"volumebox"` and is read by consumers that pair the point with tagged `VolumeBox` entities.
- `DisableScriptedFrameFlags` returns `NoAttack`.
- `IsDisabledForAgent` delegates to the inherited weapon rule, then applies the 2-meter elevation and 10-meter squared-distance limits.
- `OnEditorTick` calls the base editor tick and checks whether the point's entity is selected; it is editor behavior, not a runtime interaction callback.

Configure the inherited requirement after retrieving the scene point and before the host asks for candidates. The distance rule is fixed in this type and is not changed by `VolumeBoxTag`.

## Real acquisition and configuration example

The point is read from the Mission's active objects, while the required item comes from the registered object manager just as the siege-machine source code obtains its fork item:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

static void ConfigureVolumePoints(string weaponId)
{
    Mission mission = Mission.Current;
    ItemObject weapon = Game.Current.ObjectManager.GetObject<ItemObject>(weaponId);
    if (mission == null || weapon == null)
    {
        return;
    }

    foreach (StandingPointWithVolumeBox point in
             mission.ActiveMissionObjects.FindAllWithType<StandingPointWithVolumeBox>())
    {
        point.InitRequiredWeapon(weapon);
    }
}
```

`weaponId` must identify an item already registered by the loaded game modules. This configures the point; the owning [`StonePile`](../StonePile) or other machine still controls the volume effect and use lifecycle.

## Risks and crash boundaries

- `Game.Current.ObjectManager` and `Mission.Current.Scene` are phase-bound. Resolve the item and point during Mission setup, not after teardown.
- A missing or incorrectly tagged volume cannot be repaired by changing `VolumeBoxTag` alone; the consumer's entity hierarchy must contain the matching tag.
- The 10-meter check uses full three-dimensional `DistanceSquared`, while the 2-meter elevation test is separate. Do not assume a horizontal-only range.
- The class inherits weapon requirements. A point may be geographically close but still disabled because the Agent has the wrong primary item or no consumable remaining.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Siblings: [StandingPoint](../StandingPoint) · [StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement)
- Related machine: [StonePile](../StonePile) · [UsableMachine](../UsableMachine)
- Runtime context: [Mission](../../mission/Mission) · [Agent](../../mission/Agent) · [ItemObject](../../core-extra/ItemObject)
- 中文/English: [StandingPointWithVolumeBox](../../../../zh/api/mission-ext/StandingPointWithVolumeBox)
