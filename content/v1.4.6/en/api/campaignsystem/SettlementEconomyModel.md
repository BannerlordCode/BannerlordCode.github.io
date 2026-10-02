---
title: "SettlementEconomyModel"
description: "SettlementEconomyModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<SettlementEconomyModel>; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs."
---
# SettlementEconomyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs`

## Overview

SettlementEconomyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementEconomyModel>; the inheritance chain is SettlementEconomyModel → MBGameModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementEconomyModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain SettlementEconomyModel → MBGameModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEstimatedDemandForCategory` | `public abstract float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category);` | method |
| `GetDailyDemandForCategory` | `public abstract float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0);` | method |
| `GetDemandChangeFromValue` | `public abstract float GetDemandChangeFromValue(float purchaseValue);` | method |
| `float>GetSupplyDemandForCategory` | `public abstract ValueTuple<float, float>GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand);` | method |
| `GetTownGoldChange` | `public abstract int GetTownGoldChange(Town town);` | method |
| `CalculateDailySettlementBudgetForItemCategory` | `public abstract float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
