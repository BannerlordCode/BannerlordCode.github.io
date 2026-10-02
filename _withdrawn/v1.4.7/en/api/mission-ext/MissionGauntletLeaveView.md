---
title: "MissionGauntletLeaveView"
description: "MissionGauntletLeaveView — class in TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionGauntletLeaveView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class MissionGauntletLeaveView : MissionView`  
**Base:** `MissionView`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletLeaveView.cs`

## Overview

`MissionGauntletLeaveView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (5): `OnMissionScreenInitialize`, `OnMissionScreenFinalize`, `OnMissionTick`, `OnPhotoModeActivated`, `OnPhotoModeDeactivated`.
- **Extension points** (5): `OnMissionScreenInitialize`, `OnMissionScreenFinalize`, `OnMissionTick`, `OnPhotoModeActivated`, `OnPhotoModeDeactivated`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnMissionScreenFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeActivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeDeactivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionView.

// Lifecycle hooks this type declares:
//   public override void OnMissionScreenInitialize()
//   public override void OnMissionScreenFinalize()
//   public override void OnMissionTick(float dt)
//   public override void OnPhotoModeActivated()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletLeaveView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionLeaveVM](../../viewmodel/MissionLeaveVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
