---
title: "BribeCalculationModel"
description: "BribeCalculationModel 的自动生成类参考。"
---
# BribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BribeCalculationModel : MBGameModel<BribeCalculationModel>`
**Base:** `MBGameModel<BribeCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BribeCalculationModel.cs`

## 概述

`BribeCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BribeCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBribeToEnterLordsHall
`public abstract int GetBribeToEnterLordsHall(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「bribe to enter lords hall」 的结果。

```csharp
// 先通过子系统 API 拿到 BribeCalculationModel 实例
BribeCalculationModel bribeCalculationModel = ...;
var result = bribeCalculationModel.GetBribeToEnterLordsHall(settlement);
```

### GetBribeToEnterDungeon
`public abstract int GetBribeToEnterDungeon(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「bribe to enter dungeon」 的结果。

```csharp
// 先通过子系统 API 拿到 BribeCalculationModel 实例
BribeCalculationModel bribeCalculationModel = ...;
var result = bribeCalculationModel.GetBribeToEnterDungeon(settlement);
```

### IsBribeNotNeededToEnterKeep
`public abstract bool IsBribeNotNeededToEnterKeep(Settlement settlement)`

**用途 / Purpose:** 判断当前对象是否处于 「bribe not needed to enter keep」 状态或条件。

```csharp
// 先通过子系统 API 拿到 BribeCalculationModel 实例
BribeCalculationModel bribeCalculationModel = ...;
var result = bribeCalculationModel.IsBribeNotNeededToEnterKeep(settlement);
```

### IsBribeNotNeededToEnterDungeon
`public abstract bool IsBribeNotNeededToEnterDungeon(Settlement settlement)`

**用途 / Purpose:** 判断当前对象是否处于 「bribe not needed to enter dungeon」 状态或条件。

```csharp
// 先通过子系统 API 拿到 BribeCalculationModel 实例
BribeCalculationModel bribeCalculationModel = ...;
var result = bribeCalculationModel.IsBribeNotNeededToEnterDungeon(settlement);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BribeCalculationModel instance = ...;
```

## 参见

- [本区域目录](../)