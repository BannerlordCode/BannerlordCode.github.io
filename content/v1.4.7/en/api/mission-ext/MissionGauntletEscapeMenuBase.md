---
title: "MissionGauntletEscapeMenuBase"
description: "MissionGauntletEscapeMenuBase — class in TaleWorlds.MountAndBlade.GauntletUI.Mission. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionGauntletEscapeMenuBase

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Mission`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public abstract class MissionGauntletEscapeMenuBase : MissionEscapeMenuView`  
**Base:** `MissionEscapeMenuView`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletEscapeMenuBase.cs`

## Overview

`MissionGauntletEscapeMenuBase` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionEscapeMenuView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionGauntletEscapeMenuBase`.
- **Instance members** (6): `GetEscapeMenuItems`, `OnMissionScreenFinalize`, `OnEscape`, `OnEscapeMenuToggled`, `OnMissionScreenTick`, `OnSceneRenderingStarted`.
- **Extension points** (5): `GetEscapeMenuItems`, `OnMissionScreenFinalize`, `OnEscape`, `OnMissionScreenTick`, `OnSceneRenderingStarted`.
- **Data and constants** (1): `DataSource`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnEscape` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionScreenTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSceneRenderingStarted` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetEscapeMenuItems` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `List<EscapeMenuItemVM>`. Read path: prefer it over reaching for the backing store. |
| `OnEscapeMenuToggled` | method | Protected — for subclasses only. Takes 1 argument: `bool isOpened`. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MissionGauntletEscapeMenuBase` | ctor | Protected — for subclasses only. Takes 1 argument: `string viewFile`. Returns ``. |
| `DataSource` | field | Protected — for subclasses only `EscapeMenuVM` field — direct storage with no validation or notification. |

- Constructed as `protected MissionGauntletEscapeMenuBase(string viewFile)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionEscapeMenuView.

// Lifecycle hooks this type declares:
//   public override void OnMissionScreenFinalize()
//   public override bool OnEscape()
//   protected bool OnEscapeMenuToggled(bool isOpened)
//   public override void OnMissionScreenTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletEscapeMenuBase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [EscapeMenuItemVM](../../viewmodel/EscapeMenuItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`.
- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [EscapeMenuVM](../../viewmodel/EscapeMenuVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`.
- [GauntletMovieIdentifier](../../engine/GauntletMovieIdentifier/) — `TaleWorlds.Engine.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
