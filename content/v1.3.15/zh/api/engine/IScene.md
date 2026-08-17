---
title: "IScene"
description: "引擎场景的内部接口（TaleWorlds.Engine）：mod 经托管 Scene 包装触及，经由 Mission.Current.Scene / 地图 IMapScene 间接使用，而非直接构造 IScene。"
---
# IScene

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**类型：** `internal interface IScene`
**Base:** 无
**源文件:** `TaleWorlds.Engine/IScene.cs`

## 概述

`IScene` 是引擎层（`TaleWorlds.Engine`）对「场景（Scene）」定义的**内部接口**，是场景对象在原生（native）侧的契约面：实体、网格、光照、相机、物理等底层能力都通过它统一暴露。它属于托管/原生边界上的类型，**对 mod 不可直接实例化**——托管侧通过 `Scene`（`NativeObject` 的子类，封装了 `IScene` 边界）来操作场景。换句话说，mod 几乎永远不该持有一个 `IScene` 引用，而应拿到 `Scene`，再由 `Scene` 间接驱动这套接口。把它理解为「引擎场景能力的原生契约面」，是读懂 `Scene`、Mission 场景与地图场景底层机制的锚点。

## 心智模型

把 `IScene` 想成「场景在引擎侧的身份证 + 能力清单」：**你几乎永远不直接碰它**。

- **它是什么**：引擎内部接口，描述一个场景能做什么（挂实体、查网格、取相机、跑物理……）。它活在 native 层，托管侧只通过 `Scene` 这层 `NativeObject` 包装与之对话。
- **为什么存在**：Bannerlord 的场景系统大量运行在 C++ 引擎里，`IScene` 是托管/原生边界上约定好的接口，保证 `Scene` 能以统一方式驱动底层场景。
- **mod 如何真正用到**：你不 `new` 也不持有 `IScene`；你拿 `Scene`——战斗/任务场景来自 `Mission.Current.Scene`，大地图场景来自 `Campaign` 的 `IMapScene`（`MapSceneWrapper`）。所有「场景级」操作（遍历实体、读相机、改网格）都走 `Scene` 的方法，而 `Scene` 内部正是通过对 `IScene` 说话来落地。
- **层级**：引擎层（比 `Mission` / `Campaign` 更底层），属「引擎桥」，不是「战役/任务 API」。

## 何时用 / 何时不要用

- **用**：你想理解 `Scene` 的底层契约、排查场景相关的原生调用，或写需要直接读原生场景句柄的高级引擎扩展（此时你拿到的也是 `Scene`，不是 `IScene`）。
- **不要用**：想获取当前场景——请用 `Mission.Current.Scene`（返回 `Scene`）或地图的 `IMapScene`，**不要**照抄「把 IScene 当作可注入 service 去实例化」这类占位伪代码：既不存在 `IIScene` 这种类型，场景也不是靠依赖注入/工厂拿到的「service」。**也不要**假设能直接实现或替换 `IScene` 来改动场景——一律走 `Scene` 的公开方法。

## 依赖

- 上游 / 相关：`[Scene](../Scene)`（唯一被 mod 持有的场景托管类，封装 `IScene` 边界）、`[Mission](../../mission/Mission)`（`Mission.Current.Scene` 提供战斗/任务场景）、`[Campaign](../../campaign/Campaign)`（`IMapScene` / `MapSceneWrapper` 提供地图场景）、`[NativeObject](../NativeObject)`（`Scene` 的基类，原生句柄模型）、`[EngineApplicationInterface](../EngineApplicationInterface)`（引擎侧接口总入口）、`[GameEntity](../GameEntity)`（`Scene` 中承载的实体）。
- 下游 / 边界：这是引擎原生边界，mod 代码经 `Scene` 间接消费；不要把它当作可替换的托管服务。

## 示例

```csharp
// 进入当前 Mission 运行时；其内部绑定原生 Scene
Mission mission = Mission.Current;
// 取 Mission 绑定的场景对象（托管 Scene 封装引擎 IScene 边界）
Scene scene = mission.Scene;
// 通过 Scene 的公开方法操作场景（底层即驱动 IScene）
bool isEditorScene = scene.IsDefaultEditorScene();
```

## 参见

- [Scene](../Scene)（mod 实际操作的场景托管类）
- [Mission](../../mission/Mission)（战斗/任务场景来源）
- [Campaign](../../campaign/Campaign)（地图场景来源）
- [NativeObject](../NativeObject)（原生句柄基类）
- ↑ [引擎 API 索引](../)
