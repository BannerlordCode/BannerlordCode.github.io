---
title: "Scene"
description: "TaleWorlds.Engine 中聚合实体、地形、导航网格、大气与水体的一张完整世界；是任务渲染与模拟的容器。"
---
# Scene

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Scene : NativeObject`
**Base:** `NativeObject`
**Source:** `TaleWorlds.Engine/Scene.cs`

## 概述

`Scene` 是一张「完整世界」：它聚合了所有 `GameEntity`、地形高度图、导航网格、大气与水体，是任务（[Mission](../../mission/Mission/)）进行渲染与模拟的容器。它本身是一个 `NativeObject` 派生类，生命周期由加载/卸载流程管理。你既可以用 `Scene.CreateNewScene` 创建一张离屏场景（如物品预览），也可以从场景文件用 `Read` 加载游戏关卡；但在绝大多数玩法代码里，你拿到的是 `Mission.Current.Scene` 这个已经加载好的实例。实体的增删、地形查询、寻路起点计算都通过 `Scene` 完成，因此它是连接「你的代码」与「整个 3D 世界」的入口。

## 心智模型

`Scene` 是 3D 世界的根容器，所有 `GameEntity`、地形、导航与大气都挂在它下面，并通过 `Tick(dt)` 每帧推进物理与动画。它由加载流程（`Read`）或离屏工厂（`CreateNewScene`）产生，加载是分阶段的——用 `IsLoadingFinished()`/`GetLoadingStateName()` 判断就绪，未就绪时查询实体或地形会得到不完整结果。实体的增删全部由场景管理：用 `GetEntities` 取全部根实体、用 `GetFirstEntityWithName`/`GetFirstEntityWithScriptComponent` 按名字或脚本定位、用 `AddEntityWithMultiMesh`/`AddItemEntity` 投放新物体、用 `RemoveEntity` 移除。地形与导航查询（`GetTerrainHeightAndNormal`、`GetPathBetweenAIFaces`、`IsLineToPointClear`）是世界坐标级别的，是 AI 与移动系统的基础。你几乎总是从 `Mission.Current.Scene` 拿到场景，而不是自己 `new`；只有做物品预览、截图渲染等离屏需求才自建 `Scene`。不要在场景重载后继续持有旧的 `GameEntity` 引用——它们指向的原生对象已被释放。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `GetEntities(ref List<GameEntity>)` | 取出场景中所有根实体（不含递归子节点） |
| `GetFirstEntityWithName(string)` | 按名称定位实体，常用于编辑器命名的锚点 |
| `AddItemEntity(ref MatrixFrame, MetaMesh)` | 用给定摆放矩阵与网格向场景投放一个新物品实体 |
| `RemoveEntity(GameEntity, int)` | 按原因把实体从场景移除并释放其资源 |
| `GetTerrainHeightAndNormal(Vec2, out, out)` | 查询某地面点的高度与法线，用于贴地与放置 |
| `Tick(float)` | 每帧推进场景的物理、动画与粒子模拟 |

## 真实示例

```csharp
// 任务进行中，场景由 Mission 持有，不要自己 new
Scene scene = Mission.Current.Scene;

// 取出场景中所有根实体
List<GameEntity> allEntities = new List<GameEntity>();
scene.GetEntities(ref allEntities);

// 按名称定位实体并移动它
GameEntity gate = scene.GetFirstEntityWithName("town_gate");
if (gate != null)
{
    gate.SetLocalPosition(new Vec3(0f, 5f, 0f));
}

// 每帧推进场景（通常由引擎调用，此处仅展示签名）
scene.Tick(0.016f);
```

## 风险与崩溃边界

- **加载未完成就查询会出错。** `Read` 后必须用 `IsLoadingFinished()` 确认，否则 `GetEntities`、`GetTerrainHeightAndNormal` 可能返回空或不完整数据。
- **`RemoveEntity` 后引用悬空。** 调用后该实体及其子树的原生资源可能被释放，继续持有并访问会崩溃。
- **`GetEntities` 只给根实体。** 它不递归子节点；要遍历整棵树请用 `GameEntity.GetChildrenRecursive`，或在场景层用 `GetFirstEntityWithName` 直接定位。
- **不要在场景重载后缓存引用。** 战役切换/场景重载会重建 `Scene` 与全部实体，旧的 `GameEntity` 引用指向已释放的原生对象。
- **`Tick` 由引擎驱动。** 手动高频调用 `Tick` 会破坏固定步长与插值节奏，正常玩法代码不应自行调用。

## 跨版本提示

`Scene` 的核心加载与查询 API（`CreateNewScene`、`Read`、`GetEntities`、`GetFirstEntityWithName`、`GetTerrainHeightAndNormal`、`Tick`、`RemoveEntity`）在 1.3.15 与 1.4.5 间保持稳定。1.4.5 在导航与渲染细节上继续扩充（如更多带区域切换代价的 `GetPathBetweenAIFaces` 重载），跨版本 mod 使用基础查询方法无需改动，但依赖细分寻路重载时要注意目标版本是否提供对应签名。

## 依赖关系

- 上游：[NativeObject](../NativeObject/) 提供 `Pointer` 与引用计数；[EngineApplicationInterface](../EngineApplicationInterface/) 暴露 `IScene` 原生实现。
- 下游：场景聚合并管理所有 [GameEntity](../GameEntity/)；地形/水体/大气状态由场景持有。
- 相关：实体上的网格与材质见 [MetaMesh](../MetaMesh/)、[Material](../Material/)；可见性由 [Camera](../Camera/) 决定。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释场景原生对象与托管包装的关系。

- 父级：[engine API 索引](../)
- 同级：[GameEntity](../GameEntity/) · [Camera](../Camera/) · [NativeObject](../NativeObject/) · [MetaMesh](../MetaMesh/) · [Material](../Material/)
