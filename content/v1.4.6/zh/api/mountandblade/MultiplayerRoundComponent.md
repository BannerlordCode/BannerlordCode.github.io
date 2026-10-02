---
title: "MultiplayerRoundComponent"
description: "MultiplayerRoundComponent：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork、IRoundComponent；公开成员 18 个（方法 2、属性 6、字段 4）。源文件 TaleWorlds.MountAndBlade/MultiplayerRoundComponent.cs。"
---
# MultiplayerRoundComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerRoundComponent : MissionNetwork, IRoundComponent, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MultiplayerRoundComponent.cs`

## 概述

MultiplayerRoundComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MultiplayerRoundComponent.cs。它是一个 public 类，实现/继承 MissionNetwork、IRoundComponent、IMissionBehavior，继承链为 MultiplayerRoundComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 18 个：2 方法、6 属性、4 字段、6 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerRoundComponent 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MultiplayerRoundComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以属性为主（属性 6/18，方法 2/18），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MultiplayerRoundComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnRoundStarted;` | `public event Action OnRoundStarted;` | 事件 |
| `OnPreparationEnded;` | `public event Action OnPreparationEnded;` | 事件 |
| `OnPreRoundEnding;` | `public event Action OnPreRoundEnding;` | 事件 |
| `OnRoundEnding;` | `public event Action OnRoundEnding;` | 事件 |
| `OnPostRoundEnded;` | `public event Action OnPostRoundEnded;` | 事件 |
| `OnCurrentRoundStateChanged;` | `public event Action OnCurrentRoundStateChanged;` | 事件 |
| `RemainingRoundTime` | `public float RemainingRoundTime` | 属性 |
| `LastRoundEndRemainingTime` | `public float LastRoundEndRemainingTime` | 属性 |
| `CurrentRoundState` | `public MultiplayerRoundState CurrentRoundState` | 属性 |
| `RoundCount` | `public int RoundCount` | 属性 |
| `RoundWinner` | `public BattleSideEnum RoundWinner` | 属性 |
| `RoundEndReason` | `public RoundEndReason RoundEndReason` | 属性 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnUdpNetworkHandlerClose` | `protected override void OnUdpNetworkHandlerClose()` | 方法 |
| `RoundEndDelayTime` | `public const int RoundEndDelayTime` | 字段 |
| `RoundEndWaitTime` | `public const int RoundEndWaitTime` | 字段 |
| `MatchEndWaitTime` | `public const int MatchEndWaitTime` | 字段 |
| `WarmupEndWaitTime` | `public const int WarmupEndWaitTime` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionNetwork](../MissionNetwork)
- [基类/接口 IRoundComponent](../IRoundComponent)
- [基类/接口 IMissionBehavior](../IMissionBehavior)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
