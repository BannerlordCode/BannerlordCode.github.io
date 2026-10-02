---
title: "MultiplayerRoundController"
description: "MultiplayerRoundController：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork、IRoundComponent；公开成员 22 个（方法 8、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade/MultiplayerRoundController.cs。"
---
# MultiplayerRoundController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerRoundController : MissionNetwork, IRoundComponent, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MultiplayerRoundController.cs`

## 概述

MultiplayerRoundController 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MultiplayerRoundController.cs。它是一个 public 类，实现/继承 MissionNetwork、IRoundComponent、IMissionBehavior，继承链为 MultiplayerRoundController → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 22 个：8 方法、8 属性、6 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerRoundController 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MultiplayerRoundController → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 8/22，属性 8/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MultiplayerRoundController.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnRoundStarted;` | `public event Action OnRoundStarted;` | 事件 |
| `OnPreparationEnded;` | `public event Action OnPreparationEnded;` | 事件 |
| `OnPreRoundEnding;` | `public event Action OnPreRoundEnding;` | 事件 |
| `OnRoundEnding;` | `public event Action OnRoundEnding;` | 事件 |
| `OnPostRoundEnded;` | `public event Action OnPostRoundEnded;` | 事件 |
| `OnCurrentRoundStateChanged;` | `public event Action OnCurrentRoundStateChanged;` | 事件 |
| `RoundCount` | `public int RoundCount` | 属性 |
| `RoundWinner` | `public BattleSideEnum RoundWinner` | 属性 |
| `RoundEndReason` | `public RoundEndReason RoundEndReason` | 属性 |
| `IsMatchEnding` | `public bool IsMatchEnding` | 属性 |
| `LastRoundEndRemainingTime` | `public float LastRoundEndRemainingTime` | 属性 |
| `RemainingRoundTime` | `public float RemainingRoundTime` | 属性 |
| `CurrentRoundState` | `public MultiplayerRoundState CurrentRoundState` | 属性 |
| `IsRoundInProgress` | `public bool IsRoundInProgress` | 属性 |
| `EnableEquipmentUpdate` | `public void EnableEquipmentUpdate()` | 方法 |
| `AfterStart` | `public override void AfterStart()` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `OnUdpNetworkHandlerClose` | `protected override void OnUdpNetworkHandlerClose()` | 方法 |
| `OnPreDisplayMissionTick` | `public override void OnPreDisplayMissionTick(float dt)` | 方法 |
| `HandleLateNewClientAfterLoadingFinished` | `protected override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | 方法 |
| `HandleClientEventCultureSelect` | `public bool HandleClientEventCultureSelect(NetworkCommunicator peer, CultureVoteClient message)` | 方法 |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | 方法 |

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
