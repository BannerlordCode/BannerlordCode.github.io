---
title: "SiegeSpawnFrameBehavior"
description: "SiegeSpawnFrameBehavior：TaleWorlds.MountAndBlade 的 public 类，继承 SpawnFrameBehaviorBase；公开成员 7 个（方法 3、属性 0、字段 4）。源文件 TaleWorlds.MountAndBlade/SiegeSpawnFrameBehavior.cs。"
---
# SiegeSpawnFrameBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeSpawnFrameBehavior : SpawnFrameBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/SiegeSpawnFrameBehavior.cs`

## 概述

SiegeSpawnFrameBehavior 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SiegeSpawnFrameBehavior.cs。它是一个 public 类，实现/继承 SpawnFrameBehaviorBase，继承链为 SiegeSpawnFrameBehavior → SpawnFrameBehaviorBase。public/protected 成员共 7 个：3 方法、4 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeSpawnFrameBehavior 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 SiegeSpawnFrameBehavior → SpawnFrameBehaviorBase。成员构成以方法为主（方法 3/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SiegeSpawnFrameBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public override void Initialize()` | 方法 |
| `GetSpawnFrame` | `public override MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)` | 方法 |
| `OnFlagDeactivated` | `public void OnFlagDeactivated(FlagCapturePoint flag)` | 方法 |
| `SpawnZoneTagAffix` | `public const string SpawnZoneTagAffix` | 字段 |
| `SpawnZoneEnableTagAffix` | `public const string SpawnZoneEnableTagAffix` | 字段 |
| `SpawnZoneDisableTagAffix` | `public const string SpawnZoneDisableTagAffix` | 字段 |
| `StartingActiveSpawnZoneIndex` | `public const int StartingActiveSpawnZoneIndex` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SpawnFrameBehaviorBase](../SpawnFrameBehaviorBase)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
