---
title: "Skeleton"
description: "Auto-generated class reference for Skeleton."
---
# Skeleton

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Skeleton : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Skeleton.cs`

## Overview

`Skeleton` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateFromModel
`public static Skeleton CreateFromModel(string modelName)`

**Purpose:** **Purpose:** Constructs a new from model entity and returns it to the caller.

```csharp
// Static call; no instance required
Skeleton.CreateFromModel("example");
```

### CreateFromModelWithNullAnimTree
`public static Skeleton CreateFromModelWithNullAnimTree(GameEntity entity, string modelName, float boneScale = 1f)`

**Purpose:** **Purpose:** Constructs a new from model with null anim tree entity and returns it to the caller.

```csharp
// Static call; no instance required
Skeleton.CreateFromModelWithNullAnimTree(entity, "example", 0);
```

### GetName
`public string GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetName();
```

### GetBoneName
`public string GetBoneName(sbyte boneIndex)`

**Purpose:** **Purpose:** Reads and returns the bone name value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneName(0);
```

### GetBoneChildAtIndex
`public sbyte GetBoneChildAtIndex(sbyte boneIndex, sbyte childIndex)`

**Purpose:** **Purpose:** Reads and returns the bone child at index value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneChildAtIndex(0, 0);
```

### GetBoneChildCount
`public sbyte GetBoneChildCount(sbyte boneIndex)`

**Purpose:** **Purpose:** Reads and returns the bone child count value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneChildCount(0);
```

### GetParentBoneIndex
`public sbyte GetParentBoneIndex(sbyte boneIndex)`

**Purpose:** **Purpose:** Reads and returns the parent bone index value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetParentBoneIndex(0);
```

### AddMeshToBone
`public void AddMeshToBone(UIntPtr mesh, sbyte boneIndex)`

**Purpose:** **Purpose:** Adds mesh to bone to the current collection or state.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.AddMeshToBone(mesh, 0);
```

### Freeze
`public void Freeze(bool p)`

**Purpose:** **Purpose:** Executes the Freeze logic.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.Freeze(false);
```

### IsFrozen
`public bool IsFrozen()`

**Purpose:** **Purpose:** Determines whether the this instance is in the frozen state or condition.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.IsFrozen();
```

### SetBoneLocalFrame
`public void SetBoneLocalFrame(sbyte boneIndex, MatrixFrame localFrame)`

**Purpose:** **Purpose:** Assigns a new value to bone local frame and updates the object's internal state.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.SetBoneLocalFrame(0, localFrame);
```

### GetBoneCount
`public sbyte GetBoneCount()`

**Purpose:** **Purpose:** Reads and returns the bone count value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneCount();
```

### GetBoneBody
`public void GetBoneBody(sbyte boneIndex, ref CapsuleData data)`

**Purpose:** **Purpose:** Reads and returns the bone body value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.GetBoneBody(0, data);
```

### SkeletonModelExist
`public static bool SkeletonModelExist(string skeletonModelName)`

**Purpose:** **Purpose:** Executes the SkeletonModelExist logic.

```csharp
// Static call; no instance required
Skeleton.SkeletonModelExist("example");
```

### ForceUpdateBoneFrames
`public void ForceUpdateBoneFrames()`

**Purpose:** **Purpose:** Executes the ForceUpdateBoneFrames logic.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.ForceUpdateBoneFrames();
```

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)`

**Purpose:** **Purpose:** Reads and returns the bone entitial frame with index value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialFrameWithIndex(0);
```

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName)`

**Purpose:** **Purpose:** Reads and returns the bone entitial frame with name value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialFrameWithName("example");
```

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState()`

**Purpose:** **Purpose:** Reads and returns the current ragdoll state value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetCurrentRagdollState();
```

### ActivateRagdoll
`public void ActivateRagdoll()`

**Purpose:** **Purpose:** Activates the resource, state, or feature associated with ragdoll.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.ActivateRagdoll();
```

### GetSkeletonBoneMapping
`public sbyte GetSkeletonBoneMapping(sbyte boneIndex)`

**Purpose:** **Purpose:** Reads and returns the skeleton bone mapping value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetSkeletonBoneMapping(0);
```

### AddMesh
`public void AddMesh(Mesh mesh)`

**Purpose:** **Purpose:** Adds mesh to the current collection or state.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.AddMesh(mesh);
```

### ClearComponents
`public void ClearComponents()`

**Purpose:** **Purpose:** Removes all components from the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.ClearComponents();
```

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**Purpose:** **Purpose:** Adds component to the current collection or state.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.AddComponent(component);
```

### HasComponent
`public bool HasComponent(GameEntityComponent component)`

**Purpose:** **Purpose:** Determines whether the this instance already holds component.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.HasComponent(component);
```

### RemoveComponent
`public void RemoveComponent(GameEntityComponent component)`

**Purpose:** **Purpose:** Removes component from the current collection or state.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.RemoveComponent(component);
```

### ClearMeshes
`public void ClearMeshes(bool clearBoneComponents = true)`

**Purpose:** **Purpose:** Removes all meshes from the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.ClearMeshes(false);
```

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType)`

**Purpose:** **Purpose:** Reads and returns the component count value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetComponentCount(componentType);
```

### UpdateEntitialFramesFromLocalFrames
`public void UpdateEntitialFramesFromLocalFrames()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of entitial frames from local frames.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.UpdateEntitialFramesFromLocalFrames();
```

### ResetFrames
`public void ResetFrames()`

**Purpose:** **Purpose:** Returns frames to its default or initial condition.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.ResetFrames();
```

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(GameEntity.ComponentType componentType, int index)`

**Purpose:** **Purpose:** Reads and returns the component at index value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetComponentAtIndex(componentType, 0);
```

### SetUsePreciseBoundingVolume
`public void SetUsePreciseBoundingVolume(bool value)`

**Purpose:** **Purpose:** Assigns a new value to use precise bounding volume and updates the object's internal state.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.SetUsePreciseBoundingVolume(false);
```

### GetBoneEntitialRestFrame
`public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex, bool useBoneMapping)`

**Purpose:** **Purpose:** Reads and returns the bone entitial rest frame value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialRestFrame(0, false);
```

### GetBoneLocalRestFrame
`public MatrixFrame GetBoneLocalRestFrame(sbyte boneIndex, bool useBoneMapping = true)`

**Purpose:** **Purpose:** Reads and returns the bone local rest frame value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneLocalRestFrame(0, false);
```

### GetBoneEntitialRestFrame
`public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex)`

**Purpose:** **Purpose:** Reads and returns the bone entitial rest frame value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialRestFrame(0);
```

### GetBoneEntitialFrameAtChannel
`public MatrixFrame GetBoneEntitialFrameAtChannel(int channelNo, sbyte boneIndex)`

**Purpose:** **Purpose:** Reads and returns the bone entitial frame at channel value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialFrameAtChannel(0, 0);
```

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex)`

**Purpose:** **Purpose:** Reads and returns the bone entitial frame value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialFrame(0);
```

### GetBoneComponentCount
`public int GetBoneComponentCount(sbyte boneIndex)`

**Purpose:** **Purpose:** Reads and returns the bone component count value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneComponentCount(0);
```

### GetBoneComponentAtIndex
`public GameEntityComponent GetBoneComponentAtIndex(sbyte boneIndex, int componentIndex)`

**Purpose:** **Purpose:** Reads and returns the bone component at index value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetBoneComponentAtIndex(0, 0);
```

### HasBoneComponent
`public bool HasBoneComponent(sbyte boneIndex, GameEntityComponent component)`

**Purpose:** **Purpose:** Determines whether the this instance already holds bone component.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.HasBoneComponent(0, component);
```

### AddComponentToBone
`public void AddComponentToBone(sbyte boneIndex, GameEntityComponent component)`

**Purpose:** **Purpose:** Adds component to bone to the current collection or state.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.AddComponentToBone(0, component);
```

### RemoveBoneComponent
`public void RemoveBoneComponent(sbyte boneIndex, GameEntityComponent component)`

**Purpose:** **Purpose:** Removes bone component from the current collection or state.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.RemoveBoneComponent(0, component);
```

### ClearMeshesAtBone
`public void ClearMeshesAtBone(sbyte boneIndex)`

**Purpose:** **Purpose:** Removes all meshes at bone from the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.ClearMeshesAtBone(0);
```

### TickAnimations
`public void TickAnimations(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)`

**Purpose:** **Purpose:** Advances the animations state each frame or update cycle.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.TickAnimations(0, globalFrame, false);
```

### TickAnimationsAndForceUpdate
`public void TickAnimationsAndForceUpdate(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)`

**Purpose:** **Purpose:** Advances the animations and force update state each frame or update cycle.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.TickAnimationsAndForceUpdate(0, globalFrame, false);
```

### GetAnimationParameterAtChannel
`public float GetAnimationParameterAtChannel(int channelNo)`

**Purpose:** **Purpose:** Reads and returns the animation parameter at channel value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetAnimationParameterAtChannel(0);
```

### SetAnimationParameterAtChannel
`public void SetAnimationParameterAtChannel(int channelNo, float parameter)`

**Purpose:** **Purpose:** Assigns a new value to animation parameter at channel and updates the object's internal state.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.SetAnimationParameterAtChannel(0, 0);
```

### GetAnimationSpeedAtChannel
`public float GetAnimationSpeedAtChannel(int channelNo)`

**Purpose:** **Purpose:** Reads and returns the animation speed at channel value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetAnimationSpeedAtChannel(0);
```

### SetAnimationSpeedAtChannel
`public void SetAnimationSpeedAtChannel(int channelNo, float speed)`

**Purpose:** **Purpose:** Assigns a new value to animation speed at channel and updates the object's internal state.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.SetAnimationSpeedAtChannel(0, 0);
```

### SetUptoDate
`public void SetUptoDate(bool value)`

**Purpose:** **Purpose:** Assigns a new value to upto date and updates the object's internal state.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.SetUptoDate(false);
```

### GetAnimationAtChannel
`public string GetAnimationAtChannel(int channelNo)`

**Purpose:** **Purpose:** Reads and returns the animation at channel value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetAnimationAtChannel(0);
```

### GetAnimationIndexAtChannel
`public int GetAnimationIndexAtChannel(int channelNo)`

**Purpose:** **Purpose:** Reads and returns the animation index at channel value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetAnimationIndexAtChannel(0);
```

### EnableScriptDrivenPostIntegrateCallback
`public void EnableScriptDrivenPostIntegrateCallback()`

**Purpose:** **Purpose:** Executes the EnableScriptDrivenPostIntegrateCallback logic.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.EnableScriptDrivenPostIntegrateCallback();
```

### ResetCloths
`public void ResetCloths()`

**Purpose:** **Purpose:** Returns cloths to its default or initial condition.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
skeleton.ResetCloths();
```

### GetAllMeshes
`public IEnumerable<Mesh> GetAllMeshes()`

**Purpose:** **Purpose:** Reads and returns the all meshes value held by the this instance.

```csharp
// Obtain an instance of Skeleton from the subsystem API first
Skeleton skeleton = ...;
var result = skeleton.GetAllMeshes();
```

### GetBoneIndexFromName
`public static sbyte GetBoneIndexFromName(string skeletonModelName, string boneName)`

**Purpose:** **Purpose:** Reads and returns the bone index from name value held by the this instance.

```csharp
// Static call; no instance required
Skeleton.GetBoneIndexFromName("example", "example");
```

## Usage Example

```csharp
Skeleton.CreateFromModel("example");
```

## See Also

- [Area Index](../)