---
title: "LauncherCircleLoadingAnimWidget"
description: "LauncherCircleLoadingAnimWidget — class in TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# LauncherCircleLoadingAnimWidget

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets`  
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Type:** `public class LauncherCircleLoadingAnimWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherCircleLoadingAnimWidget.cs`

## Overview

`LauncherCircleLoadingAnimWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LauncherCircleLoadingAnimWidget`.
- **Instance members** (10): `NumOfCirclesInASecond`, `FullAlpha`, `CircleRadius`, `StaySeconds`, `FadeInSeconds`, `FadeOutSeconds`, ….
- **Extension points** (3): `OnChildAdded`, `OnAfterChildRemoved`, `OnLateUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnAfterChildRemoved` | method (override) | Overrides the base member. Takes 2 arguments: `Widget child`, `int previousIndexOfChild`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnChildAdded` | method (override) | Overrides the base member. Takes 1 argument: `Widget child`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CircleRadius` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FadeInSeconds` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FadeOutSeconds` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FullAlpha` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `NumOfCirclesInASecond` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `StaySeconds` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `VisualState` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `LauncherCircleLoadingAnimWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public LauncherCircleLoadingAnimWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var launcherCircleLoadingAnimWidget = new LauncherCircleLoadingAnimWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnChildAdded(Widget child)
//   protected override void OnAfterChildRemoved(Widget child, int previousIndexOfChild)
//   protected override void OnLateUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherCircleLoadingAnimWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
