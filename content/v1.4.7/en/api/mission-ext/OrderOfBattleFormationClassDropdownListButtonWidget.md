---
title: "OrderOfBattleFormationClassDropdownListButtonWidget"
description: "OrderOfBattleFormationClassDropdownListButtonWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# OrderOfBattleFormationClassDropdownListButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `internal class OrderOfBattleFormationClassDropdownListButtonWidget : ButtonWidget`  
**Base:** `ButtonWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationClassDropdownListButtonWidget.cs`

## Overview

`OrderOfBattleFormationClassDropdownListButtonWidget` is an internal class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`OrderOfBattleFormationClassDropdownListButtonWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ButtonWidget, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `OrderOfBattleFormationClassDropdownListButtonWidget`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OrderOfBattleFormationClassDropdownListButtonWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public OrderOfBattleFormationClassDropdownListButtonWidget(UIContext context)`.

## Usage Example

```csharp
// OrderOfBattleFormationClassDropdownListButtonWidget is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
// It exposes no public members.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleFormationClassDropdownListButtonWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ButtonWidget](../../gui/ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
