---
title: "MapNavigationHandler"
description: "MapNavigationHandler — class in SandBox.View.Map.Navigation. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# MapNavigationHandler

**Namespace:** `SandBox.View.Map.Navigation`  
**Module:** `SandBox.View`  
**Type:** `public class MapNavigationHandler : INavigationHandler`  
**Base:** `INavigationHandler`  
**Source:** `SandBox.View/Map/Navigation/MapNavigationHandler.cs`

## Overview

`MapNavigationHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends INavigationHandler, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapNavigationHandler`.
- **Instance members** (6): `GetElements`, `IsNavigationLocked`, `IsEscapeMenuActive`, `IsAnyElementActive`, `OnCreateElements`, `GetElement`.
- **Extension points** (1): `OnCreateElements`.
- **Data and constants** (1): `_game`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetElement` | method | Instance entry point. Takes 1 argument: `string id`. Returns `INavigationElement`. Read path: prefer it over reaching for the backing store. |
| `GetElements` | method | Instance entry point. Takes no arguments. Returns `INavigationElement[]`. Read path: prefer it over reaching for the backing store. |
| `IsAnyElementActive` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsEscapeMenuActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsNavigationLocked` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnCreateElements` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `INavigationElement[]`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MapNavigationHandler` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `_game` | field | Protected — for subclasses only `Game` field — direct storage with no validation or notification. |

- Constructed as `public MapNavigationHandler()`.

## Usage Example

```csharp
var mapNavigationHandler = new MapNavigationHandler();
mapNavigationHandler.GetElements();
// Read current state through mapNavigationHandler.IsNavigationLocked.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/Navigation/MapNavigationHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EscapeMenuNavigationElement](../EscapeMenuNavigationElement/) — `SandBox.View.Map.Navigation.NavigationElements`.
- [CharacterDeveloperNavigationElement](../CharacterDeveloperNavigationElement/) — `SandBox.View.Map.Navigation.NavigationElements`.
- [InventoryNavigationElement](../InventoryNavigationElement/) — `SandBox.View.Map.Navigation.NavigationElements`.
- [ClanNavigationElement](../ClanNavigationElement/) — `SandBox.View.Map.Navigation.NavigationElements`.
- [KingdomNavigationElement](../KingdomNavigationElement/) — `SandBox.View.Map.Navigation.NavigationElements`.

Section: [api/sandbox/](../) — the other types in this bucket.
