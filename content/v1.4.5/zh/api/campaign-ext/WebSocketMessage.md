---
title: "WebSocketMessage"
description: "WebSocketMessage 的自动生成类参考。"
---
# WebSocketMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class WebSocketMessage`
**Base:** 无
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/WebSocketMessage.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 为 text payload 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WebSocketMessage 实例
WebSocketMessage webSocketMessage = ...;
webSocketMessage.SetTextPayload("example");
```

### WriteTo
`public void WriteTo(bool fromServer, Stream stream)`

**用途 / Purpose:** **用途 / Purpose:** 将to写入目标位置。

```csharp
// 先通过子系统 API 拿到 WebSocketMessage 实例
WebSocketMessage webSocketMessage = ...;
webSocketMessage.WriteTo(false, stream);
```

### ReadFrom
`public static WebSocketMessage ReadFrom(bool fromServer, byte payload)`

**用途 / Purpose:** **用途 / Purpose:** 读取from的数据或状态。

```csharp
// 静态调用，不需要实例
WebSocketMessage.ReadFrom(false, 0);
```

### ReadFrom
`public static WebSocketMessage ReadFrom(bool fromServer, Stream stream)`

**用途 / Purpose:** **用途 / Purpose:** 读取from的数据或状态。

```csharp
// 静态调用，不需要实例
WebSocketMessage.ReadFrom(false, stream);
```

### CreateCursorMessage
`public static WebSocketMessage CreateCursorMessage(int cursor)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 cursor message 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
WebSocketMessage.CreateCursorMessage(0);
```

### CreateCloseMessage
`public static WebSocketMessage CreateCloseMessage()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 close message 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
WebSocketMessage.CreateCloseMessage();
```

### GetCursor
`public int GetCursor()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cursor 的结果。

```csharp
// 先通过子系统 API 拿到 WebSocketMessage 实例
WebSocketMessage webSocketMessage = ...;
var result = webSocketMessage.GetCursor();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WebSocketMessage webSocketMessage = ...;
webSocketMessage.SetTextPayload("example");
```

## 参见

- [本区域目录](../)