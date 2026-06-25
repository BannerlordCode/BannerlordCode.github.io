---
title: "MBRandom"
description: "Auto-generated class reference for MBRandom."
---
# MBRandom

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBRandom`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBRandom.cs`

## Overview

`MBRandom` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RandomFloatNormal` | `public static float RandomFloatNormal { get; }` |

## Key Methods

### RandomFloatRanged
`public static float RandomFloatRanged(float maxVal)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBRandom.RandomFloatRanged(0);
```

### RandomFloatRanged
`public static float RandomFloatRanged(float minVal, float maxVal)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBRandom.RandomFloatRanged(0, 0);
```

### RandomInt
`public static int RandomInt()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBRandom.RandomInt();
```

### RandomInt
`public static int RandomInt(int maxValue)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBRandom.RandomInt(0);
```

### RandomInt
`public static int RandomInt(int minValue, int maxValue)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBRandom.RandomInt(0, 0);
```

### RoundRandomized
`public static int RoundRandomized(float f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBRandom.RoundRandomized(0);
```

### RandomFloatGaussian
`public static float RandomFloatGaussian(float center, float spread, float min, float max)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBRandom.RandomFloatGaussian(0, 0, 0, 0);
```

### SetSeed
`public static void SetSeed(uint seed, uint seed2)`

**Purpose:** Assigns a new value to `seed` and updates the object's internal state.

```csharp
// Static call; no instance required
MBRandom.SetSeed(0, 0);
```

### RandomIntWithSeed
`public static int RandomIntWithSeed(uint seed, uint seed2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MBRandom.RandomIntWithSeed(0, 0);
```

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(uint seed, uint seed2)`

**Purpose:** Performs the operation described by this method.

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