---
title: "PerkItemButtonWidget"
description: "PerkItemButtonWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper. 14 public members (0 static)."
---

<!-- v147-skeleton -->
# PerkItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class PerkItemButtonWidget : ButtonWidget`  
**Base:** `ButtonWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs`

## Overview

`PerkItemButtonWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ButtonWidget, so the members it does not redeclare are inherited from there. 11 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PerkItemButtonWidget`.
- **Instance members** (13): `NotEarnedPerkBrush`, `EarnedNotSelectedPerkBrush`, `EarnedActivePerkBrush`, `EarnedNotActivePerkBrush`, `EarnedPreviousPerkNotSelectedPerkBrush`, `PerkVisualWidgetParent`, ….
- **Extension points** (2): `OnLateUpdate`, `HandleClick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `HandleClick` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AlternativeType` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `AnimState` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `EarnedActivePerkBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `EarnedNotActivePerkBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `EarnedNotSelectedPerkBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `EarnedPreviousPerkNotSelectedPerkBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `Level` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `NotEarnedPerkBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `PerkState` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `PerkVisualWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `PerkVisualWidgetParent` | property | Instance entry point `BrushWidget` property. Read it for current state; a declared setter writes that state in place. |
| `PerkItemButtonWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public PerkItemButtonWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ButtonWidget.
var perkItemButtonWidget = new PerkItemButtonWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
//   protected override void HandleClick()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ButtonWidget](../../gui/ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [BrushWidget](../../gui/BrushWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [SpriteData](../../gui/SpriteData/) — `TaleWorlds.TwoDimension`.

Section: [api/mission-ext/](../) — the other types in this bucket.
