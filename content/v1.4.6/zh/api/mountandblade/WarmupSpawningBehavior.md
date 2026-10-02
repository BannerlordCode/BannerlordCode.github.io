---
title: "WarmupSpawningBehavior"
description: "WarmupSpawningBehavior：TaleWorlds.MountAndBlade 的 public 类，继承 SpawningBehaviorBase；公开成员 7 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/WarmupSpawningBehavior.cs。"
---
# WarmupSpawningBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class WarmupSpawningBehavior : SpawningBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/WarmupSpawningBehavior.cs`

## 概述

WarmupSpawningBehavior 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/WarmupSpawningBehavior.cs。它是一个 public 类，实现/继承 SpawningBehaviorBase，继承链为 WarmupSpawningBehavior → SpawningBehaviorBase。public/protected 成员共 7 个：6 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WarmupSpawningBehavior 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 WarmupSpawningBehavior → SpawningBehaviorBase。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/WarmupSpawningBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WarmupSpawningBehavior` | `public WarmupSpawningBehavior()` | 构造函数 |
| `OnTick` | `public override void OnTick(float dt)` | 方法 |
| `SpawnAgents` | `protected override void SpawnAgents()` | 方法 |
| `AllowEarlyAgentVisualsDespawning` | `public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)` | 方法 |
| `GetMaximumReSpawnPeriodForPeer` | `public override int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)` | 方法 |
| `IsRoundInProgress` | `protected override bool IsRoundInProgress()` | 方法 |
| `Clear` | `public override void Clear()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SpawningBehaviorBase](../SpawningBehaviorBase)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
