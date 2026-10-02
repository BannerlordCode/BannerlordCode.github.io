---
title: "NavigationCacheElement"
description: "NavigationCacheElement — struct in TaleWorlds.CampaignSystem.Map.DistanceCache. 10 public members (2 static)."
---

<!-- v147-skeleton -->
# NavigationCacheElement

**Namespace:** `TaleWorlds.CampaignSystem.Map.DistanceCache`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public readonly struct NavigationCacheElement<T> : IEquatable<NavigationCacheElement<T>> where T : ISettlementDataHolder`  
**Base:** `IEquatable`  
**Source:** `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs`

## Overview

`NavigationCacheElement` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends IEquatable, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `NavigationCacheElement`.
- **Static entry points** (2): `Sort`, `operator`.
- **Instance members** (5): `PortPosition`, `GatePosition`, `StringId`, `GetHashCode`, `Equals`.
- **Extension points** (2): `GetHashCode`, `Equals`.
- **Data and constants** (2): `Settlement`, `IsPortUsed`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Equals` | method (override) | Overrides the base member. Takes 1 argument: `object obj`. Returns `bool`. |
| `GetHashCode` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `operator` | property (static) | Static entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `Sort` | method (static) | Static entry point. Takes 3 arguments: `ref NavigationCacheElement<T> settlement1`, `ref NavigationCacheElement<T> settlement2`, `out bool isPairChanged`. |
| `GatePosition` | property | Instance entry point `CampaignVec2` property. Read it for current state; a declared setter writes that state in place. |
| `PortPosition` | property | Instance entry point `CampaignVec2` property. Read it for current state; a declared setter writes that state in place. |
| `StringId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NavigationCacheElement` | ctor | Instance entry point. Takes 2 arguments: `T settlement`, `bool isPortUsed`. Returns ``. |
| `IsPortUsed` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `Settlement` | field | Instance entry point `T` field — direct storage with no validation or notification. |

- Constructed as `public NavigationCacheElement(T settlement, bool isPortUsed)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: IEquatable.
var navigationCacheElement = new NavigationCacheElement(settlement, isPortUsed);
NavigationCacheElement.Sort(theTarget, theTarget, theTarget);

// Lifecycle hooks this type declares:
//   public override int GetHashCode()
//   public override bool Equals(object obj)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ISettlementDataHolder](../ISettlementDataHolder/) — `TaleWorlds.CampaignSystem.Map.DistanceCache`.

Section: [api/campaign/](../) — the other types in this bucket.
