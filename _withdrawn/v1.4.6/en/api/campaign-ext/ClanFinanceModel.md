---
title: "ClanFinanceModel"
description: "ClanFinanceModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<ClanFinanceModel>; 11 exposed members (10 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFinanceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanFinanceModel : MBGameModel<ClanFinanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

ClanFinanceModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ClanFinanceModel>; the inheritance chain is ClanFinanceModel → MBGameModel → GameModel. It exposes 11 public/protected members: 10 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain ClanFinanceModel → MBGameModel → GameModel. The surface is method-led (methods 10/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/ClanFinanceModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
