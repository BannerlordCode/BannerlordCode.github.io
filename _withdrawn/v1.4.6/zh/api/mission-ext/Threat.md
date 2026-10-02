---
title: "Threat"
description: "Threat：TaleWorlds.MountAndBlade 的 public 类；公开成员 7 个（方法 5、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Threat.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Threat

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class Threat`
**File:** `TaleWorlds.MountAndBlade/Threat.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

Threat 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Threat.cs。它是一个 public 类，继承链为 Threat。public/protected 成员共 7 个：5 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Threat 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 Threat。成员构成以方法为主（方法 5/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Threat.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Name` | `public string Name` | 属性 |
| `TargetingPosition` | `public Vec3 TargetingPosition` | 属性 |
| `Vec3>ComputeGlobalTargetingBoundingBoxMinMax` | `public ValueTuple<Vec3, Vec3>ComputeGlobalTargetingBoundingBoxMinMax()` | 方法 |
| `GetGlobalVelocity` | `public Vec3 GetGlobalVelocity()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `DisplayDebugInfo` | `public void DisplayDebugInfo()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
