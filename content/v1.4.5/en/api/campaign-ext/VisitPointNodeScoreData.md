---
title: "VisitPointNodeScoreData"
description: "Auto-generated class reference for VisitPointNodeScoreData."
---
# VisitPointNodeScoreData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class VisitPointNodeScoreData : PointOfInterestBaseData`
**Base:** `PointOfInterestBaseData`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`VisitPointNodeScoreData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `VisitPointNodeScoreData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the `point of interest type` value held by the current object.

```csharp
// Obtain an instance of VisitPointNodeScoreData from the subsystem API first
VisitPointNodeScoreData visitPointNodeScoreData = ...;
var result = visitPointNodeScoreData.GetPointOfInterestType();
```

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the current object is in the `in radius` state or condition.

```csharp
// Obtain an instance of VisitPointNodeScoreData from the subsystem API first
VisitPointNodeScoreData visitPointNodeScoreData = ...;
var result = visitPointNodeScoreData.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Reads and returns the `location ratio` value held by the current object.

```csharp
// Obtain an instance of VisitPointNodeScoreData from the subsystem API first
VisitPointNodeScoreData visitPointNodeScoreData = ...;
var result = visitPointNodeScoreData.GetLocationRatio();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
VisitPointNodeScoreData entry = ...;
```

## See Also

- [Area Index](../)