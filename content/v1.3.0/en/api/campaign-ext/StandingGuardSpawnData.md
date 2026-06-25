---
title: "StandingGuardSpawnData"
description: "Auto-generated class reference for StandingGuardSpawnData."
---
# StandingGuardSpawnData

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class StandingGuardSpawnData : MissionPathGenerationLogic.PointOfInterestBaseData`
**Base:** `MissionPathGenerationLogic.PointOfInterestBaseData`
**File:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`StandingGuardSpawnData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `StandingGuardSpawnData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the point of interest type value held by the this instance.

```csharp
// Obtain an instance of StandingGuardSpawnData from the subsystem API first
StandingGuardSpawnData standingGuardSpawnData = ...;
var result = standingGuardSpawnData.GetPointOfInterestType();
```

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**Purpose:** Reads and returns the position and radius pairs value held by the this instance.

```csharp
// Obtain an instance of StandingGuardSpawnData from the subsystem API first
StandingGuardSpawnData standingGuardSpawnData = ...;
var result = standingGuardSpawnData.GetPositionAndRadiusPairs();
```

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the this instance is in the in radius state or condition.

```csharp
// Obtain an instance of StandingGuardSpawnData from the subsystem API first
StandingGuardSpawnData standingGuardSpawnData = ...;
var result = standingGuardSpawnData.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Reads and returns the location ratio value held by the this instance.

```csharp
// Obtain an instance of StandingGuardSpawnData from the subsystem API first
StandingGuardSpawnData standingGuardSpawnData = ...;
var result = standingGuardSpawnData.GetLocationRatio();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
StandingGuardSpawnData entry = ...;
```

## See Also

- [Area Index](../)