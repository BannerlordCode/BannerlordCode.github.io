---
title: "CircularFormation"
description: "CircularFormation：TaleWorlds.MountAndBlade 的 public 类，继承 LineFormation；公开成员 20 个（方法 15、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/CircularFormation.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CircularFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CircularFormation : LineFormation`
**File:** `TaleWorlds.MountAndBlade/CircularFormation.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CircularFormation 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CircularFormation.cs。它是一个 public 类，实现/继承 LineFormation，继承链为 CircularFormation → LineFormation → IFormationArrangement。public/protected 成员共 20 个：15 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CircularFormation 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 CircularFormation → LineFormation → IFormationArrangement。成员构成以方法为主（方法 15/20，属性 4/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CircularFormation.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CircularFormation` | `public CircularFormation(IFormation owner) : base(owner, true, true)` | 构造函数 |
| `Clone` | `public override IFormationArrangement Clone(IFormation formation)` | 方法 |
| `IsDeepenApplicable` | `protected override bool IsDeepenApplicable()` | 方法 |
| `IsNarrowApplicable` | `protected override bool IsNarrowApplicable(int amount)` | 方法 |
| `Width` | `public override float Width` | 属性 |
| `Depth` | `public override float Depth` | 属性 |
| `MinimumWidth` | `public override float MinimumWidth` | 属性 |
| `MaximumWidth` | `public override float MaximumWidth` | 属性 |
| `IsUnitPositionRestrained` | `protected override bool IsUnitPositionRestrained(int fileIndex, int rankIndex)` | 方法 |
| `MakeRestrainedPositionsUnavailable` | `protected override void MakeRestrainedPositionsUnavailable()` | 方法 |
| `GetLocalDirectionOfUnit` | `protected override Vec2 GetLocalDirectionOfUnit(int fileIndex, int rankIndex)` | 方法 |
| `GetLocalDirectionOfUnitOrDefault` | `public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)` | 方法 |
| `GetLocalPositionOfUnit` | `protected override Vec2 GetLocalPositionOfUnit(int fileIndex, int rankIndex)` | 方法 |
| `GetLocalPositionOfUnitWithAdjustment` | `protected override Vec2 GetLocalPositionOfUnitWithAdjustment(int fileIndex, int rankIndex, float distanceBetweenAgentsAdjustment)` | 方法 |
| `TryGetUnitPositionIndexFromLocalPosition` | `protected override bool TryGetUnitPositionIndexFromLocalPosition(Vec2 localPosition, out int fileIndex, out int rankIndex)` | 方法 |
| `GetCurrentMaximumRankCount` | `protected int GetCurrentMaximumRankCount(int unitCount)` | 方法 |
| `GetCircumferenceFromRankCount` | `public float GetCircumferenceFromRankCount(int rankCount)` | 方法 |
| `FormFromCircumference` | `public void FormFromCircumference(float circumference)` | 方法 |
| `GetCircumferenceAux` | `protected float GetCircumferenceAux(int unitCount, int rankCount, float radialInterval, float distanceInterval)` | 方法 |
| `UpdateFrontUnitTypeDelegate` | `protected override void UpdateFrontUnitTypeDelegate()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 LineFormation](../LineFormation/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
