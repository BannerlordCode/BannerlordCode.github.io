---
title: "MissionMultiplayerDuel"
description: "MissionMultiplayerDuel 的自动生成类参考。"
---
# MissionMultiplayerDuel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerDuel : MissionMultiplayerGameModeBase `
**Base:** MissionMultiplayerGameModeBase
**Source:** TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs

## 概述

`MissionMultiplayerDuel` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetMissionType
`public override MultiplayerGameType GetMissionType() `

### AfterStart
`public override void AfterStart() `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer) `

### HandleEarlyNewClientAfterLoadingFinished
`protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

### HandleNewClientAfterSynchronized
`protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer) `

### CheckIfPlayerCanDespawn
`public override bool CheckIfPlayerCanDespawn(MissionPeer missionPeer) `

### OnPlayerDespawn
`public void OnPlayerDespawn(MissionPeer missionPeer) `

### DuelRequestReceived
`public void DuelRequestReceived(MissionPeer requesterPeer,MissionPeer requesteePeer) `

### DuelRequestAccepted
`public void DuelRequestAccepted(Agent requesterAgent,Agent requesteeAgent) `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### GetDuelAreaIndexIfDuelTeam
`public int GetDuelAreaIndexIfDuelTeam(Team team) `

### OnAgentBuild
`public override void OnAgentBuild(Agent agent,Banner banner) `

### HandleLateNewClientAfterSynchronized
`protected override void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer) `

### HandleEarlyPlayerDisconnect
`protected override void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer) `

### HandlePlayerDisconnect
`protected override void HandlePlayerDisconnect(NetworkCommunicator networkPeer) `

### OnDuelEndedDelegate
`public delegate void OnDuelEndedDelegate(MissionPeer winnerPeer,TroopType troopType)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
