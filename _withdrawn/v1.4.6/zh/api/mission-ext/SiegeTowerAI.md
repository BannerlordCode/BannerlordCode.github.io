---
title: "SiegeTowerAI"
description: "SiegeTowerAI：TaleWorlds.MountAndBlade 的 public 类，继承 UsableMachineAIBase；公开成员 3 个（方法 0、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SiegeTowerAI.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeTowerAI

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class SiegeTowerAI : UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/SiegeTowerAI.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SiegeTowerAI 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SiegeTowerAI.cs。它是一个 public 类（sealed），实现/继承 UsableMachineAIBase，继承链为 SiegeTowerAI → UsableMachineAIBase。public/protected 成员共 3 个：2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeTowerAI 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SiegeTowerAI → UsableMachineAIBase。成员构成以属性为主（属性 2/3，方法 0/3），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SiegeTowerAI.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SiegeTowerAI` | `public SiegeTowerAI(SiegeTower siegeTower) : base(siegeTower)` | 构造函数 |
| `HasActionCompleted` | `public override bool HasActionCompleted` | 属性 |
| `NextOrder` | `protected override MovementOrder NextOrder` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 UsableMachineAIBase](../UsableMachineAIBase/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
