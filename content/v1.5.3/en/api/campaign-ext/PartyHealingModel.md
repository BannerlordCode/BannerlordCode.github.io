---
title: "PartyHealingModel"
description: "Auto-generated class reference for PartyHealingModel."
---
# PartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel> `
**Base:** MBGameModel<PartyHealingModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs

## Overview

Auto-generated stub for `PartyHealingModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetSurgeryChance
`public abstract float GetSurgeryChance(PartyBase party)`

### GetSurvivalChance
`public abstract float GetSurvivalChance(PartyBase party,CharacterObject agentCharacter,DamageTypes damageType,bool canDamageKillEvenIfBlunt,PartyBase enemyParty = null)`

### GetSkillXpFromHealingTroop
`public abstract int GetSkillXpFromHealingTroop(PartyBase party)`

### GetDailyHealingForRegulars
`public abstract ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase,bool isPrisoner,bool includeDescriptions = false)`

### GetDailyHealingHpForHeroes
`public abstract ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase,bool isPrisoners,bool includeDescriptions = false)`

### GetSiegeBombardmentHitSurgeryChance
`public abstract float GetSiegeBombardmentHitSurgeryChance(PartyBase party)`

### GetBattleEndHealingAmount
`public abstract ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase,Hero hero)`

## See Also

- [Section index](../)
