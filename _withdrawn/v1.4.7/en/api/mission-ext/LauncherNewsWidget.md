---
title: "LauncherNewsWidget"
description: "LauncherNewsWidget — class in TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# LauncherNewsWidget

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets`  
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Type:** `public class LauncherNewsWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherNewsWidget.cs`

## Overview

`LauncherNewsWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LauncherNewsWidget`.
- **Instance members** (6): `TimeToShowNewsItemInSeconds`, `RadioButtonContainer`, `TimeLeftFillWidget`, `OnLateUpdate`, `OnChildAdded`, `OnAfterChildRemoved`.
- **Extension points** (3): `OnLateUpdate`, `OnChildAdded`, `OnAfterChildRemoved`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnAfterChildRemoved` | method (override) | Overrides the base member. Takes 2 arguments: `Widget child`, `int previousIndexOfChild`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnChildAdded` | method (override) | Overrides the base member. Takes 1 argument: `Widget child`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RadioButtonContainer` | property | Instance entry point `ListPanel` property. Read it for current state; a declared setter writes that state in place. |
| `TimeLeftFillWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `TimeToShowNewsItemInSeconds` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `LauncherNewsWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public LauncherNewsWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var launcherNewsWidget = new LauncherNewsWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
//   protected override void OnChildAdded(Widget child)
//   protected override void OnAfterChildRemoved(Widget child, int previousIndexOfChild)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherNewsWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [ButtonWidget](../../gui/ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.

Section: [api/mission-ext/](../) — the other types in this bucket.
