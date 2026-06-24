<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Skeleton`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Skeleton

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Skeleton : NativeObject`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/Skeleton.cs`

## Overview

`Skeleton` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateFromModel
`public static Skeleton CreateFromModel(string modelName)`

**Purpose:** Creates a new `from model` instance or object.

### CreateFromModelWithNullAnimTree
`public static Skeleton CreateFromModelWithNullAnimTree(GameEntity entity, string modelName, float boneScale = 1f)`

**Purpose:** Creates a new `from model with null anim tree` instance or object.

### GetName
`public string GetName()`

**Purpose:** Gets the current value of `name`.

### GetBoneName
`public string GetBoneName(sbyte boneIndex)`

**Purpose:** Gets the current value of `bone name`.

### GetBoneChildAtIndex
`public sbyte GetBoneChildAtIndex(sbyte boneIndex, sbyte childIndex)`

**Purpose:** Gets the current value of `bone child at index`.

### GetBoneChildCount
`public sbyte GetBoneChildCount(sbyte boneIndex)`

**Purpose:** Gets the current value of `bone child count`.

### GetParentBoneIndex
`public sbyte GetParentBoneIndex(sbyte boneIndex)`

**Purpose:** Gets the current value of `parent bone index`.

### AddMeshToBone
`public void AddMeshToBone(UIntPtr mesh, sbyte boneIndex)`

**Purpose:** Adds `mesh to bone` to the current collection or state.

### Freeze
`public void Freeze(bool p)`

**Purpose:** Handles logic related to `freeze`.

### IsFrozen
`public bool IsFrozen()`

**Purpose:** Handles logic related to `is frozen`.

### SetBoneLocalFrame
`public void SetBoneLocalFrame(sbyte boneIndex, MatrixFrame localFrame)`

**Purpose:** Sets the value or state of `bone local frame`.

### GetBoneCount
`public sbyte GetBoneCount()`

**Purpose:** Gets the current value of `bone count`.

### GetBoneBody
`public void GetBoneBody(sbyte boneIndex, ref CapsuleData data)`

**Purpose:** Gets the current value of `bone body`.

### SkeletonModelExist
`public static bool SkeletonModelExist(string skeletonModelName)`

**Purpose:** Handles logic related to `skeleton model exist`.

### ForceUpdateBoneFrames
`public void ForceUpdateBoneFrames()`

**Purpose:** Handles logic related to `force update bone frames`.

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)`

**Purpose:** Gets the current value of `bone entitial frame with index`.

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName)`

**Purpose:** Gets the current value of `bone entitial frame with name`.

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState()`

**Purpose:** Gets the current value of `current ragdoll state`.

### ActivateRagdoll
`public void ActivateRagdoll()`

**Purpose:** Handles logic related to `activate ragdoll`.

### GetSkeletonBoneMapping
`public sbyte GetSkeletonBoneMapping(sbyte boneIndex)`

**Purpose:** Gets the current value of `skeleton bone mapping`.

### AddMesh
`public void AddMesh(Mesh mesh)`

**Purpose:** Adds `mesh` to the current collection or state.

### ClearComponents
`public void ClearComponents()`

**Purpose:** Handles logic related to `clear components`.

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**Purpose:** Adds `component` to the current collection or state.

### HasComponent
`public bool HasComponent(GameEntityComponent component)`

**Purpose:** Checks whether the current object has/contains `component`.

### RemoveComponent
`public void RemoveComponent(GameEntityComponent component)`

**Purpose:** Removes `component` from the current collection or state.

### ClearMeshes
`public void ClearMeshes(bool clearBoneComponents = true)`

**Purpose:** Handles logic related to `clear meshes`.

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType)`

**Purpose:** Gets the current value of `component count`.

### UpdateEntitialFramesFromLocalFrames
`public void UpdateEntitialFramesFromLocalFrames()`

**Purpose:** Updates the state or data of `entitial frames from local frames`.

### ResetFrames
`public void ResetFrames()`

**Purpose:** Resets `frames` to its initial state.

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(GameEntity.ComponentType componentType, int index)`

**Purpose:** Gets the current value of `component at index`.

### SetUsePreciseBoundingVolume
`public void SetUsePreciseBoundingVolume(bool value)`

**Purpose:** Sets the value or state of `use precise bounding volume`.

### GetBoneEntitialRestFrame
`public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex, bool useBoneMapping)`

**Purpose:** Gets the current value of `bone entitial rest frame`.

### GetBoneLocalRestFrame
`public MatrixFrame GetBoneLocalRestFrame(sbyte boneIndex, bool useBoneMapping = true)`

**Purpose:** Gets the current value of `bone local rest frame`.

### GetBoneEntitialRestFrame
`public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex)`

**Purpose:** Gets the current value of `bone entitial rest frame`.

### GetBoneEntitialFrameAtChannel
`public MatrixFrame GetBoneEntitialFrameAtChannel(int channelNo, sbyte boneIndex)`

**Purpose:** Gets the current value of `bone entitial frame at channel`.

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex)`

**Purpose:** Gets the current value of `bone entitial frame`.

### GetBoneComponentCount
`public int GetBoneComponentCount(sbyte boneIndex)`

**Purpose:** Gets the current value of `bone component count`.

### GetBoneComponentAtIndex
`public GameEntityComponent GetBoneComponentAtIndex(sbyte boneIndex, int componentIndex)`

**Purpose:** Gets the current value of `bone component at index`.

### HasBoneComponent
`public bool HasBoneComponent(sbyte boneIndex, GameEntityComponent component)`

**Purpose:** Checks whether the current object has/contains `bone component`.

### AddComponentToBone
`public void AddComponentToBone(sbyte boneIndex, GameEntityComponent component)`

**Purpose:** Adds `component to bone` to the current collection or state.

### RemoveBoneComponent
`public void RemoveBoneComponent(sbyte boneIndex, GameEntityComponent component)`

**Purpose:** Removes `bone component` from the current collection or state.

### ClearMeshesAtBone
`public void ClearMeshesAtBone(sbyte boneIndex)`

**Purpose:** Handles logic related to `clear meshes at bone`.

### TickAnimations
`public void TickAnimations(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)`

**Purpose:** Handles logic related to `tick animations`.

### TickAnimationsAndForceUpdate
`public void TickAnimationsAndForceUpdate(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)`

**Purpose:** Handles logic related to `tick animations and force update`.

### GetAnimationParameterAtChannel
`public float GetAnimationParameterAtChannel(int channelNo)`

**Purpose:** Gets the current value of `animation parameter at channel`.

### SetAnimationParameterAtChannel
`public void SetAnimationParameterAtChannel(int channelNo, float parameter)`

**Purpose:** Sets the value or state of `animation parameter at channel`.

### GetAnimationSpeedAtChannel
`public float GetAnimationSpeedAtChannel(int channelNo)`

**Purpose:** Gets the current value of `animation speed at channel`.

### SetAnimationSpeedAtChannel
`public void SetAnimationSpeedAtChannel(int channelNo, float speed)`

**Purpose:** Sets the value or state of `animation speed at channel`.

### SetUptoDate
`public void SetUptoDate(bool value)`

**Purpose:** Sets the value or state of `upto date`.

### GetAnimationAtChannel
`public string GetAnimationAtChannel(int channelNo)`

**Purpose:** Gets the current value of `animation at channel`.

### GetAnimationIndexAtChannel
`public int GetAnimationIndexAtChannel(int channelNo)`

**Purpose:** Gets the current value of `animation index at channel`.

### EnableScriptDrivenPostIntegrateCallback
`public void EnableScriptDrivenPostIntegrateCallback()`

**Purpose:** Handles logic related to `enable script driven post integrate callback`.

### ResetCloths
`public void ResetCloths()`

**Purpose:** Resets `cloths` to its initial state.

### GetAllMeshes
`public IEnumerable<Mesh> GetAllMeshes()`

**Purpose:** Gets the current value of `all meshes`.

### GetBoneIndexFromName
`public static sbyte GetBoneIndexFromName(string skeletonModelName, string boneName)`

**Purpose:** Gets the current value of `bone index from name`.

## Usage Example

```csharp
Skeleton.CreateFromModel("example");
```

## See Also

- [Complete Class Catalog](../catalog)