---
title: "SettlementTaxModel"
description: "SettlementTaxModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<SettlementTaxModel>; 9 exposed members (5 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs."
---
# SettlementTaxModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`

## Overview

SettlementTaxModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementTaxModel>; the inheritance chain is SettlementTaxModel → MBGameModel. It exposes 9 public/protected members: 5 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementTaxModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain SettlementTaxModel → MBGameModel. The surface is method-led (methods 5/9, properties 4/9), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementCommissionRateTown` | `public abstract float SettlementCommissionRateTown` | property |
| `SettlementCommissionRateVillage` | `public abstract float SettlementCommissionRateVillage` | property |
| `SettlementCommissionDecreaseSecurityThreshold` | `public abstract int SettlementCommissionDecreaseSecurityThreshold` | property |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public abstract int MaximumDecreaseBasedOnSecuritySecurity` | property |
| `GetTownTaxRatio` | `public abstract float GetTownTaxRatio(Town town);` | method |
| `GetVillageTaxRatio` | `public abstract float GetVillageTaxRatio(Village village);` | method |
| `GetTownCommissionChangeBasedOnSecurity` | `public abstract float GetTownCommissionChangeBasedOnSecurity(Town town, float commission);` | method |
| `CalculateTownTax` | `public abstract ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false);` | method |
| `CalculateVillageTaxFromIncome` | `public abstract int CalculateVillageTaxFromIncome(Village village, int marketIncome);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
