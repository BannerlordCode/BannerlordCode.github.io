---
title: "ValuationModel"
description: "ValuationModel 的自动生成类参考。"
---
# ValuationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ValuationModel : MBGameModel<ValuationModel>`
**Base:** `MBGameModel<ValuationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ValuationModel.cs`

## 概述

`ValuationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ValuationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetValueOfTroop
`public abstract float GetValueOfTroop(CharacterObject troop)`

**用途 / Purpose:** 读取并返回当前对象中 「value of troop」 的结果。

```csharp
// 先通过子系统 API 拿到 ValuationModel 实例
ValuationModel valuationModel = ...;
var result = valuationModel.GetValueOfTroop(troop);
```

### GetMilitaryValueOfParty
`public abstract float GetMilitaryValueOfParty(MobileParty party)`

**用途 / Purpose:** 读取并返回当前对象中 「military value of party」 的结果。

```csharp
// 先通过子系统 API 拿到 ValuationModel 实例
ValuationModel valuationModel = ...;
var result = valuationModel.GetMilitaryValueOfParty(party);
```

### GetValueOfHero
`public abstract float GetValueOfHero(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「value of hero」 的结果。

```csharp
// 先通过子系统 API 拿到 ValuationModel 实例
ValuationModel valuationModel = ...;
var result = valuationModel.GetValueOfHero(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ValuationModel instance = ...;
```

## 参见

- [本区域目录](../)