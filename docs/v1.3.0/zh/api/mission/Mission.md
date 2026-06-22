<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Mission`
- [← 本领域 / 返回 mission](./)
- [↑ API 目录](../)
- [⭐ SDK 总览（规范版）](../../../../v1.3.15/zh/architecture/sdk-overview)
- [🔀 跨版本对比 /versions/Mission](/versions/Mission)
<!-- END BREADCRUMB -->
# Mission (v1.3.0)

**命名空间**: TaleWorlds.MountAndBlade
**模块**: TaleWorlds.MountAndBlade
**版本**: v1.3.0
**类型**: 密封类（`public sealed class Mission : DotNetObject, IMission`）

> v1.3.0 版本的 `Mission` 文档。完整 API 参考（含属性、方法、用例）请见规范版：
> [v1.3.15 `Mission`](../../../../v1.3.15/zh/api/mission/Mission)
> 如需查看该类在 1.3.0 / 1.3.15 / 1.4.5 三个版本间的 API 变化，见 [跨版本对比](/versions/Mission)

## 概述

`Mission` 是游戏任务（战场）系统的核心类，负责管理任务场景中的所有实体、代理（Agent）和任务行为（MissionBehavior）。每个战场战斗都在一个 `Mission` 实例中运行。在 v1.3.0 中该类为 `public sealed class`，继承自 `DotNetObject` 并实现 `IMission`，是原生引擎对象的托管包装器；通过静态属性 `Mission.Current` 访问当前活跃任务实例。

## v1.3.0 要点

- 密封类，位于 `TaleWorlds.MountAndBlade` 命名空间，源文件 `TaleWorlds.MountAndBlade/Mission.cs`（约 8500 行，远小于 v1.3.15 的 32000+ 行）。
- 单例访问：`public static Mission Current`，主代理 `public Agent MainAgent`，场景 `public Scene Scene`，场景名 `public string SceneName`。
- 任务对象集合（均为 v1.3.0 实有）：`public MBReadOnlyList<MissionObject> ActiveMissionObjects`、`public MBReadOnlyList<MissionObject> MissionObjects`。
- 队伍与逻辑：`public Mission.TeamCollection Teams`、`public List<MissionLogic> MissionLogics`、`public List<MissionBehavior> MissionBehaviors`，以及 `public Mission.State CurrentState`、`public MissionResult MissionResult`、`public MissionTimeTracker MissionTimeTracker`。
- 关键方法（均为 v1.3.0 实有）：`public void AddMissionBehavior(MissionBehavior)`、`public void EndMission()`、`public static IEnumerable<Team> GetTeamsOfSide(BattleSideEnum)`。
- 相比 v1.3.15：无 `AgentComponent` 系统，`MissionBehavior` 类型更少，缺少部分 AI/Formation 功能与高级动画集成，场景交互更简单。

## 参见

- [v1.3.15 完整文档](../../../../v1.3.15/zh/api/mission/Mission)
- [跨版本 API 对比](/versions/Mission)
- [本领域 API 索引](./)
- [v1.3.0 API 总览](../)
