---
title: "RangedSiegeWeaponViewController"
description: "RangedSiegeWeaponViewController — class in TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# RangedSiegeWeaponViewController

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class RangedSiegeWeaponViewController : MissionView`  
**Base:** `MissionView`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponViewController.cs`

## Overview

`RangedSiegeWeaponViewController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Instance members** (1): `OnObjectUsed`.
- **Extension points** (1): `OnObjectUsed`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnObjectUsed` | method (override) | Overrides the base member. Takes 2 arguments: `Agent userAgent`, `UsableMissionObject usedObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyRangedSiegeWeaponViewController : MissionView
{
    // Register from the game starter, exactly once.
    public override void RegisterEvents()
    {
        // forward the notification this controller reacts to
    }
}
```

## Risks and Boundaries

- Re-entrancy is the main hazard: a callback that comes back into the controller while it is mid-update can loop.
- Controllers hold no durable state — anything that must survive a save belongs on a saveable object.
- Assume callbacks arrive on the main thread; locking around them usually deadlocks the engine.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponViewController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [RangedSiegeWeaponView](../RangedSiegeWeaponView/) — `TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon`.
- [TrebuchetView](../TrebuchetView/) — `TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon`.
- [MangonelView](../MangonelView/) — `TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon`.
- [BallistaView](../BallistaView/) — `TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon`.

Section: [api/mission-ext/](../) — the other types in this bucket.
