---
title: "MissionNetwork"
description: "Auto-generated class reference for MissionNetwork."
---
# MissionNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionNetwork : MissionLogic,IUdpNetworkHandler `
**Base:** MissionLogic, IUdpNetworkHandler
**Source:** TaleWorlds.MountAndBlade/MissionNetwork.cs

## Overview

Auto-generated stub for `MissionNetwork`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnAfterMissionCreated
`public override void OnAfterMissionCreated()`

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

### AddRemoveMessageHandlers
`protected virtual void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

### OnPlayerConnectedToServer
`public virtual void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)`

### OnPlayerDisconnectedFromServer
`public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

### OnUdpNetworkHandlerTick
`protected virtual void OnUdpNetworkHandlerTick()`

### OnUdpNetworkHandlerClose
`protected virtual void OnUdpNetworkHandlerClose()`

### HandleNewClientConnect
`protected virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)`

### HandleEarlyNewClientAfterLoadingFinished
`protected virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

### HandleNewClientAfterLoadingFinished
`protected virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

### HandleLateNewClientAfterLoadingFinished
`protected virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

### HandleNewClientAfterSynchronized
`protected virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

### HandleLateNewClientAfterSynchronized
`protected virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

### HandleEarlyPlayerDisconnect
`protected virtual void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)`

### HandlePlayerDisconnect
`protected virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

## See Also

- [Section index](../)
