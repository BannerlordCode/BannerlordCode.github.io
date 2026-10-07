---
title: "MangonelView"
description: "Auto-generated class reference for MangonelView."
---
# MangonelView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MangonelView : RangedSiegeWeaponView`
**Base:** `RangedSiegeWeaponView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/MangonelView.cs`

## Overview

`MangonelView` is an **empty** class. Its whole declaration is `public class MangonelView : RangedSiegeWeaponView` (`MangonelView.cs:6`) with an empty body — no members, no overrides, no constructor, ten lines of file including the licence header and usings. Every behaviour you see when you sit at a mangonel belongs to the base class `RangedSiegeWeaponView` (`RangedSiegeWeaponView.cs:10`), which is a `UsableMissionObjectComponent`.

It exists to be *selected*. The siege-weapon view controller walks an `is`-chain over the mission-side weapon and constructs the matching view class: `Trebuchet` → `TrebuchetView` (`RangedSiegeWeaponViewController.cs:53`), `Mangonel` → `MangonelView` (`RangedSiegeWeaponViewController.cs:57`), `Ballista` → `BallistaView`, and anything else falls through to a bare `RangedSiegeWeaponView` (`RangedSiegeWeaponViewController.cs:65`). The mission-side type it is discriminating on is `Mangonel : RangedSiegeWeapon, ISpawnable` (`Mangonel.cs:13`).

Ownership is entirely the controller's. `RangedSiegeWeaponViewController` is itself a `MissionView` marked `[DefaultView]` (`RangedSiegeWeaponViewController.cs:8`), so it runs in every mission; it adds the view lazily from `OnObjectUsed`, the moment the main agent uses a `StandingPoint` that belongs to a ranged weapon (`RangedSiegeWeaponViewController.cs:13`). It then constructs the view, calls `Initialize(rangedSiegeWeapon, MissionScreen)` (`RangedSiegeWeaponViewController.cs:67`) and attaches it with `rangedSiegeWeapon.AddComponent(view)` (`RangedSiegeWeaponViewController.cs:68`). The guard above only fires when `rangedSiegeWeapon.GetComponent<RangedSiegeWeaponView>() == null` (`RangedSiegeWeaponViewController.cs:20`), so each weapon gets at most one. To find the weapon first, the controller walks up from the point's entity until `HasScriptOfType<UsableMachine>` (`RangedSiegeWeaponViewController.cs:32`) and takes `GetFirstScriptOfType<UsableMachine>()` (`RangedSiegeWeaponViewController.cs:38`).

## Mental Model

Read `MangonelView` as a **named slot in a hard-coded factory**, not as a class with behaviour. That reframing is the whole lesson: the interesting question is not "what does it do" (nothing) but "what is the rule that picks it".

The rule is an `is`-test on the *mission* type, evaluated in a fixed order, inside a `private` method. The consequences follow directly:

- **Subclassing buys you nothing on its own.** Because the controller writes `new MangonelView()` literally (`RangedSiegeWeaponViewController.cs:57`), a `MyMangonelView : MangonelView` in your assembly is never instantiated by the engine. There is no registry, no virtual factory method, no name lookup. To change what a mangonel's view does you must either change the *mission* type so it no longer satisfies `is Mangonel` — which silently drops it to the generic `RangedSiegeWeaponView` at `RangedSiegeWeaponViewController.cs:65` — or drive the view yourself from a mission view of your own.
- **The right extension point is `RangedSiegeWeaponView`, not `MangonelView`.** `HandleUserInput` is `protected virtual` (`RangedSiegeWeaponView.cs:95`) and is called from `OnTick` on every tick because `IsOnTickRequired()` returns `true` unconditionally (`RangedSiegeWeaponView.cs:79`). Override it on a view you actually own, not on a subclass that never gets constructed.
- **The chain order is load-bearing.** `Trebuchet` is tested at `RangedSiegeWeaponViewController.cs:51`, before `Mangonel` at line 55. Today `Mangonel` does not derive from `Trebuchet` so the order is harmless, but any mod that re-parents its weapon type can shadow a later branch of the chain and get the wrong view with no warning.
- **A `null` `CameraHolder` disables the weapon quietly.** `CameraHolder` forwards to `this.RangedSiegeWeapon.CameraHolder` (`RangedSiegeWeaponView.cs:29`), and both `OnAdded` (`RangedSiegeWeaponView.cs:55`) and the first branch of `HandleUserInput` (`RangedSiegeWeaponView.cs:97`) are gated on `CameraHolder != null`. If your spawner forgets to create the camera holder entity, the view is added, ticks forever, and simply never enters weapon-camera mode — no exception, no log line.
- **Input is suppressed in replays.** `OnTick` calls `HandleUserInput` only when `!GameNetwork.IsReplay` (`RangedSiegeWeaponView.cs:88`). Anything you drive from `HandleUserInput` will silently do nothing in a replay, which is exactly the kind of bug that only shows up after release.
- **`Initialize` must run before anything reads the properties.** `RangedSiegeWeapon`, `MissionScreen` and `Camera` have private setters assigned only inside `Initialize` (`RangedSiegeWeaponView.cs:48`). Because the controller attaches the view to the weapon *after* initializing it (`RangedSiegeWeaponViewController.cs:68`), anything that walks components during that `AddComponent` sees an initialized view — but a view you construct yourself and never `Initialize` throws on the first `CameraHolder` read instead of returning null.

## How to use

### Getting one

You do not construct it in normal play. The engine does, at `RangedSiegeWeaponViewController.cs:57`, and only when a `Mangonel` mission object appears during a siege mission. To reach an existing instance, walk the weapon's components: `((Mangonel)weapon).GetComponent<MangonelView>()`. That call is safe to repeat — the controller's own guard at `RangedSiegeWeaponViewController.cs:20` prevents a second view from ever being attached.

### Typical use

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.MissionViews;
using TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon;

[DefaultView]
public class MangonelCameraAudit : MissionView
{
    public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)
    {
        base.OnObjectUsed(userAgent, usedObject);

        if (!userAgent.IsMainAgent || !(usedObject is StandingPoint))
        {
            return;
        }

        // Same walk the engine uses: standing point -> parent chain -> UsableMachine.
        WeakGameEntity entity = ((StandingPoint)usedObject).GameEntity;
        while (entity.IsValid && !entity.HasScriptOfType<UsableMachine>())
        {
            entity = entity.Parent;
        }

        if (!entity.IsValid)
        {
            return;
        }

        UsableMachine machine = entity.GetFirstScriptOfType<UsableMachine>();
        var view = machine?.GetComponent<RangedSiegeWeaponView>();
        if (view == null)
        {
            return;
        }

        // Forwarded straight through to the weapon; null disables weapon-camera mode.
        GameEntity cameraHolder = view.CameraHolder;

        // Whoever is seated; null while the weapon is unmanned.
        Agent pilot = view.PilotAgent;
    }
}
```

### The mistake that bites

Subclassing `MangonelView` and expecting the engine to pick it up. The selection is `rangedSiegeWeapon is Mangonel` followed by a literal `new MangonelView()` (`RangedSiegeWeaponViewController.cs:55`, `RangedSiegeWeaponViewController.cs:57`) in a private method — there is no virtual dispatch and no type registry anywhere on the path. Your subclass compiles, sits in your assembly unused, and the mangonel keeps the stock camera behaviour with no diagnostic. Extend `RangedSiegeWeaponView` and own the instance yourself from your own `MissionView`, or do not extend it at all.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MangonelView view = ...;
```

## See Also

- [BallistaView](../BallistaView) — the sibling branch of the same `is`-chain in the view controller
- [Mangonel](../Mangonel) — the mission-side weapon whose `is`-test selects this view
- [FireMangonel](../FireMangonel) — the mission behaviour that drives the loaded weapon
- [MissionView](../MissionView) — the base you extend to observe or drive mission views yourself
- [Area Index](../)