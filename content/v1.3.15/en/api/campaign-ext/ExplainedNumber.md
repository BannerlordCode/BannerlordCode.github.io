---
title: "ExplainedNumber"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ExplainedNumber`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ExplainedNumber

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ExplainedNumber`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/ExplainedNumber.cs`

## Overview

`ExplainedNumber` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public string GetExplanations()`

**Purpose:** Gets the current value of `explanations`.

### GetLines
`public List<ValueTuple<string, float>> GetLines()`

**Purpose:** Gets the current value of `lines`.

### AddFromExplainedNumber
`public void AddFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)`

**Purpose:** Adds `from explained number` to the current collection or state.

### SubtractFromExplainedNumber
`public void SubtractFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)`

**Purpose:** Handles logic related to `subtract from explained number`.

### Add
`public void Add(float value, TextObject description = null, TextObject variable = null)`

**Purpose:** Adds `add` to the current collection or state.

### AddFactor
`public void AddFactor(float value, TextObject description = null)`

**Purpose:** Adds `factor` to the current collection or state.

### LimitMin
`public void LimitMin(float minValue)`

**Purpose:** Handles logic related to `limit min`.

### LimitMax
`public void LimitMax(float maxValue, TextObject description = null)`

**Purpose:** Handles logic related to `limit max`.

### Clamp
`public void Clamp(float minValue, float maxValue)`

**Purpose:** Handles logic related to `clamp`.

### GetLines
`public List<ValueTuple<string, float>> GetLines(float baseNumber, float unclampedResultNumber, TextObject overrideBaseLineText = null, TextObject overrideMaximumLineText = null, TextObject overrideMinimumLineText = null)`

**Purpose:** Gets the current value of `lines`.

### AddLine
`public void AddLine(string name, float number, ExplainedNumber.StatExplainer.OperationType opType)`

**Purpose:** Adds `line` to the current collection or state.

## Usage Example

```csharp
var value = new ExplainedNumber();
value.GetExplanations();
```

## See Also

- [Complete Class Catalog](../catalog)