---
title: "TransferCommand"
description: "TransferCommand: a public struct in TaleWorlds.CampaignSystem; 10 exposed members (1 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs."
---
# TransferCommand

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct TransferCommand`
**File:** `TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs`

## Overview

TransferCommand lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs. It is a public struct; the inheritance chain is TransferCommand. It exposes 10 public/protected members: 1 methods, 9 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TransferCommand is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Inventory) the module directory; inheritance chain TransferCommand. The surface is property-led (properties 9/10, methods 1/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Inventory/TransferCommand.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FakeInventoryListener](../FakeInventoryListener)
- [same namespace InventoryListener](../InventoryListener)
- [same namespace InventoryLogic](../InventoryLogic)
- [same namespace InventoryTransferItemEvent](../InventoryTransferItemEvent)
