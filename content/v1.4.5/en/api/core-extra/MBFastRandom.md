---
title: "MBFastRandom"
description: "Auto-generated class reference for MBFastRandom."
---
# MBFastRandom

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBFastRandom`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBFastRandom.cs`

## Overview

`MBFastRandom` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetSeed
`public void SetSeed(uint seed, uint seed2)`

**Purpose:** **Purpose:** Assigns a new value to seed and updates the object's internal state.

```csharp
// Obtain an instance of MBFastRandom from the subsystem API first
MBFastRandom mBFastRandom = ...;
mBFastRandom.SetSeed(0, 0);
```

### Next
`public int Next()`

**Purpose:** **Purpose:** Executes the Next logic.

```csharp
// Obtain an instance of MBFastRandom from the subsystem API first
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.Next();
```

### Next
`public int Next(int maxValue)`

**Purpose:** **Purpose:** Executes the Next logic.

```csharp
// Obtain an instance of MBFastRandom from the subsystem API first
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.Next(0);
```

### Next
`public int Next(int minValue, int maxValue)`

**Purpose:** **Purpose:** Executes the Next logic.

```csharp
// Obtain an instance of MBFastRandom from the subsystem API first
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.Next(0, 0);
```

### NextDouble
`public double NextDouble()`

**Purpose:** **Purpose:** Executes the NextDouble logic.

```csharp
// Obtain an instance of MBFastRandom from the subsystem API first
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.NextDouble();
```

### NextFloat
`public float NextFloat()`

**Purpose:** **Purpose:** Executes the NextFloat logic.

```csharp
// Obtain an instance of MBFastRandom from the subsystem API first
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.NextFloat();
```

### NextFloatRanged
`public float NextFloatRanged(float minVal, float maxVal)`

**Purpose:** **Purpose:** Executes the NextFloatRanged logic.

```csharp
// Obtain an instance of MBFastRandom from the subsystem API first
MBFastRandom mBFastRandom = ...;
var result = mBFastRandom.NextFloatRanged(0, 0);
```

### NextBytes
`public void NextBytes(byte buffer)`

**Purpose:** **Purpose:** Executes the NextBytes logic.

```csharp
// Obtain an instance of MBFastRandom from the subsystem API first
MBFastRandom mBFastRandom = ...;
mBFastRandom.NextBytes(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MBFastRandom mBFastRandom = ...;
mBFastRandom.SetSeed(0, 0);
```

## See Also

- [Area Index](../)