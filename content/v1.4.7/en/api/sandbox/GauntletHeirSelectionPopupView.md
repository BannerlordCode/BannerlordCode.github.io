---
title: "GauntletHeirSelectionPopupView"
description: "GauntletHeirSelectionPopupView — class in SandBox.GauntletUI.Map. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletHeirSelectionPopupView

**Namespace:** `SandBox.GauntletUI.Map`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletHeirSelectionPopupView : MapView`  
**Base:** `MapView`  
**Source:** `SandBox.GauntletUI/Map/GauntletHeirSelectionPopupView.cs`

## Overview

`GauntletHeirSelectionPopupView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MapView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletHeirSelectionPopupView`.
- **Instance members** (9): `CreateLayout`, `OnFrameTick`, `OnMenuModeTick`, `OnIdleTick`, `OnFinalize`, `OnMapConversationStart`, ….
- **Extension points** (9): `CreateLayout`, `OnFrameTick`, `OnMenuModeTick`, `OnIdleTick`, `OnFinalize`, `OnMapConversationStart`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateLayout` | method (override) | Overrides the base member. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `IsEscaped` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFrameTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnIdleTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapConversationOver` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapConversationStart` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMenuModeTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GauntletHeirSelectionPopupView` | ctor | Instance entry point. Takes 2 arguments: `Dictionary<Hero`, `int> heirApparents`. Returns ``. |

- Constructed as `public GauntletHeirSelectionPopupView(Dictionary<Hero, int> heirApparents)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MapView.
var gauntletHeirSelectionPopupView = new GauntletHeirSelectionPopupView(theTarget, heirApparents);

// Lifecycle hooks this type declares:
//   protected override void CreateLayout()
//   protected override void OnFrameTick(float dt)
//   protected override void OnMenuModeTick(float dt)
//   protected override void OnIdleTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/Map/GauntletHeirSelectionPopupView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [HeirSelectionPopupVM](../../viewmodel/HeirSelectionPopupVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [UISoundsHelper](../../mission-ext/UISoundsHelper/) — `TaleWorlds.MountAndBlade.View`.
- [GauntletMovieIdentifier](../../engine/GauntletMovieIdentifier/) — `TaleWorlds.Engine.GauntletUI`.
- [SpriteCategory](../../gui/SpriteCategory/) — `TaleWorlds.TwoDimension`.

Section: [api/sandbox/](../) — the other types in this bucket.
