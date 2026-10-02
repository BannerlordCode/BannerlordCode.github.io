---
title: "Skeleton"
description: "绑定在角色实体上的骨骼层次与动画播放器，持有最多 64 根骨并驱动 Mesh 蒙皮与 MetaMesh 装配。"
---
# Skeleton

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Skeleton : NativeObject`
**Base:** `NativeObject`
**Source:** `TaleWorlds.Engine/Skeleton.cs`

## 概述

`Skeleton` 是绑定在角色 / 实体上的骨骼层次与动画播放器：它持有最多 64 根骨（类常量 `MaxBoneCount = 64`）并决定每根骨在世界中的位置，进而驱动 [Mesh](../Mesh/) 的蒙皮与 [MetaMesh](../MetaMesh/) 的装配。它由 [NativeObject](../NativeObject/) 派生，内部绑定一个原生动画 / 骨骼实例，生命周期需要谨慎管理。

## 心智模型

`Skeleton` 是"会动的骨架"——继承自 [NativeObject](../NativeObject/)，内部是一个原生骨骼 + 动画状态机。你几乎总是通过 `CreateFromModel(modelName)` 从 `.xml` 骨骼定义创建，而不是 `new`；`CreateFromModelWithNullAnimTree` 则在不需要动画树时（如纯静态蒙皮）借助 [GameEntity](../GameEntity/) 创建更轻量的实例。骨索引类型是 `sbyte` 且上限 `MaxBoneCount = 64`，越界会出问题。关键陷阱：骨骼帧需要在 `TickAnimations` 之后才会更新到最新；动画播放期间直接读 `GetBoneEntitialFrame` 可能拿到旧值，必要时用 `ForceUpdateBoneFrames` 或 `TickAnimationsAndForceUpdate`。`AddMesh` / `AddMeshToBone` 把 [Mesh](../Mesh/) 挂到骨上后，网格才会随骨运动。何时用：角色换装、读骨世界坐标挂特效、触发布娃娃（`ActivateRagdoll`）；何时不用：纯静态几何体不需要 `Skeleton`，用 [Mesh](../Mesh/) + [MetaMesh](../MetaMesh/) 即可。获取实例：角色骨架通常从 Agent 的视觉对象上取得，或从一个已含骨架组件的 [GameEntity](../GameEntity/) 上取。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `CreateFromModel(name)` / `CreateFromModelWithNullAnimTree(entity, name, scale)` | 工厂：从骨骼定义建可动画骨架 / 建无动画树的轻量骨架 |
| `GetBoneCount()` / `GetBoneName(i)` / `GetParentBoneIndex(i)` | 遍历骨层次：骨数、骨名、父骨索引（骨索引均为 `sbyte`） |
| `SetBoneLocalFrame(i, frame)` / `GetBoneEntitialFrame(i)` | 直接设置 / 读取某骨的最终变换帧 |
| `TickAnimations(dt, globalFrame, tickChildren)` / `TickAnimationsAndForceUpdate(...)` | 每帧推进动画并积分骨帧；后者强制刷新 |
| `AddMesh(Mesh)` / `AddMeshToBone(meshPtr, i)` / `ClearMeshes()` | 把网格挂到骨架或指定骨上，使其随骨运动 |
| `AddComponent(c)` / `GetComponentAtIndex(type, i)` | 往骨架上挂 [GameEntityComponent](../GameEntityComponent/)（如 [MetaMesh](../MetaMesh/)） |
| `ActivateRagdoll()` / `GetCurrentRagdollState()` | 切换为布娃娃物理状态并查询当前状态 |
| `Freeze(bool)` / `IsFrozen()` | 冻结 / 查询骨架（冻结后不再随动画更新） |

## 真实示例

```csharp
// 从骨骼定义创建一个可动画的骨架
Skeleton skeleton = Skeleton.CreateFromModel("human_skeleton");

// 把身体网格挂到骨架，并读头部骨的世界变换
skeleton.AddMesh(Mesh.GetFromResource("body_mesh"));
MatrixFrame headFrame = skeleton.GetBoneEntitialFrameWithName("head");

// 每帧推进动画并强制刷新骨帧，再在根骨上挂粒子系统
skeleton.TickAnimationsAndForceUpdate(0.016f, MatrixFrame.Identity, true);
ParticleSystem smoke = ParticleSystem.CreateParticleSystemAttachedToBone("smoke", skeleton, (sbyte)0, ref MatrixFrame.Identity);
```

## 风险与崩溃边界

- **骨索引是 `sbyte`，上限 64。** 越界或负索引访问 `GetBoneEntitialFrame` / `AddMeshToBone` 会读取错误骨甚至崩溃；可先用 `GetBoneIndexFromName` 把名字解析成索引。
- **读骨帧前需先 Tick。** 动画播放中直接读 `GetBoneEntitialFrame` 可能拿到上一帧甚至初始值；要即时结果用 `ForceUpdateBoneFrames` 或 `TickAnimationsAndForceUpdate`。
- **`AddMeshToBone` 接收原生指针。** 第一个参数是 `UIntPtr`（mesh 指针），不是托管 `Mesh` 对象；用错重载会把网格挂错位置。
- **布娃娃是单向切换。** `ActivateRagdoll` 之后难以回到动画驱动状态，切换前要确认逻辑需要。
- **共享骨架引用。** 从一个实体取得的 `Skeleton` 可能与其渲染强绑定，实体移除或重建后旧引用可能指向已释放的原生对象。

## 依赖关系

- 上游：[NativeObject](../NativeObject/) 提供原生指针与引用计数；[GameEntity](../GameEntity/) 持有骨架组件并驱动其每帧 `Tick`。
- 下游：骨架挂接 [Mesh](../Mesh/)（蒙皮）与 [MetaMesh](../MetaMesh/)（[GameEntityComponent](../GameEntityComponent/)），并由 [ParticleSystem](../ParticleSystem/) 通过 `CreateParticleSystemAttachedToBone` 挂到骨上。
- 相关：动画数据定义在骨骼 `.xml` 资源里，由资源系统按名加载（与 [Resource](../Resource/) 同源查询）。
- 架构参考：[crash-boundaries](../../../architecture/crash-boundaries/) 讨论原生骨架句柄失效与跨线程访问的边界。

- 父级：[engine API 索引](../)
- 同级：[Mesh](../Mesh/) · [MetaMesh](../MetaMesh/) · [ParticleSystem](../ParticleSystem/) · [GameEntity](../GameEntity/) · [NativeObject](../NativeObject/) · [GameEntityComponent](../GameEntityComponent/)
