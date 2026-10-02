---
title: "PartyTroopUpgradeModel"
description: "PartyTroopUpgradeModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<PartyTroopUpgradeModel>；公开成员 8 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs。"
---
# PartyTroopUpgradeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyTroopUpgradeModel : MBGameModel<PartyTroopUpgradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs`

## 概述

PartyTroopUpgradeModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<PartyTroopUpgradeModel>，继承链为 PartyTroopUpgradeModel → MBGameModel。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyTroopUpgradeModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 PartyTroopUpgradeModel → MBGameModel。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CanPartyUpgradeTroopToTarget` | `public abstract bool CanPartyUpgradeTroopToTarget(PartyBase party, CharacterObject character, CharacterObject target);` | 方法 |
| `IsTroopUpgradeable` | `public abstract bool IsTroopUpgradeable(PartyBase party, CharacterObject character);` | 方法 |
| `DoesPartyHaveRequiredItemsForUpgrade` | `public abstract bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget);` | 方法 |
| `DoesPartyHaveRequiredPerksForUpgrade` | `public abstract bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk);` | 方法 |
| `GetGoldCostForUpgrade` | `public abstract ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget);` | 方法 |
| `GetXpCostForUpgrade` | `public abstract int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget);` | 方法 |
| `GetSkillXpFromUpgradingTroops` | `public abstract int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops);` | 方法 |
| `GetUpgradeChanceForTroopUpgrade` | `public abstract float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
