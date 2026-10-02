---
title: "DefaultClanFinanceModel"
description: "DefaultClanFinanceModel 的自动生成类参考。"
---
# DefaultClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanFinanceModel : ClanFinanceModel `
**Base:** ClanFinanceModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs

## 概述

`DefaultClanFinanceModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CalculateClanGoldChange
`public override ExplainedNumber CalculateClanGoldChange(Clan clan,bool includeDescriptions = false,bool applyWithdrawals = false,bool includeDetails = false) `

### CalculateClanIncome
`public override ExplainedNumber CalculateClanIncome(Clan clan,bool includeDescriptions = false,bool applyWithdrawals = false,bool includeDetails = false) `

### CalculateClanExpensesInternal
`public void CalculateClanExpensesInternal(Clan clan,ref ExplainedNumber goldChange,bool applyWithdrawals = false,bool includeDetails = false) `

### CalculateClanExpenses
`public override ExplainedNumber CalculateClanExpenses(Clan clan,bool includeDescriptions = false,bool applyWithdrawals = false,bool includeDetails = false) `

### CalculateTownIncomeFromTariffs
`public override ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan,Town town,bool applyWithdrawals = false) `

### CalculateTownIncomeFromProjects
`public override int CalculateTownIncomeFromProjects(Town town) `

### CalculateVillageIncome
`public override int CalculateVillageIncome(Clan clan,Village village,bool applyWithdrawals = false) `

### CalculateOwnerIncomeFromCaravan
`public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan) `

### CalculateOwnerIncomeFromWorkshop
`public override int CalculateOwnerIncomeFromWorkshop(Workshop workshop) `

### RevenueSmoothenFraction
`public override float RevenueSmoothenFraction() `

### CalculateNotableDailyGoldChange
`public override int CalculateNotableDailyGoldChange(Hero hero,bool applyWithdrawals) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
