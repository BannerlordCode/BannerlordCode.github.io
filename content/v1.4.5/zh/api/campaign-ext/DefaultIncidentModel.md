---
title: "DefaultIncidentModel"
description: "DefaultIncidentModel 的自动生成类参考。"
---
# DefaultIncidentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIncidentModel : IncidentModel`
**Base:** `IncidentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultIncidentModel.cs`

## 概述

`DefaultIncidentModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultIncidentModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMinGlobalCooldownTime
`public override CampaignTime GetMinGlobalCooldownTime()`

**用途 / Purpose:** 读取并返回当前对象中 min global cooldown time 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIncidentModel 实例
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetMinGlobalCooldownTime();
```

### GetMaxGlobalCooldownTime
`public override CampaignTime GetMaxGlobalCooldownTime()`

**用途 / Purpose:** 读取并返回当前对象中 max global cooldown time 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIncidentModel 实例
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetMaxGlobalCooldownTime();
```

### GetIncidentTriggerGlobalProbability
`public override float GetIncidentTriggerGlobalProbability()`

**用途 / Purpose:** 读取并返回当前对象中 incident trigger global probability 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIncidentModel 实例
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetIncidentTriggerGlobalProbability();
```

### GetIncidentTriggerProbabilityDuringSiege
`public override float GetIncidentTriggerProbabilityDuringSiege()`

**用途 / Purpose:** 读取并返回当前对象中 incident trigger probability during siege 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIncidentModel 实例
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetIncidentTriggerProbabilityDuringSiege();
```

### GetIncidentTriggerProbabilityDuringWait
`public override float GetIncidentTriggerProbabilityDuringWait()`

**用途 / Purpose:** 读取并返回当前对象中 incident trigger probability during wait 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultIncidentModel 实例
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetIncidentTriggerProbabilityDuringWait();
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultIncidentModel>(new MyDefaultIncidentModel());
```

## 参见

- [本区域目录](../)