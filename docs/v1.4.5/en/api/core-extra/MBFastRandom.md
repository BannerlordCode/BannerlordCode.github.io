<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBFastRandom`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBFastRandom

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBFastRandom`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBFastRandom.cs`

## Overview

`MBFastRandom` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetSeed
`public void SetSeed(uint seed, uint seed2)`

**Purpose:** Sets the value or state of `seed`.

### Next
`public int Next()`

**Purpose:** Handles logic related to `next`.

### Next
`public int Next(int maxValue)`

**Purpose:** Handles logic related to `next`.

### Next
`public int Next(int minValue, int maxValue)`

**Purpose:** Handles logic related to `next`.

### NextDouble
`public double NextDouble()`

**Purpose:** Handles logic related to `next double`.

### NextFloat
`public float NextFloat()`

**Purpose:** Handles logic related to `next float`.

### NextFloatRanged
`public float NextFloatRanged(float minVal, float maxVal)`

**Purpose:** Handles logic related to `next float ranged`.

### NextBytes
`public void NextBytes(byte buffer)`

**Purpose:** Handles logic related to `next bytes`.

## Usage Example

```csharp
var value = new MBFastRandom();
value.SetSeed(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)