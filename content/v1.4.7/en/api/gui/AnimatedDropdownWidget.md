---
title: "AnimatedDropdownWidget"
description: "AnimatedDropdownWidget — class in TaleWorlds.GauntletUI. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# AnimatedDropdownWidget

**Namespace:** `TaleWorlds.GauntletUI`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class AnimatedDropdownWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs`

## Overview

`AnimatedDropdownWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AnimatedDropdownWidget`.
- **Instance members** (11): `ScrollbarWidget`, `OnUpdate`, `OnDisconnectedFromRoot`, `OnLateUpdate`, `OpenPanel`, `ClosePanel`, ….
- **Extension points** (5): `OnUpdate`, `OnDisconnectedFromRoot`, `OnLateUpdate`, `OpenPanel`, `ClosePanel`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnDisconnectedFromRoot` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ClosePanel` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `OnButtonClick` | method | Instance entry point. Takes 1 argument: `Widget widget`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnListChanged` | method | Instance entry point. Takes 1 argument: `Widget widget`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnListChanged` | method | Instance entry point. Takes 2 arguments: `Widget parentWidget`, `Widget addedWidget`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSelectionChanged` | method | Instance entry point. Takes 1 argument: `Widget widget`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OpenPanel` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `ScrollbarWidget` | property | Instance entry point `ScrollbarWidget` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateButtonText` | method | Instance entry point. Takes 1 argument: `string text`. Called from the owner’s update loop — do not assume a frame boundary. |
| `AnimatedDropdownWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public AnimatedDropdownWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var animatedDropdownWidget = new AnimatedDropdownWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnUpdate(float dt)
//   protected override void OnDisconnectedFromRoot()
//   protected override void OnLateUpdate(float dt)
//   public void OnButtonClick(Widget widget)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimatedDropdownWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../UIContext/) — `TaleWorlds.GauntletUI`.
- [GamepadNavigationTypes](../GamepadNavigationTypes/) — `TaleWorlds.GauntletUI.GamepadNavigation`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [GamepadNavigationForcedScopeCollection](../GamepadNavigationForcedScopeCollection/) — `TaleWorlds.GauntletUI.GamepadNavigation`.
- [ButtonWidget](../ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [ScrollablePanel](../ScrollablePanel/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [GamepadNavigationScope](../GamepadNavigationScope/) — `TaleWorlds.GauntletUI.GamepadNavigation`.

Section: [api/gui/](../) — the other types in this bucket.
