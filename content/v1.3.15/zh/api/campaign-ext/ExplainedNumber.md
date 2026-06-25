---
title: "ExplainedNumber"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ExplainedNumber`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `explanations` 的当前值。

### GetLines
`public List<ValueTuple<string, float>> GetLines()`

**用途 / Purpose:** 获取 `lines` 的当前值。

### AddFromExplainedNumber
`public void AddFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)`

**用途 / Purpose:** 向当前集合/状态中添加 `from explained number`。

### SubtractFromExplainedNumber
`public void SubtractFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)`

**用途 / Purpose:** 处理 `subtract from explained number` 相关逻辑。

### Add
`public void Add(float value, TextObject description = null, TextObject variable = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### AddFactor
`public void AddFactor(float value, TextObject description = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `factor`。

### LimitMin
`public void LimitMin(float minValue)`

**用途 / Purpose:** 处理 `limit min` 相关逻辑。

### LimitMax
`public void LimitMax(float maxValue, TextObject description = null)`

**用途 / Purpose:** 处理 `limit max` 相关逻辑。

### Clamp
`public void Clamp(float minValue, float maxValue)`

**用途 / Purpose:** 处理 `clamp` 相关逻辑。

### GetLines
`public List<ValueTuple<string, float>> GetLines(float baseNumber, float unclampedResultNumber, TextObject overrideBaseLineText = null, TextObject overrideMaximumLineText = null, TextObject overrideMinimumLineText = null)`

**用途 / Purpose:** 获取 `lines` 的当前值。

### AddLine
`public void AddLine(string name, float number, ExplainedNumber.StatExplainer.OperationType opType)`

**用途 / Purpose:** 向当前集合/状态中添加 `line`。

## 使用示例

```csharp
var value = new ExplainedNumber();
value.GetExplanations();
```

## 参见

- [完整类目录](../catalog)