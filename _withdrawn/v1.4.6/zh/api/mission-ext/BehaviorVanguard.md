---
title: "BehaviorVanguard"
description: "BehaviorVanguard：TaleWorlds.MountAndBlade 的 public 类，继承 BehaviorComponent；公开成员 7 个（方法 6、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/BehaviorVanguard.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BehaviorVanguard

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorVanguard : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorVanguard.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BehaviorVanguard 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BehaviorVanguard.cs。它是一个 public 类，实现/继承 BehaviorComponent，继承链为 BehaviorVanguard → BehaviorComponent。public/protected 成员共 7 个：6 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BehaviorVanguard 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 BehaviorVanguard → BehaviorComponent。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BehaviorVanguard.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BehaviorVanguard` | `public BehaviorVanguard(Formation formation) : base(formation)` | 构造函数 |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | 方法 |
| `OnValidBehaviorSideChanged` | `public override void OnValidBehaviorSideChanged()` | 方法 |
| `TickOccasionally` | `public override void TickOccasionally()` | 方法 |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | 方法 |
| `GetBehaviorString` | `public override TextObject GetBehaviorString()` | 方法 |
| `GetAiWeight` | `protected override float GetAiWeight()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BehaviorComponent](../BehaviorComponent/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
