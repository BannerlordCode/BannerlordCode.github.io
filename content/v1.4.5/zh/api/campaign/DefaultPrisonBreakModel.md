---
title: "DefaultPrisonBreakModel"
description: "DefaultPrisonBreakModel 的自动生成类参考。"
---
# DefaultPrisonBreakModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonBreakModel : PrisonBreakModel`
**Base:** `PrisonBreakModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPrisonBreakModel.cs`

## 概述

`DefaultPrisonBreakModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPrisonBreakModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetNumberOfGuardsToSpawn
`public override int GetNumberOfGuardsToSpawn(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 number of guards to spawn 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonBreakModel 实例
DefaultPrisonBreakModel defaultPrisonBreakModel = ...;
var result = defaultPrisonBreakModel.GetNumberOfGuardsToSpawn(settlement);
```

### CanPlayerStagePrisonBreak
`public override bool CanPlayerStagePrisonBreak(Settlement settlement)`

**用途 / Purpose:** 检查当前对象是否满足 player stage prison break 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonBreakModel 实例
DefaultPrisonBreakModel defaultPrisonBreakModel = ...;
var result = defaultPrisonBreakModel.CanPlayerStagePrisonBreak(settlement);
```

### GetPrisonBreakStartCost
`public override int GetPrisonBreakStartCost(Hero prisonerHero)`

**用途 / Purpose:** 读取并返回当前对象中 prison break start cost 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonBreakModel 实例
DefaultPrisonBreakModel defaultPrisonBreakModel = ...;
var result = defaultPrisonBreakModel.GetPrisonBreakStartCost(prisonerHero);
```

### GetRelationRewardOnPrisonBreak
`public override int GetRelationRewardOnPrisonBreak(Hero prisonerHero)`

**用途 / Purpose:** 读取并返回当前对象中 relation reward on prison break 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonBreakModel 实例
DefaultPrisonBreakModel defaultPrisonBreakModel = ...;
var result = defaultPrisonBreakModel.GetRelationRewardOnPrisonBreak(prisonerHero);
```

### GetRogueryRewardOnPrisonBreak
`public override float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)`

**用途 / Purpose:** 读取并返回当前对象中 roguery reward on prison break 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonBreakModel 实例
DefaultPrisonBreakModel defaultPrisonBreakModel = ...;
var result = defaultPrisonBreakModel.GetRogueryRewardOnPrisonBreak(prisonerHero, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPrisonBreakModel>(new MyDefaultPrisonBreakModel());
```

## 参见

- [本区域目录](../)