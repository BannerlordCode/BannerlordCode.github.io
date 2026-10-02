---
title: "UdpNetworkComponent"
description: "Auto-generated class reference for UdpNetworkComponent."
---
# UdpNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UdpNetworkComponent : IUdpNetworkHandler `
**Base:** IUdpNetworkHandler
**Source:** TaleWorlds.MountAndBlade/UdpNetworkComponent.cs

## Overview

Auto-generated stub for `UdpNetworkComponent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### AddRemoveMessageHandlers
`protected virtual void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)`

### OnUdpNetworkHandlerClose
`public virtual void OnUdpNetworkHandlerClose()`

### OnUdpNetworkHandlerTick
`public virtual void OnUdpNetworkHandlerTick(float dt)`

### HandleNewClientConnect
`public virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)`

### HandleEarlyNewClientAfterLoadingFinished
`public virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

### HandleNewClientAfterLoadingFinished
`public virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

### HandleLateNewClientAfterLoadingFinished
`public virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

### HandleNewClientAfterSynchronized
`public virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

### HandleLateNewClientAfterSynchronized
`public virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

### OnEveryoneUnSynchronized
`public virtual void OnEveryoneUnSynchronized()`

### HandleEarlyPlayerDisconnect
`public void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)`

### HandlePlayerDisconnect
`public virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

### OnPlayerDisconnectedFromServer
`public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

### OnDisconnectedFromServer
`public virtual void OnDisconnectedFromServer()`

## See Also

- [Section index](../)
