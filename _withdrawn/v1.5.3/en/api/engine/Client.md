---
title: "Client"
description: "Auto-generated class reference for Client."
---
# Client

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class Client : DiamondClientApplicationObject,IClient `
**Base:** DiamondClientApplicationObject, IClient
**Source:** TaleWorlds.Diamond/Client.cs

## Overview

Auto-generated stub for `Client`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### UpdateAliveCheckInterval
`protected void UpdateAliveCheckInterval()`

### Update
`public void Update()`

### OnTick
`protected abstract void OnTick()`

### SendMessage
`protected void SendMessage(Message message)`

### Login
`protected async Task<LoginResult> Login(LoginMessage message)`

### HandleMessage
`public void HandleMessage(Message message)`

### OnConnected
`public virtual void OnConnected()`

### OnCantConnect
`public virtual void OnCantConnect()`

### OnDisconnected
`public virtual void OnDisconnected()`

### BeginConnect
`protected void BeginConnect()`

### BeginDisconnect
`protected void BeginDisconnect()`

### SetAliveCheckTime
`protected void SetAliveCheckTime(long time)`

### CheckConnection
`public Task<bool> CheckConnection()`

## See Also

- [Section index](../)
