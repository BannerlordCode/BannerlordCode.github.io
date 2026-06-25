---
title: "ExplainedNumber"
description: "Auto-generated class reference for ExplainedNumber."
---
# ExplainedNumber

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ExplainedNumber`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ExplainedNumber.cs`

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

**Purpose:** Executes the ExplanationLine logic.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
var result = explainedNumber.ExplanationLine("example", 0, operationType);
```

### AddLine
`public void AddLine(string name, float number, OperationType opType)`

**Purpose:** Adds line to the current collection or state.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
explainedNumber.AddLine("example", 0, opType);
```

### GetExplanations
`public string GetExplanations()`

**Purpose:** Reads and returns the explanations value held by the this instance.

```csharp
// Obtain an instance of ExplainedNumber from the subsystem API first
ExplainedNumber explainedNumber = ...;
var result = explainedNumber.GetExplanations();
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

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ExplainedNumber explainedNumber = ...;
explainedNumber.ExplanationLine("example", 0, operationType);
```

## See Also

- [Area Index](../)