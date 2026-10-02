---
title: "PartyTroopUpgradeModel"
description: "Auto-generated class reference for PartyTroopUpgradeModel."
---
# PartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTroopUpgradeModel : MBGameModel<PartyTroopUpgradeModel> `
**Base:** MBGameModel<PartyTroopUpgradeModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs

## Overview

Auto-generated stub for `PartyTroopUpgradeModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CanPartyUpgradeTroopToTarget
`public abstract bool CanPartyUpgradeTroopToTarget(PartyBase party,CharacterObject character,CharacterObject target)`

### IsTroopUpgradeable
`public abstract bool IsTroopUpgradeable(PartyBase party,CharacterObject character)`

### DoesPartyHaveRequiredItemsForUpgrade
`public abstract bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party,CharacterObject upgradeTarget)`

### DoesPartyHaveRequiredPerksForUpgrade
`public abstract bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party,CharacterObject character,CharacterObject upgradeTarget,out PerkObject requiredPerk)`

### GetGoldCostForUpgrade
`public abstract ExplainedNumber GetGoldCostForUpgrade(PartyBase party,CharacterObject characterObject,CharacterObject upgradeTarget)`

### GetXpCostForUpgrade
`public abstract int GetXpCostForUpgrade(PartyBase party,CharacterObject characterObject,CharacterObject upgradeTarget)`

### GetSkillXpFromUpgradingTroops
`public abstract int GetSkillXpFromUpgradingTroops(PartyBase party,CharacterObject troop,int numberOfTroops)`

### GetUpgradeChanceForTroopUpgrade
`public abstract float GetUpgradeChanceForTroopUpgrade(PartyBase party,CharacterObject troop,int upgradeTargetIndex)`

## See Also

- [Section index](../)
