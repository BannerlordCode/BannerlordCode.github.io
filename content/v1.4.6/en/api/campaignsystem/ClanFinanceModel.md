---
title: "ClanFinanceModel"
description: "ClanFinanceModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<ClanFinanceModel>; 11 exposed members (10 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs."
---
# ClanFinanceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs`

## Overview

ClanFinanceModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ClanFinanceModel>; the inheritance chain is ClanFinanceModel → MBGameModel. It exposes 11 public/protected members: 10 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain ClanFinanceModel → MBGameModel. The surface is method-led (methods 10/11, properties 1/11), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyGoldLowerThreshold` | `public abstract int PartyGoldLowerThreshold` | property |
| `CalculateClanGoldChange` | `public abstract ExplainedNumber CalculateClanGoldChange(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false);` | method |
| `CalculateClanIncome` | `public abstract ExplainedNumber CalculateClanIncome(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false);` | method |
| `CalculateClanExpenses` | `public abstract ExplainedNumber CalculateClanExpenses(Clan clan, bool includeDescriptions = false, bool applyWithdrawals = false, bool includeDetails = false);` | method |
| `CalculateTownIncomeFromTariffs` | `public abstract ExplainedNumber CalculateTownIncomeFromTariffs(Clan clan, Town town, bool applyWithdrawals = false);` | method |
| `CalculateTownIncomeFromProjects` | `public abstract int CalculateTownIncomeFromProjects(Town town);` | method |
| `CalculateNotableDailyGoldChange` | `public abstract int CalculateNotableDailyGoldChange(Hero hero, bool applyWithdrawals);` | method |
| `CalculateVillageIncome` | `public abstract int CalculateVillageIncome(Clan clan, Village village, bool applyWithdrawals = false);` | method |
| `CalculateOwnerIncomeFromCaravan` | `public abstract int CalculateOwnerIncomeFromCaravan(MobileParty caravan);` | method |
| `CalculateOwnerIncomeFromWorkshop` | `public abstract int CalculateOwnerIncomeFromWorkshop(Workshop workshop);` | method |
| `RevenueSmoothenFraction` | `public abstract float RevenueSmoothenFraction();` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
