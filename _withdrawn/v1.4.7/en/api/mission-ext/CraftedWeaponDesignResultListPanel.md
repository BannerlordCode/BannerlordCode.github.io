---
title: "CraftedWeaponDesignResultListPanel"
description: "CraftedWeaponDesignResultListPanel — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# CraftedWeaponDesignResultListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class CraftedWeaponDesignResultListPanel : ListPanel`  
**Base:** `ListPanel`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftedWeaponDesignResultListPanel.cs`

## Overview

`CraftedWeaponDesignResultListPanel` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ListPanel, so the members it does not redeclare are inherited from there. 15 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CraftedWeaponDesignResultListPanel`.
- **Instance members** (16): `ChangeValueTextWidget`, `ValueTextWidget`, `GoldEffectorTextWidget`, `PositiveChangeBrush`, `NegativeChangeBrush`, `NeutralBrush`, ….
- **Extension points** (1): `OnLateUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ChangeAmount` | property | Instance entry point `float` property. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ChangeValueTextWidget` | property | Instance entry point `CounterTextBrushWidget` property. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CounterStartTime` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FadeInTime` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FadeInTimeIndexOffset` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `GoldEffectorTextWidget` | property | Instance entry point `RichTextWidget` property. Read it for current state; a declared setter writes that state in place. |
| `InitValue` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `IsExceedingBeneficial` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsOrderResult` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LabelTextWidget` | property | Instance entry point `RichTextWidget` property. Read it for current state; a declared setter writes that state in place. |
| `NegativeChangeBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `NeutralBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `PositiveChangeBrush` | property | Instance entry point `Brush` property. Read it for current state; a declared setter writes that state in place. |
| `TargetValue` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ValueTextWidget` | property | Instance entry point `CounterTextBrushWidget` property. Read it for current state; a declared setter writes that state in place. |
| `CraftedWeaponDesignResultListPanel` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public CraftedWeaponDesignResultListPanel(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ListPanel.
var craftedWeaponDesignResultListPanel = new CraftedWeaponDesignResultListPanel(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftedWeaponDesignResultListPanel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Crafting](../../core-extra/Crafting/) — `TaleWorlds.Core`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
