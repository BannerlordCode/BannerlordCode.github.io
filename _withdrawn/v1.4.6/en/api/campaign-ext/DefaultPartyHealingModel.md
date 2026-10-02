---
title: "DefaultPartyHealingModel"
description: "DefaultPartyHealingModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting PartyHealingModel; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPartyHealingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyHealingModel : PartyHealingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultPartyHealingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs. It is a public class, implementing/inheriting PartyHealingModel; the inheritance chain is DefaultPartyHealingModel → PartyHealingModel → MBGameModel → GameModel. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyHealingModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultPartyHealingModel → PartyHealingModel → MBGameModel → GameModel. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyHealingModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartyHealingModel](../PartyHealingModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
