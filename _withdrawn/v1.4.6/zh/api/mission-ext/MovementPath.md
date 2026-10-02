---
title: "MovementPath"
description: "MovementPath：TaleWorlds.MountAndBlade 的 public 类；公开成员 6 个（方法 1、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MovementPath.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MovementPath

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MovementPath`
**File:** `TaleWorlds.MountAndBlade/MovementPath.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MovementPath 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MovementPath.cs。它是一个 public 类，继承链为 MovementPath。public/protected 成员共 6 个：1 方法、3 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MovementPath 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MovementPath。成员构成以属性为主（属性 3/6，方法 1/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MovementPath.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitialDirection` | `public Vec2 InitialDirection` | 属性 |
| `FinalDirection` | `public Vec2 FinalDirection` | 属性 |
| `Destination` | `public Vec3 Destination` | 属性 |
| `MovementPath` | `public MovementPath(NavigationData navigationData, Vec2 initialDirection, Vec2 finalDirection)` | 构造函数 |
| `MovementPath` | `public MovementPath(Vec3 currentPosition, Vec3 orderPosition, float agentRadius, Vec2 previousDirection, Vec2 finalDirection) : this(new NavigationData(currentPosition, orderPosition, agentRadius), previousDirection, finalDirection)` | 构造函数 |
| `TickDebug` | `public void TickDebug(Vec2 position)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
