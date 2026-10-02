---
title: "VassalRewardsModel"
description: "VassalRewardsModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<VassalRewardsModel>; 4 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VassalRewardsModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class VassalRewardsModel : MBGameModel<VassalRewardsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

VassalRewardsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<VassalRewardsModel>; the inheritance chain is VassalRewardsModel → MBGameModel → GameModel. It exposes 4 public/protected members: 2 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VassalRewardsModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain VassalRewardsModel → MBGameModel → GameModel. The surface is method-led (methods 2/4, properties 2/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/VassalRewardsModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `InfluenceReward` | `public abstract float InfluenceReward` | property |
| `RelationRewardWithLeader` | `public abstract int RelationRewardWithLeader` | property |
| `GetTroopRewardsForJoiningKingdom` | `public abstract TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom);` | method |
| `GetEquipmentRewardsForJoiningKingdom` | `public abstract ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
