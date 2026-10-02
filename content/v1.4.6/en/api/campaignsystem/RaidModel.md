---
title: "RaidModel"
description: "RaidModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<RaidModel>; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs."
---
# RaidModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class RaidModel : MBGameModel<RaidModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs`

## Overview

RaidModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<RaidModel>; the inheritance chain is RaidModel → MBGameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RaidModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain RaidModel → MBGameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/RaidModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `float>>GetCommonLootItemScores` | `public abstract MBReadOnlyList<ValueTuple<ItemObject, float>>GetCommonLootItemScores();` | method |
| `GoldRewardForEachLostHearth` | `public abstract int GoldRewardForEachLostHearth` | property |
| `CalculateHitDamage` | `public abstract ExplainedNumber CalculateHitDamage(MapEventSide attackerSide, float settlementHitPoints);` | method |
| `GetRaidLootMultiplier` | `public abstract ExplainedNumber GetRaidLootMultiplier(PartyBase receivingParty);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
