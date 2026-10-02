---
title: "DefaultPartyTroopUpgradeModel"
description: "DefaultPartyTroopUpgradeModel 的自动生成类参考。"
---
# DefaultPartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTroopUpgradeModel : PartyTroopUpgradeModel `
**Base:** PartyTroopUpgradeModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs

## 概述

`DefaultPartyTroopUpgradeModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CanPartyUpgradeTroopToTarget
`public override bool CanPartyUpgradeTroopToTarget(PartyBase upgradingParty,CharacterObject upgradeableCharacter,CharacterObject upgradeTarget) `

### IsTroopUpgradeable
`public override bool IsTroopUpgradeable(PartyBase party,CharacterObject character) `

### GetXpCostForUpgrade
`public override int GetXpCostForUpgrade(PartyBase party,CharacterObject characterObject,CharacterObject upgradeTarget) `

### GetGoldCostForUpgrade
`public override ExplainedNumber GetGoldCostForUpgrade(PartyBase party,CharacterObject characterObject,CharacterObject upgradeTarget) `

### GetSkillXpFromUpgradingTroops
`public override int GetSkillXpFromUpgradingTroops(PartyBase party,CharacterObject troop,int numberOfTroops) `

### DoesPartyHaveRequiredItemsForUpgrade
`public override bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party,CharacterObject upgradeTarget) `

### DoesPartyHaveRequiredPerksForUpgrade
`public override bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party,CharacterObject character,CharacterObject upgradeTarget,out PerkObject requiredPerk) `

### GetUpgradeChanceForTroopUpgrade
`public override float GetUpgradeChanceForTroopUpgrade(PartyBase party,CharacterObject troop,int upgradeTargetIndex) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
