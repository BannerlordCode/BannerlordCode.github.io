---
title: "ServersideSessionManager"
description: "Auto-generated class reference for ServersideSessionManager."
---
# ServersideSessionManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class ServersideSessionManager `
**Base:** System.Object
**Source:** TaleWorlds.Network/ServersideSessionManager.cs

## Overview

Auto-generated stub for `ServersideSessionManager`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Activate
`public void Activate(ushort port,ServersideSessionManager.ThreadType threadType = ServersideSessionManager.ThreadType.Single,int readWriteThreadCount = 1)`

### GetPeer
`public ServersideSession GetPeer(int peerIndex)`

### Tick
`public virtual void Tick()`

### OnNewConnection
`protected abstract ServersideSession OnNewConnection()`

### OnRemoveConnection
`protected abstract void OnRemoveConnection(ServersideSession peer)`

## See Also

- [Section index](../)
