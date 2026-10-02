---
title: "Skeleton"
description: "Skeleton：TaleWorlds.Engine 的 public 类，继承 NativeObject；公开成员 57 个（方法 55、属性 1、字段 1）。canonical 桶 engine。源文件 TaleWorlds.Engine/Skeleton.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Skeleton

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Skeleton : NativeObject`
**File:** `TaleWorlds.Engine/Skeleton.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

Skeleton 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Skeleton.cs。它是一个 public 类（sealed），实现/继承 NativeObject，继承链为 Skeleton → NativeObject。public/protected 成员共 57 个：55 方法、1 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Skeleton 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 Skeleton → NativeObject。成员构成以方法为主（方法 55/57，属性 1/57），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Skeleton.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateFromModel` | `public static Skeleton CreateFromModel(string modelName)` | 方法 |
| `CreateFromModelWithNullAnimTree` | `public static Skeleton CreateFromModelWithNullAnimTree(GameEntity entity, string modelName, float boneScale = 1f)` | 方法 |
| `IsValid` | `public bool IsValid` | 属性 |
| `GetName` | `public string GetName()` | 方法 |
| `GetBoneName` | `public string GetBoneName(sbyte boneIndex)` | 方法 |
| `GetBoneChildAtIndex` | `public sbyte GetBoneChildAtIndex(sbyte boneIndex, sbyte childIndex)` | 方法 |
| `GetBoneChildCount` | `public sbyte GetBoneChildCount(sbyte boneIndex)` | 方法 |
| `GetParentBoneIndex` | `public sbyte GetParentBoneIndex(sbyte boneIndex)` | 方法 |
| `AddMeshToBone` | `public void AddMeshToBone(UIntPtr mesh, sbyte boneIndex)` | 方法 |
| `Freeze` | `public void Freeze(bool p)` | 方法 |
| `IsFrozen` | `public bool IsFrozen()` | 方法 |
| `SetBoneLocalFrame` | `public void SetBoneLocalFrame(sbyte boneIndex, MatrixFrame localFrame)` | 方法 |
| `GetBoneCount` | `public sbyte GetBoneCount()` | 方法 |
| `GetBoneBody` | `public void GetBoneBody(sbyte boneIndex, ref CapsuleData data)` | 方法 |
| `SkeletonModelExist` | `public static bool SkeletonModelExist(string skeletonModelName)` | 方法 |
| `ForceUpdateBoneFrames` | `public void ForceUpdateBoneFrames()` | 方法 |
| `GetBoneEntitialFrameWithIndex` | `public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)` | 方法 |
| `GetBoneEntitialFrameWithName` | `public MatrixFrame GetBoneEntitialFrameWithName(string boneName)` | 方法 |
| `GetCurrentRagdollState` | `public RagdollState GetCurrentRagdollState()` | 方法 |
| `ActivateRagdoll` | `public void ActivateRagdoll()` | 方法 |
| `GetSkeletonBoneMapping` | `public sbyte GetSkeletonBoneMapping(sbyte boneIndex)` | 方法 |
| `AddMesh` | `public void AddMesh(Mesh mesh)` | 方法 |
| `ClearComponents` | `public void ClearComponents()` | 方法 |
| `AddComponent` | `public void AddComponent(GameEntityComponent component)` | 方法 |
| `HasComponent` | `public bool HasComponent(GameEntityComponent component)` | 方法 |
| `RemoveComponent` | `public void RemoveComponent(GameEntityComponent component)` | 方法 |
| `ClearMeshes` | `public void ClearMeshes(bool clearBoneComponents = true)` | 方法 |
| `GetComponentCount` | `public int GetComponentCount(GameEntity.ComponentType componentType)` | 方法 |
| `UpdateEntitialFramesFromLocalFrames` | `public void UpdateEntitialFramesFromLocalFrames()` | 方法 |
| `ResetFrames` | `public void ResetFrames()` | 方法 |
| `GetComponentAtIndex` | `public GameEntityComponent GetComponentAtIndex(GameEntity.ComponentType componentType, int index)` | 方法 |
| `SetUsePreciseBoundingVolume` | `public void SetUsePreciseBoundingVolume(bool value)` | 方法 |
| `GetBoneEntitialRestFrame` | `public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex, bool useBoneMapping)` | 方法 |
| `GetBoneLocalRestFrame` | `public MatrixFrame GetBoneLocalRestFrame(sbyte boneIndex, bool useBoneMapping = true)` | 方法 |
| `GetBoneEntitialRestFrame` | `public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex)` | 方法 |
| `GetBoneEntitialFrameAtChannel` | `public MatrixFrame GetBoneEntitialFrameAtChannel(int channelNo, sbyte boneIndex)` | 方法 |
| `GetBoneEntitialFrame` | `public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex)` | 方法 |
| `GetBoneComponentCount` | `public int GetBoneComponentCount(sbyte boneIndex)` | 方法 |
| `GetBoneComponentAtIndex` | `public GameEntityComponent GetBoneComponentAtIndex(sbyte boneIndex, int componentIndex)` | 方法 |
| `HasBoneComponent` | `public bool HasBoneComponent(sbyte boneIndex, GameEntityComponent component)` | 方法 |
| `AddComponentToBone` | `public void AddComponentToBone(sbyte boneIndex, GameEntityComponent component)` | 方法 |
| `RemoveBoneComponent` | `public void RemoveBoneComponent(sbyte boneIndex, GameEntityComponent component)` | 方法 |
| `ClearMeshesAtBone` | `public void ClearMeshesAtBone(sbyte boneIndex)` | 方法 |
| `TickAnimations` | `public void TickAnimations(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)` | 方法 |
| `TickAnimationsAndForceUpdate` | `public void TickAnimationsAndForceUpdate(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)` | 方法 |
| `GetAnimationParameterAtChannel` | `public float GetAnimationParameterAtChannel(int channelNo)` | 方法 |
| `SetAnimationParameterAtChannel` | `public void SetAnimationParameterAtChannel(int channelNo, float parameter)` | 方法 |
| `GetAnimationSpeedAtChannel` | `public float GetAnimationSpeedAtChannel(int channelNo)` | 方法 |
| `SetAnimationSpeedAtChannel` | `public void SetAnimationSpeedAtChannel(int channelNo, float speed)` | 方法 |
| `SetUptoDate` | `public void SetUptoDate(bool value)` | 方法 |
| `GetAnimationAtChannel` | `public string GetAnimationAtChannel(int channelNo)` | 方法 |
| `GetAnimationIndexAtChannel` | `public int GetAnimationIndexAtChannel(int channelNo)` | 方法 |
| `EnableScriptDrivenPostIntegrateCallback` | `public void EnableScriptDrivenPostIntegrateCallback()` | 方法 |
| `ResetCloths` | `public void ResetCloths()` | 方法 |
| `IEnumerable` | `public IEnumerable<Mesh>GetAllMeshes()` | 方法 |
| `GetBoneIndexFromName` | `public static sbyte GetBoneIndexFromName(string skeletonModelName, string boneName)` | 方法 |
| `MaxBoneCount` | `public const sbyte MaxBoneCount` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 NativeObject](../../core-extra/NativeObject/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)
