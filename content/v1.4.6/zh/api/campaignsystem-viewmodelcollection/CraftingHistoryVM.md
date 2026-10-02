---
title: "CraftingHistoryVM"
description: "CraftingHistoryVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 21 个（方法 8、属性 12、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs。"
---
# CraftingHistoryVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingHistoryVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs`

## 概述

CraftingHistoryVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CraftingHistoryVM → ViewModel。public/protected 成员共 21 个：8 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftingHistoryVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign），继承链 CraftingHistoryVM → ViewModel。成员构成以属性为主（属性 12/21，方法 8/21），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingHistoryVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingHistoryVM` | `public CraftingHistoryVM(Crafting crafting, ICraftingCampaignBehavior craftingBehavior, Func<CraftingOrder>getActiveOrder, Action<WeaponDesignSelectorVM>onDone)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `RefreshAvailability` | `public void RefreshAvailability()` | 方法 |
| `ExecuteOpen` | `public void ExecuteOpen()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `ExecuteDone` | `public void ExecuteDone()` | 方法 |
| `IsDoneAvailable` | `public bool IsDoneAvailable` | 属性 |
| `IsVisible` | `public bool IsVisible` | 属性 |
| `HasItemsInHistory` | `public bool HasItemsInHistory` | 属性 |
| `HistoryHint` | `public HintViewModel HistoryHint` | 属性 |
| `HistoryDisabledHint` | `public HintViewModel HistoryDisabledHint` | 属性 |
| `MBBindingList` | `public MBBindingList<WeaponDesignSelectorVM>CraftingHistory` | 属性 |
| `SelectedDesign` | `public WeaponDesignSelectorVM SelectedDesign` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `DoneText` | `public string DoneText` | 属性 |
| `CancelText` | `public string CancelText` | 属性 |
| `SetDoneKey` | `public void SetDoneKey(HotKey hotkey)` | 方法 |
| `SetCancelKey` | `public void SetCancelKey(HotKey hotkey)` | 方法 |
| `CancelKey` | `public InputKeyItemVM CancelKey` | 属性 |
| `DoneKey` | `public InputKeyItemVM DoneKey` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CraftingItemFlagVM](../CraftingItemFlagVM)
- [同命名空间 CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [同命名空间 CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
- [同命名空间 CraftingPieceListVM](../CraftingPieceListVM)
