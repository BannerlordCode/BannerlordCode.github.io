---
title: "DefaultMilitaryPowerModel"
description: "DefaultMilitaryPowerModel 的自动生成类参考。"
---
# DefaultMilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMilitaryPowerModel : MilitaryPowerModel`
**Base:** `MilitaryPowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs`

## 概述

`DefaultMilitaryPowerModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMilitaryPowerModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTroopPower
`public override float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)`

**用途 / Purpose:** 读取并返回当前对象中 troop power 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMilitaryPowerModel 实例
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetTroopPower(troop, side, context, 0);
```

### GetPowerOfParty
`public override float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 读取并返回当前对象中 power of party 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMilitaryPowerModel 实例
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetPowerOfParty(party, side, context);
```

### GetPowerModifierOfHero
`public override float GetPowerModifierOfHero(Hero leaderHero)`

**用途 / Purpose:** 读取并返回当前对象中 power modifier of hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMilitaryPowerModel 实例
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetPowerModifierOfHero(leaderHero);
```

### GetContextModifier
`public override float GetContextModifier(CharacterObject troop, BattleSideEnum battleSide, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 读取并返回当前对象中 context modifier 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMilitaryPowerModel 实例
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetContextModifier(troop, battleSide, context);
```

### GetContextForPosition
`public override MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 context for position 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMilitaryPowerModel 实例
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetContextForPosition(position);
```

### GetDefaultTroopPower
`public override float GetDefaultTroopPower(CharacterObject troop)`

**用途 / Purpose:** 读取并返回当前对象中 default troop power 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMilitaryPowerModel 实例
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetDefaultTroopPower(troop);
```

### GetContextModifier
`public override float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 读取并返回当前对象中 context modifier 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMilitaryPowerModel 实例
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetContextModifier(ship, battleSideEnum, context);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMilitaryPowerModel>(new MyDefaultMilitaryPowerModel());
```

## 参见

- [本区域目录](../)