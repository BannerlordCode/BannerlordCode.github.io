---
title: "ArrangementOrder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArrangementOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArrangementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ArrangementOrder`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ArrangementOrder.cs`

## Overview

`ArrangementOrder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetUnitSpacingOf
`public static int GetUnitSpacingOf(ArrangementOrderEnum a)`

**Purpose:** Gets the current value of `unit spacing of`.

### GetUnitLooseness
`public static bool GetUnitLooseness(ArrangementOrderEnum a)`

**Purpose:** Gets the current value of `unit looseness`.

### GetMovementSpeedRestriction
`public void GetMovementSpeedRestriction(out float? runRestriction, out float? walkRestriction)`

**Purpose:** Gets the current value of `movement speed restriction`.

### GetArrangement
`public IFormationArrangement GetArrangement(Formation formation)`

**Purpose:** Gets the current value of `arrangement`.

### OnApply
`public void OnApply(Formation formation)`

**Purpose:** Called when the `apply` event is raised.

### SoftUpdate
`public void SoftUpdate(Formation formation)`

**Purpose:** Handles logic related to `soft update`.

### GetShieldDirectionOfUnit
`public static Agent.UsageDirection GetShieldDirectionOfUnit(Formation formation, Agent unit, ArrangementOrderEnum orderEnum)`

**Purpose:** Gets the current value of `shield direction of unit`.

### GetUnitSpacing
`public int GetUnitSpacing()`

**Purpose:** Gets the current value of `unit spacing`.

### Rearrange
`public void Rearrange(Formation formation)`

**Purpose:** Handles logic related to `rearrange`.

### RearrangeAux
`public void RearrangeAux(Formation formation, bool isDirectly)`

**Purpose:** Handles logic related to `rearrange aux`.

### TransposeLineFormation
`public static void TransposeLineFormation(Formation formation)`

**Purpose:** Handles logic related to `transpose line formation`.

### OnCancel
`public void OnCancel(Formation formation)`

**Purpose:** Called when the `cancel` event is raised.

### TickOccasionally
`public void TickOccasionally(Formation formation)`

**Purpose:** Handles logic related to `tick occasionally`.

### GetNativeEnum
`public ArrangementOrderEnum GetNativeEnum()`

**Purpose:** Gets the current value of `native enum`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### OnOrderPositionChanged
`public void OnOrderPositionChanged(Formation formation, Vec2 previousOrderPosition)`

**Purpose:** Called when the `order position changed` event is raised.

### GetArrangementOrderDefensiveness
`public static int GetArrangementOrderDefensiveness(ArrangementOrderEnum orderEnum)`

**Purpose:** Gets the current value of `arrangement order defensiveness`.

### GetArrangementOrderDefensivenessChange
`public static int GetArrangementOrderDefensivenessChange(ArrangementOrderEnum previousOrderEnum, ArrangementOrderEnum nextOrderEnum)`

**Purpose:** Gets the current value of `arrangement order defensiveness change`.

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int formationRankIndex, int rankCount)`

**Purpose:** Handles logic related to `calculate formation direction enforcing factor for rank`.

## Usage Example

```csharp
ArrangementOrder.GetUnitSpacingOf(a);
```

## See Also

- [Complete Class Catalog](../catalog)