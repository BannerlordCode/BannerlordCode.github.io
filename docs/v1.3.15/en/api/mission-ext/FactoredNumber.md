<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FactoredNumber`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FactoredNumber

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FactoredNumber`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/FactoredNumber.cs`

## Overview

`FactoredNumber` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ResultNumber` | `public float ResultNumber { get; }` |
| `BaseNumber` | `public float BaseNumber { get; }` |
| `LimitMinValue` | `public float LimitMinValue { get; }` |
| `LimitMaxValue` | `public float LimitMaxValue { get; }` |

## Key Methods

### Add
`public void Add(float value)`

**Purpose:** Adds `add` to the current collection or state.

### AddFactor
`public void AddFactor(float value)`

**Purpose:** Adds `factor` to the current collection or state.

### LimitMin
`public void LimitMin(float minValue)`

**Purpose:** Handles logic related to `limit min`.

### LimitMax
`public void LimitMax(float maxValue)`

**Purpose:** Handles logic related to `limit max`.

### Clamp
`public void Clamp(float minValue, float maxValue)`

**Purpose:** Handles logic related to `clamp`.

## Usage Example

```csharp
var value = new FactoredNumber();
value.Add(0);
```

## See Also

- [Complete Class Catalog](../catalog)