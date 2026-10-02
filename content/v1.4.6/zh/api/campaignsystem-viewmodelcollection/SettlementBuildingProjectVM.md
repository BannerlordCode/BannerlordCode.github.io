---
title: "SettlementBuildingProjectVM"
description: "SettlementBuildingProjectVM：TaleWorlds.CampaignSystem.ViewModelCollection 的 public 类，继承 SettlementProjectVM；公开成员 18 个（方法 7、属性 10、字段 0）。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs。"
---
# SettlementBuildingProjectVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementBuildingProjectVM : SettlementProjectVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs`

## 概述

SettlementBuildingProjectVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs。它是一个 public 类，实现/继承 SettlementProjectVM，继承链为 SettlementBuildingProjectVM → SettlementProjectVM → ViewModel。public/protected 成员共 18 个：7 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementBuildingProjectVM 是 TaleWorlds.CampaignSystem.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement），继承链 SettlementBuildingProjectVM → SettlementProjectVM → ViewModel。成员构成以属性为主（属性 10/18，方法 7/18），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementBuildingProjectVM` | `public SettlementBuildingProjectVM(Action<SettlementProjectVM, bool>onSelection, Action<SettlementProjectVM>onSetAsCurrent, Action onResetCurrent, Building building, Settlement settlement) : base(onSelection, onSetAsCurrent, onResetCurrent, building, settlement)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshProductionText` | `public override void RefreshProductionText()` | 方法 |
| `ExecuteAddRemoveToQueue` | `public override void ExecuteAddRemoveToQueue()` | 方法 |
| `ExecuteSetAsActiveDevelopment` | `public override void ExecuteSetAsActiveDevelopment()` | 方法 |
| `ExecuteSetAsCurrent` | `public override void ExecuteSetAsCurrent()` | 方法 |
| `ExecuteResetCurrent` | `public override void ExecuteResetCurrent()` | 方法 |
| `ExecuteToggleSelected` | `public override void ExecuteToggleSelected()` | 方法 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `DevelopmentLevelText` | `public string DevelopmentLevelText` | 属性 |
| `Level` | `public int Level` | 属性 |
| `MaxLevel` | `public int MaxLevel` | 属性 |
| `DevelopmentQueueIndex` | `public int DevelopmentQueueIndex` | 属性 |
| `IsInQueue` | `public bool IsInQueue` | 属性 |
| `AlreadyAtMaxText` | `public string AlreadyAtMaxText` | 属性 |
| `CanBuild` | `public bool CanBuild` | 属性 |
| `AddRemoveHint` | `public HintViewModel AddRemoveHint` | 属性 |
| `SetAsActiveHint` | `public HintViewModel SetAsActiveHint` | 属性 |

## 参见

- [↑ campaignsystem-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SettlementProjectVM](../SettlementProjectVM)
- [同命名空间 SettlementDailyProjectVM](../SettlementDailyProjectVM)
- [同命名空间 SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM)
- [同命名空间 SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM)
- [同命名空间 SettlementProjectSelectionVM](../SettlementProjectSelectionVM)
