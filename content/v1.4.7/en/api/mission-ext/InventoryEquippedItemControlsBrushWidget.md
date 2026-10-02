---
title: "InventoryEquippedItemControlsBrushWidget"
description: "InventoryEquippedItemControlsBrushWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# InventoryEquippedItemControlsBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Inventory`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class InventoryEquippedItemControlsBrushWidget : BrushWidget`  
**Base:** `BrushWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs`

## Overview

`InventoryEquippedItemControlsBrushWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends BrushWidget, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `InventoryEquippedItemControlsBrushWidget`.
- **Instance members** (7): `ForcedScopeCollection`, `NavigationScope`, `OnLateUpdate`, `ShowPanel`, `HidePanel`, `OnUpdate`, ….
- **Extension points** (2): `OnLateUpdate`, `OnUpdate`.
- **Data and constants** (1): `OnHidePanel`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ButtonClickEventHandler` | method | Instance entry point. Takes 1 argument: `Widget itemWidget`. Returns `delegate void`. |
| `ForcedScopeCollection` | property | Instance entry point `NavigationForcedScopeCollectionTargeter` property. Read it for current state; a declared setter writes that state in place. |
| `HidePanel` | method | Instance entry point. Takes no arguments. |
| `NavigationScope` | property | Instance entry point `NavigationScopeTargeter` property. Read it for current state; a declared setter writes that state in place. |
| `ShowPanel` | method | Instance entry point. Takes no arguments. |
| `InventoryEquippedItemControlsBrushWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |
| `OnHidePanel` | field | Instance entry point `Action` field — direct storage with no validation or notification. |

- Constructed as `public InventoryEquippedItemControlsBrushWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: BrushWidget.
var inventoryEquippedItemControlsBrushWidget = new InventoryEquippedItemControlsBrushWidget(context);

// Lifecycle hooks this type declares:
//   public event Action OnHidePanel
//   protected override void OnLateUpdate(float dt)
//   protected override void OnUpdate(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Inventory/InventoryEquippedItemControlsBrushWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BrushWidget](../../gui/BrushWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.

Section: [api/mission-ext/](../) — the other types in this bucket.
