
---
title: "mission 目录"
description: "战斗场景门面类型（Mission / Agent / Formation）类参考目录"
---
## 模块心智模型

战斗门面层：Mission 是战斗场景本身，Agent 是战斗单位，Formation 是阵型。mod 面向玩家的战斗扩展从这里进入。

<!-- BEGIN CARVE-OUT NOTE -->
> **本桶只放 mod 入口类**，即 [Mission](./Mission)、[Agent](./Agent)、[Formation](./Formation) 这三个门面类型。
> **完整 API 在 [Mission-Ext](../mission-ext/)**：`MissionBehavior`、`MissionLogic`、`AgentComponent`、`AgentAI`、场景扩展点等全部在那边。
> 回到 [Mission 桶首页](./)。
>
> 这是**预期布局，不是重复路由 bug**：canonical 映射先把 `TaleWorlds.MountAndBlade*` / `TaleWorlds.Mission*` 归入 `mission-ext`，再由 `entryPointDirs` 把 mod 最常直接引用的三个门面类抽到 `mission`，目的是让“入口在哪、完整实现在哪”在导航上直接可见。同一个类型只落盘一次。
<!-- END CARVE-OUT NOTE -->

<!-- BEGIN SECTION INDEX -->
## ↑ 上级导航

- [API 参考](../)
- [版本首页](../../)

## ↓ 子类列表 — 按字母分组（共 5 个类型页）

### A

- [Agent](./Agent)

### F

- [Formation](./Formation)

### M

- [Mission](./Mission)
- [MissionBehavior](./MissionBehavior)
- [MissionState](./MissionState)

<!-- END SECTION INDEX -->