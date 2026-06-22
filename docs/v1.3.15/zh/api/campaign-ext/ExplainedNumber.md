<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ExplainedNumber`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ExplainedNumber

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** 结构体 struct struct
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ExplainedNumber` 是 `TaleWorlds.CampaignSystem` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
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

```csharp
public string GetExplanations()
```

### GetLines

```csharp
public List<ValueTuple<string, float>> GetLines()
```

### AddFromExplainedNumber

```csharp
public void AddFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)
```

### SubtractFromExplainedNumber

```csharp
public void SubtractFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)
```

### Add

```csharp
public void Add(float value, TextObject description = null, TextObject variable = null)
```

### AddFactor

```csharp
public void AddFactor(float value, TextObject description = null)
```

### LimitMin

```csharp
public void LimitMin(float minValue)
```

### LimitMax

```csharp
public void LimitMax(float maxValue, TextObject description = null)
```

### Clamp

```csharp
public void Clamp(float minValue, float maxValue)
```

### GetLines

```csharp
public List<ValueTuple<string, float>> GetLines(float baseNumber, float unclampedResultNumber, TextObject overrideBaseLineText = null, TextObject overrideMaximumLineText = null, TextObject overrideMinimumLineText = null)
```

### AddLine

```csharp
public void AddLine(string name, float number, ExplainedNumber.StatExplainer.OperationType opType)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)