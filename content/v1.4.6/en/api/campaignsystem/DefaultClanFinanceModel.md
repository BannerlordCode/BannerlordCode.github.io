---
title: "DefaultClanFinanceModel"
description: "DefaultClanFinanceModel: a public class in TaleWorlds.CampaignSystem, inheriting ClanFinanceModel; 14 exposed members (11 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs."
---
# DefaultClanFinanceModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultClanFinanceModel : ClanFinanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs`

## Overview

DefaultClanFinanceModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs. It is a public class, implementing/inheriting ClanFinanceModel; the inheritance chain is DefaultClanFinanceModel → ClanFinanceModel → MBGameModel. It exposes 14 public/protected members: 11 methods, 2 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultClanFinanceModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultClanFinanceModel → ClanFinanceModel → MBGameModel. The surface is method-led (methods 11/14, properties 2/14), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultClanFinanceModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyGoldLowerThreshold` | `public override int PartyGoldLowerThreshold` | property |
| `CalculateClanGoldChange` | `public override ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)` | method |
| `CalculateClanIncome` | `public override ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)` | method |
| `CalculateClanExpensesInternal` | `public void CalculateClanExpensesInternal(Clan clan, ref ExplainedNumber goldChange, bool applyWithdrawals = false, bool includeDetails = false)` | method |
| `CalculateClanExpenses` | `public override ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false)` | method |
| `CalculateTownIncomeFromTariffs` | `public override ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false)` | method |
| `CalculateTownIncomeFromProjects` | `public override int CalculateTownIncomeFromProjects(Town town)` | method |
| `CalculateVillageIncome` | `public override int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false)` | method |
| `CalculateOwnerIncomeFromCaravan` | `public override int CalculateOwnerIncomeFromCaravan(MobileParty caravan)` | method |
| `CalculateOwnerIncomeFromWorkshop` | `public override int CalculateOwnerIncomeFromWorkshop(Workshop workshop)` | method |
| `RevenueSmoothenFraction` | `public override float RevenueSmoothenFraction()` | method |
| `CalculateNotableDailyGoldChange` | `public override int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals)` | method |
| `AssetIncomeType` | `public enum AssetIncomeType` | property |
| `AssetIncomeType` | `public enum AssetIncomeType` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ClanFinanceModel](../ClanFinanceModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
