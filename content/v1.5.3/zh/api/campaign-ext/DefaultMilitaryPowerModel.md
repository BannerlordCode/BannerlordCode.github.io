---
title: "DefaultMilitaryPowerModel"
description: "DefaultMilitaryPowerModel 的自动生成类参考。"
---
# DefaultMilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMilitaryPowerModel : MilitaryPowerModel `
**Base:** MilitaryPowerModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs

## 概述

`DefaultMilitaryPowerModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetTroopPower
`public override float GetTroopPower(CharacterObject troop,BattleSideEnum side,MapEvent.PowerCalculationContext context,float leaderModifier) `

### GetPowerOfParty
`public override float GetPowerOfParty(PartyBase party,BattleSideEnum side,MapEvent.PowerCalculationContext context) `

### GetPowerModifierOfHero
`public override float GetPowerModifierOfHero(Hero leaderHero) `

### GetContextModifier
`public override float GetContextModifier(CharacterObject troop,BattleSideEnum battleSide,MapEvent.PowerCalculationContext context) `
`public override float GetContextModifier(Ship ship,BattleSideEnum battleSideEnum,MapEvent.PowerCalculationContext context) `

### GetContextForPosition
`public override MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position) `

### GetDefaultTroopPower
`public override float GetDefaultTroopPower(CharacterObject troop) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
