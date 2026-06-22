<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClothSimulatorComponent`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClothSimulatorComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ClothSimulatorComponent : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/ClothSimulatorComponent.cs`

## Overview

`ClothSimulatorComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<ClothSimulatorComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### SetMaxDistanceMultiplier
```csharp
public void SetMaxDistanceMultiplier(float multiplier)
```

### SetForcedWind
```csharp
public void SetForcedWind(Vec3 windVector, bool isLocal)
```

### DisableForcedWind
```csharp
public void DisableForcedWind()
```

### SetForcedGustStrength
```csharp
public void SetForcedGustStrength(float gustStrength)
```

### SetResetRequired
```csharp
public void SetResetRequired()
```

### DisableMorphAnimation
```csharp
public void DisableMorphAnimation()
```

### SetMorphBuffer
```csharp
public void SetMorphBuffer(float morphKey)
```

### GetNumberOfMorphKeys
```csharp
public int GetNumberOfMorphKeys()
```

### SetVectorArgument
```csharp
public void SetVectorArgument(float x, float y, float z, float w)
```

### GetMorphAnimLeftPoints
```csharp
public void GetMorphAnimLeftPoints(Vec3 leftPoints)
```

### GetMorphAnimRightPoints
```csharp
public void GetMorphAnimRightPoints(Vec3 rightPoints)
```

### GetMorphAnimCenterPoints
```csharp
public void GetMorphAnimCenterPoints(Vec3 centerPoints)
```

### SetForcedVelocity
```csharp
public void SetForcedVelocity(in Vec3 forcedVelocity)
```

## Usage Example

```csharp
// Typical usage of ClothSimulatorComponent (Component)
agent.GetComponent<ClothSimulatorComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)