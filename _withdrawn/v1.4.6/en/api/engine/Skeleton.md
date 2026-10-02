---
title: "Skeleton"
description: "Skeleton: a public class in TaleWorlds.Engine, inheriting NativeObject; 57 exposed members (55 methods, 1 properties, 1 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Skeleton.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Skeleton

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Skeleton : NativeObject`
**File:** `TaleWorlds.Engine/Skeleton.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

Skeleton lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Skeleton.cs. It is a public class (sealed), implementing/inheriting NativeObject; the inheritance chain is Skeleton → NativeObject. It exposes 57 public/protected members: 55 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Skeleton lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain Skeleton → NativeObject. The surface is method-led (methods 55/57, properties 1/57), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Skeleton.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateFromModel` | `public static Skeleton CreateFromModel(string modelName)` | method |
| `CreateFromModelWithNullAnimTree` | `public static Skeleton CreateFromModelWithNullAnimTree(GameEntity entity, string modelName, float boneScale = 1f)` | method |
| `IsValid` | `public bool IsValid` | property |
| `GetName` | `public string GetName()` | method |
| `GetBoneName` | `public string GetBoneName(sbyte boneIndex)` | method |
| `GetBoneChildAtIndex` | `public sbyte GetBoneChildAtIndex(sbyte boneIndex, sbyte childIndex)` | method |
| `GetBoneChildCount` | `public sbyte GetBoneChildCount(sbyte boneIndex)` | method |
| `GetParentBoneIndex` | `public sbyte GetParentBoneIndex(sbyte boneIndex)` | method |
| `AddMeshToBone` | `public void AddMeshToBone(UIntPtr mesh, sbyte boneIndex)` | method |
| `Freeze` | `public void Freeze(bool p)` | method |
| `IsFrozen` | `public bool IsFrozen()` | method |
| `SetBoneLocalFrame` | `public void SetBoneLocalFrame(sbyte boneIndex, MatrixFrame localFrame)` | method |
| `GetBoneCount` | `public sbyte GetBoneCount()` | method |
| `GetBoneBody` | `public void GetBoneBody(sbyte boneIndex, ref CapsuleData data)` | method |
| `SkeletonModelExist` | `public static bool SkeletonModelExist(string skeletonModelName)` | method |
| `ForceUpdateBoneFrames` | `public void ForceUpdateBoneFrames()` | method |
| `GetBoneEntitialFrameWithIndex` | `public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)` | method |
| `GetBoneEntitialFrameWithName` | `public MatrixFrame GetBoneEntitialFrameWithName(string boneName)` | method |
| `GetCurrentRagdollState` | `public RagdollState GetCurrentRagdollState()` | method |
| `ActivateRagdoll` | `public void ActivateRagdoll()` | method |
| `GetSkeletonBoneMapping` | `public sbyte GetSkeletonBoneMapping(sbyte boneIndex)` | method |
| `AddMesh` | `public void AddMesh(Mesh mesh)` | method |
| `ClearComponents` | `public void ClearComponents()` | method |
| `AddComponent` | `public void AddComponent(GameEntityComponent component)` | method |
| `HasComponent` | `public bool HasComponent(GameEntityComponent component)` | method |
| `RemoveComponent` | `public void RemoveComponent(GameEntityComponent component)` | method |
| `ClearMeshes` | `public void ClearMeshes(bool clearBoneComponents = true)` | method |
| `GetComponentCount` | `public int GetComponentCount(GameEntity.ComponentType componentType)` | method |
| `UpdateEntitialFramesFromLocalFrames` | `public void UpdateEntitialFramesFromLocalFrames()` | method |
| `ResetFrames` | `public void ResetFrames()` | method |
| `GetComponentAtIndex` | `public GameEntityComponent GetComponentAtIndex(GameEntity.ComponentType componentType, int index)` | method |
| `SetUsePreciseBoundingVolume` | `public void SetUsePreciseBoundingVolume(bool value)` | method |
| `GetBoneEntitialRestFrame` | `public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex, bool useBoneMapping)` | method |
| `GetBoneLocalRestFrame` | `public MatrixFrame GetBoneLocalRestFrame(sbyte boneIndex, bool useBoneMapping = true)` | method |
| `GetBoneEntitialRestFrame` | `public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex)` | method |
| `GetBoneEntitialFrameAtChannel` | `public MatrixFrame GetBoneEntitialFrameAtChannel(int channelNo, sbyte boneIndex)` | method |
| `GetBoneEntitialFrame` | `public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex)` | method |
| `GetBoneComponentCount` | `public int GetBoneComponentCount(sbyte boneIndex)` | method |
| `GetBoneComponentAtIndex` | `public GameEntityComponent GetBoneComponentAtIndex(sbyte boneIndex, int componentIndex)` | method |
| `HasBoneComponent` | `public bool HasBoneComponent(sbyte boneIndex, GameEntityComponent component)` | method |
| `AddComponentToBone` | `public void AddComponentToBone(sbyte boneIndex, GameEntityComponent component)` | method |
| `RemoveBoneComponent` | `public void RemoveBoneComponent(sbyte boneIndex, GameEntityComponent component)` | method |
| `ClearMeshesAtBone` | `public void ClearMeshesAtBone(sbyte boneIndex)` | method |
| `TickAnimations` | `public void TickAnimations(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)` | method |
| `TickAnimationsAndForceUpdate` | `public void TickAnimationsAndForceUpdate(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)` | method |
| `GetAnimationParameterAtChannel` | `public float GetAnimationParameterAtChannel(int channelNo)` | method |
| `SetAnimationParameterAtChannel` | `public void SetAnimationParameterAtChannel(int channelNo, float parameter)` | method |
| `GetAnimationSpeedAtChannel` | `public float GetAnimationSpeedAtChannel(int channelNo)` | method |
| `SetAnimationSpeedAtChannel` | `public void SetAnimationSpeedAtChannel(int channelNo, float speed)` | method |
| `SetUptoDate` | `public void SetUptoDate(bool value)` | method |
| `GetAnimationAtChannel` | `public string GetAnimationAtChannel(int channelNo)` | method |
| `GetAnimationIndexAtChannel` | `public int GetAnimationIndexAtChannel(int channelNo)` | method |
| `EnableScriptDrivenPostIntegrateCallback` | `public void EnableScriptDrivenPostIntegrateCallback()` | method |
| `ResetCloths` | `public void ResetCloths()` | method |
| `IEnumerable` | `public IEnumerable<Mesh>GetAllMeshes()` | method |
| `GetBoneIndexFromName` | `public static sbyte GetBoneIndexFromName(string skeletonModelName, string boneName)` | method |
| `MaxBoneCount` | `public const sbyte MaxBoneCount` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NativeObject](../../core-extra/NativeObject/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
