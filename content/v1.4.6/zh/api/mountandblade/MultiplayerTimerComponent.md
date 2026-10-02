---
title: "MultiplayerTimerComponent"
description: "MultiplayerTimerComponent：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork；公开成员 6 个（方法 5、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs。"
---
# MultiplayerTimerComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerTimerComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs`

## 概述

MultiplayerTimerComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs。它是一个 public 类，实现/继承 MissionNetwork，继承链为 MultiplayerTimerComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 6 个：5 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerTimerComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MultiplayerTimerComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 5/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsTimerRunning` | `public bool IsTimerRunning` | 属性 |
| `StartTimerAsServer` | `public void StartTimerAsServer(float duration)` | 方法 |
| `StartTimerAsClient` | `public void StartTimerAsClient(float startTime, float duration)` | 方法 |
| `GetRemainingTime` | `public float GetRemainingTime(bool isSynched)` | 方法 |
| `CheckIfTimerPassed` | `public bool CheckIfTimerPassed()` | 方法 |
| `GetCurrentTimerStartTime` | `public MissionTime GetCurrentTimerStartTime()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionNetwork](../MissionNetwork)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
