---
title: "ExplainedNumber"
description: "Auto-generated class reference for ExplainedNumber."
---
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

**Purpose:** Reads and returns the explanations value held by the this instance.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
var result = explainedNumber.GetExplanations();
```

### GetLines
`public List<ValueTuple<string, float>> GetLines()`

**Purpose:** Reads and returns the lines value held by the this instance.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
var result = explainedNumber.GetLines();
```

### AddFromExplainedNumber
`public void AddFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)`

**Purpose:** Adds from explained number to the current collection or state.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
explainedNumber.AddFromExplainedNumber(explainedNumber, baseText);
```

### SubtractFromExplainedNumber
`public void SubtractFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)`

**Purpose:** Executes the SubtractFromExplainedNumber logic.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
explainedNumber.SubtractFromExplainedNumber(explainedNumber, baseText);
```

### Add
`public void Add(float value, TextObject description = null, TextObject variable = null)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
explainedNumber.Add(0, null, null);
```

### AddFactor
`public void AddFactor(float value, TextObject description = null)`

**Purpose:** Adds factor to the current collection or state.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
explainedNumber.AddFactor(0, null);
```

### LimitMin
`public void LimitMin(float minValue)`

**Purpose:** Executes the LimitMin logic.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
explainedNumber.LimitMin(0);
```

### LimitMax
`public void LimitMax(float maxValue, TextObject description = null)`

**Purpose:** Executes the LimitMax logic.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
explainedNumber.LimitMax(0, null);
```

### Clamp
`public void Clamp(float minValue, float maxValue)`

**Purpose:** Executes the Clamp logic.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
explainedNumber.Clamp(0, 0);
```

### GetLines
`public List<ValueTuple<string, float>> GetLines(float baseNumber, float unclampedResultNumber, TextObject overrideBaseLineText = null, TextObject overrideMaximumLineText = null, TextObject overrideMinimumLineText = null)`

**Purpose:** Reads and returns the lines value held by the this instance.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
var result = explainedNumber.GetLines(0, 0, null, null, null);
```

### AddLine
`public void AddLine(string name, float number, ExplainedNumber.StatExplainer.OperationType opType)`

**Purpose:** Adds line to the current collection or state.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
explainedNumber.AddLine("example", 0, opType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ExplainedNumber explainedNumber = ...;
explainedNumber.GetExplanations();
```

## See Also

- [Area Index](../)