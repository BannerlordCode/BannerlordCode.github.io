---
title: "OptionsGamepadOptionItemListPanel"
description: "OptionsGamepadOptionItemListPanel — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# OptionsGamepadOptionItemListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class OptionsGamepadOptionItemListPanel : ListPanel`  
**Base:** `ListPanel`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadOptionItemListPanel.cs`

## Overview

`OptionsGamepadOptionItemListPanel` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ListPanel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `OptionsGamepadOptionItemListPanel`.
- **Instance members** (5): `TargetKey`, `ActionText`, `SetKeyProperties`, `KeyId`, `OnActionTextChangeEvent`.
- **Data and constants** (1): `OnActionTextChanged`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ActionText` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `KeyId` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnActionTextChangeEvent` | method | Instance entry point. Takes no arguments. Returns `delegate void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetKeyProperties` | method | Instance entry point. Takes 2 arguments: `OptionsGamepadKeyLocationWidget currentTarget`, `Widget parentAreaWidget`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `TargetKey` | property | Instance entry point `OptionsGamepadKeyLocationWidget` property. Read it for current state; a declared setter writes that state in place. |
| `OptionsGamepadOptionItemListPanel` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |
| `OnActionTextChanged` | field | Instance entry point `OptionsGamepadOptionItemListPanel.OnActionTextChangeEvent` field — direct storage with no validation or notification. |

- Constructed as `public OptionsGamepadOptionItemListPanel(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ListPanel.
var optionsGamepadOptionItemListPanel = new OptionsGamepadOptionItemListPanel(context);

// Lifecycle hooks this type declares:
//   public event OptionsGamepadOptionItemListPanel.OnActionTextChangeEvent OnActionTextChanged
//   public delegate void OnActionTextChangeEvent()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadOptionItemListPanel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [OptionsGamepadKeyLocationWidget](../OptionsGamepadKeyLocationWidget/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
