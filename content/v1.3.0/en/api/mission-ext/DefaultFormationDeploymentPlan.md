---
title: "DefaultFormationDeploymentPlan"
description: "Auto-generated class reference for DefaultFormationDeploymentPlan."
---
# DefaultFormationDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationDeploymentPlan : IFormationDeploymentPlan`
**Base:** `IFormationDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs`

## Overview

`DefaultFormationDeploymentPlan` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Class` | `public FormationClass Class { get; }` |
| `SpawnClass` | `public FormationClass SpawnClass { get; }` |
| `PlannedWidth` | `public float PlannedWidth { get; }` |
| `PlannedDepth` | `public float PlannedDepth { get; }` |
| `PlannedTroopCount` | `public int PlannedTroopCount { get; }` |
| `PlannedFootTroopCount` | `public int PlannedFootTroopCount { get; }` |
| `PlannedMountedTroopCount` | `public int PlannedMountedTroopCount { get; }` |
| `HasDimensions` | `public bool HasDimensions { get; }` |
| `HasSignificantMountedTroops` | `public bool HasSignificantMountedTroops { get; }` |

## Key Methods

### HasFrame
`public bool HasFrame()`

**Purpose:** Determines whether the this instance already holds frame.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.HasFrame();
```

### GetDefaultFlank
`public FormationDeploymentFlank GetDefaultFlank(int formationTroopCount, int infantryCount, bool spawnWithHorses = false)`

**Purpose:** Reads and returns the default flank value held by the this instance.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.GetDefaultFlank(0, 0, false);
```

### GetFlankDeploymentOrder
`public FormationDeploymentOrder GetFlankDeploymentOrder(int offset = 0)`

**Purpose:** Reads and returns the flank deployment order value held by the this instance.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.GetFlankDeploymentOrder(0);
```

### GetFrame
`public MatrixFrame GetFrame()`

**Purpose:** Reads and returns the frame value held by the this instance.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.GetFrame();
```

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** Reads and returns the position value held by the this instance.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.GetPosition();
```

### GetDirection
`public Vec2 GetDirection()`

**Purpose:** Reads and returns the direction value held by the this instance.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.GetDirection();
```

### CreateNewDeploymentWorldPosition
`public WorldPosition CreateNewDeploymentWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**Purpose:** Constructs a new new deployment world position entity and returns it to the caller.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
var result = defaultFormationDeploymentPlan.CreateNewDeploymentWorldPosition(worldPositionEnforcedCache);
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.Clear();
```

### SetPlannedTroopCount
`public void SetPlannedTroopCount(int footTroopCount, int mountedTroopCount)`

**Purpose:** Assigns a new value to planned troop count and updates the object's internal state.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.SetPlannedTroopCount(0, 0);
```

### SetPlannedDimensions
`public void SetPlannedDimensions(float width, float depth)`

**Purpose:** Assigns a new value to planned dimensions and updates the object's internal state.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.SetPlannedDimensions(0, 0);
```

### SetFrame
`public void SetFrame(in WorldFrame frame)`

**Purpose:** Assigns a new value to frame and updates the object's internal state.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.SetFrame(frame);
```

### SetSpawnClass
`public void SetSpawnClass(FormationClass spawnClass)`

**Purpose:** Assigns a new value to spawn class and updates the object's internal state.

```csharp
// Obtain an instance of DefaultFormationDeploymentPlan from the subsystem API first
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.SetSpawnClass(spawnClass);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultFormationDeploymentPlan defaultFormationDeploymentPlan = ...;
defaultFormationDeploymentPlan.HasFrame();
```

## See Also

- [Area Index](../)