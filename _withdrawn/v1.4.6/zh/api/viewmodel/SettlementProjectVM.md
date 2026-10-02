---
title: "SettlementProjectVM"
description: "SettlementProjectVM：TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement 的 public 类，继承 ViewModel；公开成员 19 个（方法 7、属性 11、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementProjectVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public abstract class SettlementProjectVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

SettlementProjectVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 SettlementProjectVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 19 个：7 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementProjectVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`，继承链 SettlementProjectVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 11/19，方法 7/19），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDaily` | `public bool IsDaily` | 属性 |
| `Building` | `public Building Building` | 属性 |
| `SettlementProjectVM` | `protected SettlementProjectVM(Action<SettlementProjectVM, bool>onSelection, Action<SettlementProjectVM>onSetAsCurrent, Action onResetCurrent, Building building, Settlement settlement)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshProductionText` | `public virtual void RefreshProductionText()` | 方法 |
| `ExecuteAddRemoveToQueue` | `public abstract void ExecuteAddRemoveToQueue();` | 方法 |
| `ExecuteSetAsActiveDevelopment` | `public abstract void ExecuteSetAsActiveDevelopment();` | 方法 |
| `ExecuteSetAsCurrent` | `public abstract void ExecuteSetAsCurrent();` | 方法 |
| `ExecuteResetCurrent` | `public abstract void ExecuteResetCurrent();` | 方法 |
| `ExecuteToggleSelected` | `public abstract void ExecuteToggleSelected();` | 方法 |
| `VisualCode` | `public string VisualCode` | 属性 |
| `ProductionText` | `public string ProductionText` | 属性 |
| `CurrentPositiveEffectText` | `public string CurrentPositiveEffectText` | 属性 |
| `NextPositiveEffectText` | `public string NextPositiveEffectText` | 属性 |
| `ProductionCostText` | `public string ProductionCostText` | 属性 |
| `IsCurrentActiveProject` | `public bool IsCurrentActiveProject` | 属性 |
| `Progress` | `public int Progress` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Explanation` | `public string Explanation` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 SettlementBuildingProjectVM](../SettlementBuildingProjectVM/)
- [同命名空间 SettlementDailyProjectVM](../SettlementDailyProjectVM/)
- [同命名空间 SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM/)
- [同命名空间 SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM/)
