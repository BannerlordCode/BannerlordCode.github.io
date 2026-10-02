---
title: "DefaultRaidModel"
description: "DefaultRaidModel: a public class in TaleWorlds.CampaignSystem, inheriting RaidModel; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultRaidModel.cs."
---
# DefaultRaidModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultRaidModel : RaidModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRaidModel.cs`

## Overview

DefaultRaidModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultRaidModel.cs. It is a public class, implementing/inheriting RaidModel; the inheritance chain is DefaultRaidModel → RaidModel → MBGameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultRaidModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultRaidModel → RaidModel → MBGameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultRaidModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateHitDamage` | `public override ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints)` | method |
| `GetRaidLootMultiplier` | `public override ExplainedNumber GetRaidLootMultiplier(PartyBase receivingParty)` | method |
| `float>>GetCommonLootItemScores` | `public override MBReadOnlyList<ValueTuple<ItemObject, float>>GetCommonLootItemScores()` | method |
| `GoldRewardForEachLostHearth` | `public override int GoldRewardForEachLostHearth` | property |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface RaidModel](../RaidModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
