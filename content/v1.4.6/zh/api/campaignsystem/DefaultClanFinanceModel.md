---
title: "DefaultClanFinanceModel"
description: "DefaultClanFinanceModel：TaleWorlds.CampaignSystem 的 public 类，继承 ClanFinanceModel；公开成员 14 个（方法 11、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs。"
---
# DefaultClanFinanceModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultClanFinanceModel : ClanFinanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs`

## 概述

DefaultClanFinanceModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs。它是一个 public 类，实现/继承 ClanFinanceModel，继承链为 DefaultClanFinanceModel → ClanFinanceModel → MBGameModel。public/protected 成员共 14 个：11 方法、2 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultClanFinanceModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultClanFinanceModel → ClanFinanceModel → MBGameModel。成员构成以方法为主（方法 11/14，属性 2/14），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyGoldLowerThreshold` | `public override int PartyGoldLowerThreshold` | 属性 |
| `CalculateClanGoldChange` | `public override ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)` | 方法 |
| `CalculateClanIncome` | `public override ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)` | 方法 |
| `CalculateClanExpensesInternal` | `public void CalculateClanExpensesInternal(Clan clan, ref ExplainedNumber goldChange, bool applyWithdrawals = false, bool includeDetails = false)` | 方法 |
| `CalculateClanExpenses` | `public override ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)` | 方法 |
| `CalculateTownIncomeFromTariffs` | `public override ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)` | 方法 |
| `CalculateTownIncomeFromProjects` | `public override int CalculateTownIncomeFromProjects(Town town)` | 方法 |
| `CalculateVillageIncome` | `public override int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)` | 方法 |
| `CalculateOwnerIncomeFromCaravan` | `public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan)` | 方法 |
| `CalculateOwnerIncomeFromWorkshop` | `public override int CalculateOwnerIncomeFromWorkshop(Workshop workshop)` | 方法 |
| `RevenueSmoothenFraction` | `public override float RevenueSmoothenFraction()` | 方法 |
| `CalculateNotableDailyGoldChange` | `public override int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)` | 方法 |
| `AssetIncomeType` | `public enum AssetIncomeType` | 属性 |
| `AssetIncomeType` | `public enum AssetIncomeType` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ClanFinanceModel](../ClanFinanceModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
