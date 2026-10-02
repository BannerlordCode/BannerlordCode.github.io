---
title: "TooltipPropertyWidget"
description: "TooltipPropertyWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# TooltipPropertyWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class TooltipPropertyWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/TooltipPropertyWidget.cs`

## Overview

`TooltipPropertyWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TooltipPropertyWidget`.
- **Instance members** (11): `IsTwoColumn`, `PropertyModifierAsFlag`, `IsMultiLine`, `IsBattleMode`, `IsBattleModeOver`, `IsCost`, ….
- **Extension points** (2): `OnUpdate`, `OnLateUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsBattleMode` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsBattleModeOver` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsCost` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsMultiLine` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsRelation` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTwoColumn` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `PropertyModifierAsFlag` | property | Instance entry point `TooltipPropertyWidget.TooltipPropertyFlags` property. Read it for current state; a declared setter writes that state in place. |
| `RefreshSize` | method | Instance entry point. Takes 6 arguments: `bool inBattleScope`, `float battleScopeSize`, `float maxValueLabelSizeX`, `float maxDefinitionLabelSizeX`, …. Called from the owner’s update loop — do not assume a frame boundary. |
| `SetBattleScope` | method | Instance entry point. Takes 1 argument: `bool battleScope`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `TooltipPropertyWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public TooltipPropertyWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var tooltipPropertyWidget = new TooltipPropertyWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnUpdate(float dt)
//   protected override void OnLateUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/TooltipPropertyWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [SpriteData](../../gui/SpriteData/) — `TaleWorlds.TwoDimension`.

Section: [api/mission-ext/](../) — the other types in this bucket.
