---
title: "ClothSimulatorComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClothSimulatorComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `max distance multiplier`.

### SetForcedWind
`public void SetForcedWind(Vec3 windVector, bool isLocal)`

**Purpose:** Sets the value or state of `forced wind`.

### DisableForcedWind
`public void DisableForcedWind()`

**Purpose:** Handles logic related to `disable forced wind`.

### SetForcedGustStrength
`public void SetForcedGustStrength(float gustStrength)`

**Purpose:** Sets the value or state of `forced gust strength`.

### SetResetRequired
`public void SetResetRequired()`

**Purpose:** Sets the value or state of `reset required`.

### DisableMorphAnimation
`public void DisableMorphAnimation()`

**Purpose:** Handles logic related to `disable morph animation`.

### SetMorphBuffer
`public void SetMorphBuffer(float morphKey)`

**Purpose:** Sets the value or state of `morph buffer`.

### GetNumberOfMorphKeys
`public int GetNumberOfMorphKeys()`

**Purpose:** Gets the current value of `number of morph keys`.

### SetVectorArgument
`public void SetVectorArgument(float x, float y, float z, float w)`

**Purpose:** Sets the value or state of `vector argument`.

### GetMorphAnimLeftPoints
`public void GetMorphAnimLeftPoints(Vec3 leftPoints)`

**Purpose:** Gets the current value of `morph anim left points`.

### GetMorphAnimRightPoints
`public void GetMorphAnimRightPoints(Vec3 rightPoints)`

**Purpose:** Gets the current value of `morph anim right points`.

### GetMorphAnimCenterPoints
`public void GetMorphAnimCenterPoints(Vec3 centerPoints)`

**Purpose:** Gets the current value of `morph anim center points`.

### SetForcedVelocity
`public void SetForcedVelocity(in Vec3 forcedVelocity)`

**Purpose:** Sets the value or state of `forced velocity`.

## Usage Example

```csharp
var component = agent.GetComponent<ClothSimulatorComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)