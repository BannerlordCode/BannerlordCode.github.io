---
title: "BehaviorUseSiegeMachines"
description: "BehaviorUseSiegeMachines：TaleWorlds.MountAndBlade 的 public 类，继承 BehaviorComponent；公开成员 7 个（方法 5、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/BehaviorUseSiegeMachines.cs。"
---
# BehaviorUseSiegeMachines

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorUseSiegeMachines : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorUseSiegeMachines.cs`

## 概述

BehaviorUseSiegeMachines 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BehaviorUseSiegeMachines.cs。它是一个 public 类，实现/继承 BehaviorComponent，继承链为 BehaviorUseSiegeMachines → BehaviorComponent。public/protected 成员共 7 个：5 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BehaviorUseSiegeMachines 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 BehaviorUseSiegeMachines → BehaviorComponent。成员构成以方法为主（方法 5/7，属性 1/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BehaviorUseSiegeMachines.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorUseSiegeMachines` | `public BehaviorUseSiegeMachines(Formation formation) : base(formation)` | 构造函数 |
| `GetBehaviorString` | `public override TextObject GetBehaviorString()` | 方法 |
| `OnValidBehaviorSideChanged` | `public override void OnValidBehaviorSideChanged()` | 方法 |
| `TickOccasionally` | `public override void TickOccasionally()` | 方法 |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | 方法 |
| `NavmeshlessTargetPositionPenalty` | `public override float NavmeshlessTargetPositionPenalty` | 属性 |
| `GetAiWeight` | `protected override float GetAiWeight()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 BehaviorComponent](../BehaviorComponent)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
