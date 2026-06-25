---
title: "MBRandom"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBRandom`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBRandom

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBRandom`
**Base:** none
**File:** `TaleWorlds.Core/MBRandom.cs`

## Overview

`MBRandom` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RandomFloat` | `public static float RandomFloat { get; }` |
| `RandomFloatNormal` | `public static float RandomFloatNormal { get; }` |
| `NondeterministicRandomFloat` | `public static float NondeterministicRandomFloat { get; }` |
| `NondeterministicRandomInt` | `public static int NondeterministicRandomInt { get; }` |

## Key Methods

### RandomFloatRanged
`public static float RandomFloatRanged(float maxVal)`

**Purpose:** Handles logic related to `random float ranged`.

### RandomFloatRanged
`public static float RandomFloatRanged(float minVal, float maxVal)`

**Purpose:** Handles logic related to `random float ranged`.

### RandomInt
`public static int RandomInt()`

**Purpose:** Handles logic related to `random int`.

### RandomInt
`public static int RandomInt(int maxValue)`

**Purpose:** Handles logic related to `random int`.

### RandomInt
`public static int RandomInt(int minValue, int maxValue)`

**Purpose:** Handles logic related to `random int`.

### RoundRandomized
`public static int RoundRandomized(float f)`

**Purpose:** Handles logic related to `round randomized`.

### SetSeed
`public static void SetSeed(uint seed, uint seed2)`

**Purpose:** Sets the value or state of `seed`.

### RandomIntWithSeed
`public static int RandomIntWithSeed(uint seed, uint seed2)`

**Purpose:** Handles logic related to `random int with seed`.

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(uint seed, uint seed2)`

**Purpose:** Handles logic related to `random float with seed`.

## Usage Example

```csharp
MBRandom.RandomFloatRanged(0);
```

## See Also

- [Complete Class Catalog](../catalog)