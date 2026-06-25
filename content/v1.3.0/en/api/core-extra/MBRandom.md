---
title: "MBRandom"
description: "Auto-generated class reference for MBRandom."
---
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

**Purpose:** Executes the RandomFloatRanged logic.

```csharp
// Static call; no instance required
MBRandom.RandomFloatRanged(0);
```

### RandomFloatRanged
`public static float RandomFloatRanged(float minVal, float maxVal)`

**Purpose:** Executes the RandomFloatRanged logic.

```csharp
// Static call; no instance required
MBRandom.RandomFloatRanged(0, 0);
```

### RandomInt
`public static int RandomInt()`

**Purpose:** Executes the RandomInt logic.

```csharp
// Static call; no instance required
MBRandom.RandomInt();
```

### RandomInt
`public static int RandomInt(int maxValue)`

**Purpose:** Executes the RandomInt logic.

```csharp
// Static call; no instance required
MBRandom.RandomInt(0);
```

### RandomInt
`public static int RandomInt(int minValue, int maxValue)`

**Purpose:** Executes the RandomInt logic.

```csharp
// Static call; no instance required
MBRandom.RandomInt(0, 0);
```

### RoundRandomized
`public static int RoundRandomized(float f)`

**Purpose:** Executes the RoundRandomized logic.

```csharp
// Static call; no instance required
MBRandom.RoundRandomized(0);
```

### SetSeed
`public static void SetSeed(uint seed, uint seed2)`

**Purpose:** Assigns a new value to seed and updates the object's internal state.

```csharp
// Static call; no instance required
MBRandom.SetSeed(0, 0);
```

### RandomIntWithSeed
`public static int RandomIntWithSeed(uint seed, uint seed2)`

**Purpose:** Executes the RandomIntWithSeed logic.

```csharp
// Static call; no instance required
MBRandom.RandomIntWithSeed(0, 0);
```

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(uint seed, uint seed2)`

**Purpose:** Executes the RandomFloatWithSeed logic.

```csharp
// Static call; no instance required
MBRandom.RandomFloatWithSeed(0, 0);
```

## Usage Example

```csharp
MBRandom.RandomFloatRanged(0);
```

## See Also

- [Area Index](../)