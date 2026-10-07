---
title: "BricoleView"
description: "Auto-generated class reference for BricoleView."
---
# BricoleView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BricoleView : RangedSiegeWeaponView`
**Base:** `RangedSiegeWeaponView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/BricoleView.cs`

## Overview

`BricoleView` is a named, empty subclass of `RangedSiegeWeaponView` (`BricoleView.cs:6`). It declares no members at all — the class body is `{ }`. It exists purely as a distinct runtime type so that the engine's siege-weapon view registry can tell a *bricole* (the scaling ladder/hook siege weapon) apart from every other ranged siege weapon, and it inherits all of its behaviour from the base.

That inherited behaviour is substantial and is what you are actually working with. `RangedSiegeWeaponView` is itself a `UsableMissionObjectComponent` (`RangedSiegeWeaponView.cs:10`), so a `BricoleView` is both a mission-object component and the thing that drives the weapon's aiming camera. In `OnAdded` it checks the weapon's `CameraHolder` entity and, if present, creates a camera and binds it to that entity (`RangedSiegeWeaponView.cs:120`). `IsOnTickRequired` returns `true` unconditionally (`RangedSiegeWeaponView.cs:79`), so it ticks every frame while the scene is live.

It takes over the player's view when the pilot is the main agent: `StartUsingWeaponCamera` assigns `MissionScreen.CustomCamera` and sets `Agent.Main.IsLookDirectionLocked = true` (`RangedSiegeWeaponView.cs:140`, `RangedSiegeWeaponView.cs:141`). Rotation is clamped to a fixed cone — yaw between π/2 and 3π/2, pitch between π/3 and 100°-ish (`RangedSiegeWeaponView.cs:170`) — so the player cannot look around freely while manning the weapon. Aiming input is forwarded straight to the weapon as a two-axis vector via `RangedSiegeWeapon.GiveInput(num, num2)` (`RangedSiegeWeaponView.cs:249`).

## Mental Model

Because the class is empty, everything you might want to customise lives in `protected virtual` methods on the base: `StartUsingWeaponCamera` and `HandleUserInput` are both virtual, so overriding them in a `BricoleView` subclass is the intended extension route. `HandleUserCameraRotation` and `HandleUserAiming` are private on the base and cannot be reached.

Two behaviours in the base are easy to misread. `OnTick` skips input handling entirely during a replay (`GameNetwork.IsReplay`) — aiming is client-side only, so a recorded battle shows no weapon aiming from this component. And `ResetCamera` only releases the view if it *still* owns it: it checks `MissionScreen.CustomCamera == this.Camera` first, and only then clears the lock and calls `SetExtraCameraParameters(false, 0f)`. If another system has already replaced `CustomCamera`, this component silently leaves `Agent.Main.IsLookDirectionLocked` as it found it rather than forcing it back on.

Note also that the camera is created in `OnAdded`, which runs before the mission object has finished being set up in every code path. If `CameraHolder` is null at that moment, no camera is created, and there is no later retry — the weapon simply never gets a weapon camera for the rest of the mission.

## How to use

**Getting it.** It is created by the mission's view layer as part of the siege weapon's component set, not by you in normal play. The realistic mod use is to subclass and register your subclass in place of it:

```csharp
public class MyBricoleView : BricoleView
{
    protected override void StartUsingWeaponCamera()
    {
        base.StartUsingWeaponCamera();
        // Widen the aim cone the base would otherwise clamp.
        MBDebug.Print("bricole camera engaged");
    }

    protected override void HandleUserInput(float dt)
    {
        // Skip the base if you want to take full control of aiming.
        base.HandleUserInput(dt);
    }
}
```

**Typical use** — reaching the weapon this view is bound to, from your own behaviour:

```csharp
public class MySiegeBehaviour : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        BricoleView view = Mission.Current.GetView<BricoleView>();
        if (view == null) return;

        RangedSiegeWeapon weapon = view.RangedSiegeWeapon;
        Agent pilot = view.PilotAgent;
        if (weapon != null && pilot == null)
            MBDebug.Print("bricole has no pilot; not aiming");
    }
}
```

**Most common mistake, and what it costs.** Expecting `BricoleView` to be a place to put aiming logic because its name says "view". It has no code to put it in — every aiming decision is made by private base methods. The realistic failure is subclassing it, overriding `HandleUserInput`, calling `base` for convenience, and then fighting the clamps: `HandleUserCameraRotation` hard-clamps yaw and pitch to the weapon-camera cone every frame, so any attempt to aim with a wider arc from a subclass is silently overwritten on the next tick, and the player's aim snaps back toward the cone. Override `StartUsingWeaponCamera` to change *what* is engaged, and supply your own input handling *without* calling `base` if you need to leave the cone.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
BricoleView view = ...;
```

## See Also

- [Area Index](../)
- [RangedSiegeWeaponViewController](../RangedSiegeWeaponViewController)
- [MissionSiegeEnginesLogic](../MissionSiegeEnginesLogic)
- [UsableMissionObjectComponent](../UsableMissionObjectComponent)
- [BricoleView (中文页面)](../../../../zh/api/mission-ext/BricoleView)