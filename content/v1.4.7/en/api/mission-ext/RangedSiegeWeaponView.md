---
title: "RangedSiegeWeaponView"
description: "RangedSiegeWeaponView — class in TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# RangedSiegeWeaponView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class RangedSiegeWeaponView : UsableMissionObjectComponent`  
**Base:** `UsableMissionObjectComponent`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs`

## Overview

`RangedSiegeWeaponView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends UsableMissionObjectComponent, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (14): `RangedSiegeWeapon`, `MissionScreen`, `Camera`, `CameraHolder`, `PilotAgent`, `Initialize`, ….
- **Extension points** (8): `OnAdded`, `OnMissionReset`, `IsOnTickRequired`, `OnTick`, `HandleUserInput`, `StartUsingWeaponCamera`, ….
- **Data and constants** (1): `UsesMouseForAiming`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsOnTickRequired` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAdded` | method (override) | Overrides the base member. Takes 1 argument: `Scene scene`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionObjectDisabled` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionReset` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Camera` | property | Instance entry point `Camera` property. Read it for current state; a declared setter writes that state in place. |
| `CameraHolder` | property | Instance entry point `GameEntity` property. Read it for current state; a declared setter writes that state in place. |
| `HandleUserCameraRotation` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HandleUserInput` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Initialize` | method | Instance entry point. Takes 2 arguments: `RangedSiegeWeapon rangedSiegeWeapon`, `MissionScreen missionScreen`. |
| `MissionScreen` | property | Instance entry point `MissionScreen` property. Read it for current state; a declared setter writes that state in place. |
| `PilotAgent` | property | Instance entry point `Agent` property. Read it for current state; a declared setter writes that state in place. |
| `RangedSiegeWeapon` | property | Instance entry point `RangedSiegeWeapon` property. Read it for current state; a declared setter writes that state in place. |
| `StartUsingWeaponCamera` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `UsesMouseForAiming` | field | Protected — for subclasses only `bool` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: UsableMissionObjectComponent.

// Lifecycle hooks this type declares:
//   protected override void OnAdded(Scene scene)
//   protected override void OnMissionReset()
//   public override bool IsOnTickRequired()
//   protected override void OnTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/SiegeWeapon/RangedSiegeWeaponView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [SceneLayer](../../engine/SceneLayer/) — `TaleWorlds.Engine.Screens`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/mission-ext/](../) — the other types in this bucket.
