---
title: "StandingPointWithWeaponRequirement"
description: "StandingPoint specialization that gates use by a required item, a supplied item, or one of several weapon classes."
---
# StandingPointWithWeaponRequirement

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class StandingPointWithWeaponRequirement : StandingPoint`  
**Base:** [`StandingPoint`](../StandingPoint)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs`

## One-line responsibility

This point allows use only when the Agent's equipment satisfies one configured weapon identity, supplied-item identity, or weapon-class rule.

## Overview

The class is the common gate for pickup, reload, loading, and weapon-specific machine points. Its constructor disables automatic sheathing because the held item is part of the selection contract. The owning machine obtains a scene point, chooses one initialization path, and then lets [`UsableMachine`](../UsableMachine) call `IsDisabledForAgent` during selection.

## Mental model

There are three mutually intended configuration modes, evaluated in this order:

1. `InitRequiredWeapon(ItemObject weapon)` stores an exact item that must be in the Agent's primary slot.
2. If no exact required item is configured, `InitGivenWeapon(ItemObject weapon)` requires that the Agent's primary slot contains that item.
3. If neither item is configured, `InitRequiredWeaponClasses(WeaponClass[] requiredWeaponClasses)` scans all weapon slots for a matching class. A consumable class is accepted only when it has remaining capacity, except for the extra weapon slot.

The setters only assign their own fields; they do not clear the other modes. If more than one is called, the first non-null item branch wins, followed by the class branch. `SetHasAlternative` changes the host's alternative search behavior, and `SetUsingBattleSide` sets the same side gate that scene tags normally establish.

## Dependencies

- [`StandingPoint`](../StandingPoint) supplies scene registration, use lifecycle, path score, and base controller/side checks.
- [`UsableMachine`](../UsableMachine) filters points for AI and detachment selection; its ammo logic relies on this type for pickup points.
- [`ItemObject`](../../core-extra/ItemObject) and [`WeaponClass`](../../core-extra/WeaponClass) provide the exact item and class values used by the gate.
- [`RangedSiegeWeapon`](../RangedSiegeWeapon), [`SiegeLadder`](../SiegeLadder), and [`StonePile`](../StonePile) are source-confirmed consumers of the three configuration paths.

## When to use and when not to

**Use it when:**

- A scene slot should accept only a specific machine item, a given item, or an allowed weapon class.
- An owning machine can resolve registered `ItemObject` instances before selection starts.

**Do not use it when:**

- Eligibility is based on Team or a hand-maintained actor list; use [`StandingPointWithTeamLimit`](../StandingPointWithTeamLimit) or [`StandingPointWithAgentLimit`](../StandingPointWithAgentLimit).
- The point should accept an empty hand regardless of item state. This class deliberately rejects that state in all configured modes.
- You need an inventory transaction. This class only gates a standing point; the owning machine must perform pickup, consumption, or reload changes.

## Key members and timing

- `InitRequiredWeaponClasses(WeaponClass[] requiredWeaponClasses)` replaces the accepted class array. In v1.4.5 the parameter is an array, not a single `WeaponClass`.
- `InitRequiredWeapon(ItemObject weapon)` requires the exact item in the primary slot.
- `InitGivenWeapon(ItemObject weapon)` requires the exact given item in the primary slot, including rejecting an empty primary slot.
- `IsDisabledForAgent` checks the first configured mode and then calls the base point check only after equipment matches.
- `SetHasAlternative(bool hasAlternative)` and `HasAlternative()` control whether a host may search another point.
- `SetUsingBattleSide(BattleSideEnum side)` writes the point's side gate; it is used by [`SiegeLadder`](../SiegeLadder) for its defender pickup point.

Initialize the requirement while the owning machine is setting up its collected points. Do not wait until an Agent is already moving to the point, because the machine may have cached the point as usable.

## Real acquisition examples

The game source resolves a real item through `Game.Current.ObjectManager` and applies it to points already collected by a siege machine. A mod can follow the same shape when it has a live scene machine and an item ID from its module configuration:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

static void ConfigureWeaponPoints(RangedSiegeWeapon siegeWeapon, string itemId)
{
    ItemObject weapon = Game.Current.ObjectManager.GetObject<ItemObject>(itemId);
    if (weapon == null || siegeWeapon == null)
    {
        return;
    }

    foreach (StandingPointWithWeaponRequirement point in
             siegeWeapon.StandingPoints.OfType<StandingPointWithWeaponRequirement>())
    {
        point.InitRequiredWeapon(weapon);
        point.SetHasAlternative(true);
    }
}
```

For a class rule, the source-confirmed form is `point.InitRequiredWeaponClasses(new WeaponClass[1] { weapon.PrimaryWeapon.WeaponClass })`. Use that only when the point should accept any item of the selected class rather than the exact item.

## Risks and crash boundaries

- Calling multiple initialization methods does not reset earlier fields. Explicitly choose one mode and keep later configuration from accidentally taking precedence.
- The exact-item modes inspect the Agent's primary slot only; an equivalent item in another slot does not satisfy them.
- Consumable class matching checks `Amount` against `ModifiedMaxAmount`, with the extra weapon slot treated specially. A visually present item can still be rejected when depleted.
- `ItemObject` references should come from the current `Game.Current.ObjectManager`. Do not fabricate an unregistered item or retain a stale object across module/game lifetimes.
- `SetUsingBattleSide` changes side eligibility but does not update scene tags or synchronize an already moving Agent. Configure it before the machine selection pass.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Siblings: [StandingPoint](../StandingPoint) · [StandingPointWithVolumeBox](../StandingPointWithVolumeBox) · [StandingPointForRangedArea](../StandingPointForRangedArea)
- Other gates: [StandingPointWithAgentLimit](../StandingPointWithAgentLimit) · [StandingPointWithTeamLimit](../StandingPointWithTeamLimit)
- Consumers and types: [RangedSiegeWeapon](../RangedSiegeWeapon) · [SiegeLadder](../SiegeLadder) · [ItemObject](../../core-extra/ItemObject) · [WeaponClass](../../core-extra/WeaponClass)
- 中文/English: [StandingPointWithWeaponRequirement](../../../../zh/api/mission-ext/StandingPointWithWeaponRequirement)
