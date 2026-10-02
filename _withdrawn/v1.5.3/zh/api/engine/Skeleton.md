---
title: "Skeleton"
description: "Skeleton 的自动生成类参考。"
---
# Skeleton

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Skeleton : NativeObject `
**Base:** NativeObject
**Source:** TaleWorlds.Engine/Skeleton.cs

## 概述

`Skeleton` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/Skeleton.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateFromModel
`public static Skeleton CreateFromModel(string modelName) `

### CreateFromModelWithNullAnimTree
`public static Skeleton CreateFromModelWithNullAnimTree(GameEntity entity,string modelName,float boneScale = 1f) `

### GetName
`public string GetName() `

### GetBoneName
`public string GetBoneName(sbyte boneIndex) `

### GetBoneChildAtIndex
`public sbyte GetBoneChildAtIndex(sbyte boneIndex,sbyte childIndex) `

### GetBoneChildCount
`public sbyte GetBoneChildCount(sbyte boneIndex) `

### GetParentBoneIndex
`public sbyte GetParentBoneIndex(sbyte boneIndex) `

### AddMeshToBone
`public void AddMeshToBone(UIntPtr mesh,sbyte boneIndex) `

### Freeze
`public void Freeze(bool p) `

### IsFrozen
`public bool IsFrozen() `

### SetBoneLocalFrame
`public void SetBoneLocalFrame(sbyte boneIndex,MatrixFrame localFrame) `

### GetBoneCount
`public sbyte GetBoneCount() `

### GetBoneBody
`public void GetBoneBody(sbyte boneIndex,ref CapsuleData data) `

### SkeletonModelExist
`public static bool SkeletonModelExist(string skeletonModelName) `

### ForceUpdateBoneFrames
`public void ForceUpdateBoneFrames() `

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex) `

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName) `

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState() `

### ActivateRagdoll
`public void ActivateRagdoll() `

### GetSkeletonBoneMapping
`public sbyte GetSkeletonBoneMapping(sbyte boneIndex) `

### AddMesh
`public void AddMesh(Mesh mesh) `

### ClearComponents
`public void ClearComponents() `

### AddComponent
`public void AddComponent(GameEntityComponent component) `

### HasComponent
`public bool HasComponent(GameEntityComponent component) `

### RemoveComponent
`public void RemoveComponent(GameEntityComponent component) `

### ClearMeshes
`public void ClearMeshes(bool clearBoneComponents = true) `

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType) `

### UpdateEntitialFramesFromLocalFrames
`public void UpdateEntitialFramesFromLocalFrames() `

### ResetFrames
`public void ResetFrames() `

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(GameEntity.ComponentType componentType,int index) `

### SetUsePreciseBoundingVolume
`public void SetUsePreciseBoundingVolume(bool value) `

### GetBoneEntitialRestFrame
`public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex,bool useBoneMapping) `
`public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex) `

### GetBoneLocalRestFrame
`public MatrixFrame GetBoneLocalRestFrame(sbyte boneIndex,bool useBoneMapping = true) `

### GetBoneEntitialFrameAtChannel
`public MatrixFrame GetBoneEntitialFrameAtChannel(int channelNo,sbyte boneIndex) `

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex) `

### GetBoneComponentCount
`public int GetBoneComponentCount(sbyte boneIndex) `

### GetBoneComponentAtIndex
`public GameEntityComponent GetBoneComponentAtIndex(sbyte boneIndex,int componentIndex) `

### HasBoneComponent
`public bool HasBoneComponent(sbyte boneIndex,GameEntityComponent component) `

### AddComponentToBone
`public void AddComponentToBone(sbyte boneIndex,GameEntityComponent component) `

### RemoveBoneComponent
`public void RemoveBoneComponent(sbyte boneIndex,GameEntityComponent component) `

### ClearMeshesAtBone
`public void ClearMeshesAtBone(sbyte boneIndex) `

### TickAnimations
`public void TickAnimations(float dt,MatrixFrame globalFrame,bool tickAnimsForChildren) `

### TickAnimationsAndForceUpdate
`public void TickAnimationsAndForceUpdate(float dt,MatrixFrame globalFrame,bool tickAnimsForChildren) `

### GetAnimationParameterAtChannel
`public float GetAnimationParameterAtChannel(int channelNo) `

### SetAnimationParameterAtChannel
`public void SetAnimationParameterAtChannel(int channelNo,float parameter) `

### GetAnimationSpeedAtChannel
`public float GetAnimationSpeedAtChannel(int channelNo) `

### SetAnimationSpeedAtChannel
`public void SetAnimationSpeedAtChannel(int channelNo,float speed) `

### SetUptoDate
`public void SetUptoDate(bool value) `

### GetAnimationAtChannel
`public string GetAnimationAtChannel(int channelNo) `

### GetAnimationIndexAtChannel
`public int GetAnimationIndexAtChannel(int channelNo) `

### EnableScriptDrivenPostIntegrateCallback
`public void EnableScriptDrivenPostIntegrateCallback() `

### ResetCloths
`public void ResetCloths() `

### GetAllMeshes
`public IEnumerable<Mesh> GetAllMeshes() `

### GetBoneIndexFromName
`public static sbyte GetBoneIndexFromName(string skeletonModelName,string boneName) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
