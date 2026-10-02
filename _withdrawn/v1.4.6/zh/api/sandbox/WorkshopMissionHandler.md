---
title: "WorkshopMissionHandler"
description: "WorkshopMissionHandler：SandBox.Missions.MissionLogics.Towns 的 public 类，继承 MissionLogic；公开成员 5 个（方法 3、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WorkshopMissionHandler

**Namespace:** `SandBox.Missions.MissionLogics.Towns`
**Module:** `SandBox`
**Type:** `public class WorkshopMissionHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

WorkshopMissionHandler 位于 SandBox 模块，源文件 SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs。它是一个 public 类，实现/继承 MissionLogic，继承链为 WorkshopMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 5 个：3 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WorkshopMissionHandler 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions.MissionLogics.Towns`，继承链 WorkshopMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 3/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameEntity>>WorkshopSignEntities` | `public IEnumerable<Tuple<Workshop, GameEntity>>WorkshopSignEntities` | 属性 |
| `WorkshopMissionHandler` | `public WorkshopMissionHandler(Settlement settlement)` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `EarlyStart` | `public override void EarlyStart()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionLogic](../../mission-ext/MissionLogic/)
- [同命名空间 AlleyFightMissionHandler](../AlleyFightMissionHandler/)
- [同命名空间 PrisonBreakMissionController](../PrisonBreakMissionController/)
- [同命名空间 TownCenterMissionController](../TownCenterMissionController/)
