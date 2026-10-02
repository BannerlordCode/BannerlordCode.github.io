---
title: "ScrollablePanel"
description: "ScrollablePanel — class in TaleWorlds.GauntletUI.BaseTypes. 32 public members (0 static)."
---

<!-- v147-skeleton -->
# ScrollablePanel

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class ScrollablePanel : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs`

## Overview

`ScrollablePanel` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 12 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ScrollablePanel`.
- **Instance members** (24): `ClipRect`, `InnerPanel`, `ActiveScrollbar`, `UpdateScrollbarVisibility`, `FixedHeader`, `ScrolledHeader`, ….
- **Extension points** (3): `OnPreviewMouseScroll`, `OnPreviewRightStickMovement`, `OnLateUpdate`.
- **Data and constants** (7): `OnScroll`, `_canScrollHorizontal`, `_canScrollVertical`, `MouseScrollAxis`, `_scrollOffset`, `_verticalScrollbarInterpolationController`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPreviewMouseScroll` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPreviewRightStickMovement` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ActiveScrollbar` | property | Instance entry point `ScrollbarWidget` property. Read it for current state; a declared setter writes that state in place. |
| `AutoScrollParameters` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `ClipRect` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `ControllerScrollSpeed` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FixedHeader` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `HorizontalScrollbar` | property | Instance entry point `ScrollbarWidget` property. Read it for current state; a declared setter writes that state in place. |
| `InnerPanel` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `MouseScrollSpeed` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ResetTweenSpeed` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ScrolledHeader` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `ScrollToChild` | method | Instance entry point. Takes 2 arguments: `Widget targetWidget`, `ScrollablePanel.AutoScrollParameters scrollParameters`. |
| `SetHorizontalScrollTarget` | method | Instance entry point. Takes 2 arguments: `float targetValue`, `float interpolationDuration`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetVerticalScrollTarget` | method | Instance entry point. Takes 2 arguments: `float targetValue`, `float interpolationDuration`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `UpdateScrollbarVisibility` | property | Instance entry point `bool` property. Called from the owner’s update loop — do not assume a frame boundary. |
| `VerticalScrollbar` | property | Instance entry point `ScrollbarWidget` property. Read it for current state; a declared setter writes that state in place. |
| `GetScrollXValueForWidget` | method | Protected — for subclasses only. Takes 3 arguments: `Widget widget`, `float widgetTargetXValue`, `float offset`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetScrollYValueForWidget` | method | Protected — for subclasses only. Takes 3 arguments: `Widget widget`, `float widgetTargetYValue`, `float offset`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `OnMouseScroll` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRightStickMovement` | method | Protected — for subclasses only. Takes no arguments. Returns `internal override void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ScrollablePanel` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |
| `ScrollbarInterpolationController` | property | Protected — for subclasses only `class` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public ScrollablePanel(UIContext context)`.

8 further public members follow the same patterns.
## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var scrollablePanel = new ScrollablePanel(context);

// Lifecycle hooks this type declares:
//   public event Action<float> OnScroll
//   protected override bool OnPreviewMouseScroll()
//   protected override bool OnPreviewRightStickMovement()
//   protected internal override void OnMouseScroll()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../UIContext/) — `TaleWorlds.GauntletUI`.
- [GauntletGamepadNavigationManager](../GauntletGamepadNavigationManager/) — `TaleWorlds.GauntletUI.GamepadNavigation`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [AlignmentAxis](../AlignmentAxis/) — `TaleWorlds.GauntletUI`.
- [AnimationInterpolation](../AnimationInterpolation/) — `TaleWorlds.GauntletUI`.

Section: [api/gui/](../) — the other types in this bucket.
