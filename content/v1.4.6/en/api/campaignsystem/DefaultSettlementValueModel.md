---
title: "DefaultSettlementValueModel"
description: "DefaultSettlementValueModel: a public class in TaleWorlds.CampaignSystem, inheriting SettlementValueModel; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs."
---
# DefaultSettlementValueModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementValueModel : SettlementValueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs`

## Overview

DefaultSettlementValueModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs. It is a public class, implementing/inheriting SettlementValueModel; the inheritance chain is DefaultSettlementValueModel → SettlementValueModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSettlementValueModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultSettlementValueModel → SettlementValueModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FindMostSuitableHomeSettlement` | `public override Settlement FindMostSuitableHomeSettlement(Clan clan)` | method |
| `CalculateSettlementBaseValue` | `public override float CalculateSettlementBaseValue(Settlement settlement)` | method |
| `CalculateSettlementValueForFaction` | `public override float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)` | method |
| `CalculateSettlementValueForEnemyHero` | `public override float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SettlementValueModel](../SettlementValueModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
