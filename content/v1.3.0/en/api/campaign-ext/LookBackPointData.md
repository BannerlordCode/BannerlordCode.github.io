---
title: "LookBackPointData"
description: "Auto-generated class reference for LookBackPointData."
---
# LookBackPointData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class LookBackPointData : MissionPathGenerationLogic.PointOfInterestBaseData`
**Base:** `MissionPathGenerationLogic.PointOfInterestBaseData`
**File:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`LookBackPointData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `LookBackPointData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**Purpose:** **Purpose:** Reads and returns the point of interest type value held by the this instance.

```csharp
// Obtain an instance of LookBackPointData from the subsystem API first
LookBackPointData lookBackPointData = ...;
var result = lookBackPointData.GetPointOfInterestType();
```

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**Purpose:** **Purpose:** Reads and returns the position and radius pairs value held by the this instance.

```csharp
// Obtain an instance of LookBackPointData from the subsystem API first
LookBackPointData lookBackPointData = ...;
var result = lookBackPointData.GetPositionAndRadiusPairs();
```

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** **Purpose:** Determines whether the this instance is in the in radius state or condition.

```csharp
// Obtain an instance of LookBackPointData from the subsystem API first
LookBackPointData lookBackPointData = ...;
var result = lookBackPointData.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** **Purpose:** Reads and returns the location ratio value held by the this instance.

```csharp
// Obtain an instance of LookBackPointData from the subsystem API first
LookBackPointData lookBackPointData = ...;
var result = lookBackPointData.GetLocationRatio();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
LookBackPointData entry = ...;
```

## See Also

- [Area Index](../)