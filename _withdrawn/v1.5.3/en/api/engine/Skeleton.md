---
title: "Skeleton"
description: "Auto-generated class reference for Skeleton."
---
# Skeleton

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Skeleton : NativeObject `
**Base:** NativeObject
**Source:** TaleWorlds.Engine/Skeleton.cs

## Overview

Auto-generated stub for `Skeleton`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateFromModel
`public static Skeleton CreateFromModel(string modelName)`

### CreateFromModelWithNullAnimTree
`public static Skeleton CreateFromModelWithNullAnimTree(GameEntity entity,string modelName,float boneScale = 1f)`

### GetName
`public string GetName()`

### GetBoneName
`public string GetBoneName(sbyte boneIndex)`

### GetBoneChildAtIndex
`public sbyte GetBoneChildAtIndex(sbyte boneIndex,sbyte childIndex)`

### GetBoneChildCount
`public sbyte GetBoneChildCount(sbyte boneIndex)`

### GetParentBoneIndex
`public sbyte GetParentBoneIndex(sbyte boneIndex)`

### AddMeshToBone
`public void AddMeshToBone(UIntPtr mesh,sbyte boneIndex)`

### Freeze
`public void Freeze(bool p)`

### IsFrozen
`public bool IsFrozen()`

### SetBoneLocalFrame
`public void SetBoneLocalFrame(sbyte boneIndex,MatrixFrame localFrame)`

### GetBoneCount
`public sbyte GetBoneCount()`

### GetBoneBody
`public void GetBoneBody(sbyte boneIndex,ref CapsuleData data)`

### SkeletonModelExist
`public static bool SkeletonModelExist(string skeletonModelName)`

### ForceUpdateBoneFrames
`public void ForceUpdateBoneFrames()`

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)`

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName)`

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState()`

### ActivateRagdoll
`public void ActivateRagdoll()`

### GetSkeletonBoneMapping
`public sbyte GetSkeletonBoneMapping(sbyte boneIndex)`

### AddMesh
`public void AddMesh(Mesh mesh)`

### ClearComponents
`public void ClearComponents()`

### AddComponent
`public void AddComponent(GameEntityComponent component)`

### HasComponent
`public bool HasComponent(GameEntityComponent component)`

### RemoveComponent
`public void RemoveComponent(GameEntityComponent component)`

### ClearMeshes
`public void ClearMeshes(bool clearBoneComponents = true)`

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType)`

### UpdateEntitialFramesFromLocalFrames
`public void UpdateEntitialFramesFromLocalFrames()`

### ResetFrames
`public void ResetFrames()`

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(GameEntity.ComponentType componentType,int index)`

### SetUsePreciseBoundingVolume
`public void SetUsePreciseBoundingVolume(bool value)`

### GetBoneEntitialRestFrame
`public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex,bool useBoneMapping)`

### GetBoneLocalRestFrame
`public MatrixFrame GetBoneLocalRestFrame(sbyte boneIndex,bool useBoneMapping = true)`

### GetBoneEntitialFrameAtChannel
`public MatrixFrame GetBoneEntitialFrameAtChannel(int channelNo,sbyte boneIndex)`

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex)`

### GetBoneComponentCount
`public int GetBoneComponentCount(sbyte boneIndex)`

### GetBoneComponentAtIndex
`public GameEntityComponent GetBoneComponentAtIndex(sbyte boneIndex,int componentIndex)`

### HasBoneComponent
`public bool HasBoneComponent(sbyte boneIndex,GameEntityComponent component)`

### AddComponentToBone
`public void AddComponentToBone(sbyte boneIndex,GameEntityComponent component)`

### RemoveBoneComponent
`public void RemoveBoneComponent(sbyte boneIndex,GameEntityComponent component)`

### ClearMeshesAtBone
`public void ClearMeshesAtBone(sbyte boneIndex)`

### TickAnimations
`public void TickAnimations(float dt,MatrixFrame globalFrame,bool tickAnimsForChildren)`

### TickAnimationsAndForceUpdate
`public void TickAnimationsAndForceUpdate(float dt,MatrixFrame globalFrame,bool tickAnimsForChildren)`

### GetAnimationParameterAtChannel
`public float GetAnimationParameterAtChannel(int channelNo)`

### SetAnimationParameterAtChannel
`public void SetAnimationParameterAtChannel(int channelNo,float parameter)`

### GetAnimationSpeedAtChannel
`public float GetAnimationSpeedAtChannel(int channelNo)`

### SetAnimationSpeedAtChannel
`public void SetAnimationSpeedAtChannel(int channelNo,float speed)`

### SetUptoDate
`public void SetUptoDate(bool value)`

### GetAnimationAtChannel
`public string GetAnimationAtChannel(int channelNo)`

### GetAnimationIndexAtChannel
`public int GetAnimationIndexAtChannel(int channelNo)`

### EnableScriptDrivenPostIntegrateCallback
`public void EnableScriptDrivenPostIntegrateCallback()`

### ResetCloths
`public void ResetCloths()`

### GetAllMeshes
`public IEnumerable<Mesh> GetAllMeshes()`

### GetBoneIndexFromName
`public static sbyte GetBoneIndexFromName(string skeletonModelName,string boneName)`

## See Also

- [Section index](../)
