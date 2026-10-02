---
title: "TownManagementDescriptionItemVM"
description: "TownManagementDescriptionItemVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 10 个（方法 1、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementDescriptionItemVM.cs。"
---
# TownManagementDescriptionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TownManagementDescriptionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementDescriptionItemVM.cs`

## 概述

TownManagementDescriptionItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementDescriptionItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TownManagementDescriptionItemVM → ViewModel。public/protected 成员共 10 个：1 方法、7 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TownManagementDescriptionItemVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement），继承链 TownManagementDescriptionItemVM → ViewModel。成员构成以属性为主（属性 7/10，方法 1/10），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementDescriptionItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TownManagementDescriptionItemVM` | `public TownManagementDescriptionItemVM(TextObject title, int value, int valueChange, TownManagementDescriptionItemVM.DescriptionType type, BasicTooltipViewModel hint = null)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Type` | `public int Type` | 属性 |
| `Title` | `public string Title` | 属性 |
| `Value` | `public int Value` | 属性 |
| `ValueChange` | `public int ValueChange` | 属性 |
| `Hint` | `public BasicTooltipViewModel Hint` | 属性 |
| `IsWarning` | `public bool IsWarning` | 属性 |
| `DescriptionType` | `public enum DescriptionType` | 属性 |
| `DescriptionType` | `public enum DescriptionType` | 嵌套类型 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 SettlementBuildingProjectVM](../SettlementBuildingProjectVM)
- [同命名空间 SettlementDailyProjectVM](../SettlementDailyProjectVM)
- [同命名空间 SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM)
- [同命名空间 SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM)
