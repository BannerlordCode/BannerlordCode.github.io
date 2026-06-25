---
title: "DefaultBribeCalculationModel"
description: "DefaultBribeCalculationModel 的自动生成类参考。"
---
# DefaultBribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBribeCalculationModel : BribeCalculationModel`
**Base:** `BribeCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs`

## 概述

`DefaultBribeCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBribeCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsBribeNotNeededToEnterKeep
`public override bool IsBribeNotNeededToEnterKeep(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 bribe not needed to enter keep 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultBribeCalculationModel 实例
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.IsBribeNotNeededToEnterKeep(settlement);
```

### IsBribeNotNeededToEnterDungeon
`public override bool IsBribeNotNeededToEnterDungeon(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 bribe not needed to enter dungeon 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultBribeCalculationModel 实例
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.IsBribeNotNeededToEnterDungeon(settlement);
```

### GetBribeToEnterLordsHall
`public override int GetBribeToEnterLordsHall(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 bribe to enter lords hall 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBribeCalculationModel 实例
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.GetBribeToEnterLordsHall(settlement);
```

### GetBribeToEnterDungeon
`public override int GetBribeToEnterDungeon(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 bribe to enter dungeon 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBribeCalculationModel 实例
DefaultBribeCalculationModel defaultBribeCalculationModel = ...;
var result = defaultBribeCalculationModel.GetBribeToEnterDungeon(settlement);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBribeCalculationModel>(new MyDefaultBribeCalculationModel());
```

## 参见

- [本区域目录](../)