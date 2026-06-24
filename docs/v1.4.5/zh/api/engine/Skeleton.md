<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Skeleton`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Skeleton

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Skeleton : NativeObject`
**Base:** `NativeObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/Skeleton.cs`

## 概述

`Skeleton` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateFromModel
`public static Skeleton CreateFromModel(string modelName)`

**用途 / Purpose:** 创建一个 `from model` 实例或对象。

### CreateFromModelWithNullAnimTree
`public static Skeleton CreateFromModelWithNullAnimTree(GameEntity entity, string modelName, float boneScale = 1f)`

**用途 / Purpose:** 创建一个 `from model with null anim tree` 实例或对象。

### GetName
`public string GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetBoneName
`public string GetBoneName(sbyte boneIndex)`

**用途 / Purpose:** 获取 `bone name` 的当前值。

### GetBoneChildAtIndex
`public sbyte GetBoneChildAtIndex(sbyte boneIndex, sbyte childIndex)`

**用途 / Purpose:** 获取 `bone child at index` 的当前值。

### GetBoneChildCount
`public sbyte GetBoneChildCount(sbyte boneIndex)`

**用途 / Purpose:** 获取 `bone child count` 的当前值。

### GetParentBoneIndex
`public sbyte GetParentBoneIndex(sbyte boneIndex)`

**用途 / Purpose:** 获取 `parent bone index` 的当前值。

### AddMeshToBone
`public void AddMeshToBone(UIntPtr mesh, sbyte boneIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh to bone`。

### Freeze
`public void Freeze(bool p)`

**用途 / Purpose:** 处理 `freeze` 相关逻辑。

### IsFrozen
`public bool IsFrozen()`

**用途 / Purpose:** 处理 `is frozen` 相关逻辑。

### SetBoneLocalFrame
`public void SetBoneLocalFrame(sbyte boneIndex, MatrixFrame localFrame)`

**用途 / Purpose:** 设置 `bone local frame` 的值或状态。

### GetBoneCount
`public sbyte GetBoneCount()`

**用途 / Purpose:** 获取 `bone count` 的当前值。

### GetBoneBody
`public void GetBoneBody(sbyte boneIndex, ref CapsuleData data)`

**用途 / Purpose:** 获取 `bone body` 的当前值。

### SkeletonModelExist
`public static bool SkeletonModelExist(string skeletonModelName)`

**用途 / Purpose:** 处理 `skeleton model exist` 相关逻辑。

### ForceUpdateBoneFrames
`public void ForceUpdateBoneFrames()`

**用途 / Purpose:** 处理 `force update bone frames` 相关逻辑。

### GetBoneEntitialFrameWithIndex
`public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)`

**用途 / Purpose:** 获取 `bone entitial frame with index` 的当前值。

### GetBoneEntitialFrameWithName
`public MatrixFrame GetBoneEntitialFrameWithName(string boneName)`

**用途 / Purpose:** 获取 `bone entitial frame with name` 的当前值。

### GetCurrentRagdollState
`public RagdollState GetCurrentRagdollState()`

**用途 / Purpose:** 获取 `current ragdoll state` 的当前值。

### ActivateRagdoll
`public void ActivateRagdoll()`

**用途 / Purpose:** 处理 `activate ragdoll` 相关逻辑。

### GetSkeletonBoneMapping
`public sbyte GetSkeletonBoneMapping(sbyte boneIndex)`

**用途 / Purpose:** 获取 `skeleton bone mapping` 的当前值。

### AddMesh
`public void AddMesh(Mesh mesh)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh`。

### ClearComponents
`public void ClearComponents()`

**用途 / Purpose:** 处理 `clear components` 相关逻辑。

### AddComponent
`public void AddComponent(GameEntityComponent component)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### HasComponent
`public bool HasComponent(GameEntityComponent component)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `component`。

### RemoveComponent
`public void RemoveComponent(GameEntityComponent component)`

**用途 / Purpose:** 从当前集合/状态中移除 `component`。

### ClearMeshes
`public void ClearMeshes(bool clearBoneComponents = true)`

**用途 / Purpose:** 处理 `clear meshes` 相关逻辑。

### GetComponentCount
`public int GetComponentCount(GameEntity.ComponentType componentType)`

**用途 / Purpose:** 获取 `component count` 的当前值。

### UpdateEntitialFramesFromLocalFrames
`public void UpdateEntitialFramesFromLocalFrames()`

**用途 / Purpose:** 更新 `entitial frames from local frames` 的状态或数据。

### ResetFrames
`public void ResetFrames()`

**用途 / Purpose:** 将 `frames` 重置为初始状态。

### GetComponentAtIndex
`public GameEntityComponent GetComponentAtIndex(GameEntity.ComponentType componentType, int index)`

**用途 / Purpose:** 获取 `component at index` 的当前值。

### SetUsePreciseBoundingVolume
`public void SetUsePreciseBoundingVolume(bool value)`

**用途 / Purpose:** 设置 `use precise bounding volume` 的值或状态。

### GetBoneEntitialRestFrame
`public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex, bool useBoneMapping)`

**用途 / Purpose:** 获取 `bone entitial rest frame` 的当前值。

### GetBoneLocalRestFrame
`public MatrixFrame GetBoneLocalRestFrame(sbyte boneIndex, bool useBoneMapping = true)`

**用途 / Purpose:** 获取 `bone local rest frame` 的当前值。

### GetBoneEntitialRestFrame
`public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex)`

**用途 / Purpose:** 获取 `bone entitial rest frame` 的当前值。

### GetBoneEntitialFrameAtChannel
`public MatrixFrame GetBoneEntitialFrameAtChannel(int channelNo, sbyte boneIndex)`

**用途 / Purpose:** 获取 `bone entitial frame at channel` 的当前值。

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex)`

**用途 / Purpose:** 获取 `bone entitial frame` 的当前值。

### GetBoneComponentCount
`public int GetBoneComponentCount(sbyte boneIndex)`

**用途 / Purpose:** 获取 `bone component count` 的当前值。

### GetBoneComponentAtIndex
`public GameEntityComponent GetBoneComponentAtIndex(sbyte boneIndex, int componentIndex)`

**用途 / Purpose:** 获取 `bone component at index` 的当前值。

### HasBoneComponent
`public bool HasBoneComponent(sbyte boneIndex, GameEntityComponent component)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `bone component`。

### AddComponentToBone
`public void AddComponentToBone(sbyte boneIndex, GameEntityComponent component)`

**用途 / Purpose:** 向当前集合/状态中添加 `component to bone`。

### RemoveBoneComponent
`public void RemoveBoneComponent(sbyte boneIndex, GameEntityComponent component)`

**用途 / Purpose:** 从当前集合/状态中移除 `bone component`。

### ClearMeshesAtBone
`public void ClearMeshesAtBone(sbyte boneIndex)`

**用途 / Purpose:** 处理 `clear meshes at bone` 相关逻辑。

### TickAnimations
`public void TickAnimations(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)`

**用途 / Purpose:** 处理 `tick animations` 相关逻辑。

### TickAnimationsAndForceUpdate
`public void TickAnimationsAndForceUpdate(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)`

**用途 / Purpose:** 处理 `tick animations and force update` 相关逻辑。

### GetAnimationParameterAtChannel
`public float GetAnimationParameterAtChannel(int channelNo)`

**用途 / Purpose:** 获取 `animation parameter at channel` 的当前值。

### SetAnimationParameterAtChannel
`public void SetAnimationParameterAtChannel(int channelNo, float parameter)`

**用途 / Purpose:** 设置 `animation parameter at channel` 的值或状态。

### GetAnimationSpeedAtChannel
`public float GetAnimationSpeedAtChannel(int channelNo)`

**用途 / Purpose:** 获取 `animation speed at channel` 的当前值。

### SetAnimationSpeedAtChannel
`public void SetAnimationSpeedAtChannel(int channelNo, float speed)`

**用途 / Purpose:** 设置 `animation speed at channel` 的值或状态。

### SetUptoDate
`public void SetUptoDate(bool value)`

**用途 / Purpose:** 设置 `upto date` 的值或状态。

### GetAnimationAtChannel
`public string GetAnimationAtChannel(int channelNo)`

**用途 / Purpose:** 获取 `animation at channel` 的当前值。

### GetAnimationIndexAtChannel
`public int GetAnimationIndexAtChannel(int channelNo)`

**用途 / Purpose:** 获取 `animation index at channel` 的当前值。

### EnableScriptDrivenPostIntegrateCallback
`public void EnableScriptDrivenPostIntegrateCallback()`

**用途 / Purpose:** 处理 `enable script driven post integrate callback` 相关逻辑。

### ResetCloths
`public void ResetCloths()`

**用途 / Purpose:** 将 `cloths` 重置为初始状态。

### GetAllMeshes
`public IEnumerable<Mesh> GetAllMeshes()`

**用途 / Purpose:** 获取 `all meshes` 的当前值。

### GetBoneIndexFromName
`public static sbyte GetBoneIndexFromName(string skeletonModelName, string boneName)`

**用途 / Purpose:** 获取 `bone index from name` 的当前值。

## 使用示例

```csharp
Skeleton.CreateFromModel("example");
```

## 参见

- [完整类目录](../catalog)