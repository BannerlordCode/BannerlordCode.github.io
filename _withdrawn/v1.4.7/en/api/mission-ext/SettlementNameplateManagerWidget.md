---
title: "SettlementNameplateManagerWidget"
description: "SettlementNameplateManagerWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# SettlementNameplateManagerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class SettlementNameplateManagerWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateManagerWidget.cs`

## Overview

`SettlementNameplateManagerWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SettlementNameplateManagerWidget`.
- **Instance members** (4): `OnRender`, `OnChildAdded`, `OnBeforeChildRemoved`, `OnDisconnectedFromRoot`.
- **Extension points** (4): `OnRender`, `OnChildAdded`, `OnBeforeChildRemoved`, `OnDisconnectedFromRoot`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnBeforeChildRemoved` | method (override) | Overrides the base member. Takes 1 argument: `Widget child`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnChildAdded` | method (override) | Overrides the base member. Takes 1 argument: `Widget child`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDisconnectedFromRoot` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRender` | method (override) | Overrides the base member. Takes 2 arguments: `TwoDimensionContext twoDimensionContext`, `TwoDimensionDrawContext drawContext`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SettlementNameplateManagerWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public SettlementNameplateManagerWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var settlementNameplateManagerWidget = new SettlementNameplateManagerWidget(context);

// Lifecycle hooks this type declares:
//   protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)
//   protected override void OnChildAdded(Widget child)
//   protected override void OnBeforeChildRemoved(Widget child)
//   protected override void OnDisconnectedFromRoot()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateManagerWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [SettlementNameplateWidget](../SettlementNameplateWidget/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate`.

Section: [api/mission-ext/](../) — the other types in this bucket.
