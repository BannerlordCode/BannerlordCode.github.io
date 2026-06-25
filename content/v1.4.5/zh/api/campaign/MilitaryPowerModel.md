---
title: "MilitaryPowerModel"
description: "MilitaryPowerModel 的自动生成类参考。"
---
# MilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MilitaryPowerModel : MBGameModel<MilitaryPowerModel>`
**Base:** `MBGameModel<MilitaryPowerModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MilitaryPowerModel.cs`

## 概述

`MilitaryPowerModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MilitaryPowerModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTroopPower
`public abstract float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「troop power」 的结果。

```csharp
// 先通过子系统 API 拿到 MilitaryPowerModel 实例
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetTroopPower(troop, side, context, 0);
```

### GetPowerOfParty
`public abstract float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 读取并返回当前对象中 「power of party」 的结果。

```csharp
// 先通过子系统 API 拿到 MilitaryPowerModel 实例
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetPowerOfParty(party, side, context);
```

### GetContextModifier
`public abstract float GetContextModifier(CharacterObject troop, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 读取并返回当前对象中 「context modifier」 的结果。

```csharp
// 先通过子系统 API 拿到 MilitaryPowerModel 实例
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetContextModifier(troop, battleSideEnum, context);
```

### GetContextModifier
`public abstract float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 读取并返回当前对象中 「context modifier」 的结果。

```csharp
// 先通过子系统 API 拿到 MilitaryPowerModel 实例
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetContextModifier(ship, battleSideEnum, context);
```

### GetContextForPosition
`public abstract MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 「context for position」 的结果。

```csharp
// 先通过子系统 API 拿到 MilitaryPowerModel 实例
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetContextForPosition(position);
```

### GetDefaultTroopPower
`public abstract float GetDefaultTroopPower(CharacterObject troop)`

**用途 / Purpose:** 读取并返回当前对象中 「default troop power」 的结果。

```csharp
// 先通过子系统 API 拿到 MilitaryPowerModel 实例
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetDefaultTroopPower(troop);
```

### GetPowerModifierOfHero
`public abstract float GetPowerModifierOfHero(Hero leaderHero)`

**用途 / Purpose:** 读取并返回当前对象中 「power modifier of hero」 的结果。

```csharp
// 先通过子系统 API 拿到 MilitaryPowerModel 实例
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetPowerModifierOfHero(leaderHero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MilitaryPowerModel instance = ...;
```

## 参见

- [本区域目录](../)