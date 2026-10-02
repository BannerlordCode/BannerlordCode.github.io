---
title: "InventoryNavigationElement"
description: "InventoryNavigationElement — class in SandBox.View.Map.Navigation.NavigationElements. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# InventoryNavigationElement

**Namespace:** `SandBox.View.Map.Navigation.NavigationElements`  
**Module:** `SandBox.View`  
**Type:** `public class InventoryNavigationElement : MapNavigationElementBase`  
**Base:** `MapNavigationElementBase`  
**Source:** `SandBox.View/Map/Navigation/NavigationElements/InventoryNavigationElement.cs`

## Overview

`InventoryNavigationElement` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MapNavigationElementBase, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `InventoryNavigationElement`.
- **Instance members** (10): `StringId`, `IsActive`, `IsLockingNavigation`, `HasAlert`, `GetPermission`, `GetTooltip`, ….
- **Extension points** (10): `StringId`, `IsActive`, `IsLockingNavigation`, `HasAlert`, `GetPermission`, `GetTooltip`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GoToLink` | method (override) | Overrides the base member. Takes no arguments. |
| `HasAlert` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsActive` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsLockingNavigation` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OpenView` | method (override) | Overrides the base member. Takes no arguments. |
| `OpenView` | method (override) | Overrides the base member. Takes 1 argument: `params object[] parameters`. |
| `StringId` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `GetAlertTooltip` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetPermission` | method (override) | Overrides the base member. Takes no arguments. Returns `NavigationPermissionItem`. Read path: prefer it over reaching for the backing store. |
| `GetTooltip` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `InventoryNavigationElement` | ctor | Instance entry point. Takes 1 argument: `MapNavigationHandler handler`. Returns ``. |

- Constructed as `public InventoryNavigationElement(MapNavigationHandler handler)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MapNavigationElementBase.
var inventoryNavigationElement = new InventoryNavigationElement(handler);

// Lifecycle hooks this type declares:
//   public override string StringId
//   public override bool IsActive
//   public override bool IsLockingNavigation
//   public override bool HasAlert
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 10 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/Navigation/NavigationElements/InventoryNavigationElement.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MapNavigationElementBase](../MapNavigationElementBase/) — `SandBox.View.Map.Navigation`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [InventoryLogic](../../campaign/InventoryLogic/) — `TaleWorlds.CampaignSystem.Inventory`.
- [MapNavigationHandler](../MapNavigationHandler/) — `SandBox.View.Map.Navigation`.
- [MapNavigationHelper](../MapNavigationHelper/) — `SandBox.View.Map.Navigation`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [GameTextManager](../../core-extra/GameTextManager/) — `TaleWorlds.Core`.
- [IChangeableScreen](../IChangeableScreen/) — `SandBox.View`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/sandbox/](../) — the other types in this bucket.
