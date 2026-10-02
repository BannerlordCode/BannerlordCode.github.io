---
title: "WeaponClassSelectionPopupVM"
description: "WeaponClassSelectionPopupVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 5、属性 3、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs。"
---
# WeaponClassSelectionPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponClassSelectionPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs`

## 概述

WeaponClassSelectionPopupVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 WeaponClassSelectionPopupVM → ViewModel。public/protected 成员共 9 个：5 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WeaponClassSelectionPopupVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign），继承链 WeaponClassSelectionPopupVM → ViewModel。成员构成以方法为主（方法 5/9，属性 3/9），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponClassSelectionPopupVM` | `public WeaponClassSelectionPopupVM(ICraftingCampaignBehavior craftingBehavior, List<CraftingTemplate>templatesList, Action<int>onSelect, Func<CraftingTemplate, int>getUnlockedPiecesCount)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateNewlyUnlockedPiecesCount` | `public void UpdateNewlyUnlockedPiecesCount(List<CraftingPiece>newlyUnlockedPieces)` | 方法 |
| `ExecuteSelectWeaponClass` | `public void ExecuteSelectWeaponClass(int index)` | 方法 |
| `ExecuteClosePopup` | `public void ExecuteClosePopup()` | 方法 |
| `ExecuteOpenPopup` | `public void ExecuteOpenPopup()` | 方法 |
| `PopupHeader` | `public string PopupHeader` | 属性 |
| `IsVisible` | `public bool IsVisible` | 属性 |
| `MBBindingList` | `public MBBindingList<WeaponClassVM>WeaponClasses` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CraftingHistoryVM](../CraftingHistoryVM)
- [同命名空间 CraftingItemFlagVM](../CraftingItemFlagVM)
- [同命名空间 CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [同命名空间 CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
