---
title: "MultiplayerTeamSelectComponent"
description: "MultiplayerTeamSelectComponent 的自动生成类参考。"
---
# MultiplayerTeamSelectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamSelectComponent : MissionNetwork `
**Base:** MissionNetwork
**Source:** TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs

## 概述

`MultiplayerTeamSelectComponent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer) `

### AfterStart
`public override void AfterStart() `

### OnRemoveBehavior
`public override void OnRemoveBehavior() `

### HandleLateNewClientAfterSynchronized
`protected override void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer) `

### SelectTeam
`public void SelectTeam() `

### UpdateTeams
`public void UpdateTeams(NetworkCommunicator peer,Team oldTeam,Team newTeam) `

### GetDisabledTeams
`public List<Team> GetDisabledTeams() `

### ChangeTeamServer
`public void ChangeTeamServer(NetworkCommunicator networkPeer,Team team) `

### ChangeTeam
`public void ChangeTeam(Team team) `

### GetPlayerCountForTeam
`public int GetPlayerCountForTeam(Team team) `

### GetFriendsForTeam
`public IEnumerable<VirtualPlayer> GetFriendsForTeam(Team team) `

### BalanceTeams
`public void BalanceTeams() `

### AutoAssignTeam
`public void AutoAssignTeam(NetworkCommunicator peer) `

### OnSelectingTeamDelegate
`public delegate void OnSelectingTeamDelegate(List<Team> disableTeams)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
