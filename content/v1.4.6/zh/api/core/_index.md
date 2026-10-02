---
title: "core 桶 — 模块入口（MBSubModuleBase / Module）"
description: "v1.4.6 的 core 桶只承载 TaleWorlds.MountAndBlade 里被类型名覆写挑出来的两个模块入口类型；两张页都已手写，本桶当前没有待写类型。"
---
# core 桶：模块入口

这个桶不是 `TaleWorlds.Core` 的缩写。**桶名 `core` 在 v1.4.6 里只对应两个类型**：`TaleWorlds.MountAndBlade` 命名空间下的 `MBSubModuleBase` 和 `Module`。它们之所以落在这里而不是跟着命名空间走，是权威映射 `tools/_dir-map-canonical.json` 里的**类型名覆写**（`entryPointDirs`）把这两个名字从 `mission-ext` 抢过来单独成桶——理由很实际：mod 作者 100% 会碰这两个入口，但 1.4.6 的 `TaleWorlds.MountAndBlade` 有 1100 多个公开类型，绝大多数是战斗内部实现，把入口单独拎出来才找得到。

**mod 作者在什么场景碰到它**：写一个 mod 的第一份代码就是继承 `MBSubModuleBase` 并覆写 `OnSubModuleLoad`——模块清单扫描、程序集注册、行为注入、任务和自定义存档都在这几个回调里做。`Module` 通常只被读：想拿全局状态栈（`Module.CurrentModule.GameStateManager`）、想查询模块是否安装（`Module.GetSubModuleClass` 路径）、想在启动参数里插一条自有选项时才会直接碰到它。换句话说，**这一桶是「mod 的第一站和最后一站」**：入口在这里，具体业务在 [core-extra](../core-extra/Game)、[campaign](../campaign/Campaign)、[mission](../mission/Mission)。

注意 1.4.6 的一处纠偏：`MBSubModuleBase` 和 `Module` 属于 `TaleWorlds.MountAndBlade`，不是 `TaleWorlds.Core`。旧版文档把它们记到 Core 目录下是错的，grep 源码时按 `TaleWorlds.MountAndBlade` 找。

## 已手写的页面

本桶两个类型都有页面，覆盖率 2/2：

- [MBSubModuleBase](./MBSubModuleBase) — 每个 mod 继承的基类，约 30 个空实现的生命周期回调，游戏按固定顺序反射调用它们，把加载、存档、任务、网络的挂钩点交给 mod。
- [Module](./Module) — 模块宿主单例，反射装载所有子模块并维护全局状态栈，负责模块启停与多人游戏模式注册。

## 尚未撰写的部分

**本桶没有待写类型。** 按权威映射解析 `TaleWorlds.MountAndBlade` 的 1118 个公开类型，落到 `core` 的恰好只有上面这两个（5 个落到 [mission](../mission/Mission)，其余 1111 个落到 `mission-ext`，该桶目前一张页都没有）。

同一命名空间里 mod 常碰、但**不在本桶**的类型，按需去这些地方找：

- `Mission` / `MissionBehavior` / `Agent` / `Formation` → [mission](../mission/Mission) 桶（`MissionState` 按同一套覆写规则也归 `mission`，但**尚未写页**）
- `MissionLogic`、`MBGameManager`、加载与场景相关类型 → `mission-ext` 桶，**该桶当前无页**
- 模块清单与依赖语义（`ModuleInfo`、`SubModuleInfo`、`ModuleHelper`）→ `modulemanager` 桶，**该桶当前无页**

要确认某个类型落在哪个桶，见 [模块地图](../../architecture/module-map)；要看这些类型整体怎么分层，见 [SDK 分层概览](../../architecture/sdk-overview)。

## 导航

- ↑ 上一级：[API 参考](../)
- ↑↑ 语言根：[zh](../../)
- ↑↑↑ 版本首页：v1.4.6
- ↔ 跨版本：[版本总览](../../../../versions/)