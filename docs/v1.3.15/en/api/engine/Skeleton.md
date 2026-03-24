# Skeleton / Skeleton

**Namespace**: TaleWorlds.Engine
**File**: `bannerlord-1.3.15/TaleWorlds.Engine/Skeleton.cs`
**Purpose**: Native skeleton/animation wrapper class / 原生骨骼/动画包装类

## Overview / 概述

`Skeleton` is a native wrapper class representing skeletons and animations in the game engine. It inherits from `NativeObject` and is mapped to the C++ native skeleton system via the `[EngineClass("rglSkeleton")]` attribute.

`Skeleton` 是游戏引擎中用于表示骨骼和动画的原生包装类。它继承自 `NativeObject`，通过 `[EngineClass("rglSkeleton")]` 特性映射到 C++ 原生骨骼系统。

## Important Constants / 重要常量

| Constant | Type | Value | Description |
|----------|------|-------|-------------|
| MaxBoneCount | `sbyte` | 64 | Maximum bone count / 最大骨骼数量 |

## Important Properties / 重要属性

| Property | Type | Description |
|----------|------|-------------|
| IsValid | `bool` | Whether skeleton pointer is valid (not equal to UIntPtr.Zero) / 骨骼指针是否有效（不等于 UIntPtr.Zero） |
| Pointer | `UIntPtr` | Native skeleton object pointer (inherited from NativeObject) / 原生骨骼对象指针（继承自 NativeObject） |

## Important Methods / 重要方法

### Creation Methods / 创建方法

| Method | Signature | Description |
|--------|-----------|-------------|
| CreateFromModel | `public static Skeleton CreateFromModel(string modelName)` | Create skeleton from model name / 从模型名称创建骨骼 |
| CreateFromModelWithNullAnimTree | `public static Skeleton CreateFromModelWithNullAnimTree(GameEntity entity, string modelName, float boneScale = 1f)` | Create skeleton with null anim tree / 创建骨骼并指定空动画树 |
| SkeletonModelExist | `public static bool SkeletonModelExist(string skeletonModelName)` | Check if skeleton model exists / 检查骨骼模型是否存在 |

### Bone Query Methods / 骨骼查询方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetBoneCount | `public sbyte GetBoneCount()` | Get bone count / 获取骨骼数量 |
| GetBoneName | `public string GetBoneName(sbyte boneIndex)` | Get bone name at index / 获取指定骨骼索引的名称 |
| GetParentBoneIndex | `public sbyte GetParentBoneIndex(sbyte boneIndex)` | Get parent bone index / 获取父骨骼索引 |
| GetBoneChildCount | `public sbyte GetBoneChildCount(sbyte boneIndex)` | Get child bone count / 获取子骨骼数量 |
| GetBoneChildAtIndex | `public sbyte GetBoneChildAtIndex(sbyte boneIndex, sbyte childIndex)` | Get child bone at index / 获取指定索引的子骨骼 |
| GetSkeletonBoneMapping | `public sbyte GetSkeletonBoneMapping(sbyte boneIndex)` | Get skeleton bone mapping / 获取骨骼映射 |
| GetBoneIndexFromName | `public static sbyte GetBoneIndexFromName(string skeletonModelName, string boneName)` | Get bone index from name / 从名称获取骨骼索引 |

### Bone Transform Methods / 骨骼变换方法

| Method | Signature | Description |
|--------|-----------|-------------|
| GetBoneEntitialFrame | `public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex)` | Get bone entity frame / 获取骨骼实体帧 |
| GetBoneEntitialFrameWithIndex | `public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)` | Get bone entity frame with index / 通过索引获取骨骼实体帧 |
| GetBoneEntitialFrameWithName | `public MatrixFrame GetBoneEntitialFrameWithName(string boneName)` | Get bone entity frame with name / 通过名称获取骨骼实体帧 |
| GetBoneEntitialRestFrame | `public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex)` | Get bone entity rest frame / 获取骨骼实体休息帧 |
| GetBoneLocalRestFrame | `public MatrixFrame GetBoneLocalRestFrame(sbyte boneIndex, bool useBoneMapping = true)` | Get bone local rest frame / 获取骨骼本地休息帧 |
| GetBoneEntitialFrameAtChannel | `public MatrixFrame GetBoneEntitialFrameAtChannel(int channelNo, sbyte boneIndex)` | Get bone entity frame at channel / 获取通道骨骼实体帧 |
| SetBoneLocalFrame | `public void SetBoneLocalFrame(sbyte boneIndex, MatrixFrame localFrame)` | Set bone local frame / 设置骨骼本地帧 |
| UpdateEntitialFramesFromLocalFrames | `public void UpdateEntitialFramesFromLocalFrames()` | Update entity frames from local frames / 从本地帧更新实体帧 |
| ResetFrames | `public void ResetFrames()` | Reset all frames / 重置所有帧 |
| ForceUpdateBoneFrames | `public void ForceUpdateBoneFrames()` | Force update bone frames / 强制更新骨骼帧 |

### Animation Methods / 动画方法

| Method | Signature | Description |
|--------|-----------|-------------|
| TickAnimations | `public void TickAnimations(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)` | Tick animations / 更新动画 |
| TickAnimationsAndForceUpdate | `public void TickAnimationsAndForceUpdate(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)` | Tick animations and force update / 更新动画并强制更新 |
| GetAnimationAtChannel | `public string GetAnimationAtChannel(int channelNo)` | Get animation name at channel / 获取通道动画名称 |
| GetAnimationIndexAtChannel | `public int GetAnimationIndexAtChannel(int channelNo)` | Get animation index at channel / 获取通道动画索引 |
| GetAnimationParameterAtChannel | `public float GetAnimationParameterAtChannel(int channelNo)` | Get animation parameter at channel / 获取通道动画参数 |
| SetAnimationParameterAtChannel | `public void SetAnimationParameterAtChannel(int channelNo, float parameter)` | Set animation parameter at channel / 设置通道动画参数 |
| GetAnimationSpeedAtChannel | `public float GetAnimationSpeedAtChannel(int channelNo)` | Get animation speed at channel / 获取通道动画速度 |
| SetAnimationSpeedAtChannel | `public void SetAnimationSpeedAtChannel(int channelNo, float speed)` | Set animation speed at channel / 设置通道动画速度 |

### Component Management Methods / 组件管理方法

| Method | Signature | Description |
|--------|-----------|-------------|
| AddMesh | `public void AddMesh(Mesh mesh)` | Add mesh / 添加网格 |
| AddMeshToBone | `public void AddMeshToBone(UIntPtr mesh, sbyte boneIndex)` | Add mesh to bone / 添加网格到骨骼 |
| ClearMeshes | `public void ClearMeshes(bool clearBoneComponents = true)` | Clear all meshes / 清除所有网格 |
| ClearMeshesAtBone | `public void ClearMeshesAtBone(sbyte boneIndex)` | Clear meshes at bone / 清除骨骼上的网格 |
| GetAllMeshes | `public IEnumerable<Mesh> GetAllMeshes()` | Get all meshes / 获取所有网格 |
| AddComponent | `public void AddComponent(GameEntityComponent component)` | Add component / 添加组件 |
| RemoveComponent | `public void RemoveComponent(GameEntityComponent component)` | Remove component / 移除组件 |
| GetComponentAtIndex | `public GameEntityComponent GetComponentAtIndex(GameEntity.ComponentType componentType, int index)` | Get component at index / 获取指定索引组件 |
| GetComponentCount | `public int GetComponentCount(GameEntity.ComponentType componentType)` | Get component count / 获取组件数量 |

### State Control Methods / 状态控制方法

| Method | Signature | Description |
|--------|-----------|-------------|
| Freeze | `public void Freeze(bool p)` | Freeze skeleton / 冻结骨骼 |
| IsFrozen | `public bool IsFrozen()` | Check if frozen / 检查是否冻结 |
| ActivateRagdoll | `public void ActivateRagdoll()` | Activate ragdoll / 激活布娃娃系统 |
| GetCurrentRagdollState | `public RagdollState GetCurrentRagdollState()` | Get current ragdoll state / 获取当前布娃娃状态 |
| ResetCloths | `public void ResetCloths()` | Reset cloth simulation / 重置布料模拟 |
| EnableScriptDrivenPostIntegrateCallback | `public void EnableScriptDrivenPostIntegrateCallback()` | Enable script driven post-integrate callback / 启用脚本驱动后集成回调 |

## Usage Example / 使用示例

```csharp
// Create skeleton from model
// 从模型创建骨骼
Skeleton skeleton = Skeleton.CreateFromModel("human_skeleton");
if (skeleton.IsValid)
{
    // Get bone count
    // 获取骨骼数量
    sbyte boneCount = skeleton.GetBoneCount();
    
    // Iterate through bones
    // 遍历骨骼
    for (sbyte i = 0; i < boneCount; i++)
    {
        string boneName = skeleton.GetBoneName(i);
        MatrixFrame frame = skeleton.GetBoneEntitialFrame(i);
    }
    
    // Add mesh to bone
    // 添加网格到骨骼
    skeleton.AddMesh(mesh);
}
```

```csharp
// Animation update
// 动画更新
MatrixFrame entityFrame = entity.GetGlobalFrame();
skeleton.TickAnimations(deltaTime, entityFrame, true);
```

## Notes / 注意事项

- Skeleton inherits from NativeObject and cannot be instantiated directly
- Skeleton 继承自 NativeObject，不可直接实例化
- All methods call native implementation via `EngineApplicationInterface.ISkeleton`
- 所有方法都通过 `EngineApplicationInterface.ISkeleton` 调用原生实现
- Bone index range is 0 to MaxBoneCount - 1
- 骨骼索引范围是 0 到 MaxBoneCount - 1
- GetAllMeshes returns IEnumerable and uses yield return implementation
- GetAllMeshes 返回 IEnumerable，需要使用 yield return 实现
