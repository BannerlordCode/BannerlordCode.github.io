---
title: "WebSocketMessage"
description: "WebSocketMessage 的自动生成类参考。"
---
# WebSocketMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class WebSocketMessage `
**Base:** System.Object
**Source:** TaleWorlds.Network/WebSocketMessage.cs

## 概述

`WebSocketMessage` 的自动生成类参考页面。声明来自 `TaleWorlds.Network/WebSocketMessage.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetTextPayload
`public void SetTextPayload(string payload) `

### WriteTo
`public void WriteTo(bool fromServer,Stream stream) `

### ReadFrom
`public static WebSocketMessage ReadFrom(bool fromServer,byte[] payload) `
`public static WebSocketMessage ReadFrom(bool fromServer,Stream stream) `

### CreateCursorMessage
`public static WebSocketMessage CreateCursorMessage(int cursor) `

### CreateCloseMessage
`public static WebSocketMessage CreateCloseMessage() `

### GetCursor
`public int GetCursor() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
