---
title: "InventoryTransferItemEvent"
description: "InventoryTransferItemEvent — class in TaleWorlds.CampaignSystem.Inventory. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# InventoryTransferItemEvent

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class InventoryTransferItemEvent : EventBase`  
**Base:** `EventBase`  
**Source:** `TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs`

## Overview

`InventoryTransferItemEvent` is a named type in the TaleWorlds.CampaignSystem.Inventory namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends EventBase, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `InventoryTransferItemEvent`.
- **Instance members** (2): `Item`, `IsBuyForPlayer`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsBuyForPlayer` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Item` | property | Instance entry point `ItemObject` property. Read it for current state; a declared setter writes that state in place. |
| `InventoryTransferItemEvent` | ctor | Instance entry point. Takes 2 arguments: `ItemObject item`, `bool isBuyForPlayer`. Returns ``. |

- Constructed as `public InventoryTransferItemEvent(ItemObject item, bool isBuyForPlayer)`.

## Usage Example

```csharp
var inventoryTransferItemEvent = new InventoryTransferItemEvent(item, isBuyForPlayer);
// Read current state through inventoryTransferItemEvent.Item.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EventBase](../../core-extra/EventBase/) — `TaleWorlds.Library.EventSystem`.

Section: [api/campaign/](../) — the other types in this bucket.
