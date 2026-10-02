---
title: "MissionGauntletCrosshair"
description: "MissionGauntletCrosshair — class in TaleWorlds.MountAndBlade.GauntletUI.Mission. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionGauntletCrosshair

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class MissionGauntletCrosshair : MissionBattleUIBaseView`  
**Base:** `MissionBattleUIBaseView`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletCrosshair.cs`

## Overview

`MissionGauntletCrosshair` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionBattleUIBaseView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (9): `OnCreateView`, `OnDestroyView`, `OnSuspendView`, `OnResumeView`, `OnMissionScreenTick`, `GetShouldArrowsBeVisible`, ….
- **Extension points** (9): `OnCreateView`, `OnDestroyView`, `OnSuspendView`, `OnResumeView`, `OnMissionScreenTick`, `GetShouldArrowsBeVisible`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnMissionScreenTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeActivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPhotoModeDeactivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCreateView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDestroyView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnResumeView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSuspendView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetShouldArrowsBeVisible` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetShouldCrosshairBeVisible` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionBattleUIBaseView.

// Lifecycle hooks this type declares:
//   protected override void OnCreateView()
//   protected override void OnDestroyView()
//   protected override void OnSuspendView()
//   protected override void OnResumeView()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletCrosshair.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionBattleUIBaseView](../MissionBattleUIBaseView/) — `TaleWorlds.MountAndBlade.View.MissionViews`.
- [CrosshairVM](../../viewmodel/CrosshairVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`.
- [StackArray](../../core-extra/StackArray/) — `TaleWorlds.Core`.
- [AgentVisuals](../AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [GauntletMovieIdentifier](../../engine/GauntletMovieIdentifier/) — `TaleWorlds.Engine.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
