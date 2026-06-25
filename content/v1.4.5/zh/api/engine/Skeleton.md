---
title: "Skeleton"
description: "Skeleton 的自动生成类参考。"
---
# Skeleton

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Skeleton : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/Skeleton.cs`

## 概述

`Skeleton` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateFromModel
`public static Skeleton CreateFromModel(string modelName)`

**用途 / Purpose:** 构建一个新的 from model 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Skeleton.CreateFromModel("example");
```

### CreateFromModelWithNullAnimTree
`public static Skeleton CreateFromModelWithNullAnimTree(GameEntity entity, string modelName, float boneScale = 1f)`

**用途 / Purpose:** 构建一个新的 from model with null anim tree 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Skeleton.CreateFromModelWithNullAnimTree(entity, "example", 0);
```

### GetName
`public string GetName()`

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetName();
```

### GetBoneName
`public string GetBoneName(sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 bone name 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneName(0);
```

### GetBoneChildAtIndex
`public sbyte GetBoneChildAtIndex(sbyte boneIndex, sbyte childIndex)`

**用途 / Purpose:** 读取并返回当前对象中 bone child at index 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneChildAtIndex(0, 0);
```

### GetBoneChildCount
`public sbyte GetBoneChildCount(sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 bone child count 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneChildCount(0);
```

### GetParentBoneIndex
`public sbyte GetParentBoneIndex(sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 parent bone index 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetParentBoneIndex(0);
```

### AddMeshToBone
`public void AddMeshToBone(UIntPtr mesh, sbyte boneIndex)`

**用途 / Purpose:** 将 mesh to bone 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.AddMeshToBone(mesh, 0);
```

### Freeze
`public void Freeze(bool p)`

**用途 / Purpose:** 调用 Freeze 对应的操作。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.Freeze(false);
```

### IsFrozen
`public bool IsFrozen()`

**用途 / Purpose:** 判断当前对象是否处于 frozen 状态或条件。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.IsFrozen();
```

### SetBoneLocalFrame
`public void SetBoneLocalFrame(sbyte boneIndex, MatrixFrame localFrame)`

**用途 / Purpose:** 为 bone local frame 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.SetBoneLocalFrame(0, localFrame);
```

### GetBoneCount
`public sbyte GetBoneCount()`

**用途 / Purpose:** 读取并返回当前对象中 bone count 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneCount();
```

### GetBoneBody
`public void GetBoneBody(sbyte boneIndex, ref CapsuleData data)`

**用途 / Purpose:** 读取并返回当前对象中 bone body 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.GetBoneBody(0, data);
```

### SkeletonModelExist
`public static bool SkeletonModelExist(string skeletonModelName)`

**用途 / Purpose:** 调用 SkeletonModelExist 对应的操作。

```csharp
// 静态调用，不需要实例
Skeleton.SkeletonModelExist("example");
```

### ForceUpdateBoneFrames
`public void ForceUpdateBoneFrames()`

**用途 / Purpose:** 调用 ForceUpdateBoneFrames 对应的操作。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.ForceUpdateBoneFrames();
```

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 bone entitial frame with index 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialFrameWithIndex(0);
```

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName)`

**用途 / Purpose:** 读取并返回当前对象中 bone entitial frame with name 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialFrameWithName("example");
```

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState()`

**用途 / Purpose:** 读取并返回当前对象中 current ragdoll state 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetCurrentRagdollState();
```

### ActivateRagdoll
`public void ActivateRagdoll()`

**用途 / Purpose:** 激活ragdoll对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.ActivateRagdoll();
```

### GetSkeletonBoneMapping
`public sbyte GetSkeletonBoneMapping(sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 skeleton bone mapping 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetSkeletonBoneMapping(0);
```

### AddMesh
`public void AddMesh(Mesh mesh)`

**用途 / Purpose:** 将 mesh 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.AddMesh(mesh);
```

### ClearComponents
`public void ClearComponents()`

**用途 / Purpose:** 清空当前对象中的components。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.ClearComponents();
```

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**用途 / Purpose:** 将 component 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.AddComponent(component);
```

### HasComponent
`public bool HasComponent(GameEntityComponent component)`

**用途 / Purpose:** 判断当前对象是否已经持有 component。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.HasComponent(component);
```

### RemoveComponent
`public void RemoveComponent(GameEntityComponent component)`

**用途 / Purpose:** 从当前容器或状态中移除 component。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.RemoveComponent(component);
```

### ClearMeshes
`public void ClearMeshes(bool clearBoneComponents = true)`

**用途 / Purpose:** 清空当前对象中的meshes。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.ClearMeshes(false);
```

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType)`

**用途 / Purpose:** 读取并返回当前对象中 component count 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetComponentCount(componentType);
```

### UpdateEntitialFramesFromLocalFrames
`public void UpdateEntitialFramesFromLocalFrames()`

**用途 / Purpose:** 重新计算并更新 entitial frames from local frames 的最新表示。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.UpdateEntitialFramesFromLocalFrames();
```

### ResetFrames
`public void ResetFrames()`

**用途 / Purpose:** 将 frames 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.ResetFrames();
```

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(GameEntity.ComponentType componentType, int index)`

**用途 / Purpose:** 读取并返回当前对象中 component at index 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetComponentAtIndex(componentType, 0);
```

### SetUsePreciseBoundingVolume
`public void SetUsePreciseBoundingVolume(bool value)`

**用途 / Purpose:** 为 use precise bounding volume 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.SetUsePreciseBoundingVolume(false);
```

### GetBoneEntitialRestFrame
`public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex, bool useBoneMapping)`

**用途 / Purpose:** 读取并返回当前对象中 bone entitial rest frame 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialRestFrame(0, false);
```

### GetBoneLocalRestFrame
`public MatrixFrame GetBoneLocalRestFrame(sbyte boneIndex, bool useBoneMapping = true)`

**用途 / Purpose:** 读取并返回当前对象中 bone local rest frame 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneLocalRestFrame(0, false);
```

### GetBoneEntitialRestFrame
`public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 bone entitial rest frame 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialRestFrame(0);
```

### GetBoneEntitialFrameAtChannel
`public MatrixFrame GetBoneEntitialFrameAtChannel(int channelNo, sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 bone entitial frame at channel 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialFrameAtChannel(0, 0);
```

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 bone entitial frame 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneEntitialFrame(0);
```

### GetBoneComponentCount
`public int GetBoneComponentCount(sbyte boneIndex)`

**用途 / Purpose:** 读取并返回当前对象中 bone component count 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneComponentCount(0);
```

### GetBoneComponentAtIndex
`public GameEntityComponent GetBoneComponentAtIndex(sbyte boneIndex, int componentIndex)`

**用途 / Purpose:** 读取并返回当前对象中 bone component at index 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetBoneComponentAtIndex(0, 0);
```

### HasBoneComponent
`public bool HasBoneComponent(sbyte boneIndex, GameEntityComponent component)`

**用途 / Purpose:** 判断当前对象是否已经持有 bone component。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.HasBoneComponent(0, component);
```

### AddComponentToBone
`public void AddComponentToBone(sbyte boneIndex, GameEntityComponent component)`

**用途 / Purpose:** 将 component to bone 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.AddComponentToBone(0, component);
```

### RemoveBoneComponent
`public void RemoveBoneComponent(sbyte boneIndex, GameEntityComponent component)`

**用途 / Purpose:** 从当前容器或状态中移除 bone component。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.RemoveBoneComponent(0, component);
```

### ClearMeshesAtBone
`public void ClearMeshesAtBone(sbyte boneIndex)`

**用途 / Purpose:** 清空当前对象中的meshes at bone。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.ClearMeshesAtBone(0);
```

### TickAnimations
`public void TickAnimations(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进animations的状态。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.TickAnimations(0, globalFrame, false);
```

### TickAnimationsAndForceUpdate
`public void TickAnimationsAndForceUpdate(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进animations and force update的状态。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.TickAnimationsAndForceUpdate(0, globalFrame, false);
```

### GetAnimationParameterAtChannel
`public float GetAnimationParameterAtChannel(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 animation parameter at channel 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetAnimationParameterAtChannel(0);
```

### SetAnimationParameterAtChannel
`public void SetAnimationParameterAtChannel(int channelNo, float parameter)`

**用途 / Purpose:** 为 animation parameter at channel 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.SetAnimationParameterAtChannel(0, 0);
```

### GetAnimationSpeedAtChannel
`public float GetAnimationSpeedAtChannel(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 animation speed at channel 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetAnimationSpeedAtChannel(0);
```

### SetAnimationSpeedAtChannel
`public void SetAnimationSpeedAtChannel(int channelNo, float speed)`

**用途 / Purpose:** 为 animation speed at channel 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.SetAnimationSpeedAtChannel(0, 0);
```

### SetUptoDate
`public void SetUptoDate(bool value)`

**用途 / Purpose:** 为 upto date 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.SetUptoDate(false);
```

### GetAnimationAtChannel
`public string GetAnimationAtChannel(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 animation at channel 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetAnimationAtChannel(0);
```

### GetAnimationIndexAtChannel
`public int GetAnimationIndexAtChannel(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 animation index at channel 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetAnimationIndexAtChannel(0);
```

### EnableScriptDrivenPostIntegrateCallback
`public void EnableScriptDrivenPostIntegrateCallback()`

**用途 / Purpose:** 调用 EnableScriptDrivenPostIntegrateCallback 对应的操作。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.EnableScriptDrivenPostIntegrateCallback();
```

### ResetCloths
`public void ResetCloths()`

**用途 / Purpose:** 将 cloths 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
skeleton.ResetCloths();
```

### GetAllMeshes
`public IEnumerable<Mesh> GetAllMeshes()`

**用途 / Purpose:** 读取并返回当前对象中 all meshes 的结果。

```csharp
// 先通过子系统 API 拿到 Skeleton 实例
Skeleton skeleton = ...;
var result = skeleton.GetAllMeshes();
```

### GetBoneIndexFromName
`public static sbyte GetBoneIndexFromName(string skeletonModelName, string boneName)`

**用途 / Purpose:** 读取并返回当前对象中 bone index from name 的结果。

```csharp
// 静态调用，不需要实例
Skeleton.GetBoneIndexFromName("example", "example");
```

## 使用示例

```csharp
Skeleton.CreateFromModel("example");
```

## 参见

- [本区域目录](../)