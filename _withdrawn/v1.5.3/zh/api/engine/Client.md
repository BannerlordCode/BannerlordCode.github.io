---
title: "Client"
description: "Client 的自动生成类参考。"
---
# Client

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class Client : DiamondClientApplicationObject,IClient `
**Base:** DiamondClientApplicationObject,IClient
**Source:** TaleWorlds.Diamond/Client.cs

## 概述

`Client` 的自动生成类参考页面。声明来自 `TaleWorlds.Diamond/Client.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### UpdateAliveCheckInterval
`protected void UpdateAliveCheckInterval() `

### Update
`public void Update() `

### OnTick
`protected abstract void OnTick()`

### SendMessage
`protected void SendMessage(Message message) `

### Login
`protected async Task<LoginResult> Login(LoginMessage message) `

### HandleMessage
`public void HandleMessage(Message message) `

### OnConnected
`public virtual void OnConnected() `

### OnCantConnect
`public virtual void OnCantConnect() `

### OnDisconnected
`public virtual void OnDisconnected() `

### BeginConnect
`protected void BeginConnect() `

### BeginDisconnect
`protected void BeginDisconnect() `

### SetAliveCheckTime
`protected void SetAliveCheckTime(long time) `

### CheckConnection
`public Task<bool> CheckConnection() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
