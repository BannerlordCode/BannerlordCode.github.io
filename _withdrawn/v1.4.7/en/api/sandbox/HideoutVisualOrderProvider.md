---
title: "HideoutVisualOrderProvider"
description: "HideoutVisualOrderProvider — class in SandBox.View.OrderProviders. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# HideoutVisualOrderProvider

**Namespace:** `SandBox.View.OrderProviders`  
**Module:** `SandBox.View`  
**Type:** `internal class HideoutVisualOrderProvider : VisualOrderProvider`  
**Base:** `VisualOrderProvider`  
**Source:** `SandBox.View/OrderProviders/HideoutVisualOrderProvider.cs`

## Overview

`HideoutVisualOrderProvider` is an internal class in SandBox.View.OrderProviders. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`HideoutVisualOrderProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends VisualOrderProvider, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Instance members** (2): `IsAvailable`, `GetOrders`.
- **Extension points** (2): `IsAvailable`, `GetOrders`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetOrders` | method (override) | Overrides the base member. Takes no arguments. Returns `MBReadOnlyList<VisualOrderSet>`. Read path: prefer it over reaching for the backing store. |
| `IsAvailable` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |

## Usage Example

```csharp
// HideoutVisualOrderProvider is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   IsAvailable()
//     bool
//   GetOrders()
//     MBReadOnlyList<VisualOrderSet>
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/OrderProviders/HideoutVisualOrderProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Hideout](../../campaign/Hideout/) — `TaleWorlds.CampaignSystem.Settlements`.
- [HideoutMissionController](../HideoutMissionController/) — `SandBox.Missions.MissionLogics.Hideout`.
- [GenericVisualOrderSet](../../mission-ext/GenericVisualOrderSet/) — `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets`.
- [MoveVisualOrder](../../viewmodel/MoveVisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders`.
- [FollowMeVisualOrder](../../viewmodel/FollowMeVisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders`.
- [ChargeVisualOrder](../../viewmodel/ChargeVisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders`.
- [FallbackVisualOrder](../../viewmodel/FallbackVisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders`.
- [RetreatVisualOrder](../../viewmodel/RetreatVisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders`.
- [ReturnVisualOrder](../../viewmodel/ReturnVisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.
- [ArrangementVisualOrder](../../viewmodel/ArrangementVisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders`.

Section: [api/sandbox/](../) — the other types in this bucket.
