---
title: "CraftingHeroPopupVM"
description: "CraftingHeroPopupVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 4、属性 4、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingHeroPopupVM.cs。"
---
# CraftingHeroPopupVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingHeroPopupVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingHeroPopupVM.cs`

## 概述

CraftingHeroPopupVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingHeroPopupVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CraftingHeroPopupVM → ViewModel。public/protected 成员共 9 个：4 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftingHeroPopupVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting），继承链 CraftingHeroPopupVM → ViewModel。成员构成以方法为主（方法 4/9，属性 4/9），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingHeroPopupVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingHeroPopupVM` | `public CraftingHeroPopupVM(Func<MBBindingList<CraftingAvailableHeroItemVM>>getCraftingHeroes)` | 构造函数 |
| `ExecuteOpenPopup` | `public void ExecuteOpenPopup()` | 方法 |
| `ExecuteClosePopup` | `public void ExecuteClosePopup()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `IsVisible` | `public bool IsVisible` | 属性 |
| `SelectHeroText` | `public string SelectHeroText` | 属性 |
| `MBBindingList` | `public MBBindingList<CraftingAvailableHeroItemVM>CraftingHeroes` | 属性 |
| `SetExitInputKey` | `public void SetExitInputKey(HotKey hotKey)` | 方法 |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CraftingAvailableHeroItemVM](../CraftingAvailableHeroItemVM)
- [同命名空间 CraftingListPropertyItem](../CraftingListPropertyItem)
- [同命名空间 CraftingPerkVM](../CraftingPerkVM)
- [同命名空间 CraftingResourceItemVM](../CraftingResourceItemVM)
