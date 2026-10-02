---
title: "DefaultPartyHealingModel"
description: "DefaultPartyHealingModel: a public class in TaleWorlds.CampaignSystem, inheriting PartyHealingModel; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs."
---
# DefaultPartyHealingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyHealingModel : PartyHealingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs`

## Overview

DefaultPartyHealingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs. It is a public class, implementing/inheriting PartyHealingModel; the inheritance chain is DefaultPartyHealingModel → PartyHealingModel → MBGameModel. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyHealingModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPartyHealingModel → PartyHealingModel → MBGameModel. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSurgeryChance` | `public override float GetSurgeryChance(PartyBase party)` | method |
| `GetSiegeBombardmentHitSurgeryChance` | `public override float GetSiegeBombardmentHitSurgeryChance(PartyBase party)` | method |
| `GetSurvivalChance` | `public override float GetSurvivalChance(PartyBase party, CharacterObject character, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)` | method |
| `GetSkillXpFromHealingTroop` | `public override int GetSkillXpFromHealingTroop(PartyBase party)` | method |
| `GetDailyHealingForRegulars` | `public override ExplainedNumber GetDailyHealingForRegulars(PartyBase party, bool isPrisoners, bool includeDescriptions = false)` | method |
| `GetDailyHealingHpForHeroes` | `public override ExplainedNumber GetDailyHealingHpForHeroes(PartyBase party, bool isPrisoners, bool includeDescriptions = false)` | method |
| `GetHeroesEffectedHealingAmount` | `public override int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)` | method |
| `GetBattleEndHealingAmount` | `public override ExplainedNumber GetBattleEndHealingAmount(PartyBase party, Hero hero)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartyHealingModel](../PartyHealingModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
