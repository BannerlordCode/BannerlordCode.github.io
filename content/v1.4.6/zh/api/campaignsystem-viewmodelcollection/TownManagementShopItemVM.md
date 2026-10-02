---
title: "TownManagementShopItemVM"
description: "TownManagementShopItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 3、属性 3、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementShopItemVM.cs。"
---
# TownManagementShopItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TownManagementShopItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementShopItemVM.cs`

## 概述

TownManagementShopItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementShopItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TownManagementShopItemVM → ViewModel。public/protected 成员共 7 个：3 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TownManagementShopItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement），继承链 TownManagementShopItemVM → ViewModel。成员构成以方法为主（方法 3/7，属性 3/7），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementShopItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TownManagementShopItemVM` | `public TownManagementShopItemVM(Workshop workshop)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | 方法 |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | 方法 |
| `IsEmpty` | `public bool IsEmpty` | 属性 |
| `ShopName` | `public string ShopName` | 属性 |
| `ShopId` | `public string ShopId` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 SettlementBuildingProjectVM](../SettlementBuildingProjectVM)
- [同命名空间 SettlementDailyProjectVM](../SettlementDailyProjectVM)
- [同命名空间 SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM)
- [同命名空间 SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM)
