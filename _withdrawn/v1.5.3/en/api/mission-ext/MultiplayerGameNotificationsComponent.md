---
title: "MultiplayerGameNotificationsComponent"
description: "Auto-generated class reference for MultiplayerGameNotificationsComponent."
---
# MultiplayerGameNotificationsComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameNotificationsComponent : MissionNetwork `
**Base:** MissionNetwork
**Source:** TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs

## Overview

Auto-generated stub for `MultiplayerGameNotificationsComponent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### WarmupEnding
`public void WarmupEnding()`

### GameOver
`public void GameOver(Team winnerTeam)`

### PreparationStarted
`public void PreparationStarted()`

### FlagsXRemoved
`public void FlagsXRemoved(FlagCapturePoint removedFlag)`

### FlagXRemaining
`public void FlagXRemaining(FlagCapturePoint remainingFlag)`

### FlagsWillBeRemovedInXSeconds
`public void FlagsWillBeRemovedInXSeconds(int timeLeft)`

### FlagXCapturedByTeamX
`public void FlagXCapturedByTeamX(SynchedMissionObject flag,Team capturingTeam)`

### GoldCarriedFromPreviousRound
`public void GoldCarriedFromPreviousRound(int carriedGoldAmount,NetworkCommunicator syncToPeer)`

### PlayerIsInactive
`public void PlayerIsInactive(NetworkCommunicator peer)`

### FormationAutoFollowEnforced
`public void FormationAutoFollowEnforced(NetworkCommunicator peer)`

### PollRejected
`public void PollRejected(MultiplayerPollRejectReason reason)`

### PlayerKicked
`public void PlayerKicked(NetworkCommunicator kickedPeer)`

### AddRemoveMessageHandlers
`protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

### HandleNewClientConnect
`protected override void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)`

### HandlePlayerDisconnect
`protected override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

## See Also

- [Section index](../)
