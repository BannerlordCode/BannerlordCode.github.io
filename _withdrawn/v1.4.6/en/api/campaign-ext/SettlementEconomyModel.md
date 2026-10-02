---
title: "SettlementEconomyModel"
description: "SettlementEconomyModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<SettlementEconomyModel>; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

SettlementEconomyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementEconomyModel>; the inheritance chain is SettlementEconomyModel → MBGameModel → GameModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementEconomyModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain SettlementEconomyModel → MBGameModel → GameModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetEstimatedDemandForCategory` | `public abstract float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category);` | method |
| `GetDailyDemandForCategory` | `public abstract float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0);` | method |
| `GetDemandChangeFromValue` | `public abstract float GetDemandChangeFromValue(float purchaseValue);` | method |
| `float>GetSupplyDemandForCategory` | `public abstract ValueTuple<float, float>GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand);` | method |
| `GetTownGoldChange` | `public abstract int GetTownGoldChange(Town town);` | method |
| `CalculateDailySettlementBudgetForItemCategory` | `public abstract float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
