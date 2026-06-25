---
title: "ParticleSystem"
description: "Auto-generated class reference for ParticleSystem."
---
# ParticleSystem

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ParticleSystem : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/ParticleSystem.cs`

## Overview

`ParticleSystem` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateParticleSystemAttachedToBone
`public static ParticleSystem CreateParticleSystemAttachedToBone(string systemName, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)`

**Purpose:** Constructs a new `particle system attached to bone` entity and returns it to the caller.

```csharp
// Static call; no instance required
ParticleSystem.CreateParticleSystemAttachedToBone("example", skeleton, 0, boneLocalFrame);
```

### CreateParticleSystemAttachedToBone
`public static ParticleSystem CreateParticleSystemAttachedToBone(int systemRuntimeId, Skeleton skeleton, sbyte boneIndex, ref MatrixFrame boneLocalFrame)`

**Purpose:** Constructs a new `particle system attached to bone` entity and returns it to the caller.

```csharp
// Static call; no instance required
ParticleSystem.CreateParticleSystemAttachedToBone(0, skeleton, 0, boneLocalFrame);
```

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(string systemName, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**Purpose:** Constructs a new `particle system attached to entity` entity and returns it to the caller.

```csharp
// Static call; no instance required
ParticleSystem.CreateParticleSystemAttachedToEntity("example", parentEntity, boneLocalFrame);
```

### CreateParticleSystemAttachedToEntity
`public static ParticleSystem CreateParticleSystemAttachedToEntity(int systemRuntimeId, GameEntity parentEntity, ref MatrixFrame boneLocalFrame)`

**Purpose:** Constructs a new `particle system attached to entity` entity and returns it to the caller.

```csharp
// Static call; no instance required
ParticleSystem.CreateParticleSystemAttachedToEntity(0, parentEntity, boneLocalFrame);
```

### AddMesh
`public void AddMesh(Mesh mesh)`

**Purpose:** Adds `mesh` to the current collection or state.

```csharp
// Obtain an instance of ParticleSystem from the subsystem API first
ParticleSystem particleSystem = ...;
particleSystem.AddMesh(mesh);
```

### SetEnable
`public void SetEnable(bool enable)`

**Purpose:** Assigns a new value to `enable` and updates the object's internal state.

```csharp
// Obtain an instance of ParticleSystem from the subsystem API first
ParticleSystem particleSystem = ...;
particleSystem.SetEnable(false);
```

### SetRuntimeEmissionRateMultiplier
`public void SetRuntimeEmissionRateMultiplier(float multiplier)`

**Purpose:** Assigns a new value to `runtime emission rate multiplier` and updates the object's internal state.

```csharp
// Obtain an instance of ParticleSystem from the subsystem API first
ParticleSystem particleSystem = ...;
particleSystem.SetRuntimeEmissionRateMultiplier(0);
```

### Restart
`public void Restart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ParticleSystem from the subsystem API first
ParticleSystem particleSystem = ...;
particleSystem.Restart();
```

### SetLocalFrame
`public void SetLocalFrame(in MatrixFrame newLocalFrame)`

**Purpose:** Assigns a new value to `local frame` and updates the object's internal state.

```csharp
// Obtain an instance of ParticleSystem from the subsystem API first
ParticleSystem particleSystem = ...;
particleSystem.SetLocalFrame(newLocalFrame);
```

### SetPreviousGlobalFrame
`public void SetPreviousGlobalFrame(in MatrixFrame globalFrame)`

**Purpose:** Assigns a new value to `previous global frame` and updates the object's internal state.

```csharp
// Obtain an instance of ParticleSystem from the subsystem API first
ParticleSystem particleSystem = ...;
particleSystem.SetPreviousGlobalFrame(globalFrame);
```

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**Purpose:** Reads and returns the `local frame` value held by the current object.

```csharp
// Obtain an instance of ParticleSystem from the subsystem API first
ParticleSystem particleSystem = ...;
var result = particleSystem.GetLocalFrame();
```

### SetParticleEffectByName
`public void SetParticleEffectByName(string effectName)`

**Purpose:** Assigns a new value to `particle effect by name` and updates the object's internal state.

```csharp
// Obtain an instance of ParticleSystem from the subsystem API first
ParticleSystem particleSystem = ...;
particleSystem.SetParticleEffectByName("example");
```

## Usage Example

```csharp
ParticleSystem.CreateParticleSystemAttachedToBone("example", skeleton, 0, boneLocalFrame);
```

## See Also

- [Area Index](../)