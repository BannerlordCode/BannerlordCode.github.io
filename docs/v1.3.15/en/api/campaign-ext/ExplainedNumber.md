<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ExplainedNumber`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ExplainedNumber

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** struct
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ExplainedNumber` is a struct in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)