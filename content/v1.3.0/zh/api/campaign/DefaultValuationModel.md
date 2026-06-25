---
title: "DefaultValuationModel"
description: "DefaultValuationModel 的自动生成类参考。"
---
# DefaultValuationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultValuationModel : ValuationModel`
**Base:** `ValuationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultValuationModel.cs`

## 概述

`DefaultValuationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultValuationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMilitaryValueOfParty
`public override float GetMilitaryValueOfParty(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 military value of party 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultValuationModel 实例
DefaultValuationModel defaultValuationModel = ...;
var result = defaultValuationModel.GetMilitaryValueOfParty(party);
```

### GetValueOfTroop
`public override float GetValueOfTroop(CharacterObject troop)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 value of troop 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultValuationModel 实例
DefaultValuationModel defaultValuationModel = ...;
var result = defaultValuationModel.GetValueOfTroop(troop);
```

### GetValueOfHero
`public override float GetValueOfHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 value of hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultValuationModel 实例
DefaultValuationModel defaultValuationModel = ...;
var result = defaultValuationModel.GetValueOfHero(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultValuationModel>(new MyDefaultValuationModel());
```

## 参见

- [本区域目录](../)