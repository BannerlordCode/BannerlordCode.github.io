---
title: "GeneratedGauntletMovie"
description: "GeneratedGauntletMovie — class in TaleWorlds.GauntletUI.Data. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# GeneratedGauntletMovie

**Namespace:** `TaleWorlds.GauntletUI.Data`  
**Module:** `TaleWorlds.GauntletUI.Data`  
**Type:** `public class GeneratedGauntletMovie : IGauntletMovie`  
**Base:** `IGauntletMovie`  
**Source:** `TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs`

## Overview

`GeneratedGauntletMovie` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends IGauntletMovie, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GeneratedGauntletMovie`.
- **Instance members** (9): `Context`, `RootWidget`, `MovieName`, `IsLoaded`, `IsReleased`, `Update`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Context` | property | Instance entry point `UIContext` property. Read it for current state; a declared setter writes that state in place. |
| `IsLoaded` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsReleased` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MovieName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OnResourcesRefreshed` | method | Instance entry point. Takes 4 arguments: `SpriteData spriteData`, `WidgetFactory widgetFactory`, `BrushFactory brushFactory`, `FontFactory fontFactory`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshBindingWithChildren` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Release` | method | Instance entry point. Takes no arguments. |
| `RootWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `Update` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `GeneratedGauntletMovie` | ctor | Instance entry point. Takes 2 arguments: `string movieName`, `Widget rootWidget`. Returns ``. |

- Constructed as `public GeneratedGauntletMovie(string movieName, Widget rootWidget)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: IGauntletMovie.
var generatedGauntletMovie = new GeneratedGauntletMovie(movieName, rootWidget);

// Lifecycle hooks this type declares:
//   public void OnResourcesRefreshed(SpriteData spriteData, WidgetFactory widgetFactory, BrushFactory brushFactory, FontFactory fontFactory)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.GauntletUI.Data/GeneratedGauntletMovie.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IGauntletMovie](../IGauntletMovie/) — `TaleWorlds.GauntletUI.Data`.
- [UIContext](../UIContext/) — `TaleWorlds.GauntletUI`.
- [IGeneratedGauntletMovieRoot](../IGeneratedGauntletMovieRoot/) — `TaleWorlds.GauntletUI.Data`.
- [SpriteData](../SpriteData/) — `TaleWorlds.TwoDimension`.
- [BrushFactory](../BrushFactory/) — `TaleWorlds.GauntletUI`.

Section: [api/gui/](../) — the other types in this bucket.
