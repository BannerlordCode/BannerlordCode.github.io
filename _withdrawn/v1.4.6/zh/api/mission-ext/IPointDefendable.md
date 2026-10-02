---
title: "IPointDefendable"
description: "IPointDefendable：TaleWorlds.MountAndBlade 的 public 接口；公开成员 4 个（方法 0、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/IPointDefendable.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IPointDefendable

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IPointDefendable`
**File:** `TaleWorlds.MountAndBlade/IPointDefendable.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

IPointDefendable 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/IPointDefendable.cs。它是一个 public 接口，继承链为 IPointDefendable。public/protected 成员共 4 个：4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IPointDefendable 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 IPointDefendable。成员构成以属性为主（属性 4/4，方法 0/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/IPointDefendable.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `IEnumerable<DefencePoint>DefencePoints` | 属性 |
| `DefenseSide` | `FormationAI.BehaviorSide DefenseSide` | 属性 |
| `MiddleFrame` | `WorldFrame MiddleFrame` | 属性 |
| `DefenseWaitFrame` | `WorldFrame DefenseWaitFrame` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
