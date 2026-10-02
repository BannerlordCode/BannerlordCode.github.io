---
title: "DefaultVassalRewardsModel"
description: "DefaultVassalRewardsModel: a public class in TaleWorlds.CampaignSystem, inheriting VassalRewardsModel; 4 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultVassalRewardsModel.cs."
---
# DefaultVassalRewardsModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultVassalRewardsModel : VassalRewardsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVassalRewardsModel.cs`

## Overview

DefaultVassalRewardsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultVassalRewardsModel.cs. It is a public class, implementing/inheriting VassalRewardsModel; the inheritance chain is DefaultVassalRewardsModel → VassalRewardsModel → MBGameModel. It exposes 4 public/protected members: 2 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultVassalRewardsModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultVassalRewardsModel → VassalRewardsModel → MBGameModel. The surface is method-led (methods 2/4, properties 2/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultVassalRewardsModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RelationRewardWithLeader` | `public override int RelationRewardWithLeader` | property |
| `InfluenceReward` | `public override float InfluenceReward` | property |
| `GetEquipmentRewardsForJoiningKingdom` | `public override ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)` | method |
| `GetTroopRewardsForJoiningKingdom` | `public override TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface VassalRewardsModel](../VassalRewardsModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
