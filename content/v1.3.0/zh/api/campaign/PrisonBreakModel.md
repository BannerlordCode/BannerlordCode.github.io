---
title: "PrisonBreakModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PrisonBreakModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `number of guards to spawn` 的当前值。

### CanPlayerStagePrisonBreak
`public abstract bool CanPlayerStagePrisonBreak(Settlement settlement)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player stage prison break`。

### GetPrisonBreakStartCost
`public abstract int GetPrisonBreakStartCost(Hero prisonerHero)`

**用途 / Purpose:** 获取 `prison break start cost` 的当前值。

### GetRelationRewardOnPrisonBreak
`public abstract int GetRelationRewardOnPrisonBreak(Hero prisonerHero)`

**用途 / Purpose:** 获取 `relation reward on prison break` 的当前值。

### GetRogueryRewardOnPrisonBreak
`public abstract float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)`

**用途 / Purpose:** 获取 `roguery reward on prison break` 的当前值。

## 使用示例

```csharp
var implementation = new CustomPrisonBreakModel();
```

## 参见

- [完整类目录](../catalog)