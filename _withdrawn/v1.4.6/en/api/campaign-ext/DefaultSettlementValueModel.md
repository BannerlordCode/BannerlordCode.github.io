---
title: "DefaultSettlementValueModel"
description: "DefaultSettlementValueModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SettlementValueModel; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSettlementValueModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementValueModel : SettlementValueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSettlementValueModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs. It is a public class, implementing/inheriting SettlementValueModel; the inheritance chain is DefaultSettlementValueModel → SettlementValueModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementValueModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSettlementValueModel → SettlementValueModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FindMostSuitableHomeSettlement` | `public override Settlement FindMostSuitableHomeSettlement(Clan clan)` | method |
| `CalculateSettlementBaseValue` | `public override float CalculateSettlementBaseValue(Settlement settlement)` | method |
| `CalculateSettlementValueForFaction` | `public override float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)` | method |
| `CalculateSettlementValueForEnemyHero` | `public override float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementValueModel](../SettlementValueModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
