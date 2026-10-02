---
title: "TownManagementReserveControlVM"
description: "TownManagementReserveControlVM：TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement 的 public 类，继承 ViewModel；公开成员 12 个（方法 3、属性 8、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementReserveControlVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TownManagementReserveControlVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TownManagementReserveControlVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementReserveControlVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

TownManagementReserveControlVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementReserveControlVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TownManagementReserveControlVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 12 个：3 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TownManagementReserveControlVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`，继承链 TownManagementReserveControlVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 8/12，方法 3/12），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementReserveControlVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TownManagementReserveControlVM` | `public TownManagementReserveControlVM(Settlement settlement, Action onReserveUpdated)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteConfirm` | `public void ExecuteConfirm()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `CurrentReserveAmount` | `public int CurrentReserveAmount` | 属性 |
| `CurrentGivenAmount` | `public int CurrentGivenAmount` | 属性 |
| `MaxReserveAmount` | `public int MaxReserveAmount` | 属性 |
| `ReserveBonusText` | `public string ReserveBonusText` | 属性 |
| `ReserveText` | `public string ReserveText` | 属性 |
| `CurrentReserveText` | `public string CurrentReserveText` | 属性 |
| `AddGoldToReserveHint` | `public HintViewModel AddGoldToReserveHint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 SettlementBuildingProjectVM](../SettlementBuildingProjectVM/)
- [同命名空间 SettlementDailyProjectVM](../SettlementDailyProjectVM/)
- [同命名空间 SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM/)
- [同命名空间 SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM/)
