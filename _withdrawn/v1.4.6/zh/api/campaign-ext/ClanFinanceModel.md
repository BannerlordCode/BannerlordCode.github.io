---
title: "ClanFinanceModel"
description: "ClanFinanceModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<ClanFinanceModel>；公开成员 11 个（方法 10、属性 1、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFinanceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

ClanFinanceModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<ClanFinanceModel>，继承链为 ClanFinanceModel → MBGameModel → GameModel。public/protected 成员共 11 个：10 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClanFinanceModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 ClanFinanceModel → MBGameModel → GameModel。成员构成以方法为主（方法 10/11，属性 1/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyGoldLowerThreshold` | `public abstract int PartyGoldLowerThreshold` | 属性 |
| `CalculateClanGoldChange` | `public abstract ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false);` | 方法 |
| `CalculateClanIncome` | `public abstract ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false);` | 方法 |
| `CalculateClanExpenses` | `public abstract ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false);` | 方法 |
| `CalculateTownIncomeFromTariffs` | `public abstract ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false);` | 方法 |
| `CalculateTownIncomeFromProjects` | `public abstract int CalculateTownIncomeFromProjects(Town town);` | 方法 |
| `CalculateNotableDailyGoldChange` | `public abstract int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals);` | 方法 |
| `CalculateVillageIncome` | `public abstract int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false);` | 方法 |
| `CalculateOwnerIncomeFromCaravan` | `public abstract int CalculateOwnerIncomeFromCaravan(MobileParty caravan);` | 方法 |
| `CalculateOwnerIncomeFromWorkshop` | `public abstract int CalculateOwnerIncomeFromWorkshop(Workshop workshop);` | 方法 |
| `RevenueSmoothenFraction` | `public abstract float RevenueSmoothenFraction();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
