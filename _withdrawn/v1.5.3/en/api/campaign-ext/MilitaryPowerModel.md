---
title: "MilitaryPowerModel"
description: "Auto-generated class reference for MilitaryPowerModel."
---
# MilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MilitaryPowerModel : MBGameModel<MilitaryPowerModel> `
**Base:** MBGameModel<MilitaryPowerModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs

## Overview

Auto-generated stub for `MilitaryPowerModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetTroopPower
`public abstract float GetTroopPower(CharacterObject troop,BattleSideEnum side,MapEvent.PowerCalculationContext context,float leaderModifier)`

### GetPowerOfParty
`public abstract float GetPowerOfParty(PartyBase party,BattleSideEnum side,MapEvent.PowerCalculationContext context)`

### GetContextModifier
`public abstract float GetContextModifier(CharacterObject troop,BattleSideEnum battleSideEnum,MapEvent.PowerCalculationContext context)`

### GetContextForPosition
`public abstract MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)`

### GetDefaultTroopPower
`public abstract float GetDefaultTroopPower(CharacterObject troop)`

### GetPowerModifierOfHero
`public abstract float GetPowerModifierOfHero(Hero leaderHero)`

## See Also

- [Section index](../)
