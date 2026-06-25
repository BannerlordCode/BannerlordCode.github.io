---
title: "MissionPathGenerationLogic"
description: "Auto-generated class reference for MissionPathGenerationLogic."
---
# MissionPathGenerationLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionPathGenerationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`MissionPathGenerationLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionPathGenerationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ReverseClone
`public NavigationPathData ReverseClone()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.ReverseClone();
```

### InitializeUsablePoints
`public void InitializeUsablePoints(List<UsableMachine> allUsableMachines)`

**Purpose:** Prepares the resources, state, or bindings required by `usable points`.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.InitializeUsablePoints(allUsableMachines);
```

### GetPointOfInterestType
`public abstract PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the `point of interest type` value held by the current object.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### IsInRadius
`public abstract bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the current object is in the `in radius` state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public abstract float GetLocationRatio()`

**Purpose:** Reads and returns the `location ratio` value held by the current object.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the `point of interest type` value held by the current object.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the current object is in the `in radius` state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Reads and returns the `location ratio` value held by the current object.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the `point of interest type` value held by the current object.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the current object is in the `in radius` state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Reads and returns the `location ratio` value held by the current object.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the `point of interest type` value held by the current object.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the current object is in the `in radius` state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Reads and returns the `location ratio` value held by the current object.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**Purpose:** Reads and returns the `point of interest type` value held by the current object.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetPointOfInterestType();
```

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**Purpose:** Determines whether the current object is in the `in radius` state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsInRadius(otherPointOfInterest);
```

### GetLocationRatio
`public override float GetLocationRatio()`

**Purpose:** Reads and returns the `location ratio` value held by the current object.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetLocationRatio();
```

### Clone
`public PointOfInterestScorePair Clone()`

**Purpose:** Duplicates the current object's state and returns a new instance.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.Clone();
```

### AddToData
`public void AddToData(PointOfInterestBaseData pointOfInterestToAdd)`

**Purpose:** Adds `to data` to the current collection or state.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.AddToData(pointOfInterestToAdd);
```

### IsDataEqualTo
`public bool IsDataEqualTo(PointOfInterestScorePair other, PointOfInterestBaseData newDataToAdd)`

**Purpose:** Determines whether the current object is in the `data equal to` state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsDataEqualTo(other, newDataToAdd);
```

### IsBetterThan
`public bool IsBetterThan(PointOfInterestScorePair other)`

**Purpose:** Determines whether the current object is in the `better than` state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsBetterThan(other);
```

### IsSufficient
`public bool IsSufficient()`

**Purpose:** Determines whether the current object is in the `sufficient` state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsSufficient();
```

### ReOrderDataAccordingToPathRatios
`public void ReOrderDataAccordingToPathRatios()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.ReOrderDataAccordingToPathRatios();
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Invoked when the `object used` event is raised.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.OnObjectUsed(userAgent, usedObject);
```

### InitializeBehavior
`public void InitializeBehavior()`

**Purpose:** Prepares the resources, state, or bindings required by `behavior`.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.InitializeBehavior();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
missionPathGenerationLogic.OnMissionTick(0);
```

### GetAllPossiblePaths
`public List<PointOfInterestScorePair> GetAllPossiblePaths()`

**Purpose:** Reads and returns the `all possible paths` value held by the current object.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.GetAllPossiblePaths();
```

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)`

**Purpose:** Determines whether the current object is in the `on left side` state or condition.

```csharp
// Obtain an instance of MissionPathGenerationLogic from the subsystem API first
MissionPathGenerationLogic missionPathGenerationLogic = ...;
var result = missionPathGenerationLogic.IsOnLeftSide(lineA, lineB, point);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionPathGenerationLogic>();
```

## See Also

- [Area Index](../)