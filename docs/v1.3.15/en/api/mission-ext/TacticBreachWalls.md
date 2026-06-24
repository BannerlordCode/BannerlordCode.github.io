<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TacticBreachWalls`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TacticBreachWalls

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TacticBreachWalls : TacticComponent`
**Base:** `TacticComponent`
**File:** `TaleWorlds.MountAndBlade/TacticBreachWalls.cs`

## Overview

`TacticBreachWalls` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Handles logic related to `tick occasionally`.

### GetRetreatThresholdRatio
`public float GetRetreatThresholdRatio(List<SiegeLane> lanes, int insideFormationCount)`

**Purpose:** Gets the current value of `retreat threshold ratio`.

## Usage Example

```csharp
var value = new TacticBreachWalls();
value.TickOccasionally();
```

## See Also

- [Complete Class Catalog](../catalog)