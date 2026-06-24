<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArrangementOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArrangementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ArrangementOrder`
**Area:** mission-ext

## Overview

`ArrangementOrder` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderType` | `public OrderType OrderType { get; }` |

## Key Methods

### GetUnitSpacingOf
`public static int GetUnitSpacingOf(ArrangementOrder.ArrangementOrderEnum a)`

**Purpose:** Gets the current value of `unit spacing of`.

### GetUnitLooseness
`public static bool GetUnitLooseness(ArrangementOrder.ArrangementOrderEnum a)`

**Purpose:** Gets the current value of `unit looseness`.

### GetMovementSpeedRestriction
`public void GetMovementSpeedRestriction(out float? runRestriction, out float? walkRestriction)`

**Purpose:** Gets the current value of `movement speed restriction`.

### GetArrangement
`public IFormationArrangement GetArrangement(Formation formation)`

**Purpose:** Gets the current value of `arrangement`.

### OnApply
`public unsafe void OnApply(Formation formation)`

**Purpose:** Called when the `apply` event is raised.

### SoftUpdate
`public void SoftUpdate(Formation formation)`

**Purpose:** Handles logic related to `soft update`.

### GetShieldDirectionOfUnit
`public static Agent.UsageDirection GetShieldDirectionOfUnit(Formation formation, Agent unit, ArrangementOrder.ArrangementOrderEnum orderEnum)`

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
`public unsafe static void TransposeLineFormation(Formation formation)`

**Purpose:** Handles logic related to `transpose line formation`.

### OnCancel
`public void OnCancel(Formation formation)`

**Purpose:** Called when the `cancel` event is raised.

### TickOccasionally
`public void TickOccasionally(Formation formation)`

**Purpose:** Handles logic related to `tick occasionally`.

### GetNativeEnum
`public ArrangementOrder.ArrangementOrderEnum GetNativeEnum()`

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
`public static int GetArrangementOrderDefensiveness(ArrangementOrder.ArrangementOrderEnum orderEnum)`

**Purpose:** Gets the current value of `arrangement order defensiveness`.

### GetArrangementOrderDefensivenessChange
`public static int GetArrangementOrderDefensivenessChange(ArrangementOrder.ArrangementOrderEnum previousOrderEnum, ArrangementOrder.ArrangementOrderEnum nextOrderEnum)`

**Purpose:** Gets the current value of `arrangement order defensiveness change`.

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int formationRankIndex, int rankCount)`

**Purpose:** Handles logic related to `calculate formation direction enforcing factor for rank`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ArrangementOrder.GetUnitSpacingOf(a);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
