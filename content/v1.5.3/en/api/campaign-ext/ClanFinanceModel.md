---
title: "ClanFinanceModel"
description: "Auto-generated class reference for ClanFinanceModel."
---
# ClanFinanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel> `
**Base:** MBGameModel<ClanFinanceModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs

## Overview

Auto-generated stub for `ClanFinanceModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
