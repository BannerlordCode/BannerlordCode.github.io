---
title: "ClothSimulatorComponent"
description: "Auto-generated class reference for ClothSimulatorComponent."
---
# ClothSimulatorComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ClothSimulatorComponent : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/ClothSimulatorComponent.cs`

## Overview

`ClothSimulatorComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `ClothSimulatorComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetMaxDistanceMultiplier
`public void SetMaxDistanceMultiplier(float multiplier)`

**Purpose:** **Purpose:** Assigns a new value to max distance multiplier and updates the object's internal state.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetMaxDistanceMultiplier(0);
```

### SetForcedWind
`public void SetForcedWind(Vec3 windVector, bool isLocal)`

**Purpose:** **Purpose:** Assigns a new value to forced wind and updates the object's internal state.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetForcedWind(windVector, false);
```

### DisableForcedWind
`public void DisableForcedWind()`

**Purpose:** **Purpose:** Executes the DisableForcedWind logic.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.DisableForcedWind();
```

### SetForcedGustStrength
`public void SetForcedGustStrength(float gustStrength)`

**Purpose:** **Purpose:** Assigns a new value to forced gust strength and updates the object's internal state.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetForcedGustStrength(0);
```

### SetResetRequired
`public void SetResetRequired()`

**Purpose:** **Purpose:** Assigns a new value to reset required and updates the object's internal state.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetResetRequired();
```

### DisableMorphAnimation
`public void DisableMorphAnimation()`

**Purpose:** **Purpose:** Executes the DisableMorphAnimation logic.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.DisableMorphAnimation();
```

### SetMorphBuffer
`public void SetMorphBuffer(float morphKey)`

**Purpose:** **Purpose:** Assigns a new value to morph buffer and updates the object's internal state.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetMorphBuffer(0);
```

### GetNumberOfMorphKeys
`public int GetNumberOfMorphKeys()`

**Purpose:** **Purpose:** Reads and returns the number of morph keys value held by the this instance.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
var result = clothSimulatorComponent.GetNumberOfMorphKeys();
```

### SetVectorArgument
`public void SetVectorArgument(float x, float y, float z, float w)`

**Purpose:** **Purpose:** Assigns a new value to vector argument and updates the object's internal state.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetVectorArgument(0, 0, 0, 0);
```

### GetMorphAnimLeftPoints
`public void GetMorphAnimLeftPoints(Vec3 leftPoints)`

**Purpose:** **Purpose:** Reads and returns the morph anim left points value held by the this instance.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.GetMorphAnimLeftPoints(leftPoints);
```

### GetMorphAnimRightPoints
`public void GetMorphAnimRightPoints(Vec3 rightPoints)`

**Purpose:** **Purpose:** Reads and returns the morph anim right points value held by the this instance.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.GetMorphAnimRightPoints(rightPoints);
```

### GetMorphAnimCenterPoints
`public void GetMorphAnimCenterPoints(Vec3 centerPoints)`

**Purpose:** **Purpose:** Reads and returns the morph anim center points value held by the this instance.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.GetMorphAnimCenterPoints(centerPoints);
```

### SetForcedVelocity
`public void SetForcedVelocity(in Vec3 forcedVelocity)`

**Purpose:** **Purpose:** Assigns a new value to forced velocity and updates the object's internal state.

```csharp
// Obtain an instance of ClothSimulatorComponent from the subsystem API first
ClothSimulatorComponent clothSimulatorComponent = ...;
clothSimulatorComponent.SetForcedVelocity(forcedVelocity);
```

## Usage Example

```csharp
var component = agent.GetComponent<ClothSimulatorComponent>();
```

## See Also

- [Area Index](../)