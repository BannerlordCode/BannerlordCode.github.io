# Skeleton / Skeleton

**Namespace**: TaleWorlds.Engine
**File**: `bannerlord-1.3.15/TaleWorlds.Engine/Skeleton.cs`
**Purpose**: 原生骨骼/动画包装类 / Native skeleton/animation wrapper class

## 概述 / Overview

`Skeleton` 是游戏引擎中用于表示骨骼和动画的原生包装类。它继承自 `NativeObject`，通过 `[EngineClass("rglSkeleton")]` 特性映射到 C++ 原生骨骼系统。

`Skeleton` is a native wrapper class representing skeletons and animations in the game engine. It inherits from `NativeObject` and is mapped to the C++ native skeleton system via the `[EngineClass("rglSkeleton")]` attribute.

## 重要常量 / Important Constants

| Constant | Type | Value | Description |
|----------|------|-------|-------------|
| MaxBoneCount | `sbyte` | 64 | 最大骨骼数量 / Maximum bone count |

## 重要属性 / Important Properties

| Property | Type | Description |
|----------|------|-------------|
| IsValid | `bool` | 骨骼指针是否有效（不等于 UIntPtr.Zero）/ Whether skeleton pointer is valid (not equal to UIntPtr.Zero) |
| Pointer | `UIntPtr` | 原生骨骼对象指针（继承自 NativeObject）/ Native skeleton object pointer (inherited from NativeObject) |

## 重要方法 / Important Methods

### 创建方法 / Creation Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| CreateFromModel | `public static Skeleton CreateFromModel(string modelName)` | 从模型名称创建骨骼 / Create skeleton from model name |
| CreateFromModelWithNullAnimTree | `public static Skeleton CreateFromModelWithNullAnimTree(GameEntity entity, string modelName, float boneScale = 1f)` | 创建骨骼并指定空动画树 / Create skeleton with null anim tree |
| SkeletonModelExist | `public static bool SkeletonModelExist(string skeletonModelName)` | 检查骨骼模型是否存在 / Check if skeleton model exists |

### 骨骼查询方法 / Bone Query Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetBoneCount | `public sbyte GetBoneCount()` | 获取骨骼数量 / Get bone count |
| GetBoneName | `public string GetBoneName(sbyte boneIndex)` | 获取指定骨骼索引的名称 / Get bone name at index |
| GetParentBoneIndex | `public sbyte GetParentBoneIndex(sbyte boneIndex)` | 获取父骨骼索引 / Get parent bone index |
| GetBoneChildCount | `public sbyte GetBoneChildCount(sbyte boneIndex)` | 获取子骨骼数量 / Get child bone count |
| GetBoneChildAtIndex | `public sbyte GetBoneChildAtIndex(sbyte boneIndex, sbyte childIndex)` | 获取指定索引的子骨骼 / Get child bone at index |
| GetSkeletonBoneMapping | `public sbyte GetSkeletonBoneMapping(sbyte boneIndex)` | 获取骨骼映射 / Get skeleton bone mapping |
| GetBoneIndexFromName | `public static sbyte GetBoneIndexFromName(string skeletonModelName, string boneName)` | 从名称获取骨骼索引 / Get bone index from name |

### 骨骼变换方法 / Bone Transform Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| GetBoneEntitialFrame | `public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex)` | 获取骨骼实体帧 / Get bone entity frame |
| GetBoneEntitialFrameWithIndex | `public MatrixFrame GetBoneEntitialFrameWithIndex(sbyte boneIndex)` | 通过索引获取骨骼实体帧 / Get bone entity frame with index |
| GetBoneEntitialFrameWithName | `public MatrixFrame GetBoneEntitialFrameWithName(string boneName)` | 通过名称获取骨骼实体帧 / Get bone entity frame with name |
| GetBoneEntitialRestFrame | `public MatrixFrame GetBoneEntitialRestFrame(sbyte boneIndex)` | 获取骨骼实体休息帧 / Get bone entity rest frame |
| GetBoneLocalRestFrame | `public MatrixFrame GetBoneLocalRestFrame(sbyte boneIndex, bool useBoneMapping = true)` | 获取骨骼本地休息帧 / Get bone local rest frame |
| GetBoneEntitialFrameAtChannel | `public MatrixFrame GetBoneEntitialFrameAtChannel(int channelNo, sbyte boneIndex)` | 获取通道骨骼实体帧 / Get bone entity frame at channel |
| SetBoneLocalFrame | `public void SetBoneLocalFrame(sbyte boneIndex, MatrixFrame localFrame)` | 设置骨骼本地帧 / Set bone local frame |
| UpdateEntitialFramesFromLocalFrames | `public void UpdateEntitialFramesFromLocalFrames()` | 从本地帧更新实体帧 / Update entity frames from local frames |
| ResetFrames | `public void ResetFrames()` | 重置所有帧 / Reset all frames |
| ForceUpdateBoneFrames | `public void ForceUpdateBoneFrames()` | 强制更新骨骼帧 / Force update bone frames |

### 动画方法 / Animation Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| TickAnimations | `public void TickAnimations(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)` | 更新动画 / Tick animations |
| TickAnimationsAndForceUpdate | `public void TickAnimationsAndForceUpdate(float dt, MatrixFrame globalFrame, bool tickAnimsForChildren)` | 更新动画并强制更新 / Tick animations and force update |
| GetAnimationAtChannel | `public string GetAnimationAtChannel(int channelNo)` | 获取通道动画名称 / Get animation name at channel |
| GetAnimationIndexAtChannel | `public int GetAnimationIndexAtChannel(int channelNo)` | 获取通道动画索引 / Get animation index at channel |
| GetAnimationParameterAtChannel | `public float GetAnimationParameterAtChannel(int channelNo)` | 获取通道动画参数 / Get animation parameter at channel |
| SetAnimationParameterAtChannel | `public void SetAnimationParameterAtChannel(int channelNo, float parameter)` | 设置通道动画参数 / Set animation parameter at channel |
| GetAnimationSpeedAtChannel | `public float GetAnimationSpeedAtChannel(int channelNo)` | 获取通道动画速度 / Get animation speed at channel |
| SetAnimationSpeedAtChannel | `public void SetAnimationSpeedAtChannel(int channelNo, float speed)` | 设置通道动画速度 / Set animation speed at channel |

### 组件管理方法 / Component Management Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| AddMesh | `public void AddMesh(Mesh mesh)` | 添加网格 / Add mesh |
| AddMeshToBone | `public void AddMeshToBone(UIntPtr mesh, sbyte boneIndex)` | 添加网格到骨骼 / Add mesh to bone |
| ClearMeshes | `public void ClearMeshes(bool clearBoneComponents = true)` | 清除所有网格 / Clear all meshes |
| ClearMeshesAtBone | `public void ClearMeshesAtBone(sbyte boneIndex)` | 清除骨骼上的网格 / Clear meshes at bone |
| GetAllMeshes | `public IEnumerable<Mesh> GetAllMeshes()` | 获取所有网格 / Get all meshes |
| AddComponent | `public void AddComponent(GameEntityComponent component)` | 添加组件 / Add component |
| RemoveComponent | `public void RemoveComponent(GameEntityComponent component)` | 移除组件 / Remove component |
| GetComponentAtIndex | `public GameEntityComponent GetComponentAtIndex(GameEntity.ComponentType componentType, int index)` | 获取指定索引组件 / Get component at index |
| GetComponentCount | `public int GetComponentCount(GameEntity.ComponentType componentType)` | 获取组件数量 / Get component count |

### 状态控制方法 / State Control Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Freeze | `public void Freeze(bool p)` | 冻结骨骼 / Freeze skeleton |
| IsFrozen | `public bool IsFrozen()` | 检查是否冻结 / Check if frozen |
| ActivateRagdoll | `public void ActivateRagdoll()` | 激活布娃娃系统 / Activate ragdoll |
| GetCurrentRagdollState | `public RagdollState GetCurrentRagdollState()` | 获取当前布娃娃状态 / Get current ragdoll state |
| ResetCloths | `public void ResetCloths()` | 重置布料模拟 / Reset cloth simulation |
| EnableScriptDrivenPostIntegrateCallback | `public void EnableScriptDrivenPostIntegrateCallback()` | 启用脚本驱动后集成回调 / Enable script driven post-integrate callback |

## 使用示例 / Usage Example

```csharp
// 从模型创建骨骼
// Create skeleton from model
Skeleton skeleton = Skeleton.CreateFromModel("human_skeleton");
if (skeleton.IsValid)
{
    // 获取骨骼数量
    // Get bone count
    sbyte boneCount = skeleton.GetBoneCount();
    
    // 遍历骨骼
    // Iterate through bones
    for (sbyte i = 0; i < boneCount; i++)
    {
        string boneName = skeleton.GetBoneName(i);
        MatrixFrame frame = skeleton.GetBoneEntitialFrame(i);
    }
    
    // 添加网格到骨骼
    // Add mesh to bone
    skeleton.AddMesh(mesh);
}
```

```csharp
// 动画更新
// Animation update
MatrixFrame entityFrame = entity.GetGlobalFrame();
skeleton.TickAnimations(deltaTime, entityFrame, true);
```

## 注意事项 / Notes

- Skeleton 继承自 NativeObject，不可直接实例化
- Skeleton inherits from NativeObject and cannot be instantiated directly
- 所有方法都通过 `EngineApplicationInterface.ISkeleton` 调用原生实现
- All methods call native implementation via `EngineApplicationInterface.ISkeleton`
- 骨骼索引范围是 0 到 MaxBoneCount - 1
- Bone index range is 0 to MaxBoneCount - 1
- GetAllMeshes 返回 IEnumerable，需要使用 yield return 实现
- GetAllMeshes returns IEnumerable and uses yield return implementation
