---
title: "MultiplayerAdminComponent"
description: "Auto-generated class reference for MultiplayerAdminComponent."
---
# MultiplayerAdminComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade.Multiplayer.2
**Type:** `public class MultiplayerAdminComponent : MissionNetwork `
**Base:** MissionNetwork
**Source:** TaleWorlds.MountAndBlade.Multiplayer.2/TaleWorlds/MountAndBlade/MultiplayerAdminComponent.cs

## Overview

Auto-generated stub for `MultiplayerAdminComponent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnMissionStateActivated
`public override void OnMissionStateActivated()`

### ChangeAdminMenuActiveState
`public void ChangeAdminMenuActiveState(bool isActive)`

### KickPlayer
`public void KickPlayer(NetworkCommunicator peerToKick,bool banPlayer)`

### GlobalMuteUnmutePlayer
`public void GlobalMuteUnmutePlayer(NetworkCommunicator peerToMute,bool unmute)`

### EndWarmup
`public void EndWarmup()`

### ChangeWelcomeMessage
`public void ChangeWelcomeMessage(string newWelcomeMessage)`

### AdminAnnouncement
`public void AdminAnnouncement(string message,bool isBroadcast)`

### ChangeClassRestriction
`public void ChangeClassRestriction(FormationClass classToChangeRestriction,bool newValue)`

### AdminEndMission
`public void AdminEndMission()`

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

### MPAdminAnnouncement
`public static string MPAdminAnnouncement(List<string> strings)`

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

### MPAdminKickPlayer
`public static string MPAdminKickPlayer(List<string> strings)`

### MPAdminBanPlayer
`public static string MPAdminBanPlayer(List<string> strings)`

### MPAdminChangeWelcomeMessage
`public static string MPAdminChangeWelcomeMessage(List<string> strings)`

### MPAdminChangeClassRestriction
`public static string MPAdminChangeClassRestriction(List<string> strings)`

### MPHostRestartGame
`public static string MPHostRestartGame(List<string> strings)`

### MPAdminChangeServerSlots
`public static string MPAdminChangeServerSlots(List<string> strings)`

### OnSelectPlayerToKickDelegate
`public delegate void OnSelectPlayerToKickDelegate(bool banPlayer)`

### OnSetAdminMenuActiveStateDelegate
`public delegate void OnSetAdminMenuActiveStateDelegate(bool showMenu)`

## See Also

- [Section index](../)
