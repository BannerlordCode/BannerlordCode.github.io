---
title: "MapNavigationElementBase"
description: "MapNavigationElementBase — class in SandBox.View.Map.Navigation. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# MapNavigationElementBase

**Namespace:** `SandBox.View.Map.Navigation`  
**Module:** `SandBox.View`  
**Type:** `public abstract class MapNavigationElementBase : INavigationElement`  
**Base:** `INavigationElement`  
**Source:** `SandBox.View/Map/Navigation/MapNavigationElementBase.cs`

## Overview

`MapNavigationElementBase` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends INavigationElement, so the members it does not redeclare are inherited from there. 8 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapNavigationElementBase`.
- **Instance members** (14): `Permission`, `Tooltip`, `AlertTooltip`, `IsActive`, `IsLockingNavigation`, `HasAlert`, ….
- **Extension points** (10): `IsActive`, `IsLockingNavigation`, `HasAlert`, `StringId`, `OpenView`, `OpenView`, ….
- **Data and constants** (2): `_handler`, `_viewDataTracker`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GoToLink` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. |
| `HasAlert` | property (abstract) | Abstract — a subclass must supply it `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsActive` | property (abstract) | Abstract — a subclass must supply it `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsLockingNavigation` | property (abstract) | Abstract — a subclass must supply it `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OpenView` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. |
| `OpenView` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `params object[] parameters`. |
| `StringId` | property (abstract) | Abstract — a subclass must supply it `string` property. Read it for current state; a declared setter writes that state in place. |
| `AlertTooltip` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `GetAlertTooltip` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetPermission` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `NavigationPermissionItem`. Read path: prefer it over reaching for the backing store. |
| `GetTooltip` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `Permission` | property | Instance entry point `NavigationPermissionItem` property. Read it for current state; a declared setter writes that state in place. |
| `Tooltip` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `_game` | property | Protected — for subclasses only `Game` property. Read it for current state; a declared setter writes that state in place. |
| `MapNavigationElementBase` | ctor | Instance entry point. Takes 1 argument: `MapNavigationHandler handler`. Returns ``. |
| `_handler` | field | Protected — for subclasses only `MapNavigationHandler` field — direct storage with no validation or notification. |
| `_viewDataTracker` | field | Protected — for subclasses only `IViewDataTracker` field — direct storage with no validation or notification. |

- Constructed as `public MapNavigationElementBase(MapNavigationHandler handler)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: INavigationElement.
var mapNavigationElementBase = new MapNavigationElementBase(handler);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 10 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/Navigation/MapNavigationElementBase.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MapNavigationHandler](../MapNavigationHandler/) — `SandBox.View.Map.Navigation`.

Section: [api/sandbox/](../) — the other types in this bucket.
