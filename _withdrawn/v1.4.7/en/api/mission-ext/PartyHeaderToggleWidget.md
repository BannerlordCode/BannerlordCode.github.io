---
title: "PartyHeaderToggleWidget"
description: "PartyHeaderToggleWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# PartyHeaderToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class PartyHeaderToggleWidget : ToggleButtonWidget`  
**Base:** `ToggleButtonWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs`

## Overview

`PartyHeaderToggleWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ToggleButtonWidget, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyHeaderToggleWidget`.
- **Instance members** (3): `AutoToggleTransferButtonState`, `OnClick`, `SetState`.
- **Extension points** (2): `OnClick`, `SetState`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SetState` | method (override) | Overrides the base member. Takes 1 argument: `string stateName`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `OnClick` | method (override) | Overrides the base member. Takes 1 argument: `Widget widget`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AutoToggleTransferButtonState` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `PartyHeaderToggleWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public PartyHeaderToggleWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ToggleButtonWidget.
var partyHeaderToggleWidget = new PartyHeaderToggleWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnClick(Widget widget)
//   public override void SetState(string stateName)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Party/PartyHeaderToggleWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [ButtonWidget](../../gui/ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [BrushWidget](../../gui/BrushWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.

Section: [api/mission-ext/](../) — the other types in this bucket.
