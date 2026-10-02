---
title: "TransferCommand"
description: "TransferCommand — struct in TaleWorlds.CampaignSystem.Inventory. 10 public members (1 static)."
---

<!-- v147-skeleton -->
# TransferCommand

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public struct TransferCommand`  
**Source:** `TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs`

## Overview

`TransferCommand` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `Transfer`.
- **Instance members** (9): `FromSideEquipment`, `ToSideEquipment`, `FromSide`, `ToSide`, `FromEquipmentIndex`, `ToEquipmentIndex`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Transfer` | method (static) | Static entry point. Takes 7 arguments: `int amount`, `InventoryLogic.InventorySide fromSide`, `InventoryLogic.InventorySide toSide`, `ItemRosterElement elementToTransfer`, …. Returns `TransferCommand`. |
| `Amount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Character` | property | Instance entry point `CharacterObject` property. Read it for current state; a declared setter writes that state in place. |
| `ElementToTransfer` | property | Instance entry point `ItemRosterElement` property. Read it for current state; a declared setter writes that state in place. |
| `FromEquipmentIndex` | property | Instance entry point `EquipmentIndex` property. Read it for current state; a declared setter writes that state in place. |
| `FromSide` | property | Instance entry point `InventoryLogic.InventorySide` property. Read it for current state; a declared setter writes that state in place. |
| `FromSideEquipment` | property | Instance entry point `Equipment` property. Read it for current state; a declared setter writes that state in place. |
| `ToEquipmentIndex` | property | Instance entry point `EquipmentIndex` property. Read it for current state; a declared setter writes that state in place. |
| `ToSide` | property | Instance entry point `InventoryLogic.InventorySide` property. Read it for current state; a declared setter writes that state in place. |
| `ToSideEquipment` | property | Instance entry point `Equipment` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new TransferCommand
{
    FromSideEquipment = default,
    ToSideEquipment = default,
    FromSide = default,
    ToSide = default,
    FromEquipmentIndex = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [InventoryLogic](../InventoryLogic/) — `TaleWorlds.CampaignSystem.Inventory`.

Section: [api/campaign/](../) — the other types in this bucket.
