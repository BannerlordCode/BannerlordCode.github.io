---
title: "PartyManageTroopPopupWidget"
description: "PartyManageTroopPopupWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# PartyManageTroopPopupWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class PartyManageTroopPopupWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs`

## Overview

`PartyManageTroopPopupWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 6 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyManageTroopPopupWidget`.
- **Instance members** (7): `PrimaryInputKeyVisualParent`, `SecondaryInputKeyVisualParent`, `TertiaryInputKeyVisualParent`, `OnLateUpdate`, `IsPrimaryActionAvailable`, `IsSecondaryActionAvailable`, ….
- **Extension points** (1): `OnLateUpdate`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsPrimaryActionAvailable` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsSecondaryActionAvailable` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTertiaryActionAvailable` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `PrimaryInputKeyVisualParent` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `SecondaryInputKeyVisualParent` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `TertiaryInputKeyVisualParent` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `PartyManageTroopPopupWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public PartyManageTroopPopupWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var partyManageTroopPopupWidget = new PartyManageTroopPopupWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyManageTroopPopupWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/mission-ext/](../) — the other types in this bucket.
