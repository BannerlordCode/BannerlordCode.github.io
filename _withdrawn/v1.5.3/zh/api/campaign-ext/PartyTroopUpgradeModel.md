---
title: "PartyTroopUpgradeModel"
description: "PartyTroopUpgradeModel 的自动生成类参考。"
---
# PartyTroopUpgradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTroopUpgradeModel : MBGameModel<PartyTroopUpgradeModel> `
**Base:** MBGameModel<PartyTroopUpgradeModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs

## 概述

`PartyTroopUpgradeModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

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

## 参见

- [本区域目录](../)
- [API 参考](../../)
