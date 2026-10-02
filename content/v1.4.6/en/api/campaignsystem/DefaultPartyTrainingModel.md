---
title: "DefaultPartyTrainingModel"
description: "DefaultPartyTrainingModel: a public class in TaleWorlds.CampaignSystem, inheriting PartyTrainingModel; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTrainingModel.cs."
---
# DefaultPartyTrainingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyTrainingModel : PartyTrainingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTrainingModel.cs`

## Overview

DefaultPartyTrainingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTrainingModel.cs. It is a public class, implementing/inheriting PartyTrainingModel; the inheritance chain is DefaultPartyTrainingModel → PartyTrainingModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyTrainingModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPartyTrainingModel → PartyTrainingModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTrainingModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetXpReward` | `public override int GetXpReward(CharacterObject character)` | method |
| `GetEffectiveDailyExperience` | `public override ExplainedNumber GetEffectiveDailyExperience(MobileParty mobileParty, TroopRosterElement troop)` | method |
| `GenerateSharedXp` | `public override int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)` | method |
| `CalculateXpGainFromBattles` | `public override ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartyTrainingModel](../PartyTrainingModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
