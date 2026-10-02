---
title: "ItemMenuVM"
description: "ItemMenuVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Inventory, inheriting ViewModel; 18 exposed members (2 methods, 15 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemMenuVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ItemMenuVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ItemMenuVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ItemMenuVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 18 public/protected members: 2 methods, 15 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemMenuVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`, inheritance chain ItemMenuVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 15/18, methods 2/18), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemMenuVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ItemMenuVM` | `public ItemMenuVM(Action<ItemVM, int>resetComparedItems, InventoryLogic inventoryLogic, Func<WeaponComponentData, ItemObject.ItemUsageSetFlags>getItemUsageSetFlags, Func<EquipmentIndex, SPItemVM>getEquipmentAtIndex)` | constructor |
| `SetItem` | `public void SetItem(SPItemVM item, InventoryLogic.InventorySide currentEquipmentMode, ItemVM comparedItem = null, BasicCharacterObject character = null, int alternativeUsageIndex = 0)` | method |
| `IsComparing` | `public bool IsComparing` | property |
| `IsPlayerItem` | `public bool IsPlayerItem` | property |
| `ImageIdentifier` | `public ItemImageIdentifierVM ImageIdentifier` | property |
| `ComparedImageIdentifier` | `public ItemImageIdentifierVM ComparedImageIdentifier` | property |
| `TransactionTotalCost` | `public int TransactionTotalCost` | property |
| `IsInitializationOver` | `public bool IsInitializationOver` | property |
| `ItemName` | `public string ItemName` | property |
| `ComparedItemName` | `public string ComparedItemName` | property |
| `IsStealthModeActive` | `public bool IsStealthModeActive` | property |
| `MBBindingList` | `public MBBindingList<ItemMenuTooltipPropertyVM>TargetItemProperties` | property |
| `MBBindingList` | `public MBBindingList<ItemMenuTooltipPropertyVM>ComparedItemProperties` | property |
| `MBBindingList` | `public MBBindingList<ItemFlagVM>TargetItemFlagList` | property |
| `MBBindingList` | `public MBBindingList<ItemFlagVM>ComparedItemFlagList` | property |
| `AlternativeUsageIndex` | `public int AlternativeUsageIndex` | property |
| `MBBindingList` | `public MBBindingList<StringItemWithHintVM>AlternativeUsages` | property |
| `SetTransactionCost` | `public void SetTransactionCost(int getItemTotalPrice, int maxIndividualPrice)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM/)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent/)
- [same namespace InventoryFilterChangedEvent](../InventoryFilterChangedEvent/)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent/)
