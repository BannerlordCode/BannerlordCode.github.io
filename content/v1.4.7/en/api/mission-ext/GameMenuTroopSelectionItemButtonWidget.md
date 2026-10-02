---
title: "GameMenuTroopSelectionItemButtonWidget"
description: "GameMenuTroopSelectionItemButtonWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# GameMenuTroopSelectionItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class GameMenuTroopSelectionItemButtonWidget : ButtonWidget`  
**Base:** `ButtonWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuTroopSelectionItemButtonWidget.cs`

## Overview

`GameMenuTroopSelectionItemButtonWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ButtonWidget, so the members it does not redeclare are inherited from there. 10 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameMenuTroopSelectionItemButtonWidget`.
- **Instance members** (12): `AddButtonWidget`, `RemoveButtonWidget`, `CheckmarkVisualWidget`, `AddRemoveControls`, `HeroHealthParent`, `OnLateUpdate`, ….
- **Extension points** (2): `OnLateUpdate`, `HandleClick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `HandleClick` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AddButtonWidget` | property | Instance entry point `ButtonWidget` property. Adds to the collection or relation this type owns. |
| `AddRemoveControls` | property | Instance entry point `Widget` property. Adds to the collection or relation this type owns. |
| `CheckmarkVisualWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentAmount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `HeroHealthParent` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `IsLocked` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsRosterFull` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTroopHero` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MaxAmount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `RemoveButtonWidget` | property | Instance entry point `ButtonWidget` property. Removes from or clears the collection this type owns. |
| `GameMenuTroopSelectionItemButtonWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public GameMenuTroopSelectionItemButtonWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ButtonWidget.
var gameMenuTroopSelectionItemButtonWidget = new GameMenuTroopSelectionItemButtonWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
//   protected override void HandleClick()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuTroopSelectionItemButtonWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ButtonWidget](../../gui/ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
