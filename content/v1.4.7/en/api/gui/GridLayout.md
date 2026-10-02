---
title: "GridLayout"
description: "GridLayout — class in TaleWorlds.GauntletUI.Layout. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# GridLayout

**Namespace:** `TaleWorlds.GauntletUI.Layout`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class GridLayout : ILayout`  
**Base:** `ILayout`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs`

## Overview

`GridLayout` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ILayout, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GridLayout`.
- **Instance members** (5): `VerticalLayoutMethod`, `HorizontalLayoutMethod`, `Direction`, `RowHeights`, `ColumnWidths`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ColumnWidths` | property | Instance entry point `IReadOnlyList<float>` property. Read it for current state; a declared setter writes that state in place. |
| `Direction` | property | Instance entry point `GridDirection` property. Read it for current state; a declared setter writes that state in place. |
| `HorizontalLayoutMethod` | property | Instance entry point `GridHorizontalLayoutMethod` property. Read it for current state; a declared setter writes that state in place. |
| `RowHeights` | property | Instance entry point `IReadOnlyList<float>` property. Read it for current state; a declared setter writes that state in place. |
| `VerticalLayoutMethod` | property | Instance entry point `GridVerticalLayoutMethod` property. Read it for current state; a declared setter writes that state in place. |
| `GridLayout` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public GridLayout()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ILayout.
var gridLayout = new GridLayout();

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Layout/GridLayout.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GridVerticalLayoutMethod](../GridVerticalLayoutMethod/) — `TaleWorlds.GauntletUI.Layout`.
- [GridHorizontalLayoutMethod](../GridHorizontalLayoutMethod/) — `TaleWorlds.GauntletUI.Layout`.
- [GridDirection](../GridDirection/) — `TaleWorlds.GauntletUI.Layout`.
- [SpriteData](../SpriteData/) — `TaleWorlds.TwoDimension`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/gui/](../) — the other types in this bucket.
