---
title: "FormationPocket"
description: "FormationPocket：TaleWorlds.MountAndBlade 的 public 类；公开成员 12 个（方法 4、属性 7、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/FormationPocket.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FormationPocket

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FormationPocket`
**File:** `TaleWorlds.MountAndBlade/FormationPocket.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

FormationPocket 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/FormationPocket.cs。它是一个 public 类，继承链为 FormationPocket。public/protected 成员共 12 个：4 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FormationPocket 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 FormationPocket。成员构成以属性为主（属性 7/12，方法 4/12），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/FormationPocket.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `int>PriorityFunction` | `public Func<Agent, int>PriorityFunction` | 属性 |
| `MaxValue` | `public int MaxValue` | 属性 |
| `TroopCount` | `public int TroopCount` | 属性 |
| `Index` | `public int Index` | 属性 |
| `AddedTroopCount` | `public int AddedTroopCount` | 属性 |
| `ScoreToSeek` | `public int ScoreToSeek` | 属性 |
| `BestScoreSoFar` | `public int BestScoreSoFar` | 属性 |
| `FormationPocket` | `public FormationPocket(Func<Agent, int>priorityFunction, int maxValue, int troopCount, int index)` | 构造函数 |
| `AddTroop` | `public void AddTroop()` | 方法 |
| `IsFormationPocketFilled` | `public bool IsFormationPocketFilled()` | 方法 |
| `UpdateScoreToSeek` | `public void UpdateScoreToSeek()` | 方法 |
| `SetBestScoreSoFar` | `public void SetBestScoreSoFar(int bestScoreSoFar)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
