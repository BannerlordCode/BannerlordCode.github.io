---
title: "MilitaryPowerModel"
description: "MilitaryPowerModel 的自动生成类参考。"
---
# MilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MilitaryPowerModel : MBGameModel<MilitaryPowerModel> `
**Base:** MBGameModel<MilitaryPowerModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs

## 概述

`MilitaryPowerModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetTroopPower
`public abstract float GetTroopPower(CharacterObject troop,BattleSideEnum side,MapEvent.PowerCalculationContext context,float leaderModifier)`

### GetPowerOfParty
`public abstract float GetPowerOfParty(PartyBase party,BattleSideEnum side,MapEvent.PowerCalculationContext context)`

### GetContextModifier
`public abstract float GetContextModifier(CharacterObject troop,BattleSideEnum battleSideEnum,MapEvent.PowerCalculationContext context)`
`public abstract float GetContextModifier(Ship ship,BattleSideEnum battleSideEnum,MapEvent.PowerCalculationContext context)`

### GetContextForPosition
`public abstract MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)`

### GetDefaultTroopPower
`public abstract float GetDefaultTroopPower(CharacterObject troop)`

### GetPowerModifierOfHero
`public abstract float GetPowerModifierOfHero(Hero leaderHero)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
