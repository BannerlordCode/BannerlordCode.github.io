<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WebSocketMessage`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WebSocketMessage

**命名空间:** TaleWorlds.Network
**模块:** TaleWorlds.Network
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`WebSocketMessage` 是 `TaleWorlds.Network` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Payload` | `public byte Payload { get; set; }` |
| `MessageInfo` | `public MessageInfo MessageInfo { get; set; }` |
| `Cursor` | `public int Cursor { get; set; }` |
| `MessageType` | `public MessageTypes MessageType { get; set; }` |


## 主要方法

### SetTextPayload

```csharp
public void SetTextPayload(string payload)
```

### WriteTo

```csharp
public void WriteTo(bool fromServer, Stream stream)
```

### ReadFrom

```csharp
public static WebSocketMessage ReadFrom(bool fromServer, byte payload)
```

### ReadFrom

```csharp
public static WebSocketMessage ReadFrom(bool fromServer, Stream stream)
```

### CreateCursorMessage

```csharp
public static WebSocketMessage CreateCursorMessage(int cursor)
```

### CreateCloseMessage

```csharp
public static WebSocketMessage CreateCloseMessage()
```

### GetCursor

```csharp
public int GetCursor()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)