---
title: "SkeinFormation"
description: "SkeinFormation：TaleWorlds.MountAndBlade 的 public 类，继承 LineFormation；公开成员 5 个（方法 4、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SkeinFormation.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SkeinFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SkeinFormation : LineFormation`
**File:** `TaleWorlds.MountAndBlade/SkeinFormation.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SkeinFormation 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SkeinFormation.cs。它是一个 public 类，实现/继承 LineFormation，继承链为 SkeinFormation → LineFormation → IFormationArrangement。public/protected 成员共 5 个：4 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SkeinFormation 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SkeinFormation → LineFormation → IFormationArrangement。成员构成以方法为主（方法 4/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SkeinFormation.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SkeinFormation` | `public SkeinFormation(IFormation owner) : base(owner, true)` | 构造函数 |
| `Clone` | `public override IFormationArrangement Clone(IFormation formation)` | 方法 |
| `GetLocalPositionOfUnit` | `protected override Vec2 GetLocalPositionOfUnit(int fileIndex, int rankIndex)` | 方法 |
| `GetLocalPositionOfUnitWithAdjustment` | `protected override Vec2 GetLocalPositionOfUnitWithAdjustment(int fileIndex, int rankIndex, float distanceBetweenAgentsAdjustment)` | 方法 |
| `TryGetUnitPositionIndexFromLocalPosition` | `protected override bool TryGetUnitPositionIndexFromLocalPosition(Vec2 localPosition, out int fileIndex, out int rankIndex)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 LineFormation](../LineFormation/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
