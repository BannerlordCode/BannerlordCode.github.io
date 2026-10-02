---
title: "NameMarkerListPanel"
description: "NameMarkerListPanel — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# NameMarkerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class NameMarkerListPanel : ListPanel`  
**Base:** `ListPanel`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerListPanel.cs`

## Overview

`NameMarkerListPanel` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ListPanel, so the members it does not redeclare are inherited from there. 6 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `NameMarkerListPanel`.
- **Instance members** (8): `FarAlphaTarget`, `FarDistanceCutoff`, `CloseDistanceCutoff`, `HasTypeMarker`, `Rect`, `IsInScreenBoundaries`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CloseDistanceCutoff` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FarAlphaTarget` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FarDistanceCutoff` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `HasTypeMarker` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInScreenBoundaries` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Rect` | property | Instance entry point `MarkerRect` property. Read it for current state; a declared setter writes that state in place. |
| `Update` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdateRectangle` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `NameMarkerListPanel` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public NameMarkerListPanel(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ListPanel.
var nameMarkerListPanel = new NameMarkerListPanel(context);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerListPanel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MarkerRect](../MarkerRect/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [BrushWidget](../../gui/BrushWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.

Section: [api/mission-ext/](../) — the other types in this bucket.
