---
title: "ArcheryTournamentAgentController"
description: "ArcheryTournamentAgentController：SandBox.Tournaments.AgentControllers 的 public 类，继承 AgentController；公开成员 4 个（方法 4、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/Tournaments/AgentControllers/ArcheryTournamentAgentController.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArcheryTournamentAgentController

**Namespace:** `SandBox.Tournaments.AgentControllers`
**Module:** `SandBox`
**Type:** `public class ArcheryTournamentAgentController : AgentController`
**File:** `SandBox/Tournaments/AgentControllers/ArcheryTournamentAgentController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

ArcheryTournamentAgentController 位于 SandBox 模块，源文件 SandBox/Tournaments/AgentControllers/ArcheryTournamentAgentController.cs。它是一个 public 类，实现/继承 AgentController，继承链为 ArcheryTournamentAgentController → AgentController。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArcheryTournamentAgentController 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Tournaments.AgentControllers`，继承链 ArcheryTournamentAgentController → AgentController。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Tournaments/AgentControllers/ArcheryTournamentAgentController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInitialize` | `public override void OnInitialize()` | 方法 |
| `OnTick` | `public void OnTick()` | 方法 |
| `SetTargets` | `public void SetTargets(List<DestructableComponent>targetList)` | 方法 |
| `OnTargetHit` | `public void OnTargetHit(Agent agent, DestructableComponent target)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentController](../../mission-ext/AgentController/)
- [同命名空间 JoustingAgentController](../JoustingAgentController/)
- [同命名空间 TownHorseRaceAgentController](../TownHorseRaceAgentController/)
