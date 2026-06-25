---
title: "TransferCommand"
description: "Auto-generated class reference for TransferCommand."
---
# TransferCommand

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct TransferCommand`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs`

## Overview

`TransferCommand` lives in `TaleWorlds.CampaignSystem.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** **Purpose:** Executes the Transfer logic.

```csharp
// Static call; no instance required
TransferCommand.Transfer(0, fromSide, toSide, elementToTransfer, fromEquipmentIndex, toEquipmentIndex, character);
```

## Usage Example

```csharp
TransferCommand.Transfer(0, fromSide, toSide, elementToTransfer, fromEquipmentIndex, toEquipmentIndex, character);
```

## See Also

- [Area Index](../)