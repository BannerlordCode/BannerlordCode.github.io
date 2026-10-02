---
title: "FleeBehavior"
description: "FleeBehavior：SandBox 的 public 类，继承 AgentBehavior；公开成员 10 个（方法 4、属性 0、字段 5）。源文件 SandBox/Missions/AgentBehaviors/FleeBehavior.cs。"
---
# FleeBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class FleeBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/FleeBehavior.cs`

## 概述

FleeBehavior 位于 SandBox 模块，源文件 SandBox/Missions/AgentBehaviors/FleeBehavior.cs。它是一个 public 类，实现/继承 AgentBehavior，继承链为 FleeBehavior → AgentBehavior。public/protected 成员共 10 个：4 方法、5 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FleeBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.AgentBehaviors），继承链 FleeBehavior → AgentBehavior。成员构成以方法为主（方法 4/10，属性 0/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/AgentBehaviors/FleeBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FleeBehavior` | `public FleeBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | 构造函数 |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `GetDebugInfo` | `public override string GetDebugInfo()` | 方法 |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | 方法 |
| `ScoreThreshold` | `public const float ScoreThreshold` | 字段 |
| `DangerDistance` | `public const float DangerDistance` | 字段 |
| `ImmediateDangerDistance` | `public const float ImmediateDangerDistance` | 字段 |
| `DangerDistanceSquared` | `public const float DangerDistanceSquared` | 字段 |
| `ImmediateDangerDistanceSquared` | `public const float ImmediateDangerDistanceSquared` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 AgentBehavior](../AgentBehavior)
- [同命名空间 AgentBehavior](../AgentBehavior)
- [同命名空间 AgentBehaviorGroup](../AgentBehaviorGroup)
- [同命名空间 AlarmedBehaviorGroup](../AlarmedBehaviorGroup)
- [同命名空间 BehaviorSets](../BehaviorSets)
