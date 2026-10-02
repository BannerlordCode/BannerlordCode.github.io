---
title: "MultiplayerAdminComponent"
description: "MultiplayerAdminComponent 的自动生成类参考。"
---
# MultiplayerAdminComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade.Multiplayer.2
**Type:** `public class MultiplayerAdminComponent : MissionNetwork `
**Base:** MissionNetwork
**Source:** TaleWorlds.MountAndBlade.Multiplayer.2/TaleWorlds/MountAndBlade/MultiplayerAdminComponent.cs

## 概述

`MultiplayerAdminComponent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.Multiplayer.2/TaleWorlds/MountAndBlade/MultiplayerAdminComponent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnMissionStateActivated
`public override void OnMissionStateActivated() `

### ChangeAdminMenuActiveState
`public void ChangeAdminMenuActiveState(bool isActive) `

### KickPlayer
`public void KickPlayer(NetworkCommunicator peerToKick,bool banPlayer) `

### GlobalMuteUnmutePlayer
`public void GlobalMuteUnmutePlayer(NetworkCommunicator peerToMute,bool unmute) `

### EndWarmup
`public void EndWarmup() `

### ChangeWelcomeMessage
`public void ChangeWelcomeMessage(string newWelcomeMessage) `

### AdminAnnouncement
`public void AdminAnnouncement(string message,bool isBroadcast) `

### ChangeClassRestriction
`public void ChangeClassRestriction(FormationClass classToChangeRestriction,bool newValue) `

### AdminEndMission
`public void AdminEndMission() `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer) `

### MPAdminAnnouncement
`public static string MPAdminAnnouncement(List<string> strings) `

### OnRemoveBehavior
`public override void OnRemoveBehavior() `

### MPAdminKickPlayer
`public static string MPAdminKickPlayer(List<string> strings) `

### MPAdminBanPlayer
`public static string MPAdminBanPlayer(List<string> strings) `

### MPAdminChangeWelcomeMessage
`public static string MPAdminChangeWelcomeMessage(List<string> strings) `

### MPAdminChangeClassRestriction
`public static string MPAdminChangeClassRestriction(List<string> strings) `

### MPHostRestartGame
`public static string MPHostRestartGame(List<string> strings) `

### MPAdminChangeServerSlots
`public static string MPAdminChangeServerSlots(List<string> strings) `

### OnSelectPlayerToKickDelegate
`public delegate void OnSelectPlayerToKickDelegate(bool banPlayer)`

### OnSetAdminMenuActiveStateDelegate
`public delegate void OnSetAdminMenuActiveStateDelegate(bool showMenu)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
