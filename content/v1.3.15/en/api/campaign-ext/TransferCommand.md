---
title: "TransferCommand"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TransferCommand`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TransferCommand

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct TransferCommand`
**Area:** campaign-ext

## Overview

`TransferCommand` lives in `TaleWorlds.CampaignSystem.Inventory`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FromSideEquipment` | `public Equipment FromSideEquipment { get; }` |
| `ToSideEquipment` | `public Equipment ToSideEquipment { get; }` |
| `FromSide` | `public InventoryLogic.InventorySide FromSide { get; }` |
| `ToSide` | `public InventoryLogic.InventorySide ToSide { get; }` |
| `FromEquipmentIndex` | `public EquipmentIndex FromEquipmentIndex { get; }` |
| `ToEquipmentIndex` | `public EquipmentIndex ToEquipmentIndex { get; }` |
| `Amount` | `public int Amount { get; }` |
| `ElementToTransfer` | `public ItemRosterElement ElementToTransfer { get; }` |
| `Character` | `public CharacterObject Character { get; }` |

## Key Methods

### Transfer
`public static TransferCommand Transfer(int amount, InventoryLogic.InventorySide fromSide, InventoryLogic.InventorySide toSide, ItemRosterElement elementToTransfer, EquipmentIndex fromEquipmentIndex, EquipmentIndex toEquipmentIndex, CharacterObject character)`

**Purpose:** Handles logic related to `transfer`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TransferCommand.Transfer(0, fromSide, toSide, elementToTransfer, fromEquipmentIndex, toEquipmentIndex, character);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
