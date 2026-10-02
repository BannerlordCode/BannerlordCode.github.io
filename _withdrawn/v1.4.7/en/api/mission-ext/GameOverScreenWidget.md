---
title: "GameOverScreenWidget"
description: "GameOverScreenWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# GameOverScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class GameOverScreenWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameOver/GameOverScreenWidget.cs`

## Overview

`GameOverScreenWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameOverScreenWidget`.
- **Instance members** (5): `ConceptVisualWidget`, `BannerBrushWidget`, `BannerFrameBrushWidget1`, `BannerFrameBrushWidget2`, `GameOverReason`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BannerBrushWidget` | property | Instance entry point `BrushWidget` property. Read it for current state; a declared setter writes that state in place. |
| `BannerFrameBrushWidget1` | property | Instance entry point `BrushWidget` property. Read it for current state; a declared setter writes that state in place. |
| `BannerFrameBrushWidget2` | property | Instance entry point `BrushWidget` property. Read it for current state; a declared setter writes that state in place. |
| `ConceptVisualWidget` | property | Instance entry point `BrushWidget` property. Read it for current state; a declared setter writes that state in place. |
| `GameOverReason` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `GameOverScreenWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public GameOverScreenWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var gameOverScreenWidget = new GameOverScreenWidget(context);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameOver/GameOverScreenWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BrushWidget](../../gui/BrushWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/mission-ext/](../) — the other types in this bucket.
