---
title: "ExplainedNumber"
description: "ExplainedNumber 的自动生成类参考。"
---
# ExplainedNumber

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ExplainedNumber`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/ExplainedNumber.cs`

## 概述

`ExplainedNumber` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ResultNumber` | `public float ResultNumber { get; }` |
| `RoundedResultNumber` | `public int RoundedResultNumber { get; }` |
| `BaseNumber` | `public float BaseNumber { get; }` |
| `IncludeDescriptions` | `public bool IncludeDescriptions { get; }` |
| `LimitMinValue` | `public float LimitMinValue { get; }` |
| `LimitMaxValue` | `public float LimitMaxValue { get; }` |
| `SumOfFactors` | `public float SumOfFactors { get; }` |
| `Lines` | `public List<ExplainedNumber.StatExplainer.ExplanationLine> Lines { get; }` |
| `BaseLine` | `public ExplainedNumber.StatExplainer.ExplanationLine? BaseLine { get; }` |
| `LimitMinLine` | `public ExplainedNumber.StatExplainer.ExplanationLine? LimitMinLine { get; }` |
| `LimitMaxLine` | `public ExplainedNumber.StatExplainer.ExplanationLine? LimitMaxLine { get; }` |

## 主要方法

### GetExplanations
`public string GetExplanations()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 explanations 的结果。

```csharp
// 先通过子系统 API 拿到 ExplainedNumber 实例
ExplainedNumber explainedNumber = ...;
var result = explainedNumber.GetExplanations();
```

### GetLines
`public List<ValueTuple<string, float>> GetLines()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 lines 的结果。

```csharp
// 先通过子系统 API 拿到 ExplainedNumber 实例
ExplainedNumber explainedNumber = ...;
var result = explainedNumber.GetLines();
```

### AddFromExplainedNumber
`public void AddFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)`

**用途 / Purpose:** **用途 / Purpose:** 将 from explained number 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ExplainedNumber 实例
ExplainedNumber explainedNumber = ...;
explainedNumber.AddFromExplainedNumber(explainedNumber, baseText);
```

### SubtractFromExplainedNumber
`public void SubtractFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SubtractFromExplainedNumber 对应的操作。

```csharp
// 先通过子系统 API 拿到 ExplainedNumber 实例
ExplainedNumber explainedNumber = ...;
explainedNumber.SubtractFromExplainedNumber(explainedNumber, baseText);
```

### Add
`public void Add(float value, TextObject description = null, TextObject variable = null)`

**用途 / Purpose:** **用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 ExplainedNumber 实例
ExplainedNumber explainedNumber = ...;
explainedNumber.Add(0, null, null);
```

### AddFactor
`public void AddFactor(float value, TextObject description = null)`

**用途 / Purpose:** **用途 / Purpose:** 将 factor 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ExplainedNumber 实例
ExplainedNumber explainedNumber = ...;
explainedNumber.AddFactor(0, null);
```

### LimitMin
`public void LimitMin(float minValue)`

**用途 / Purpose:** **用途 / Purpose:** 调用 LimitMin 对应的操作。

```csharp
// 先通过子系统 API 拿到 ExplainedNumber 实例
ExplainedNumber explainedNumber = ...;
explainedNumber.LimitMin(0);
```

### LimitMax
`public void LimitMax(float maxValue, TextObject description = null)`

**用途 / Purpose:** **用途 / Purpose:** 调用 LimitMax 对应的操作。

```csharp
// 先通过子系统 API 拿到 ExplainedNumber 实例
ExplainedNumber explainedNumber = ...;
explainedNumber.LimitMax(0, null);
```

### Clamp
`public void Clamp(float minValue, float maxValue)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Clamp 对应的操作。

```csharp
// 先通过子系统 API 拿到 ExplainedNumber 实例
ExplainedNumber explainedNumber = ...;
explainedNumber.Clamp(0, 0);
```

### GetLines
`public List<ValueTuple<string, float>> GetLines(float baseNumber, float unclampedResultNumber, TextObject overrideBaseLineText = null, TextObject overrideMaximumLineText = null, TextObject overrideMinimumLineText = null)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 lines 的结果。

```csharp
// 先通过子系统 API 拿到 ExplainedNumber 实例
ExplainedNumber explainedNumber = ...;
var result = explainedNumber.GetLines(0, 0, null, null, null);
```

### AddLine
`public void AddLine(string name, float number, ExplainedNumber.StatExplainer.OperationType opType)`

**用途 / Purpose:** **用途 / Purpose:** 将 line 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ExplainedNumber 实例
ExplainedNumber explainedNumber = ...;
explainedNumber.AddLine("example", 0, opType);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ExplainedNumber explainedNumber = ...;
explainedNumber.GetExplanations();
```

## 参见

- [本区域目录](../)