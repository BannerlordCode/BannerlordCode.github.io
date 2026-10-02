---
title: "BrushWidget"
description: "BrushWidget — class in TaleWorlds.GauntletUI.BaseTypes. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# BrushWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class BrushWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BrushWidget.cs`

## Overview

`BrushWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BrushWidget`.
- **Instance members** (13): `ReadOnlyBrush`, `BrushRenderer`, `UpdateBrushes`, `IsBrushUpdateNeeded`, `UpdateBrushRendererInternal`, `SetState`, ….
- **Extension points** (7): `UpdateBrushes`, `SetState`, `RefreshState`, `OnRender`, `OnConnectedToRoot`, `UpdateAnimationPropertiesSubTask`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SetState` | method (override) | Overrides the base member. Takes 1 argument: `string stateName`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `UpdateAnimationPropertiesSubTask` | method (override) | Overrides the base member. Takes 1 argument: `float alphaFactor`. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdateBrushes` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnBrushChanged` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnConnectedToRoot` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRender` | method (override) | Overrides the base member. Takes 2 arguments: `TwoDimensionContext twoDimensionContext`, `TwoDimensionDrawContext drawContext`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshState` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `BrushRenderer` | property | Instance entry point `BrushRenderer` property. Read it for current state; a declared setter writes that state in place. |
| `ReadOnlyBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `BrushWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |
| `IsBrushUpdateNeeded` | method | Protected — for subclasses only. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `RegisterUpdateBrushes` | method | Protected — for subclasses only. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `UnRegisterUpdateBrushes` | method | Protected — for subclasses only. Takes no arguments. |
| `UpdateBrushRendererInternal` | method | Protected — for subclasses only. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |

- Constructed as `public BrushWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var brushWidget = new BrushWidget(context);

// Lifecycle hooks this type declares:
//   public override void UpdateBrushes(float dt)
//   public override void SetState(string stateName)
//   protected override void RefreshState()
//   protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BrushWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../UIContext/) — `TaleWorlds.GauntletUI`.
- [AudioProperty](../AudioProperty/) — `TaleWorlds.GauntletUI`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/gui/](../) — the other types in this bucket.
