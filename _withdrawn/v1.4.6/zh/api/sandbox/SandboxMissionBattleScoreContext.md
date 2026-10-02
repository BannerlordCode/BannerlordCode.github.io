---
title: "SandboxMissionBattleScoreContext"
description: "SandboxMissionBattleScoreContext：SandBox.Missions.BattleScore 的 public 类，继承 BattleScoreContext；公开成员 4 个（方法 2、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxMissionBattleScoreContext

**Namespace:** `SandBox.Missions.BattleScore`
**Module:** `SandBox`
**Type:** `public class SandboxMissionBattleScoreContext : BattleScoreContext`
**File:** `SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandboxMissionBattleScoreContext 位于 SandBox 模块，源文件 SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs。它是一个 public 类，实现/继承 BattleScoreContext，继承链为 SandboxMissionBattleScoreContext → BattleScoreContext。public/protected 成员共 4 个：2 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandboxMissionBattleScoreContext 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions.BattleScore`，继承链 SandboxMissionBattleScoreContext → BattleScoreContext。成员构成以方法为主（方法 2/4，属性 1/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/BattleScore/SandboxMissionBattleScoreContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandboxMissionBattleScoreContext` | `public SandboxMissionBattleScoreContext(Mission mission)` | 构造函数 |
| `IsPowerComparisonRelevant` | `public override bool IsPowerComparisonRelevant` | 属性 |
| `GetAttackerBanner` | `public override Banner GetAttackerBanner()` | 方法 |
| `GetDefenderBanner` | `public override Banner GetDefenderBanner()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BattleScoreContext](../../mission-ext/BattleScoreContext/)
- [同命名空间 SandboxSimulationBattleScoreContext](../SandboxSimulationBattleScoreContext/)
