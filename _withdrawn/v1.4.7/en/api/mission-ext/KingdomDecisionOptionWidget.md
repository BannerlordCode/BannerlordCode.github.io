---
title: "KingdomDecisionOptionWidget"
description: "KingdomDecisionOptionWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# KingdomDecisionOptionWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class KingdomDecisionOptionWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionOptionWidget.cs`

## Overview

`KingdomDecisionOptionWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 9 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `KingdomDecisionOptionWidget`.
- **Instance members** (10): `SealVisualWidget`, `StrengthWidget`, `IsPlayerSupporter`, `IsAbstain`, `SealStartWidth`, `SealStartHeight`, ….
- **Extension points** (1): `OnLateUpdate`.
- **Data and constants** (1): `_isKingsOption`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsAbstain` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerSupporter` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SealAnimLength` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `SealEndHeight` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `SealEndWidth` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `SealStartHeight` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `SealStartWidth` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `SealVisualWidget` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `StrengthWidget` | property | Instance entry point `DecisionSupportStrengthListPanel` property. Read it for current state; a declared setter writes that state in place. |
| `KingdomDecisionOptionWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |
| `_isKingsOption` | field | Instance entry point `bool` field — direct storage with no validation or notification. |

- Constructed as `public KingdomDecisionOptionWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var kingdomDecisionOptionWidget = new KingdomDecisionOptionWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Kingdom/KingdomDecisionOptionWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DecisionSupportStrengthListPanel](../DecisionSupportStrengthListPanel/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/mission-ext/](../) — the other types in this bucket.
