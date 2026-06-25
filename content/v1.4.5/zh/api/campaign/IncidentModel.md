---
title: "IncidentModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IncidentModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IncidentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IncidentModel : MBGameModel<IncidentModel>`
**Base:** `MBGameModel<IncidentModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/IncidentModel.cs`

## 概述

`IncidentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `IncidentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMinGlobalCooldownTime
`public abstract CampaignTime GetMinGlobalCooldownTime()`

**用途 / Purpose:** 获取 `min global cooldown time` 的当前值。

### GetMaxGlobalCooldownTime
`public abstract CampaignTime GetMaxGlobalCooldownTime()`

**用途 / Purpose:** 获取 `max global cooldown time` 的当前值。

### GetIncidentTriggerGlobalProbability
`public abstract float GetIncidentTriggerGlobalProbability()`

**用途 / Purpose:** 获取 `incident trigger global probability` 的当前值。

### GetIncidentTriggerProbabilityDuringSiege
`public abstract float GetIncidentTriggerProbabilityDuringSiege()`

**用途 / Purpose:** 获取 `incident trigger probability during siege` 的当前值。

### GetIncidentTriggerProbabilityDuringWait
`public abstract float GetIncidentTriggerProbabilityDuringWait()`

**用途 / Purpose:** 获取 `incident trigger probability during wait` 的当前值。

## 使用示例

```csharp
var implementation = new CustomIncidentModel();
```

## 参见

- [完整类目录](../catalog)