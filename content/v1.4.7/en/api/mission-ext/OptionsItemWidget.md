---
title: "OptionsItemWidget"
description: "OptionsItemWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options. 19 public members (0 static)."
---

<!-- v147-skeleton -->
# OptionsItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class OptionsItemWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsItemWidget.cs`

## Overview

`OptionsItemWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 13 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `OptionsItemWidget`.
- **Instance members** (18): `BooleanOption`, `NumericOption`, `StringOption`, `GameKeyOption`, `ActionOption`, `InputOption`, ….
- **Extension points** (4): `OnLateUpdate`, `OnHoverBegin`, `OnHoverEnd`, `OnGamepadNavigationIndexUpdated`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnGamepadNavigationIndexUpdated` | method (override) | Overrides the base member. Takes 1 argument: `int newIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnHoverBegin` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnHoverEnd` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ActionOption` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `BooleanOption` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `BooleanToggleButtonWidget` | property | Instance entry point `ButtonWidget` property. Read it for current state; a declared setter writes that state in place. |
| `DropdownWidget` | property | Instance entry point `AnimatedDropdownWidget` property. Read it for current state; a declared setter writes that state in place. |
| `GameKeyOption` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `ImageIDs` | property | Instance entry point `string[]` property. Read it for current state; a declared setter writes that state in place. |
| `InputOption` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `IsOptionEnabled` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `NumericOption` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `OptionDescription` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OptionTitle` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OptionTypeID` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `SetCurrentScreenWidget` | method | Instance entry point. Takes 1 argument: `OptionsScreenWidget screenWidget`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `StringOption` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `OptionsItemWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public OptionsItemWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var optionsItemWidget = new OptionsItemWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
//   protected override void OnHoverBegin()
//   protected override void OnHoverEnd()
//   protected override void OnGamepadNavigationIndexUpdated(int newIndex)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsItemWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AnimatedDropdownWidget](../../gui/AnimatedDropdownWidget/) — `TaleWorlds.GauntletUI`.
- [ButtonWidget](../../gui/ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [SpriteData](../../gui/SpriteData/) — `TaleWorlds.TwoDimension`.
- [OptionsScreenWidget](../OptionsScreenWidget/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`.

Section: [api/mission-ext/](../) — the other types in this bucket.
