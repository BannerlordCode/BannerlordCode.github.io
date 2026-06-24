<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ExplainedNumber`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ExplainedNumber

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ExplainedNumber`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ExplainedNumber.cs`

## Overview

`ExplainedNumber` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Lines` | `public List<ExplanationLine> Lines { get; }` |
| `BaseLine` | `public ExplanationLine? BaseLine { get; }` |
| `LimitMinLine` | `public ExplanationLine? LimitMinLine { get; }` |
| `LimitMaxLine` | `public ExplanationLine? LimitMaxLine { get; }` |
| `BaseNumber` | `public float BaseNumber { get; }` |
| `LimitMinValue` | `public float LimitMinValue { get; }` |
| `LimitMaxValue` | `public float LimitMaxValue { get; }` |
| `SumOfFactors` | `public float SumOfFactors { get; }` |

## Key Methods

### ExplanationLine
`public readonly struct ExplanationLine(string name, float number, OperationType operationType)`

**Purpose:** Handles logic related to `explanation line`.

### AddLine
`public void AddLine(string name, float number, OperationType opType)`

**Purpose:** Adds `line` to the current collection or state.

### GetExplanations
`public string GetExplanations()`

**Purpose:** Gets the current value of `explanations`.

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

## Usage Example

```csharp
var value = new ExplainedNumber();
value.ExplanationLine("example", 0, operationType);
```

## See Also

- [Complete Class Catalog](../catalog)