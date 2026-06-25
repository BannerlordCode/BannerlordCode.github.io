---
title: "WebSocketMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WebSocketMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WebSocketMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class WebSocketMessage`
**Base:** none
**File:** `TaleWorlds.Network/WebSocketMessage.cs`

## Overview

`WebSocketMessage` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Payload` | `public byte Payload { get; set; }` |
| `MessageInfo` | `public MessageInfo MessageInfo { get; set; }` |
| `Cursor` | `public int Cursor { get; set; }` |
| `MessageType` | `public MessageTypes MessageType { get; set; }` |

## Key Methods

### SetTextPayload
`public void SetTextPayload(string payload)`

**Purpose:** Sets the value or state of `text payload`.

### WriteTo
`public void WriteTo(bool fromServer, Stream stream)`

**Purpose:** Handles logic related to `write to`.

### ReadFrom
`public static WebSocketMessage ReadFrom(bool fromServer, byte payload)`

**Purpose:** Handles logic related to `read from`.

### ReadFrom
`public static WebSocketMessage ReadFrom(bool fromServer, Stream stream)`

**Purpose:** Handles logic related to `read from`.

### CreateCursorMessage
`public static WebSocketMessage CreateCursorMessage(int cursor)`

**Purpose:** Creates a new `cursor message` instance or object.

### CreateCloseMessage
`public static WebSocketMessage CreateCloseMessage()`

**Purpose:** Creates a new `close message` instance or object.

### GetCursor
`public int GetCursor()`

**Purpose:** Gets the current value of `cursor`.

## Usage Example

```csharp
var value = new WebSocketMessage();
value.SetTextPayload("example");
```

## See Also

- [Complete Class Catalog](../catalog)