<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PointOfInterestScorePair`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PointOfInterestScorePair

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class PointOfInterestScorePair`
**Area:** campaign-ext

## Overview

`PointOfInterestScorePair` lives in `SandBox.Missions.MissionLogics`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ReverseClone
`public NavigationPathData ReverseClone()`

**Purpose:** Handles logic related to `reverse clone`.

### InitializeUsablePoints
`public void InitializeUsablePoints(List<UsableMachine> allUsableMachines)`

**Purpose:** Initializes the state, resources, or bindings for `usable points`.

### GetPointOfInterestType
`public abstract PointOfInterests GetPointOfInterestType()`

**Purpose:** Gets the current value of `point of interest type`.

### IsInRadius
`public abstract bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Handles logic related to `is in radius`.

### GetLocationRatio
`public abstract float GetLocationRatio()`

**Purpose:** Gets the current value of `location ratio`.

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**Purpose:** Gets the current value of `point of interest type`.

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Handles logic related to `is in radius`.

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Gets the current value of `location ratio`.

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**Purpose:** Gets the current value of `point of interest type`.

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Handles logic related to `is in radius`.

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Gets the current value of `location ratio`.

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**Purpose:** Gets the current value of `point of interest type`.

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Handles logic related to `is in radius`.

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Gets the current value of `location ratio`.

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**Purpose:** Gets the current value of `point of interest type`.

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Handles logic related to `is in radius`.

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Gets the current value of `location ratio`.

### Clone
`public PointOfInterestScorePair Clone()`

**Purpose:** Handles logic related to `clone`.

### AddToData
`public void AddToData(PointOfInterestBaseData pointOfInterestToAdd)`

**Purpose:** Adds `to data` to the current collection or state.

### IsDataEqualTo
`public bool IsDataEqualTo(PointOfInterestScorePair other, PointOfInterestBaseData newDataToAdd)`

**Purpose:** Handles logic related to `is data equal to`.

## Usage Example

```csharp
// First obtain a PointOfInterestScorePair instance from game state, then call one of its public methods
var value = new PointOfInterestScorePair();
value.ReverseClone();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
