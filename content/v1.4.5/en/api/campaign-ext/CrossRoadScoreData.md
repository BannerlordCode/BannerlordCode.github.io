---
title: "CrossRoadScoreData"
description: "Auto-generated class reference for CrossRoadScoreData."
---
# CrossRoadScoreData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CrossRoadScoreData : PointOfInterestBaseData`
**Base:** `PointOfInterestBaseData`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`CrossRoadScoreData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CrossRoadScoreData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**Purpose:** **Purpose:** Reads and returns the point of interest type value held by the this instance.

```csharp
// Obtain an instance of CrossRoadScoreData from the subsystem API first
CrossRoadScoreData crossRoadScoreData = ...;
var result = crossRoadScoreData.GetPointOfInterestType();
```

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** **Purpose:** Determines whether the this instance is in the in radius state or condition.

```csharp
// Obtain an instance of CrossRoadScoreData from the subsystem API first
CrossRoadScoreData crossRoadScoreData = ...;
var result = crossRoadScoreData.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** **Purpose:** Reads and returns the location ratio value held by the this instance.

```csharp
// Obtain an instance of CrossRoadScoreData from the subsystem API first
CrossRoadScoreData crossRoadScoreData = ...;
var result = crossRoadScoreData.GetLocationRatio();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CrossRoadScoreData entry = ...;
```

## See Also

- [Area Index](../)