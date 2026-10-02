---
title: "MultiplayerGameNotificationsComponent"
description: "MultiplayerGameNotificationsComponent：TaleWorlds.MountAndBlade 的 public 类，继承 MissionNetwork；公开成员 16 个（方法 15、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerGameNotificationsComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerGameNotificationsComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerGameNotificationsComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs。它是一个 public 类，实现/继承 MissionNetwork，继承链为 MultiplayerGameNotificationsComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。public/protected 成员共 16 个：15 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerGameNotificationsComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MultiplayerGameNotificationsComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 15/16，属性 1/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NotificationCount` | `public static int NotificationCount` | 属性 |
| `WarmupEnding` | `public void WarmupEnding()` | 方法 |
| `GameOver` | `public void GameOver(Team winnerTeam)` | 方法 |
| `PreparationStarted` | `public void PreparationStarted()` | 方法 |
| `FlagsXRemoved` | `public void FlagsXRemoved(FlagCapturePoint removedFlag)` | 方法 |
| `FlagXRemaining` | `public void FlagXRemaining(FlagCapturePoint remainingFlag)` | 方法 |
| `FlagsWillBeRemovedInXSeconds` | `public void FlagsWillBeRemovedInXSeconds(int timeLeft)` | 方法 |
| `FlagXCapturedByTeamX` | `public void FlagXCapturedByTeamX(SynchedMissionObject flag, Team capturingTeam)` | 方法 |
| `GoldCarriedFromPreviousRound` | `public void GoldCarriedFromPreviousRound(int carriedGoldAmount, NetworkCommunicator syncToPeer)` | 方法 |
| `PlayerIsInactive` | `public void PlayerIsInactive(NetworkCommunicator peer)` | 方法 |
| `FormationAutoFollowEnforced` | `public void FormationAutoFollowEnforced(NetworkCommunicator peer)` | 方法 |
| `PollRejected` | `public void PollRejected(MultiplayerPollRejectReason reason)` | 方法 |
| `PlayerKicked` | `public void PlayerKicked(NetworkCommunicator kickedPeer)` | 方法 |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | 方法 |
| `HandleNewClientConnect` | `protected override void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)` | 方法 |
| `HandlePlayerDisconnect` | `protected override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionNetwork](../MissionNetwork/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
