---
title: "UsableMachineData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UsableMachineData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UsableMachineData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class UsableMachineData`
**Area:** campaign-ext

## Overview

`UsableMachineData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `UsableMachineData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var value = new UsableMachineData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
