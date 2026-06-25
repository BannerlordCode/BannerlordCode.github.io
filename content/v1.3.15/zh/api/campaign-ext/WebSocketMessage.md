---
title: "WebSocketMessage"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WebSocketMessage`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WebSocketMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class WebSocketMessage`
**Base:** 无
**File:** `TaleWorlds.Network/WebSocketMessage.cs`

## 概述

`WebSocketMessage` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Payload` | `public byte Payload { get; set; }` |
| `MessageInfo` | `public MessageInfo MessageInfo { get; set; }` |
| `Cursor` | `public int Cursor { get; set; }` |
| `MessageType` | `public MessageTypes MessageType { get; set; }` |

## 主要方法

### SetTextPayload
`public void SetTextPayload(string payload)`

**用途 / Purpose:** 设置 `text payload` 的值或状态。

### WriteTo
`public void WriteTo(bool fromServer, Stream stream)`

**用途 / Purpose:** 处理 `write to` 相关逻辑。

### ReadFrom
`public static WebSocketMessage ReadFrom(bool fromServer, byte payload)`

**用途 / Purpose:** 处理 `read from` 相关逻辑。

### ReadFrom
`public static WebSocketMessage ReadFrom(bool fromServer, Stream stream)`

**用途 / Purpose:** 处理 `read from` 相关逻辑。

### CreateCursorMessage
`public static WebSocketMessage CreateCursorMessage(int cursor)`

**用途 / Purpose:** 创建一个 `cursor message` 实例或对象。

### CreateCloseMessage
`public static WebSocketMessage CreateCloseMessage()`

**用途 / Purpose:** 创建一个 `close message` 实例或对象。

### GetCursor
`public int GetCursor()`

**用途 / Purpose:** 获取 `cursor` 的当前值。

## 使用示例

```csharp
var value = new WebSocketMessage();
value.SetTextPayload("example");
```

## 参见

- [完整类目录](../catalog)