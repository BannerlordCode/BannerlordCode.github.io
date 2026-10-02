---
title: "ButtonWidget"
description: "ButtonWidget — class in TaleWorlds.GauntletUI.BaseTypes. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# ButtonWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class ButtonWidget : ImageWidget`  
**Base:** `ImageWidget`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs`

## Overview

`ButtonWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ImageWidget, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ButtonWidget`.
- **Instance members** (11): `OnPreviewMousePressed`, `RefreshState`, `OnMousePressed`, `OnMouseReleased`, `OnMouseAlternatePressed`, `OnMouseAlternateReleased`, ….
- **Extension points** (4): `OnPreviewMousePressed`, `RefreshState`, `HandleClick`, `HandleAlternateClick`.
- **Data and constants** (2): `_maxDoubleClickDeltaTimeInSeconds`, `_lastClickTime`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnPreviewMousePressed` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshState` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ClickEventHandlers` | property | Instance entry point `List<Action<Widget>>` property. Read it for current state; a declared setter writes that state in place. |
| `HandleAlternateClick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HandleClick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsRadio` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsToggle` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ButtonWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |
| `OnMouseAlternatePressed` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMouseAlternateReleased` | method | Protected — for subclasses only. Takes 1 argument: `bool isFromInput`. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMousePressed` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMouseReleased` | method | Protected — for subclasses only. Takes 1 argument: `bool isFromInput`. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `_maxDoubleClickDeltaTimeInSeconds` | const | Protected — for subclasses only. Takes no arguments. Returns `float`. |
| `_lastClickTime` | field | Protected — for subclasses only `float` field — direct storage with no validation or notification. |

- Constructed as `public ButtonWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ImageWidget.
var buttonWidget = new ButtonWidget(context);

// Lifecycle hooks this type declares:
//   protected override bool OnPreviewMousePressed()
//   protected override void RefreshState()
//   protected internal override void OnMousePressed()
//   protected internal override void OnMouseReleased(bool isFromInput)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ButtonType](../ButtonType/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../UIContext/) — `TaleWorlds.GauntletUI`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [Container](../Container/) — `TaleWorlds.GauntletUI.BaseTypes`.

Section: [api/gui/](../) — the other types in this bucket.
