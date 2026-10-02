---
title: "GameMenuWidget"
description: "GameMenuWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# GameMenuWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class GameMenuWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs`

## Overview

`GameMenuWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameMenuWidget`.
- **Instance members** (10): `EncounterModeMenuWidth`, `EncounterModeMenuHeight`, `EncounterModeMenuMarginTop`, `NormalModeMenuWidth`, `NormalModeMenuHeight`, `NormalModeMenuMarginTop`, ….
- **Extension points** (1): `OnLateUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `EncounterModeMenuHeight` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `EncounterModeMenuMarginTop` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `EncounterModeMenuWidth` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `IsOverlayExtended` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `NormalModeMenuHeight` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `NormalModeMenuMarginTop` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `NormalModeMenuWidth` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnOptionStateChanged` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `UpdateOverlayState` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `GameMenuWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public GameMenuWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var gameMenuWidget = new GameMenuWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
//   public void OnOptionStateChanged()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [ButtonWidget](../../gui/ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [BrushWidget](../../gui/BrushWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.

Section: [api/mission-ext/](../) — the other types in this bucket.
