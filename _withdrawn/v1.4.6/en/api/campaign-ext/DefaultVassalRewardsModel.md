---
title: "DefaultVassalRewardsModel"
description: "DefaultVassalRewardsModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting VassalRewardsModel; 4 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultVassalRewardsModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultVassalRewardsModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultVassalRewardsModel : VassalRewardsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVassalRewardsModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultVassalRewardsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultVassalRewardsModel.cs. It is a public class, implementing/inheriting VassalRewardsModel; the inheritance chain is DefaultVassalRewardsModel → VassalRewardsModel → MBGameModel → GameModel. It exposes 4 public/protected members: 2 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultVassalRewardsModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultVassalRewardsModel → VassalRewardsModel → MBGameModel → GameModel. The surface is method-led (methods 2/4, properties 2/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultVassalRewardsModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RelationRewardWithLeader` | `public override int RelationRewardWithLeader` | property |
| `InfluenceReward` | `public override float InfluenceReward` | property |
| `GetEquipmentRewardsForJoiningKingdom` | `public override ItemRoster GetEquipmentRewardsForJoiningKingdom(Kingdom kingdom)` | method |
| `GetTroopRewardsForJoiningKingdom` | `public override TroopRoster GetTroopRewardsForJoiningKingdom(Kingdom kingdom)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface VassalRewardsModel](../VassalRewardsModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
