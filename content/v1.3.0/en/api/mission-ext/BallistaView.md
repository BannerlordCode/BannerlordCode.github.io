---
title: "BallistaView"
description: "Auto-generated class reference for BallistaView."
---
# BallistaView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BallistaView : RangedSiegeWeaponView`
**Base:** `RangedSiegeWeaponView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/BallistaView.cs`

## Overview

`BallistaView` is the mission-view half of the ballista siege weapon: `public class BallistaView : RangedSiegeWeaponView` (`BallistaView.cs:7`), and `RangedSiegeWeaponView` is itself a `UsableMissionObjectComponent` (`RangedSiegeWeaponView.cs:10`). So a view instance here is not a screen you look up — it is a component bolted onto the weapon object, living and dying with that weapon inside the mission.

Exactly one place creates it: a hard-coded `rangedSiegeWeapon is Ballista` type test inside the private `RangedSiegeWeaponViewController.AddRangedSiegeWeaponView` (`RangedSiegeWeaponViewController.cs:61`), which then calls `Initialize(weapon, screen)` (`RangedSiegeWeaponView.cs:48`) and attaches the result with `AddComponent` (`RangedSiegeWeaponViewController.cs:68`). There is no view registry and no name lookup: Trebuchet gets `TrebuchetView`, Mangonel gets `MangonelView`, and anything else falls back to a plain `RangedSiegeWeaponView`.

The type declares no fields at all. Its entire body is three overrides whose only job is to give the ballista a different aiming and camera feel from the other ranged siege weapons.

## Mental Model

`OnAdded` sets one flag, and the order matters: it calls `base.OnAdded(scene)` first and only then `this.UsesMouseForAiming = true` (`BallistaView.cs:13`). That is the view's own `protected bool UsesMouseForAiming` (`RangedSiegeWeaponView.cs:275`), and it is what switches `HandleUserAiming` from absolute mouse-position aiming to mouse-delta aiming (`RangedSiegeWeaponView.cs:199`). It is a *different field* from the identically named one on the missile side, which the game sets itself at `Ballista.cs:108` — the view's flag never reaches the weapon.

`StartUsingWeaponCamera` adds one call on top of the base: `base.MissionScreen.SetExtraCameraParameters(true, 1.5f)` (`BallistaView.cs:20`). The parameters are `newForceCanZoom` and `newCameraRayCastStartingPointOffset` (`MissionScreen.cs:524`), so the ballista forces zoom and pushes the camera ray-cast origin 1.5 units forward. You only have to set it on the way in — the shared `ResetCamera` restores `SetExtraCameraParameters(false, 0f)` (`RangedSiegeWeaponView.cs:153`) on the way out.

The interesting member is the one with no body: `HandleUserCameraRotation(float dt)` is overridden empty (`BallistaView.cs:24`). The base implementation accumulates mouse X/Y movement into yaw and pitch and clamps both (`RangedSiegeWeaponView.cs:159`), and the base only calls it when `RangedSiegeWeapon.PlayerForceUse` is set (`RangedSiegeWeaponView.cs:106`). For a ballista the camera has to stay locked to the weapon's own aiming solution, so free-look rotation is deliberately suppressed. The override existing at all is the behaviour.

Two boundaries define when any of this runs. `HandleUserInput` gates everything on `CameraHolder != null && ((PilotAgent != null && PilotAgent.IsMainAgent) || RangedSiegeWeapon.PlayerForceUse)` (`RangedSiegeWeaponView.cs:97`), so none of the ballista special-casing applies to a remote weapon or an AI-operated one. And because the constructor call site is a private type switch rather than a factory, registering a view creator does nothing for this type.

## How to use

**Getting one.** Nothing constructs it on your behalf — the only `new BallistaView()` is inside that private controller method (`RangedSiegeWeaponViewController.cs:61`). To change ballista view behaviour you derive from `BallistaView` and attach the instance yourself, exactly as the controller does, or you change the shared `RangedSiegeWeaponView` behaviour and accept that trebuchets and mangonels get it too.

**Typical use** — a subclass with a wider camera ray-cast offset, installed by hand:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;
using TaleWorlds.MountAndBlade.View.MissionViews;
using TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon;
using TaleWorlds.MountAndBlade.View.Screens;

public class LooseAimBallistaView : BallistaView
{
    protected override void StartUsingWeaponCamera()
    {
        // Keeps UsesMouseForAiming = true and the stock 1.5f offset,
        // then widens it.
        base.StartUsingWeaponCamera();
        MissionScreen.SetExtraCameraParameters(true, 3f);
    }
}

// Install once, after the weapon exists in the mission:
MissionScreen screen = ScreenManager.TopScreen as MissionScreen;
Ballista weapon = /* the mission's Ballista */ null;

if (screen != null && weapon != null)
{
    LooseAimBallistaView view = new LooseAimBallistaView();
    view.Initialize(weapon, screen);      // RangedSiegeWeaponView.cs:48
    weapon.AddComponent(view);            // same call the controller makes
}
```

`ScreenManager.TopScreen` is the idiom the game itself uses to reach the live screen (`GauntletMapEncyclopediaView.cs:47`).

**Most common mistake:** keeping the base call when you re-implement the camera rotation.

```csharp
protected override void HandleUserCameraRotation(float dt)
{
    base.HandleUserCameraRotation(dt);   // re-enables free-look
    // ... your extra behaviour
}
```

The empty override in this class is intentional, not an oversight. Calling `base` turns mouse movement into camera yaw/pitch again, and because the ballista's aim is driven by `HandleUserAiming` from the same mouse input, the camera and the shot direction immediately disagree — the player drags the mouse, the weapon tracks it, and the camera swings the other way. If you want custom camera behaviour here, rotate the *weapon*, not the camera.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
BallistaView view = ...;
```

## See Also

- [Area Index](../)
- [RangedSiegeWeaponView — the base class that owns the shared aiming code](../RangedSiegeWeaponView)
- [TrebuchetView — an empty sibling, so a trebuchet gets stock behaviour](../TrebuchetView)
- [中文页面](../../../../zh/api/mission-ext/BallistaView)