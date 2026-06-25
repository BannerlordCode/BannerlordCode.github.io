---
title: "PointOfInterestScorePair"
description: "Auto-generated class reference for PointOfInterestScorePair."
---
# PointOfInterestScorePair

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class PointOfInterestScorePair`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionPathGenerationLogic.cs`

## Overview

`PointOfInterestScorePair` lives in `SandBox.Missions.MissionLogics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clone
`public PointOfInterestScorePair Clone()`

**Purpose:** **Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of PointOfInterestScorePair from the subsystem API first
PointOfInterestScorePair pointOfInterestScorePair = ...;
var result = pointOfInterestScorePair.Clone();
```

### AddToData
`public void AddToData(PointOfInterestBaseData pointOfInterestToAdd)`

**Purpose:** **Purpose:** Adds to data to the current collection or state.

```csharp
// Obtain an instance of PointOfInterestScorePair from the subsystem API first
PointOfInterestScorePair pointOfInterestScorePair = ...;
pointOfInterestScorePair.AddToData(pointOfInterestToAdd);
```

### IsDataEqualTo
`public bool IsDataEqualTo(PointOfInterestScorePair other, PointOfInterestBaseData newDataToAdd)`

**Purpose:** **Purpose:** Determines whether the this instance is in the data equal to state or condition.

```csharp
// Obtain an instance of PointOfInterestScorePair from the subsystem API first
PointOfInterestScorePair pointOfInterestScorePair = ...;
var result = pointOfInterestScorePair.IsDataEqualTo(other, newDataToAdd);
```

### IsBetterThan
`public bool IsBetterThan(PointOfInterestScorePair other)`

**Purpose:** **Purpose:** Determines whether the this instance is in the better than state or condition.

```csharp
// Obtain an instance of PointOfInterestScorePair from the subsystem API first
PointOfInterestScorePair pointOfInterestScorePair = ...;
var result = pointOfInterestScorePair.IsBetterThan(other);
```

### IsSufficient
`public bool IsSufficient()`

**Purpose:** **Purpose:** Determines whether the this instance is in the sufficient state or condition.

```csharp
// Obtain an instance of PointOfInterestScorePair from the subsystem API first
PointOfInterestScorePair pointOfInterestScorePair = ...;
var result = pointOfInterestScorePair.IsSufficient();
```

### ReOrderDataAccordingToPathRatios
`public void ReOrderDataAccordingToPathRatios()`

**Purpose:** **Purpose:** Executes the ReOrderDataAccordingToPathRatios logic.

```csharp
// Obtain an instance of PointOfInterestScorePair from the subsystem API first
PointOfInterestScorePair pointOfInterestScorePair = ...;
pointOfInterestScorePair.ReOrderDataAccordingToPathRatios();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PointOfInterestScorePair pointOfInterestScorePair = ...;
pointOfInterestScorePair.Clone();
```

## See Also

- [Area Index](../)