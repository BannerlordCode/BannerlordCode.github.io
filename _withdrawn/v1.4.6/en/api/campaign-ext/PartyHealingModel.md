---
title: "PartyHealingModel"
description: "PartyHealingModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<PartyHealingModel>; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyHealingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

PartyHealingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartyHealingModel>; the inheritance chain is PartyHealingModel → MBGameModel → GameModel. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyHealingModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain PartyHealingModel → MBGameModel → GameModel. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSurgeryChance` | `public abstract float GetSurgeryChance(PartyBase party);` | method |
| `GetSurvivalChance` | `public abstract float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null);` | method |
| `GetSkillXpFromHealingTroop` | `public abstract int GetSkillXpFromHealingTroop(PartyBase party);` | method |
| `GetDailyHealingForRegulars` | `public abstract ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false);` | method |
| `GetDailyHealingHpForHeroes` | `public abstract ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false);` | method |
| `GetHeroesEffectedHealingAmount` | `public abstract int GetHeroesEffectedHealingAmount(Hero hero, float healingRate);` | method |
| `GetSiegeBombardmentHitSurgeryChance` | `public abstract float GetSiegeBombardmentHitSurgeryChance(PartyBase party);` | method |
| `GetBattleEndHealingAmount` | `public abstract ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
