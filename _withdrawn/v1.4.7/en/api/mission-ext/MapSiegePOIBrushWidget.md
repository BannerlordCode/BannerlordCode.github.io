---
title: "MapSiegePOIBrushWidget"
description: "MapSiegePOIBrushWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege. 19 public members (0 static)."
---

<!-- v147-skeleton -->
# MapSiegePOIBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class MapSiegePOIBrushWidget : BrushWidget`  
**Base:** `BrushWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs`

## Overview

`MapSiegePOIBrushWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends BrushWidget, so the members it does not redeclare are inherited from there. 14 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapSiegePOIBrushWidget`.
- **Instance members** (18): `Slider`, `ConstructionBrush`, `NormalBrush`, `ScreenPosition`, `OnUpdate`, `OnMousePressed`, ….
- **Extension points** (4): `OnUpdate`, `OnMousePressed`, `OnHoverBegin`, `OnHoverEnd`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnHoverBegin` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnHoverEnd` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMousePressed` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AnimState` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `ConstructionBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `ConstructionControllerWidget` | property | Instance entry point `MapSiegeConstructionControllerWidget` property. Read it for current state; a declared setter writes that state in place. |
| `HammerAnimWidget` | property | Instance entry point `BrushWidget` property. Read it for current state; a declared setter writes that state in place. |
| `IsConstructing` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInVisibleRange` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerSidePOI` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPOISelected` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MachineType` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MachineTypeIconWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `NormalBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `QueueIndex` | property | Instance entry point `int` property. Adds to the collection or relation this type owns. |
| `ScreenPosition` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `Slider` | property | Instance entry point `SliderWidget` property. Read it for current state; a declared setter writes that state in place. |
| `MapSiegePOIBrushWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public MapSiegePOIBrushWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: BrushWidget.
var mapSiegePOIBrushWidget = new MapSiegePOIBrushWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnUpdate(float dt)
//   protected override void OnMousePressed()
//   protected override void OnHoverBegin()
//   protected override void OnHoverEnd()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BrushWidget](../../gui/BrushWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [SpriteData](../../gui/SpriteData/) — `TaleWorlds.TwoDimension`.
- [MapSiegeConstructionControllerWidget](../MapSiegeConstructionControllerWidget/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege`.

Section: [api/mission-ext/](../) — the other types in this bucket.
