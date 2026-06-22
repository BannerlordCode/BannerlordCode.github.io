<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WebSocketMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WebSocketMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `WebSocketMessage` is a class in the `TaleWorlds.Network` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Payload` | `public byte Payload { get; set; }` |
| `MessageInfo` | `public MessageInfo MessageInfo { get; set; }` |
| `Cursor` | `public int Cursor { get; set; }` |
| `MessageType` | `public MessageTypes MessageType { get; set; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)