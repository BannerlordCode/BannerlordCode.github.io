<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ParticleSystem`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ParticleSystem

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ParticleSystem : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/ParticleSystem.cs`

## Overview

`ParticleSystem` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateParticleSystemAttachedToBone
`public static ParticleSystem CreateParticleSystemAttachedToBone(string systemName, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)`

**Purpose:** Creates a new `particle system attached to bone` instance or object.

### CreateParticleSystemAttachedToBone
`public static ParticleSystem CreateParticleSystemAttachedToBone(int systemRuntimeId, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)`

**Purpose:** Creates a new `particle system attached to bone` instance or object.

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**Purpose:** Creates a new `particle system attached to entity` instance or object.

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**Purpose:** Creates a new `particle system attached to entity` instance or object.

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**Purpose:** Creates a new `particle system attached to entity` instance or object.

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, WeakGameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**Purpose:** Creates a new `particle system attached to entity` instance or object.

### AddMesh
`public void AddMesh(Mesh mesh)`

**Purpose:** Adds `mesh` to the current collection or state.

### SetEnable
`public void SetEnable(bool enable)`

**Purpose:** Sets the value or state of `enable`.

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float multiplier)`

**Purpose:** Sets the value or state of `runtime emission rate multiplier`.

### Restart
`public void Restart()`

**Purpose:** Handles logic related to `restart`.

### SetLocalFrame
`public void SetLocalFrame(in MatrixFrame newLocalFrame)`

**Purpose:** Sets the value or state of `local frame`.

### SetPreviousGlobalFrame
`public void SetPreviousGlobalFrame(in MatrixFrame globalFrame)`

**Purpose:** Sets the value or state of `previous global frame`.

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**Purpose:** Gets the current value of `local frame`.

### HasAliveParticles
`public bool HasAliveParticles()`

**Purpose:** Checks whether the current object has/contains `alive particles`.

### SetDontRemoveFromEntity
`public void SetDontRemoveFromEntity(bool value)`

**Purpose:** Sets the value or state of `dont remove from entity`.

### SetParticleEffectByName
`public void SetParticleEffectByName(string effectName)`

**Purpose:** Sets the value or state of `particle effect by name`.

## Usage Example

```csharp
ParticleSystem.CreateParticleSystemAttachedToBone("example", skeleton, 0, boneLocalFrame);
```

## See Also

- [Complete Class Catalog](../catalog)