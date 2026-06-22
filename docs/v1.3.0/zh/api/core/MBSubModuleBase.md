<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSubModuleBase`
- [← 本领域 / 返回 core](./)
- [↑ API 目录](../)
- [⭐ SDK 总览（规范版）](../../../../v1.3.15/zh/architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSubModuleBase (v1.3.0)

**命名空间**: TaleWorlds.MountAndBlade
**模块**: TaleWorlds.MountAndBlade
**版本**: v1.3.0
**类型**: 抽象类（`public abstract class`）

> v1.3.0 版本的 `MBSubModuleBase` 文档。完整 API 参考（含属性、方法、用例）请见规范版：
> [v1.3.15 `MBSubModuleBase`](../../../../v1.3.15/zh/api/core/MBSubModuleBase)

## 概述

`MBSubModuleBase` 是每个模组的主入口点。当你在 `SubModule.xml` 中声明一个 SubModule 时，必须创建一个继承自 `MBSubModuleBase` 的类来响应游戏事件。在 v1.3.0 中该类为 `public abstract class`，定义了约 29 个 `virtual` 生命周期钩子（如 `OnSubModuleLoad`、`OnGameStart`、`OnMissionBehaviorInitialize`、`OnApplicationTick`），所有钩子均有默认空实现，模组按需重写即可。

## v1.3.0 要点

- 抽象类，位于 `TaleWorlds.MountAndBlade` 命名空间，源文件 `TaleWorlds.MountAndBlade/MBSubModuleBase.cs`。
- 提供约 29 个虚方法钩子，覆盖模组加载、游戏开始/结束、战役/任务初始化、每帧 Tick 等生命周期节点。
- 关键方法签名均为 v1.3.0 实有：`protected internal virtual void OnSubModuleLoad()`、`protected internal virtual void OnGameStart(Game, IGameStarter)`、`public virtual void OnCampaignStart(Game, object)`、`public virtual void OnMissionBehaviorInitialize(Mission)`、`protected internal virtual void OnApplicationTick(float dt)`、`public virtual void RegisterSubModuleObjects(bool isSavedCampaign)`、`public virtual void OnGameLoaded(Game, object)`。
- 相比 v1.3.15，缺少部分后续新增的生命周期钩子，方法总量略少（约 29 个 vs 规范版更多）。
- 没有 v1.3.15 引入的 `AgentComponent` 系统相关集成。

## 参见

- [v1.3.15 完整文档](../../../../v1.3.15/zh/api/core/MBSubModuleBase)
- [本领域 API 索引](./)
- [v1.3.0 API 总览](../)
