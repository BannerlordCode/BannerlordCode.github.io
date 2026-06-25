---
title: "ArrangementOrder"
description: "Auto-generated class reference for ArrangementOrder."
---
# ArrangementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ArrangementOrder`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ArrangementOrder.cs`

## Overview

`ArrangementOrder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetUnitSpacingOf
`public static int GetUnitSpacingOf(ArrangementOrderEnum a)`

**Purpose:** Reads and returns the unit spacing of value held by the this instance.

```csharp
// Static call; no instance required
ArrangementOrder.GetUnitSpacingOf(a);
```

### GetUnitLooseness
`public static bool GetUnitLooseness(ArrangementOrderEnum a)`

**Purpose:** Reads and returns the unit looseness value held by the this instance.

```csharp
// Static call; no instance required
ArrangementOrder.GetUnitLooseness(a);
```

### GetMovementSpeedRestriction
`public void GetMovementSpeedRestriction(out float? runRestriction, out float? walkRestriction)`

**Purpose:** Reads and returns the movement speed restriction value held by the this instance.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
arrangementOrder.GetMovementSpeedRestriction(runRestriction, walkRestriction);
```

### GetArrangement
`public IFormationArrangement GetArrangement(Formation formation)`

**Purpose:** Reads and returns the arrangement value held by the this instance.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.GetArrangement(formation);
```

### OnApply
`public void OnApply(Formation formation)`

**Purpose:** Invoked when the apply event is raised.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
arrangementOrder.OnApply(formation);
```

### SoftUpdate
`public void SoftUpdate(Formation formation)`

**Purpose:** Executes the SoftUpdate logic.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
arrangementOrder.SoftUpdate(formation);
```

### GetShieldDirectionOfUnit
`public static Agent.UsageDirection GetShieldDirectionOfUnit(Formation formation, Agent unit, ArrangementOrderEnum orderEnum)`

**Purpose:** Reads and returns the shield direction of unit value held by the this instance.

```csharp
// Static call; no instance required
ArrangementOrder.GetShieldDirectionOfUnit(formation, unit, orderEnum);
```

### GetUnitSpacing
`public int GetUnitSpacing()`

**Purpose:** Reads and returns the unit spacing value held by the this instance.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.GetUnitSpacing();
```

### Rearrange
`public void Rearrange(Formation formation)`

**Purpose:** Executes the Rearrange logic.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
arrangementOrder.Rearrange(formation);
```

### RearrangeAux
`public void RearrangeAux(Formation formation, bool isDirectly)`

**Purpose:** Executes the RearrangeAux logic.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
arrangementOrder.RearrangeAux(formation, false);
```

### TransposeLineFormation
`public static void TransposeLineFormation(Formation formation)`

**Purpose:** Executes the TransposeLineFormation logic.

```csharp
// Static call; no instance required
ArrangementOrder.TransposeLineFormation(formation);
```

### OnCancel
`public void OnCancel(Formation formation)`

**Purpose:** Invoked when the cancel event is raised.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
arrangementOrder.OnCancel(formation);
```

### TickOccasionally
`public void TickOccasionally(Formation formation)`

**Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
arrangementOrder.TickOccasionally(formation);
```

### GetNativeEnum
`public ArrangementOrderEnum GetNativeEnum()`

**Purpose:** Reads and returns the native enum value held by the this instance.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.GetNativeEnum();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.GetHashCode();
```

### OnOrderPositionChanged
`public void OnOrderPositionChanged(Formation formation, Vec2 previousOrderPosition)`

**Purpose:** Invoked when the order position changed event is raised.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
arrangementOrder.OnOrderPositionChanged(formation, previousOrderPosition);
```

### GetArrangementOrderDefensiveness
`public static int GetArrangementOrderDefensiveness(ArrangementOrderEnum orderEnum)`

**Purpose:** Reads and returns the arrangement order defensiveness value held by the this instance.

```csharp
// Static call; no instance required
ArrangementOrder.GetArrangementOrderDefensiveness(orderEnum);
```

### GetArrangementOrderDefensivenessChange
`public static int GetArrangementOrderDefensivenessChange(ArrangementOrderEnum previousOrderEnum, ArrangementOrderEnum nextOrderEnum)`

**Purpose:** Reads and returns the arrangement order defensiveness change value held by the this instance.

```csharp
// Static call; no instance required
ArrangementOrder.GetArrangementOrderDefensivenessChange(previousOrderEnum, nextOrderEnum);
```

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int formationRankIndex, int rankCount)`

**Purpose:** Calculates the current value or result of formation direction enforcing factor for rank.

```csharp
// Obtain an instance of ArrangementOrder from the subsystem API first
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.CalculateFormationDirectionEnforcingFactorForRank(0, 0);
```

## Usage Example

```csharp
ArrangementOrder.GetUnitSpacingOf(a);
```

## See Also

- [Area Index](../)