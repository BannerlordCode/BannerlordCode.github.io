---
title: "SPItemVM"
description: "SPItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.Inventory 的 public 类，继承 ItemVM；公开成员 43 个（方法 17、属性 23、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SPItemVM : ItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

SPItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPItemVM.cs。它是一个 public 类，实现/继承 ItemVM，继承链为 SPItemVM → ItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 43 个：17 方法、23 属性、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，继承链 SPItemVM → ItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 23/43，方法 17/43），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InventorySide` | `public InventoryLogic.InventorySide InventorySide` | 属性 |
| `SPItemVM` | `public SPItemVM()` | 构造函数 |
| `SPItemVM` | `public SPItemVM(InventoryLogic inventoryLogic, bool isHeroFemale, bool canCharacterUseItem, InventoryScreenHelper.InventoryMode usageType, ItemRosterElement newItem, InventoryLogic.InventorySide inventorySide, int itemCost = 0, EquipmentIndex? itemType = -1)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshWith` | `public void RefreshWith(SPItemVM itemVM, InventoryLogic.InventorySide inventorySide)` | 方法 |
| `ExecuteBuySingle` | `public void ExecuteBuySingle()` | 方法 |
| `ExecuteBuy` | `public void ExecuteBuy(int amount)` | 方法 |
| `ExecuteSellSingle` | `public void ExecuteSellSingle()` | 方法 |
| `ExecuteSell` | `public void ExecuteSell(int amount)` | 方法 |
| `ExecuteSellItem` | `public void ExecuteSellItem()` | 方法 |
| `ExecuteConcept` | `public void ExecuteConcept()` | 方法 |
| `ExecuteResetTrade` | `public void ExecuteResetTrade()` | 方法 |
| `UpdateTradeData` | `public void UpdateTradeData(bool forceUpdateAmounts)` | 方法 |
| `ExecuteSlaughterItem` | `public void ExecuteSlaughterItem()` | 方法 |
| `ExecuteDonateItem` | `public void ExecuteDonateItem()` | 方法 |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | 方法 |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | 方法 |
| `UpdateCanBeSlaughtered` | `public void UpdateCanBeSlaughtered()` | 方法 |
| `UpdateHintTexts` | `public void UpdateHintTexts()` | 方法 |
| `GetProfitTypeFromDiff` | `public static SPItemVM.ProfitTypes GetProfitTypeFromDiff(float averageValue, float currentValue)` | 方法 |
| `IsFocused` | `public bool IsFocused` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsArtifact` | `public bool IsArtifact` | 属性 |
| `IsTransferable` | `public bool IsTransferable` | 属性 |
| `IsTransferButtonHighlighted` | `public bool IsTransferButtonHighlighted` | 属性 |
| `IsItemHighlightEnabled` | `public bool IsItemHighlightEnabled` | 属性 |
| `IsCivilianItem` | `public bool IsCivilianItem` | 属性 |
| `IsStealthItem` | `public bool IsStealthItem` | 属性 |
| `IsNew` | `public bool IsNew` | 属性 |
| `IsGenderDifferent` | `public bool IsGenderDifferent` | 属性 |
| `CanBeSlaughtered` | `public bool CanBeSlaughtered` | 属性 |
| `CanBeDonated` | `public bool CanBeDonated` | 属性 |
| `IsEquipableItem` | `public bool IsEquipableItem` | 属性 |
| `CanCharacterUseItem` | `public bool CanCharacterUseItem` | 属性 |
| `IsLocked` | `public bool IsLocked` | 属性 |
| `ItemCount` | `public int ItemCount` | 属性 |
| `ItemLevel` | `public int ItemLevel` | 属性 |
| `ProfitType` | `public int ProfitType` | 属性 |
| `TransactionCount` | `public int TransactionCount` | 属性 |
| `TotalCost` | `public int TotalCost` | 属性 |
| `TradeData` | `public InventoryTradeVM TradeData` | 属性 |
| `ProfitTypes` | `public enum ProfitTypes` | 属性 |
| `ProfitTypes` | `public enum ProfitTypes` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ItemVM](../ItemVM/)
- [同命名空间 InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM/)
- [同命名空间 InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent/)
- [同命名空间 InventoryFilterChangedEvent](../InventoryFilterChangedEvent/)
- [同命名空间 InventoryItemInspectedEvent](../InventoryItemInspectedEvent/)
