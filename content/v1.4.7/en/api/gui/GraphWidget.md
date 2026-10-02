---
title: "GraphWidget"
description: "GraphWidget — class in TaleWorlds.GauntletUI.ExtraWidgets.Graph. 23 public members (0 static)."
---

<!-- v147-skeleton -->
# GraphWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets.Graph`  
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`  
**Type:** `public class GraphWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs`

## Overview

`GraphWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 21 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GraphWidget`.
- **Instance members** (22): `OnLateUpdate`, `RowCount`, `ColumnCount`, `HorizontalLabelCount`, `HorizontalMinValue`, `HorizontalMaxValue`, ….
- **Extension points** (1): `OnLateUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `BottomSpace` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ColumnCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `HorizontalLabelCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `HorizontalMaxValue` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `HorizontalMinValue` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `HorizontalValueLabelsBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `LeftSpace` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `LineBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `LineContainerWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `NumberOfValueLabelDecimalPlaces` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PlaneLineColor` | property | Instance entry point `Color` property. Read it for current state; a declared setter writes that state in place. |
| `PlaneLineSprite` | property | Instance entry point `Sprite` property. Read it for current state; a declared setter writes that state in place. |
| `PlaneMarginRight` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `PlaneMarginTop` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `RightSpace` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `RowCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `TopSpace` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `VerticalLabelCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `VerticalMaxValue` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `VerticalMinValue` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `VerticalValueLabelsBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `GraphWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public GraphWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var graphWidget = new GraphWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../UIContext/) — `TaleWorlds.GauntletUI`.
- [GraphLineWidget](../GraphLineWidget/) — `TaleWorlds.GauntletUI.ExtraWidgets.Graph`.
- [GraphLinePointWidget](../GraphLinePointWidget/) — `TaleWorlds.GauntletUI.ExtraWidgets.Graph`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/gui/](../) — the other types in this bucket.
