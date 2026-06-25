---
title: "MissionPathGenerationLogic"
description: "Auto-generated class reference for MissionPathGenerationLogic."
---
# MissionPathGenerationLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionPathGenerationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`MissionPathGenerationLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionPathGenerationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Data` | `public List<MissionPathGenerationLogic.PointOfInterestBaseData> Data { get; }` |

## Key Methods

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Invoked when the object used event is raised.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.OnObjectUsed(userAgent, usedObject);
```

### InitializeBehavior
`public void InitializeBehavior()`

**Purpose:** Prepares the resources, state, or bindings required by behavior.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.InitializeBehavior();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.OnMissionTick(0);
```

### GetAllPossiblePaths
`public List<MissionPathGenerationLogic.PointOfInterestScorePair> GetAllPossiblePaths()`

**Purpose:** Reads and returns the all possible paths value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetAllPossiblePaths();
```

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)`

**Purpose:** Determines whether the this instance is in the on left side state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsOnLeftSide(lineA, lineB, point);
```

### ReverseClone
`public MissionPathGenerationLogic.NavigationPathData ReverseClone()`

**Purpose:** Executes the ReverseClone logic.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.ReverseClone();
```

### InitializeUsablePoints
`public void InitializeUsablePoints(List<UsableMachine> allUsableMachines)`

**Purpose:** Prepares the resources, state, or bindings required by usable points.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.InitializeUsablePoints(allUsableMachines);
```

### GetPointOfInterestType
`public abstract MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the point of interest type value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### GetPositionAndRadiusPairs
`public abstract List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**Purpose:** Reads and returns the position and radius pairs value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPositionAndRadiusPairs();
```

### IsInRadius
`public abstract bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the this instance is in the in radius state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public abstract float GetLocationRatio()`

**Purpose:** Reads and returns the location ratio value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the point of interest type value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**Purpose:** Reads and returns the position and radius pairs value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPositionAndRadiusPairs();
```

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the this instance is in the in radius state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Reads and returns the location ratio value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the point of interest type value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**Purpose:** Reads and returns the position and radius pairs value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPositionAndRadiusPairs();
```

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the this instance is in the in radius state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Reads and returns the location ratio value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the point of interest type value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**Purpose:** Reads and returns the position and radius pairs value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPositionAndRadiusPairs();
```

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the this instance is in the in radius state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Reads and returns the location ratio value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the point of interest type value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**Purpose:** Reads and returns the position and radius pairs value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPositionAndRadiusPairs();
```

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the this instance is in the in radius state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Reads and returns the location ratio value held by the this instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### Clone
`public MissionPathGenerationLogic.PointOfInterestScorePair Clone()`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.Clone();
```

### AddToData
`public void AddToData(MissionPathGenerationLogic.PointOfInterestBaseData pointOfInterestToAdd)`

**Purpose:** Adds to data to the current collection or state.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.AddToData(pointOfInterestToAdd);
```

### IsDataEqualTo
`public bool IsDataEqualTo(MissionPathGenerationLogic.PointOfInterestScorePair other, MissionPathGenerationLogic.PointOfInterestBaseData newDataToAdd)`

**Purpose:** Determines whether the this instance is in the data equal to state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsDataEqualTo(other, newDataToAdd);
```

### IsBetterThan
`public bool IsBetterThan(MissionPathGenerationLogic.PointOfInterestScorePair other)`

**Purpose:** Determines whether the this instance is in the better than state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsBetterThan(other);
```

### IsSufficient
`public bool IsSufficient()`

**Purpose:** Determines whether the this instance is in the sufficient state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsSufficient();
```

### ReOrderDataAccordingToPathRatios
`public void ReOrderDataAccordingToPathRatios()`

**Purpose:** Executes the ReOrderDataAccordingToPathRatios logic.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.ReOrderDataAccordingToPathRatios();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionPathGenerationLogic>();
```

## See Also

- [Area Index](../)