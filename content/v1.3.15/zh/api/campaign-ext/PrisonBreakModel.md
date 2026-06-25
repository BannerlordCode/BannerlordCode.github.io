---
title: "PrisonBreakModel"
description: "PrisonBreakModel 的自动生成类参考。"
---
# PrisonBreakModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonBreakModel : MBGameModel<PrisonBreakModel>`
**Base:** `MBGameModel<PrisonBreakModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonBreakModel.cs`

## 概述

`PrisonBreakModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PrisonBreakModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetNumberOfGuardsToSpawn
`public abstract int GetNumberOfGuardsToSpawn(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「number of guards to spawn」 的结果。

```csharp
// 先通过子系统 API 拿到 PrisonBreakModel 实例
PrisonBreakModel prisonBreakModel = ...;
var result = prisonBreakModel.GetNumberOfGuardsToSpawn(settlement);
```

### CanPlayerStagePrisonBreak
`public abstract bool CanPlayerStagePrisonBreak(Settlement settlement)`

**用途 / Purpose:** 检查当前对象是否满足 「player stage prison break」 的前置条件。

```csharp
// 先通过子系统 API 拿到 PrisonBreakModel 实例
PrisonBreakModel prisonBreakModel = ...;
var result = prisonBreakModel.CanPlayerStagePrisonBreak(settlement);
```

### GetPrisonBreakStartCost
`public abstract int GetPrisonBreakStartCost(Hero prisonerHero)`

**用途 / Purpose:** 读取并返回当前对象中 「prison break start cost」 的结果。

```csharp
// 先通过子系统 API 拿到 PrisonBreakModel 实例
PrisonBreakModel prisonBreakModel = ...;
var result = prisonBreakModel.GetPrisonBreakStartCost(prisonerHero);
```

### GetRelationRewardOnPrisonBreak
`public abstract int GetRelationRewardOnPrisonBreak(Hero prisonerHero)`

**用途 / Purpose:** 读取并返回当前对象中 「relation reward on prison break」 的结果。

```csharp
// 先通过子系统 API 拿到 PrisonBreakModel 实例
PrisonBreakModel prisonBreakModel = ...;
var result = prisonBreakModel.GetRelationRewardOnPrisonBreak(prisonerHero);
```

### GetRogueryRewardOnPrisonBreak
`public abstract float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)`

**用途 / Purpose:** 读取并返回当前对象中 「roguery reward on prison break」 的结果。

```csharp
// 先通过子系统 API 拿到 PrisonBreakModel 实例
PrisonBreakModel prisonBreakModel = ...;
var result = prisonBreakModel.GetRogueryRewardOnPrisonBreak(prisonerHero, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PrisonBreakModel instance = ...;
```

## 参见

- [本区域目录](../)