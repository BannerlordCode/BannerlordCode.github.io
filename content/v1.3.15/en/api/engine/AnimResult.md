---
title: "AnimResult"
description: "Auto-generated class reference for AnimResult."
---
# AnimResult

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct AnimResult`
**Base:** none
**File:** `TaleWorlds.Engine/AnimResult.cs`

## Overview

`AnimResult` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetEntitialOutTransform
`public Transformation GetEntitialOutTransform(sbyte boneIndex, Skeleton skeleton)`

**Purpose:** **Purpose:** Reads and returns the entitial out transform value held by the this instance.

```csharp
// Obtain an instance of AnimResult from the subsystem API first
AnimResult animResult = ...;
var result = animResult.GetEntitialOutTransform(0, skeleton);
```

### SetOutBoneDisplacement
`public void SetOutBoneDisplacement(sbyte boneIndex, Vec3 position, Skeleton skeleton)`

**Purpose:** **Purpose:** Assigns a new value to out bone displacement and updates the object's internal state.

```csharp
// Obtain an instance of AnimResult from the subsystem API first
AnimResult animResult = ...;
animResult.SetOutBoneDisplacement(0, position, skeleton);
```

### SetOutQuat
`public void SetOutQuat(sbyte boneIndex, Mat3 rotation, Skeleton skeleton)`

**Purpose:** **Purpose:** Assigns a new value to out quat and updates the object's internal state.

```csharp
// Obtain an instance of AnimResult from the subsystem API first
AnimResult animResult = ...;
animResult.SetOutQuat(0, rotation, skeleton);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AnimResult animResult = ...;
animResult.GetEntitialOutTransform(0, skeleton);
```

## See Also

- [Area Index](../)