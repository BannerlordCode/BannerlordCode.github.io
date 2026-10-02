---
title: "DefaultSettlementTaxModel"
description: "DefaultSettlementTaxModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SettlementTaxModel; 9 exposed members (5 methods, 4 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSettlementTaxModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementTaxModel : SettlementTaxModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSettlementTaxModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs. It is a public class, implementing/inheriting SettlementTaxModel; the inheritance chain is DefaultSettlementTaxModel → SettlementTaxModel → MBGameModel → GameModel. It exposes 9 public/protected members: 5 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementTaxModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSettlementTaxModel → SettlementTaxModel → MBGameModel → GameModel. The surface is method-led (methods 5/9, properties 4/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SettlementCommissionRateTown` | `public override float SettlementCommissionRateTown` | property |
| `SettlementCommissionRateVillage` | `public override float SettlementCommissionRateVillage` | property |
| `SettlementCommissionDecreaseSecurityThreshold` | `public override int SettlementCommissionDecreaseSecurityThreshold` | property |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public override int MaximumDecreaseBasedOnSecuritySecurity` | property |
| `GetTownTaxRatio` | `public override float GetTownTaxRatio(Town town)` | method |
| `GetVillageTaxRatio` | `public override float GetVillageTaxRatio(Village village)` | method |
| `GetTownCommissionChangeBasedOnSecurity` | `public override float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)` | method |
| `CalculateTownTax` | `public override ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)` | method |
| `CalculateVillageTaxFromIncome` | `public override int CalculateVillageTaxFromIncome(Village village, int marketIncome)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementTaxModel](../SettlementTaxModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
