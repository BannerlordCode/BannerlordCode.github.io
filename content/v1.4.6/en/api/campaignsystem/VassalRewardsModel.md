---
title: "VassalRewardsModel"
description: "VassalRewardsModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<VassalRewardsModel>; 4 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs."
---
# VassalRewardsModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class VassalRewardsModel : MBGameModel<VassalRewardsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs`

## Overview

VassalRewardsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<VassalRewardsModel>; the inheritance chain is VassalRewardsModel → MBGameModel. It exposes 4 public/protected members: 2 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VassalRewardsModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain VassalRewardsModel → MBGameModel. The surface is method-led (methods 2/4, properties 2/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InfluenceReward` | `public abstract float InfluenceReward` | property |
| `RelationRewardWithLeader` | `public abstract int RelationRewardWithLeader` | property |
| `GetTroopRewardsForJoiningKingdom` | `public abstract TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom);` | method |
| `GetEquipmentRewardsForJoiningKingdom` | `public abstract ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
