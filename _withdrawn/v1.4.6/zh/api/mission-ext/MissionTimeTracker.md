---
title: "MissionTimeTracker"
description: "MissionTimeTracker：TaleWorlds.MountAndBlade 的 public 类；公开成员 7 个（方法 3、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MissionTimeTracker.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionTimeTracker

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionTimeTracker`
**File:** `TaleWorlds.MountAndBlade/MissionTimeTracker.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionTimeTracker 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionTimeTracker.cs。它是一个 public 类，继承链为 MissionTimeTracker。public/protected 成员共 7 个：3 方法、2 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionTimeTracker 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MissionTimeTracker。成员构成以方法为主（方法 3/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionTimeTracker.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumberOfTicks` | `public long NumberOfTicks` | 属性 |
| `DeltaTimeInTicks` | `public long DeltaTimeInTicks` | 属性 |
| `MissionTimeTracker` | `public MissionTimeTracker(MissionTime initialMapTime)` | 构造函数 |
| `MissionTimeTracker` | `public MissionTimeTracker()` | 构造函数 |
| `Tick` | `public void Tick(float seconds)` | 方法 |
| `UpdateSync` | `public void UpdateSync(float newValue)` | 方法 |
| `GetLastSyncDifference` | `public float GetLastSyncDifference()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
