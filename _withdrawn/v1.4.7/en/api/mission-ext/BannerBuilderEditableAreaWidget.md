---
title: "BannerBuilderEditableAreaWidget"
description: "BannerBuilderEditableAreaWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# BannerBuilderEditableAreaWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class BannerBuilderEditableAreaWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs`

## Overview

`BannerBuilderEditableAreaWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 8 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BannerBuilderEditableAreaWidget`.
- **Instance members** (10): `DragWidgetTopRight`, `DragWidgetRight`, `DragWidgetTop`, `RotateWidget`, `BannerTableauWidget`, `EditableAreaVisualWidget`, ….
- **Extension points** (2): `OnUpdate`, `OnLateUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `BannerTableauWidget` | property | Instance entry point `BannerTableauWidget` property. Read it for current state; a declared setter writes that state in place. |
| `DragWidgetRight` | property | Instance entry point `ButtonWidget` property. Read it for current state; a declared setter writes that state in place. |
| `DragWidgetTop` | property | Instance entry point `ButtonWidget` property. Read it for current state; a declared setter writes that state in place. |
| `DragWidgetTopRight` | property | Instance entry point `ButtonWidget` property. Read it for current state; a declared setter writes that state in place. |
| `EditableAreaVisualWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `IsMirrorActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LayerIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `RotateWidget` | property | Instance entry point `ButtonWidget` property. Read it for current state; a declared setter writes that state in place. |
| `BannerBuilderEditableAreaWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public BannerBuilderEditableAreaWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var bannerBuilderEditableAreaWidget = new BannerBuilderEditableAreaWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnUpdate(float dt)
//   protected override void OnLateUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ButtonWidget](../../gui/ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [BannerTableauWidget](../BannerTableauWidget/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/mission-ext/](../) — the other types in this bucket.
