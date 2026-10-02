---
title: "GauntletMovie"
description: "GauntletMovie — class in TaleWorlds.GauntletUI.Data. 15 public members (1 static)."
---

<!-- v147-skeleton -->
# GauntletMovie

**Namespace:** `TaleWorlds.GauntletUI.Data`  
**Module:** `TaleWorlds.GauntletUI.Data`  
**Type:** `public class GauntletMovie : IGauntletMovie`  
**Base:** `IGauntletMovie`  
**Source:** `TaleWorlds.GauntletUI.Data/GauntletMovie.cs`

## Overview

`GauntletMovie` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends IGauntletMovie, so the members it does not redeclare are inherited from there. 9 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `Load`.
- **Instance members** (14): `WidgetFactory`, `BrushFactory`, `Context`, `ViewModel`, `MovieName`, `RootView`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Load` | method (static) | Static entry point. Takes 6 arguments: `UIContext context`, `WidgetFactory widgetFactory`, `string movieName`, `IViewModel datasource`, …. Returns `IGauntletMovie`. |
| `BrushFactory` | property | Instance entry point `BrushFactory` property. Read it for current state; a declared setter writes that state in place. |
| `Context` | property | Instance entry point `UIContext` property. Read it for current state; a declared setter writes that state in place. |
| `FindViewOf` | method | Instance entry point. Takes 1 argument: `Widget widget`. Returns `GauntletView`. Read path: prefer it over reaching for the backing store. |
| `IsLoaded` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsReleased` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MovieName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `RefreshBindingWithChildren` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshDataSource` | method | Instance entry point. Takes 1 argument: `IViewModel dataSourve`. Called from the owner’s update loop — do not assume a frame boundary. |
| `Release` | method | Instance entry point. Takes no arguments. |
| `RootView` | property | Instance entry point `GauntletView` property. Read it for current state; a declared setter writes that state in place. |
| `RootWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `Update` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ViewModel` | property | Instance entry point `IViewModel` property. Read it for current state; a declared setter writes that state in place. |
| `WidgetFactory` | property | Instance entry point `WidgetFactory` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: IGauntletMovie.
GauntletMovie.Load(context, widgetFactory, movieName, datasource, doNotUseGeneratedPrefabs, hotReloadEnabled);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.GauntletUI.Data/GauntletMovie.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IGauntletMovie](../IGauntletMovie/) — `TaleWorlds.GauntletUI.Data`.
- [BrushFactory](../BrushFactory/) — `TaleWorlds.GauntletUI`.
- [UIContext](../UIContext/) — `TaleWorlds.GauntletUI`.
- [GauntletView](../GauntletView/) — `TaleWorlds.GauntletUI.Data`.

Section: [api/gui/](../) — the other types in this bucket.
