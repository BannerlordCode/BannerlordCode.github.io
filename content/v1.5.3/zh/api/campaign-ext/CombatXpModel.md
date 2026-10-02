---
title: "CombatXpModel"
description: "CombatXpModel 的自动生成类参考。"
---
# CombatXpModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CombatXpModel : MBGameModel<CombatXpModel> `
**Base:** MBGameModel<CombatXpModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs

## 概述

`CombatXpModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetSkillForWeapon
`public abstract SkillObject GetSkillForWeapon(WeaponComponentData weapon,bool isSiegeEngineHit)`

### GetXpFromHit
`public abstract ExplainedNumber GetXpFromHit(CharacterObject attackerTroop,CharacterObject captain,CharacterObject attackedTroop,PartyBase attackerParty,int damage,bool isFatal,CombatXpModel.MissionTypeEnum missionType)`

### GetXpMultiplierFromShotDifficulty
`public abstract float GetXpMultiplierFromShotDifficulty(float shotDifficulty)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
