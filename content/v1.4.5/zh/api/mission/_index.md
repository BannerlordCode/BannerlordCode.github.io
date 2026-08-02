---
title: "任务 API — v1.4.5"
description: "任务（战斗/遭遇）模拟层：Mission 生命周期、Agent、Team、Formation、MissionBehavior 与 MissionLogic。心智地图与阅读顺序。"
---
# 任务 API

Mission 层是**战术模拟**：一场战斗或遭遇，按自己的时钟运行，与战役大地图分离。

## ↑ 父级导航

- [API 索引](../)
- [架构索引](../../architecture/)
- [崩溃边界](../../architecture/crash-boundary)

## 本模块是什么

`api/mission` 持有 `Mission`（运行中的遭遇）、`Agent`（参与者）、`Team`/`Formation`（阵营与分组），以及你写战斗代码的逻辑钩子 `MissionBehavior` / `MissionLogic`。任务由战役（如战斗）拉起，通过 `MissionResult` 把结果回报给战役。

## 枢纽入口

| 分组 | 关键类型 | 说明 |
|------|----------|------|
| 遭遇 | `Mission`、`MissionState`、`MissionResult` | 任务期间用 `Mission.Current` |
| 参与者 | `Agent`、`AgentDeveloperData` | 一名战斗者；生命周期短 |
| 阵营 | `Team`、`Formation` | 谁打谁 |
| 逻辑 | `MissionBehavior`、`MissionLogic`、`MissionBehaviorManager` | 你的战斗代码 |
| 生成/布置 | `MissionInitializer`、`MissionAgentSpawnLogic` | Agent 如何出现 |

## 依赖图

```
Campaign →（拉起）→ Mission
Mission → Agents / Teams / Formations
Mission → MissionBehavior（你的逻辑）
Mission → MissionResult → Campaign（应用世界变更）
```

## 推荐阅读顺序

1. `Mission` — 生命周期与 `Mission.Current`。
2. `MissionBehavior` — 代码放哪。
3. `Agent` / `Team` / `Formation` — 你操作的对象。
4. `MissionResult` — 结果如何回到战役。

## 风险概览

- 绝不在 Agent 离场后还持有它（崩溃 §4）。
- 不要在任务外调用 `Mission.Current`。
- 战斗带来的世界变更走 `MissionResult`，不要直接写实体（崩溃 §3）。

## 参见

- [架构索引](../../architecture/)
- [基础模块](../core/)
- [战役模块](../campaign/)
- [崩溃边界](../../architecture/crash-boundary)
