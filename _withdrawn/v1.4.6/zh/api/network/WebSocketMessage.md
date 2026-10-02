---
title: "WebSocketMessage"
description: "WebSocketMessage：TaleWorlds.Network 的 public 类；公开成员 13 个（方法 7、属性 4、字段 1）。canonical 桶 network。源文件 TaleWorlds.Network/WebSocketMessage.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WebSocketMessage

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class WebSocketMessage`
**File:** `TaleWorlds.Network/WebSocketMessage.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## 概述

WebSocketMessage 位于 TaleWorlds.Network 模块，源文件 TaleWorlds.Network/WebSocketMessage.cs。它是一个 public 类，继承链为 WebSocketMessage。public/protected 成员共 13 个：7 方法、4 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WebSocketMessage 落在 canonical 桶 `network`（命中规则 `rule:TaleWorlds.Network`），命名空间 `TaleWorlds.Network`，继承链 WebSocketMessage。成员构成以方法为主（方法 7/13，属性 4/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Network/WebSocketMessage.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `byte[]Payload` | `public byte[]Payload` | 属性 |
| `WebSocketMessage` | `public WebSocketMessage()` | 构造函数 |
| `SetTextPayload` | `public void SetTextPayload(string payload)` | 方法 |
| `MessageInfo` | `public MessageInfo MessageInfo` | 属性 |
| `Cursor` | `public int Cursor` | 属性 |
| `MessageType` | `public MessageTypes MessageType` | 属性 |
| `WriteTo` | `public void WriteTo(bool fromServer, Stream stream)` | 方法 |
| `ReadFrom` | `public static WebSocketMessage ReadFrom(bool fromServer, byte[]payload)` | 方法 |
| `ReadFrom` | `public static WebSocketMessage ReadFrom(bool fromServer, Stream stream)` | 方法 |
| `CreateCursorMessage` | `public static WebSocketMessage CreateCursorMessage(int cursor)` | 方法 |
| `CreateCloseMessage` | `public static WebSocketMessage CreateCloseMessage()` | 方法 |
| `GetCursor` | `public int GetCursor()` | 方法 |
| `Encoding` | `public static Encoding Encoding` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Authorize](../Authorize/)
- [同命名空间 ClientsideSession](../ClientsideSession/)
- [同命名空间 ClientWebSocketHandler](../ClientWebSocketHandler/)
- [同命名空间 ConnectionState](../ConnectionState/)
