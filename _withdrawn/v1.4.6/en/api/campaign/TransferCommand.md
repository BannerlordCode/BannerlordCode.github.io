---
title: "TransferCommand"
description: "TransferCommand: a public struct in TaleWorlds.CampaignSystem.Inventory; 10 exposed members (1 methods, 9 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TransferCommand

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct TransferCommand`
**File:** `TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

TransferCommand lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs. It is a public struct; the inheritance chain is TransferCommand. It exposes 10 public/protected members: 1 methods, 9 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TransferCommand lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Inventory`, inheritance chain TransferCommand. The surface is property-led (properties 9/10, methods 1/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FromSideEquipment` | `public Equipment FromSideEquipment` | property |
| `ToSideEquipment` | `public Equipment ToSideEquipment` | property |
| `FromSide` | `public InventoryLogic.InventorySide FromSide` | property |
| `ToSide` | `public InventoryLogic.InventorySide ToSide` | property |
| `FromEquipmentIndex` | `public EquipmentIndex FromEquipmentIndex` | property |
| `ToEquipmentIndex` | `public EquipmentIndex ToEquipmentIndex` | property |
| `Amount` | `public int Amount` | property |
| `ElementToTransfer` | `public ItemRosterElement ElementToTransfer` | property |
| `Character` | `public CharacterObject Character` | property |
| `Transfer` | `public static TransferCommand Transfer(int amount, InventoryLogic.InventorySide fromSide, InventoryLogic.InventorySide toSide, ItemRosterElement elementToTransfer, EquipmentIndex fromEquipmentIndex, EquipmentIndex toEquipmentIndex, CharacterObject character)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FakeInventoryListener](../FakeInventoryListener/)
- [same namespace InventoryListener](../InventoryListener/)
- [same namespace InventoryLogic](../InventoryLogic/)
- [same namespace InventoryTransferItemEvent](../InventoryTransferItemEvent/)
