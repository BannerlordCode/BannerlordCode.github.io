---
title: "ArmyManagementBoostEventVM"
description: "ArmyManagementBoostEventVM：TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement 的 public 类，继承 ViewModel；公开成员 11 个（方法 1、属性 8、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArmyManagementBoostEventVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ArmyManagementBoostEventVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

ArmyManagementBoostEventVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 ArmyManagementBoostEventVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 11 个：1 方法、8 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArmyManagementBoostEventVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`，继承链 ArmyManagementBoostEventVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 8/11，方法 1/11），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrencyToPayForCohesion` | `public ArmyManagementBoostEventVM.BoostCurrency CurrencyToPayForCohesion` | 属性 |
| `ArmyManagementBoostEventVM` | `public ArmyManagementBoostEventVM(ArmyManagementBoostEventVM.BoostCurrency currencyToPayForCohesion, int amountToPay, int amountOfCohesionToGain, Action<ArmyManagementBoostEventVM>onExecuteEvent)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `AmountToPay` | `public int AmountToPay` | 属性 |
| `CurrencyType` | `public int CurrencyType` | 属性 |
| `AmountOfCohesionToGain` | `public int AmountOfCohesionToGain` | 属性 |
| `SpendText` | `public string SpendText` | 属性 |
| `GainText` | `public string GainText` | 属性 |
| `BoostCurrency` | `public enum BoostCurrency` | 属性 |
| `BoostCurrency` | `public enum BoostCurrency` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent/)
- [同命名空间 ArmyManagementItemVM](../ArmyManagementItemVM/)
- [同命名空间 ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM/)
- [同命名空间 ArmyManagementVM](../ArmyManagementVM/)
