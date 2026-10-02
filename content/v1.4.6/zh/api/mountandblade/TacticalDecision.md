---
title: "TacticalDecision"
description: "TacticalDecision：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 7 个（方法 0、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade/TacticalDecision.cs。"
---
# TacticalDecision

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct TacticalDecision`
**File:** `TaleWorlds.MountAndBlade/TacticalDecision.cs`

## 概述

TacticalDecision 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/TacticalDecision.cs。它是一个 public 结构体，继承链为 TacticalDecision。public/protected 成员共 7 个：6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TacticalDecision 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 TacticalDecision。成员构成以属性为主（属性 6/7，方法 0/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/TacticalDecision.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DecidingComponent` | `public TacticComponent DecidingComponent` | 属性 |
| `DecisionCode` | `public byte DecisionCode` | 属性 |
| `SubjectFormation` | `public Formation SubjectFormation` | 属性 |
| `TargetFormation` | `public Formation TargetFormation` | 属性 |
| `TargetPosition` | `public WorldPosition? TargetPosition` | 属性 |
| `TargetObject` | `public MissionObject TargetObject` | 属性 |
| `TacticalDecision` | `public TacticalDecision(TacticComponent decidingComponent, byte decisionCode, Formation subjectFormation = null, Formation targetFormation = null, WorldPosition? targetPosition = null, MissionObject targetObject = null)` | 构造函数 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
