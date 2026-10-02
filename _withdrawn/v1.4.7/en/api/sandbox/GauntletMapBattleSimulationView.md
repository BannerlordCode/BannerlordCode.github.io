---
title: "GauntletMapBattleSimulationView"
description: "GauntletMapBattleSimulationView — class in SandBox.GauntletUI.Map. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletMapBattleSimulationView

**Namespace:** `SandBox.GauntletUI.Map`  
**Module:** `SandBox.GauntletUI`  
**Type:** `public class GauntletMapBattleSimulationView : MapView`  
**Base:** `MapView`  
**Source:** `SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs`

## Overview

`GauntletMapBattleSimulationView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MapView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletMapBattleSimulationView`.
- **Instance members** (5): `OnMapConversationStart`, `OnMapConversationOver`, `CreateLayout`, `OnFinalize`, `OnMapScreenUpdate`.
- **Extension points** (5): `OnMapConversationStart`, `OnMapConversationOver`, `CreateLayout`, `OnFinalize`, `OnMapScreenUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateLayout` | method (override) | Overrides the base member. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapConversationOver` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapConversationStart` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMapScreenUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GauntletMapBattleSimulationView` | ctor | Instance entry point. Takes 1 argument: `SPScoreboardVM dataSource`. Returns ``. |

- Constructed as `public GauntletMapBattleSimulationView(SPScoreboardVM dataSource)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MapView.
var gauntletMapBattleSimulationView = new GauntletMapBattleSimulationView(dataSource);

// Lifecycle hooks this type declares:
//   protected override void OnMapConversationStart()
//   protected override void OnMapConversationOver()
//   protected override void CreateLayout()
//   protected override void OnFinalize()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BattleSimulationMapView](../BattleSimulationMapView/) — `SandBox.View.Map`.
- [SPScoreboardVM](../SPScoreboardVM/) — `SandBox.ViewModelCollection`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [MapScreen](../MapScreen/) — `SandBox.View.Map`.

Section: [api/sandbox/](../) — the other types in this bucket.
