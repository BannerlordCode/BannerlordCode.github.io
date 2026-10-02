---
title: "SettlementDailyProjectVM"
description: "SettlementDailyProjectVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 SettlementProjectVM；公开成员 10 个（方法 7、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementDailyProjectVM.cs。"
---
# SettlementDailyProjectVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementDailyProjectVM : SettlementProjectVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementDailyProjectVM.cs`

## 概述

SettlementDailyProjectVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementDailyProjectVM.cs。它是一个 public 类，实现/继承 SettlementProjectVM，继承链为 SettlementDailyProjectVM → SettlementProjectVM → ViewModel。public/protected 成员共 10 个：7 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementDailyProjectVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement），继承链 SettlementDailyProjectVM → SettlementProjectVM → ViewModel。成员构成以方法为主（方法 7/10，属性 2/10），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementDailyProjectVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementDailyProjectVM` | `public SettlementDailyProjectVM(Action<SettlementProjectVM, bool>onSelection, Action<SettlementProjectVM>onSetAsCurrent, Action onResetCurrent, Building building, Settlement settlement) : base(onSelection, onSetAsCurrent, onResetCurrent, building, settlement)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshProductionText` | `public override void RefreshProductionText()` | 方法 |
| `ExecuteAddRemoveToQueue` | `public override void ExecuteAddRemoveToQueue()` | 方法 |
| `ExecuteSetAsActiveDevelopment` | `public override void ExecuteSetAsActiveDevelopment()` | 方法 |
| `ExecuteSetAsCurrent` | `public override void ExecuteSetAsCurrent()` | 方法 |
| `ExecuteResetCurrent` | `public override void ExecuteResetCurrent()` | 方法 |
| `ExecuteToggleSelected` | `public override void ExecuteToggleSelected()` | 方法 |
| `IsDefault` | `public bool IsDefault` | 属性 |
| `DefaultText` | `public string DefaultText` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SettlementProjectVM](../SettlementProjectVM)
- [同命名空间 SettlementBuildingProjectVM](../SettlementBuildingProjectVM)
- [同命名空间 SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM)
- [同命名空间 SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM)
- [同命名空间 SettlementProjectSelectionVM](../SettlementProjectSelectionVM)
