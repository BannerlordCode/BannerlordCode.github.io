---
title: "MissionState"
description: "MissionState：TaleWorlds.MountAndBlade 的 public 类，继承 GameState；公开成员 16 个（方法 10、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionState.cs。"
---
# MissionState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionState : GameState`
**File:** `TaleWorlds.MountAndBlade/MissionState.cs`

## 概述

MissionState 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionState.cs。它是一个 public 类，实现/继承 GameState，继承链为 MissionState → GameState。public/protected 成员共 16 个：10 方法、6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionState 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionState → GameState。成员构成以方法为主（方法 10/16，属性 6/16），对外主要以操作入口暴露。继承链上的 GameState 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Handler` | `public IMissionSystemHandler Handler` | 属性 |
| `Current` | `public static MissionState Current` | 属性 |
| `CurrentMission` | `public Mission CurrentMission` | 属性 |
| `MissionName` | `public string MissionName` | 属性 |
| `FirstMissionTickAfterLoading` | `public bool FirstMissionTickAfterLoading` | 属性 |
| `Paused` | `public bool Paused` | 属性 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | 方法 |
| `OnTick` | `protected override void OnTick(float realDt)` | 方法 |
| `HandleOpenNew` | `protected Mission HandleOpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors, bool needsMemoryCleanup)` | 方法 |
| `IsRecordingActive` | `protected static bool IsRecordingActive()` | 方法 |
| `OpenNew` | `public static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)` | 方法 |
| `BeginDelayedDisconnectFromMission` | `public void BeginDelayedDisconnectFromMission()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
