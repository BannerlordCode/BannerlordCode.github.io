---
title: "ArmyOverlayWidget"
description: "ArmyOverlayWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# ArmyOverlayWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class ArmyOverlayWidget : OverlayBaseWidget`  
**Base:** `OverlayBaseWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs`

## Overview

`ArmyOverlayWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends OverlayBaseWidget, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ArmyOverlayWidget`.
- **Instance members** (1): `OnLateUpdate`.
- **Extension points** (1): `OnLateUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ArmyOverlayWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public ArmyOverlayWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: OverlayBaseWidget.
var armyOverlayWidget = new ArmyOverlayWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [OverlayBaseWidget](../OverlayBaseWidget/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [ButtonWidget](../../gui/ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.

Section: [api/mission-ext/](../) — the other types in this bucket.
