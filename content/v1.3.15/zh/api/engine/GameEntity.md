---
title: "GameEntity"
description: "TaleWorlds.Engine 场景图里的核心节点：聚合网格、骨骼、光照、粒子与脚本，并通过父子层级构成挂在 Scene 之下的树。"
---
# GameEntity

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class GameEntity : NativeObject`
**Base:** `NativeObject`
**Source:** `TaleWorlds.Engine/GameEntity.cs`

## 概述

`GameEntity` 是 Bannerlord 场景图里的核心节点：每个可见物体、碰撞体、光源、粒子发射器或脚本行为都依附于一个 `GameEntity`。它本身是一个轻量的容器与变换节点，真正的几何与物理数据存放在它聚合的 `MetaMesh`、`Skeleton`、`Light` 等组件里，并通过 `Parent`/`Child` 关系构成一棵挂在 [Scene](../Scene/) 之下的树。

## 心智模型

`GameEntity` 是场景图里的最小可摆放节点，所有可见几何、碰撞体、光照、粒子与脚本都挂在某个 `GameEntity` 上。它并不直接存储网格顶点，而是聚合 `MetaMesh`、`Light`、`ParticleSystem`、`ScriptComponent` 等子组件，并通过 `Parent`/`Child` 形成一棵挂在 `Scene` 上的树。你在战役或任务里拿到的实体几乎都来自 `Mission.Current.Scene` 或各类工厂方法：要凭空新建就用 `GameEntity.CreateEmpty` / `CreateEmptyDynamic`，要从预制体生成就用 `GameEntity.Instantiate`，绝不要自己 `new GameEntity()`。实体的坐标有本地（`LocalFrame`，相对父节点）与世界（`GlobalFrame`）两套，移动子节点会自动影响子树；需要把它从场景移除时用 `Remove(removeReason)`。当你只想查询场景里某类对象时，优先用 `Scene` 的查询方法或 `GetChildren` 遍历，而不是在全局缓存所有引用——实体生命周期由场景管理，持有过期引用会指向已释放的原生对象。

## 关键成员

| 成员 | 作用 |
| --- | --- |
| `Scene` | 返回该实体所属的 [Scene](../Scene/)，实体由场景持有其生命周期 |
| `Name` | 实体的名称，可在编辑器/场景文件中查找定位 |
| `Parent` / `Root` | 在场景图中的父节点与根节点，用于层级变换的累积 |
| `GlobalPosition` | 实体的世界坐标（取自 `GlobalFrame.origin`） |
| `AddMesh(Mesh)` / `AddMultiMesh(MetaMesh)` | 向实体挂载网格或复合网格 |
| `Remove(int)` | 按原因把实体从场景移除并释放其原生资源 |

## 真实示例

```csharp
// 从当前任务场景拿到一个 GameEntity 实例（Mission.Current.Scene 是真实属性）
Scene scene = Mission.Current.Scene;
GameEntity banner = GameEntity.Instantiate(scene, "town_banner", true);

// 设置它在世界中的位置，并打上用于查询的标签
banner.SetLocalPosition(new Vec3(0f, 0f, 1.5f));
banner.AddTag("interactable");

// 遍历其直接子实体，统一切换可见性
foreach (GameEntity child in banner.GetChildren())
{
    child.SetVisibilityExcludeParents(false);
}
```

## 风险与崩溃边界

- **不要用 `new GameEntity()`。** 公共构造函数是内部的，需要原生指针；始终用 `CreateEmpty` / `CreateEmptyDynamic` / `Instantiate` / `CopyFrom` 等工厂。
- **`Remove` 之后索引会失效。** 调用 `Remove(removeReason)` 后该实体的原生资源可能被释放，任何仍持有的引用都变成悬空；`ChildCount` 与 `GetChild` 在移除子树后需要重新查询。
- **`GlobalFrame` 与 `LocalFrame` 的区别。** 设置 `SetGlobalFrame`（相对世界）与 `SetLocalFrame`（相对父节点）效果不同；在有父节点时直接用 `SetGlobalFrame` 会被折算回本地坐标。
- **坐标移动要用 `isTeleportation`。** `SetFrame`/`SetLocalFrame` 默认 `isTeleportation = true`，若用于连续动画应显式传 `false`，否则物理插值会异常。
- **标签区分大小写且为字符串匹配。** `HasTag`/`AddTag` 依赖精确字符串，误拼标签会导致查询（如 `GetFirstChildEntityWithTag`）返回 null。

## 跨版本提示

`GameEntity` 的核心工厂与变换 API（`CreateEmpty`、`Instantiate`、`SetGlobalFrame`、`GetChildren`、`AddMesh`、`Remove`）在 1.3.15 与 1.4.5 间保持稳定。1.4.5 在原结构上继续扩充了物理形状（PhysX）相关方法（如 `CreateEmptyPhysxShape`、`CookTrianglePhysxMesh`），若你的 mod 依赖如布料/布娃娃等高级组件，应核对目标版本是否提供对应方法，避免调用缺失的扩展 API。

## 依赖关系

- 上游：[Scene](../Scene/) 拥有实体并管理其增删与每帧 `Tick`；[NativeObject](../NativeObject/) 提供 `Pointer` 与引用计数。
- 下游：实体聚合的组件见 [Material](../Material/)、[Mesh](../Mesh/)、[MetaMesh](../MetaMesh/)、[Skeleton](../Skeleton/)、[ParticleSystem](../ParticleSystem/)。
- 相关：行为脚本写在 [ScriptComponent](../ScriptComponent/) 上；渲染入口由 [Camera](../Camera/) 决定。
- 架构参考：[native-interop](../../../architecture/native-interop/) 解释托管对象与原生实体的绑定方式。

- 父级：[engine API 索引](../)
- 同级：[Scene](../Scene/) · [Camera](../Camera/) · [NativeObject](../NativeObject/) · [ScriptComponent](../ScriptComponent/) · [MetaMesh](../MetaMesh/)
