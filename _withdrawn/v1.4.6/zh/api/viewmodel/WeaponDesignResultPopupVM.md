---
title: "WeaponDesignResultPopupVM"
description: "WeaponDesignResultPopupVM：TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign 的 public 类，继承 ViewModel；公开成员 24 个（方法 5、属性 18、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPopupVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WeaponDesignResultPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponDesignResultPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPopupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

WeaponDesignResultPopupVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPopupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 WeaponDesignResultPopupVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 24 个：5 方法、18 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeaponDesignResultPopupVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，继承链 WeaponDesignResultPopupVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 18/24，方法 5/24），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPopupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponDesignResultPopupVM` | `public WeaponDesignResultPopupVM(ItemObject craftedItem, TextObject itemName, Action onFinalize, Crafting crafting, CraftingOrder completedOrder, ItemCollectionElementViewModel itemVisualModel, MBBindingList<ItemFlagVM>weaponFlagIconsList, Func<CraftingSecondaryUsageItemVM, MBBindingList<WeaponDesignResultPropertyItemVM>>onGetPropertyList, Action<CraftingSecondaryUsageItemVM>onUsageSelected)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ExecuteFinalizeCrafting` | `public void ExecuteFinalizeCrafting()` | 方法 |
| `ExecuteRandomCraftName` | `public void ExecuteRandomCraftName()` | 方法 |
| `MBBindingList` | `public MBBindingList<ItemFlagVM>WeaponFlagIconsList` | 属性 |
| `IsInOrderMode` | `public bool IsInOrderMode` | 属性 |
| `CraftedWeaponFinalWorth` | `public int CraftedWeaponFinalWorth` | 属性 |
| `CraftedWeaponPriceDifference` | `public int CraftedWeaponPriceDifference` | 属性 |
| `CraftedWeaponInitialWorth` | `public int CraftedWeaponInitialWorth` | 属性 |
| `CraftedWeaponWorthText` | `public string CraftedWeaponWorthText` | 属性 |
| `IsOrderSuccessful` | `public bool IsOrderSuccessful` | 属性 |
| `CanConfirm` | `public bool CanConfirm` | 属性 |
| `OrderResultText` | `public string OrderResultText` | 属性 |
| `OrderOwnerRemarkText` | `public string OrderOwnerRemarkText` | 属性 |
| `WeaponCraftedText` | `public string WeaponCraftedText` | 属性 |
| `DoneLbl` | `public string DoneLbl` | 属性 |
| `MBBindingList` | `public MBBindingList<WeaponDesignResultPropertyItemVM>DesignResultPropertyList` | 属性 |
| `ItemName` | `public string ItemName` | 属性 |
| `ItemVisualModel` | `public ItemCollectionElementViewModel ItemVisualModel` | 属性 |
| `ConfirmDisabledReasonHint` | `public HintViewModel ConfirmDisabledReasonHint` | 属性 |
| `SelectorVM` | `public SelectorVM<CraftingSecondaryUsageItemVM>SecondaryUsageSelector` | 属性 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CraftingHistoryVM](../CraftingHistoryVM/)
- [同命名空间 CraftingItemFlagVM](../CraftingItemFlagVM/)
- [同命名空间 CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent/)
- [同命名空间 CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent/)
