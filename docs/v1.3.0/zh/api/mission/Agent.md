<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Agent`
- [← 本领域 / 返回 mission](./)
- [↑ API 目录](../)
- [⭐ SDK 总览（规范版）](../../../../v1.3.15/zh/architecture/sdk-overview)
- [🔀 跨版本对比 /versions/Agent](/versions/Agent)
<!-- END BREADCRUMB -->
# Agent (v1.3.0)

**命名空间**: TaleWorlds.MountAndBlade
**模块**: TaleWorlds.MountAndBlade
**版本**: v1.3.0
**类型**: 密封类（`public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`）

> v1.3.0 版本的 `Agent` 文档。完整 API 参考（含属性、方法、用例）请见规范版：
> [v1.3.15 `Agent`](../../../../v1.3.15/zh/api/mission/Agent)
> 如需查看该类在 1.3.0 / 1.3.15 / 1.4.5 三个版本间的 API 变化，见 [跨版本对比](/versions/Agent)

## 概述

`Agent` 是游戏中的代理实体，代表战场上的士兵、骑兵、弓箭手、坐骑等。每个 `Agent` 都有位置、动画、装备和 AI 控制。在 v1.3.0 中该类为 `public sealed class`，继承自 `DotNetObject` 并实现 `IAgent`、`IFocusable`、`IUsable`、`IFormationUnit`、`ITrackableBase`，是原生引擎对象的托管包装器，实际渲染与物理由原生引擎处理；通过静态属性 `Agent.Main` 获取玩家主代理。

## v1.3.0 要点

- 密封类，位于 `TaleWorlds.MountAndBlade` 命名空间，源文件 `TaleWorlds.MountAndBlade/Agent.cs`（约 7000 行，远小于 v1.3.15 的 23000+ 行）。
- 静态访问：`public static Agent Main`（内部读取 `Mission.Current.MainAgent`）。
- 身份与状态属性（均为 v1.3.0 实有）：`public bool IsPlayerControlled`、`public bool IsMine`、`public bool IsMainAgent`、`public bool IsHuman`、`public bool IsMount`、`public bool IsAIControlled`。
- 位置与移动属性（均为 v1.3.0 实有）：`public Vec3 Position`、`public Vec3 VisualPosition`、`public Vec2 MovementVelocity`。
- 事件（v1.3.0 实有）：`public event Agent.OnAgentHealthChangedDelegate OnAgentHealthChanged`、`public event Agent.OnMountHealthChangedDelegate OnMountHealthChanged`。
- 相比 v1.3.15：无 `AgentComponent` 组件系统（v1.3.15 新增），属性与方法更少，缺少部分高级 AI/行为功能与 `Formation` 深度集成，事件系统更简化。

## 参见

- [v1.3.15 完整文档](../../../../v1.3.15/zh/api/mission/Agent)
- [跨版本 API 对比](/versions/Agent)
- [本领域 API 索引](./)
- [v1.3.0 API 总览](../)
