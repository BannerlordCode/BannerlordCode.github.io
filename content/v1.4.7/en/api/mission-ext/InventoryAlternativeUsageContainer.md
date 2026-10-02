---
title: "InventoryAlternativeUsageContainer"
description: "InventoryAlternativeUsageContainer — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# InventoryAlternativeUsageContainer

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class InventoryAlternativeUsageContainer : Container`  
**Base:** `Container`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs`

## Overview

`InventoryAlternativeUsageContainer` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Container, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `InventoryAlternativeUsageContainer`.
- **Instance members** (7): `OnChildSelected`, `OnChildAdded`, `OnBeforeChildRemoved`, `AcceptDropPredicate`, `GetDropGizmoPosition`, `GetIndexForDrop`, ….
- **Extension points** (7): `OnChildSelected`, `OnChildAdded`, `OnBeforeChildRemoved`, `AcceptDropPredicate`, `GetDropGizmoPosition`, `GetIndexForDrop`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AcceptDropPredicate` | property (override) | Overrides the base member `Predicate<Widget>` property. Read it for current state; a declared setter writes that state in place. |
| `GetDropGizmoPosition` | method (override) | Overrides the base member. Takes 1 argument: `Vector2 draggedWidgetPosition`. Returns `Vector2`. Read path: prefer it over reaching for the backing store. |
| `GetIndexForDrop` | method (override) | Overrides the base member. Takes 1 argument: `Vector2 draggedWidgetPosition`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `IsDragHovering` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnChildSelected` | method (override) | Overrides the base member. Takes 1 argument: `Widget widget`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBeforeChildRemoved` | method (override) | Overrides the base member. Takes 1 argument: `Widget child`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnChildAdded` | method (override) | Overrides the base member. Takes 1 argument: `Widget child`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InventoryAlternativeUsageContainer` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public InventoryAlternativeUsageContainer(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Container.
var inventoryAlternativeUsageContainer = new InventoryAlternativeUsageContainer(context);

// Lifecycle hooks this type declares:
//   public override void OnChildSelected(Widget widget)
//   protected override void OnChildAdded(Widget child)
//   protected override void OnBeforeChildRemoved(Widget child)
//   public override Predicate<Widget> AcceptDropPredicate
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryAlternativeUsageContainer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Container](../../gui/Container/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/mission-ext/](../) — the other types in this bucket.
