---
title: "IncidentModel"
description: "IncidentModel 的自动生成类参考。"
---
# IncidentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IncidentModel : MBGameModel<IncidentModel>`
**Base:** `MBGameModel<IncidentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/IncidentModel.cs`

## 概述

`IncidentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `IncidentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMinGlobalCooldownTime
`public abstract CampaignTime GetMinGlobalCooldownTime()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 min global cooldown time 的结果。

```csharp
// 先通过子系统 API 拿到 IncidentModel 实例
IncidentModel incidentModel = ...;
var result = incidentModel.GetMinGlobalCooldownTime();
```

### GetMaxGlobalCooldownTime
`public abstract CampaignTime GetMaxGlobalCooldownTime()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 max global cooldown time 的结果。

```csharp
// 先通过子系统 API 拿到 IncidentModel 实例
IncidentModel incidentModel = ...;
var result = incidentModel.GetMaxGlobalCooldownTime();
```

### GetIncidentTriggerGlobalProbability
`public abstract float GetIncidentTriggerGlobalProbability()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 incident trigger global probability 的结果。

```csharp
// 先通过子系统 API 拿到 IncidentModel 实例
IncidentModel incidentModel = ...;
var result = incidentModel.GetIncidentTriggerGlobalProbability();
```

### GetIncidentTriggerProbabilityDuringSiege
`public abstract float GetIncidentTriggerProbabilityDuringSiege()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 incident trigger probability during siege 的结果。

```csharp
// 先通过子系统 API 拿到 IncidentModel 实例
IncidentModel incidentModel = ...;
var result = incidentModel.GetIncidentTriggerProbabilityDuringSiege();
```

### GetIncidentTriggerProbabilityDuringWait
`public abstract float GetIncidentTriggerProbabilityDuringWait()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 incident trigger probability during wait 的结果。

```csharp
// 先通过子系统 API 拿到 IncidentModel 实例
IncidentModel incidentModel = ...;
var result = incidentModel.GetIncidentTriggerProbabilityDuringWait();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
IncidentModel instance = ...;
```

## 参见

- [本区域目录](../)