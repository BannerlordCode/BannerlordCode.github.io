---
title: "SPItemVM"
description: "SPItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ItemVM; 43 exposed members (17 methods, 23 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPItemVM.cs."
---
# SPItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SPItemVM : ItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPItemVM.cs`

## Overview

SPItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPItemVM.cs. It is a public class, implementing/inheriting ItemVM; the inheritance chain is SPItemVM → ItemVM. It exposes 43 public/protected members: 17 methods, 23 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Inventory) the module directory; inheritance chain SPItemVM → ItemVM. The surface is property-led (properties 23/43, methods 17/43), so it mostly exposes state for reading. ItemVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InventorySide` | `public InventoryLogic.InventorySide InventorySide` | property |
| `SPItemVM` | `public SPItemVM()` | constructor |
| `SPItemVM` | `public SPItemVM(InventoryLogic inventoryLogic, bool isHeroFemale, bool canCharacterUseItem, InventoryScreenHelper.InventoryMode usageType, ItemRosterElement newItem, InventoryLogic.InventorySide inventorySide, int itemCost = 0, EquipmentIndex? itemType = -1)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshWith` | `public void RefreshWith(SPItemVM itemVM, InventoryLogic.InventorySide inventorySide)` | method |
| `ExecuteBuySingle` | `public void ExecuteBuySingle()` | method |
| `ExecuteBuy` | `public void ExecuteBuy(int amount)` | method |
| `ExecuteSellSingle` | `public void ExecuteSellSingle()` | method |
| `ExecuteSell` | `public void ExecuteSell(int amount)` | method |
| `ExecuteSellItem` | `public void ExecuteSellItem()` | method |
| `ExecuteConcept` | `public void ExecuteConcept()` | method |
| `ExecuteResetTrade` | `public void ExecuteResetTrade()` | method |
| `UpdateTradeData` | `public void UpdateTradeData(bool forceUpdateAmounts)` | method |
| `ExecuteSlaughterItem` | `public void ExecuteSlaughterItem()` | method |
| `ExecuteDonateItem` | `public void ExecuteDonateItem()` | method |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | method |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | method |
| `UpdateCanBeSlaughtered` | `public void UpdateCanBeSlaughtered()` | method |
| `UpdateHintTexts` | `public void UpdateHintTexts()` | method |
| `GetProfitTypeFromDiff` | `public static SPItemVM.ProfitTypes GetProfitTypeFromDiff(float averageValue, float currentValue)` | method |
| `IsFocused` | `public bool IsFocused` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IsArtifact` | `public bool IsArtifact` | property |
| `IsTransferable` | `public bool IsTransferable` | property |
| `IsTransferButtonHighlighted` | `public bool IsTransferButtonHighlighted` | property |
| `IsItemHighlightEnabled` | `public bool IsItemHighlightEnabled` | property |
| `IsCivilianItem` | `public bool IsCivilianItem` | property |
| `IsStealthItem` | `public bool IsStealthItem` | property |
| `IsNew` | `public bool IsNew` | property |
| `IsGenderDifferent` | `public bool IsGenderDifferent` | property |
| `CanBeSlaughtered` | `public bool CanBeSlaughtered` | property |
| `CanBeDonated` | `public bool CanBeDonated` | property |
| `IsEquipableItem` | `public bool IsEquipableItem` | property |
| `CanCharacterUseItem` | `public bool CanCharacterUseItem` | property |
| `IsLocked` | `public bool IsLocked` | property |
| `ItemCount` | `public int ItemCount` | property |
| `ItemLevel` | `public int ItemLevel` | property |
| `ProfitType` | `public int ProfitType` | property |
| `TransactionCount` | `public int TransactionCount` | property |
| `TotalCost` | `public int TotalCost` | property |
| `TradeData` | `public InventoryTradeVM TradeData` | property |
| `ProfitTypes` | `public enum ProfitTypes` | property |
| `ProfitTypes` | `public enum ProfitTypes` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent)
- [same namespace InventoryFilterChangedEvent](../InventoryFilterChangedEvent)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent)
