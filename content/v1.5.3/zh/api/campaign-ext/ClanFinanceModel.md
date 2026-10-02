---
title: "ClanFinanceModel"
description: "ClanFinanceModel 的自动生成类参考。"
---
# ClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel> `
**Base:** MBGameModel<ClanFinanceModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs

## 概述

`ClanFinanceModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CalculateClanGoldChange
`public abstract ExplainedNumber CalculateClanGoldChange(Clan clan,bool includeDescriptions = false,bool applyWithdrawals = false,bool includeDetails = false)`

### CalculateClanIncome
`public abstract ExplainedNumber CalculateClanIncome(Clan clan,bool includeDescriptions = false,bool applyWithdrawals = false,bool includeDetails = false)`

### CalculateClanExpenses
`public abstract ExplainedNumber CalculateClanExpenses(Clan clan,bool includeDescriptions = false,bool applyWithdrawals = false,bool includeDetails = false)`

### CalculateTownIncomeFromTariffs
`public abstract ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan,Town town,bool applyWithdrawals = false)`

### CalculateTownIncomeFromProjects
`public abstract int CalculateTownIncomeFromProjects(Town town)`

### CalculateNotableDailyGoldChange
`public abstract int CalculateNotableDailyGoldChange(Hero hero,bool applyWithdrawals)`

### CalculateVillageIncome
`public abstract int CalculateVillageIncome(Clan clan,Village village,bool applyWithdrawals = false)`

### CalculateOwnerIncomeFromCaravan
`public abstract int CalculateOwnerIncomeFromCaravan(MobileParty caravan)`

### CalculateOwnerIncomeFromWorkshop
`public abstract int CalculateOwnerIncomeFromWorkshop(Workshop workshop)`

### RevenueSmoothenFraction
`public abstract float RevenueSmoothenFraction()`

## 参见

- [本区域目录](../)
- [API 参考](../../)
