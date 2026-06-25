---
title: "PointOfInterestBaseData"
description: "Auto-generated class reference for PointOfInterestBaseData."
---
# PointOfInterestBaseData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public abstract class PointOfInterestBaseData`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`PointOfInterestBaseData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `PointOfInterestBaseData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPointOfInterestType
`public abstract PointOfInterests GetPointOfInterestType()`

**Purpose:** **Purpose:** Reads and returns the point of interest type value held by the this instance.

```csharp
// Obtain an instance of PointOfInterestBaseData from the subsystem API first
PointOfInterestBaseData pointOfInterestBaseData = ...;
var result = pointOfInterestBaseData.GetPointOfInterestType();
```

### IsInRadius
`public abstract bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** **Purpose:** Determines whether the this instance is in the in radius state or condition.

```csharp
// Obtain an instance of PointOfInterestBaseData from the subsystem API first
PointOfInterestBaseData pointOfInterestBaseData = ...;
var result = pointOfInterestBaseData.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public abstract float GetLocationRatio()`

**Purpose:** **Purpose:** Reads and returns the location ratio value held by the this instance.

```csharp
// Obtain an instance of PointOfInterestBaseData from the subsystem API first
PointOfInterestBaseData pointOfInterestBaseData = ...;
var result = pointOfInterestBaseData.GetLocationRatio();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PointOfInterestBaseData instance = ...;
```

## See Also

- [Area Index](../)