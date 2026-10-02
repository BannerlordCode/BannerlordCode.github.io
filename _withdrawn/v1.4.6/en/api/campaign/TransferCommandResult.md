---
title: "TransferCommandResult"
description: "TransferCommandResult: a public class in TaleWorlds.CampaignSystem.Inventory; 9 exposed members (0 methods, 7 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Inventory/TransferCommandResult.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TransferCommandResult

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TransferCommandResult`
**File:** `TaleWorlds.CampaignSystem/Inventory/TransferCommandResult.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

TransferCommandResult lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Inventory/TransferCommandResult.cs. It is a public class; the inheritance chain is TransferCommandResult. It exposes 9 public/protected members: 7 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TransferCommandResult lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Inventory`, inheritance chain TransferCommandResult. The surface is property-led (properties 7/9, methods 0/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Inventory/TransferCommandResult.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ResultSideEquipment` | `public Equipment ResultSideEquipment` | property |
| `TransferCharacter` | `public CharacterObject TransferCharacter` | property |
| `ResultSide` | `public InventoryLogic.InventorySide ResultSide` | property |
| `EffectedItemRosterElement` | `public ItemRosterElement EffectedItemRosterElement` | property |
| `EffectedNumber` | `public int EffectedNumber` | property |
| `FinalNumber` | `public int FinalNumber` | property |
| `EffectedEquipmentIndex` | `public EquipmentIndex EffectedEquipmentIndex` | property |
| `TransferCommandResult` | `public TransferCommandResult()` | constructor |
| `TransferCommandResult` | `public TransferCommandResult(InventoryLogic.InventorySide resultSide, ItemRosterElement effectedItemRosterElement, int effectedNumber, int finalNumber, EquipmentIndex effectedEquipmentIndex, CharacterObject transferCharacter)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FakeInventoryListener](../FakeInventoryListener/)
- [same namespace InventoryListener](../InventoryListener/)
- [same namespace InventoryLogic](../InventoryLogic/)
- [same namespace InventoryTransferItemEvent](../InventoryTransferItemEvent/)
