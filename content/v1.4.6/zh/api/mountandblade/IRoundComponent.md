---
title: "IRoundComponent"
description: "IRoundComponent：TaleWorlds.MountAndBlade 的 public 接口，继承 IMissionBehavior；公开成员 12 个（方法 0、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade/IRoundComponent.cs。"
---
# IRoundComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IRoundComponent : IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IRoundComponent.cs`

## 概述

IRoundComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/IRoundComponent.cs。它是一个 public 接口，实现/继承 IMissionBehavior，继承链为 IRoundComponent → IMissionBehavior。public/protected 成员共 12 个：6 属性、6 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IRoundComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 IRoundComponent → IMissionBehavior。成员构成以属性为主（属性 6/12，方法 0/12），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/IRoundComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnRoundStarted;` | `event Action OnRoundStarted;` | 事件 |
| `OnPreparationEnded;` | `event Action OnPreparationEnded;` | 事件 |
| `OnPreRoundEnding;` | `event Action OnPreRoundEnding;` | 事件 |
| `OnRoundEnding;` | `event Action OnRoundEnding;` | 事件 |
| `OnPostRoundEnded;` | `event Action OnPostRoundEnded;` | 事件 |
| `OnCurrentRoundStateChanged;` | `event Action OnCurrentRoundStateChanged;` | 事件 |
| `LastRoundEndRemainingTime` | `float LastRoundEndRemainingTime` | 属性 |
| `RemainingRoundTime` | `float RemainingRoundTime` | 属性 |
| `CurrentRoundState` | `MultiplayerRoundState CurrentRoundState` | 属性 |
| `RoundCount` | `int RoundCount` | 属性 |
| `RoundWinner` | `BattleSideEnum RoundWinner` | 属性 |
| `RoundEndReason` | `RoundEndReason RoundEndReason` | 属性 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IMissionBehavior](../IMissionBehavior)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
