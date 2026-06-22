<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Module`
- [← 本领域 / 返回 core](./)
- [↑ API 目录](../)
- [⭐ SDK 总览（规范版）](../../../../v1.3.15/zh/architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Module (v1.3.0)

**命名空间**: TaleWorlds.MountAndBlade
**模块**: TaleWorlds.MountAndBlade
**版本**: v1.3.0
**类型**: 密封类（`public sealed class Module : DotNetObject, IGameStateManagerOwner`）

> v1.3.0 版本的 `Module` 文档。完整 API 参考（含属性、方法、用例）请见规范版：
> [v1.3.15 `Module`](../../../../v1.3.15/zh/api/core/Module)

## 概述

`Module` 是游戏的核心单例类，负责管理所有子模组（SubModule）的加载、初始化以及全局游戏状态与平台服务。它在游戏启动时创建，是访问当前模组信息的主要入口。在 v1.3.0 中该类为 `public sealed class`，继承自 `DotNetObject` 并实现 `IGameStateManagerOwner`，通过静态属性 `Module.CurrentModule` 访问单例实例。

## v1.3.0 要点

- 密封类，位于 `TaleWorlds.MountAndBlade` 命名空间，源文件 `TaleWorlds.MountAndBlade/Module.cs`（约 1600 行）。
- 单例访问：`public static Module CurrentModule { get; private set; }`，不应直接实例化。
- 关键属性（均为 v1.3.0 实有）：`GlobalGameStateManager`（`GameStateManager`）、`GlobalTextManager`（`GameTextManager`）、`MultiplayerRequested`（`bool`）、`LoadingFinished`（`bool`）、`JobManager`（`JobManager`）。
- 关键方法（均为 v1.3.0 实有）：`public MBReadOnlyList<MBSubModuleBase> CollectSubModules()`、`public Type GetSubModuleType(string name)`、`public void SetInitialModuleScreenAsRootScreen()`、`internal void Initialize()`、`internal string GetMissionControllerClassNames()`。
- 相比 v1.3.15，结构更精简：无独立的 `TaleWorlds.SaveSystem` 模块（保存功能内联于 `TaleWorlds.SaveSystem` 命名空间），无独立 `TaleWorlds.DotNet` 模块，平台服务集成更少。

## 参见

- [v1.3.15 完整文档](../../../../v1.3.15/zh/api/core/Module)
- [本领域 API 索引](./)
- [v1.3.0 API 总览](../)
