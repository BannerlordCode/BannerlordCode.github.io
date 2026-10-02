---
title: "SiegeLadderAI"
description: "SiegeLadderAI：TaleWorlds.MountAndBlade 的 public 类，继承 UsableMachineAIBase；公开成员 4 个（方法 0、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade/SiegeLadderAI.cs。"
---
# SiegeLadderAI

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class SiegeLadderAI : UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/SiegeLadderAI.cs`

## 概述

SiegeLadderAI 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SiegeLadderAI.cs。它是一个 public 类（sealed），实现/继承 UsableMachineAIBase，继承链为 SiegeLadderAI → UsableMachineAIBase。public/protected 成员共 4 个：3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeLadderAI 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 SiegeLadderAI → UsableMachineAIBase。成员构成以属性为主（属性 3/4，方法 0/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SiegeLadderAI.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SiegeLadderAI` | `public SiegeLadderAI(SiegeLadder ladder) : base(ladder)` | 构造函数 |
| `Ladder` | `public SiegeLadder Ladder` | 属性 |
| `HasActionCompleted` | `public override bool HasActionCompleted` | 属性 |
| `NextOrder` | `protected override MovementOrder NextOrder` | 属性 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 UsableMachineAIBase](../UsableMachineAIBase)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
