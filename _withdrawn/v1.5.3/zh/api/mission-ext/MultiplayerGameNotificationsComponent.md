---
title: "MultiplayerGameNotificationsComponent"
description: "MultiplayerGameNotificationsComponent 的自动生成类参考。"
---
# MultiplayerGameNotificationsComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameNotificationsComponent : MissionNetwork `
**Base:** MissionNetwork
**Source:** TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs

## 概述

`MultiplayerGameNotificationsComponent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### WarmupEnding
`public void WarmupEnding() `

### GameOver
`public void GameOver(Team winnerTeam) `

### PreparationStarted
`public void PreparationStarted() `

### FlagsXRemoved
`public void FlagsXRemoved(FlagCapturePoint removedFlag) `

### FlagXRemaining
`public void FlagXRemaining(FlagCapturePoint remainingFlag) `

### FlagsWillBeRemovedInXSeconds
`public void FlagsWillBeRemovedInXSeconds(int timeLeft) `

### FlagXCapturedByTeamX
`public void FlagXCapturedByTeamX(SynchedMissionObject flag,Team capturingTeam) `

### GoldCarriedFromPreviousRound
`public void GoldCarriedFromPreviousRound(int carriedGoldAmount,NetworkCommunicator syncToPeer) `

### PlayerIsInactive
`public void PlayerIsInactive(NetworkCommunicator peer) `

### FormationAutoFollowEnforced
`public void FormationAutoFollowEnforced(NetworkCommunicator peer) `

### PollRejected
`public void PollRejected(MultiplayerPollRejectReason reason) `

### PlayerKicked
`public void PlayerKicked(NetworkCommunicator kickedPeer) `

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer) `

### HandleNewClientConnect
`protected override void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo) `

### HandlePlayerDisconnect
`protected override void HandlePlayerDisconnect(NetworkCommunicator networkPeer) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
