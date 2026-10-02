---
title: "GauntletView"
description: "GauntletView — class in TaleWorlds.GauntletUI.Data. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletView

**Namespace:** `TaleWorlds.GauntletUI.Data`  
**Module:** `TaleWorlds.GauntletUI.Data`  
**Type:** `public class GauntletView : WidgetComponent`  
**Base:** `WidgetComponent`  
**Source:** `TaleWorlds.GauntletUI.Data/GauntletView.cs`

## Overview

`GauntletView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends WidgetComponent, so the members it does not redeclare are inherited from there. 6 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (13): `GauntletMovie`, `ItemTemplateUsageWithData`, `ViewModelPath`, `ViewModelPathString`, `Parent`, `AddChild`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddChild` | method | Instance entry point. Takes 1 argument: `GauntletView child`. Adds to the collection or relation this type owns. |
| `BindData` | method | Instance entry point. Takes 2 arguments: `string property`, `BindingPath path`. |
| `DisplayName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `GauntletMovie` | property | Instance entry point `GauntletMovie` property. Read it for current state; a declared setter writes that state in place. |
| `ItemTemplateUsageWithData` | property | Instance entry point `ItemTemplateUsageWithData` property. Read it for current state; a declared setter writes that state in place. |
| `Parent` | property | Instance entry point `GauntletView` property. Read it for current state; a declared setter writes that state in place. |
| `RefreshBinding` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshBindingWithChildren` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ReleaseBindingWithChildren` | method | Instance entry point. Takes no arguments. |
| `RemoveChild` | method | Instance entry point. Takes 1 argument: `GauntletView child`. Removes from or clears the collection this type owns. |
| `SwapChildrenAtIndeces` | method | Instance entry point. Takes 2 arguments: `GauntletView child1`, `GauntletView child2`. |
| `ViewModelPath` | property | Instance entry point `BindingPath` property. Read it for current state; a declared setter writes that state in place. |
| `ViewModelPathString` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: WidgetComponent.
// No public constructor: the widget factory in the owning layer creates it.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.GauntletUI.Data/GauntletView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GauntletMovie](../GauntletMovie/) — `TaleWorlds.GauntletUI.Data`.

Section: [api/gui/](../) — the other types in this bucket.
