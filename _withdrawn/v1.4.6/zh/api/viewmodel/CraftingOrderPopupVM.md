---
title: "CraftingOrderPopupVM"
description: "CraftingOrderPopupVM：TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order 的 public 类，继承 ViewModel；公开成员 12 个（方法 4、属性 7、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingOrderPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingOrderPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

CraftingOrderPopupVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CraftingOrderPopupVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 12 个：4 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftingOrderPopupVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`，继承链 CraftingOrderPopupVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/12，方法 4/12），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasOrders` | `public bool HasOrders` | 属性 |
| `HasEnabledOrders` | `public bool HasEnabledOrders` | 属性 |
| `CraftingOrderPopupVM` | `public CraftingOrderPopupVM(Action<CraftingOrderItemVM>onDoneAction, Func<CraftingAvailableHeroItemVM>getCurrentCraftingHero, Func<CraftingOrder, IEnumerable<CraftingStatData>>getOrderStatDatas)` | 构造函数 |
| `RefreshOrders` | `public void RefreshOrders()` | 方法 |
| `SelectOrder` | `public void SelectOrder(CraftingOrderItemVM order)` | 方法 |
| `ExecuteOpenPopup` | `public void ExecuteOpenPopup()` | 方法 |
| `ExecuteCloseWithoutSelection` | `public void ExecuteCloseWithoutSelection()` | 方法 |
| `IsVisible` | `public bool IsVisible` | 属性 |
| `QuestType` | `public int QuestType` | 属性 |
| `OrderCountText` | `public string OrderCountText` | 属性 |
| `SelectedCraftingOrder` | `public CraftingOrderItemVM SelectedCraftingOrder` | 属性 |
| `MBBindingList` | `public MBBindingList<CraftingOrderItemVM>CraftingOrders` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CraftingOrderItemVM](../CraftingOrderItemVM/)
