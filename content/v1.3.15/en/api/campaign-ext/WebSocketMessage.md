---
title: "WebSocketMessage"
description: "Auto-generated class reference for WebSocketMessage."
---
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

**Purpose:** **Purpose:** Assigns a new value to text payload and updates the object's internal state.

```csharp
// Obtain an instance of WebSocketMessage from the subsystem API first
WebSocketMessage webSocketMessage = ...;
webSocketMessage.SetTextPayload("example");
```

### WriteTo
`public void WriteTo(bool fromServer, Stream stream)`

**Purpose:** **Purpose:** Writes to to the target location.

```csharp
// Obtain an instance of WebSocketMessage from the subsystem API first
WebSocketMessage webSocketMessage = ...;
webSocketMessage.WriteTo(false, stream);
```

### ReadFrom
`public static WebSocketMessage ReadFrom(bool fromServer, byte payload)`

**Purpose:** **Purpose:** Reads the data or state of from.

```csharp
// Static call; no instance required
WebSocketMessage.ReadFrom(false, 0);
```

### ReadFrom
`public static WebSocketMessage ReadFrom(bool fromServer, Stream stream)`

**Purpose:** **Purpose:** Reads the data or state of from.

```csharp
// Static call; no instance required
WebSocketMessage.ReadFrom(false, stream);
```

### CreateCursorMessage
`public static WebSocketMessage CreateCursorMessage(int cursor)`

**Purpose:** **Purpose:** Constructs a new cursor message entity and returns it to the caller.

```csharp
// Static call; no instance required
WebSocketMessage.CreateCursorMessage(0);
```

### CreateCloseMessage
`public static WebSocketMessage CreateCloseMessage()`

**Purpose:** **Purpose:** Constructs a new close message entity and returns it to the caller.

```csharp
// Static call; no instance required
WebSocketMessage.CreateCloseMessage();
```

### GetCursor
`public int GetCursor()`

**Purpose:** **Purpose:** Reads and returns the cursor value held by the this instance.

```csharp
// Obtain an instance of WebSocketMessage from the subsystem API first
WebSocketMessage webSocketMessage = ...;
var result = webSocketMessage.GetCursor();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WebSocketMessage webSocketMessage = ...;
webSocketMessage.SetTextPayload("example");
```

## See Also

- [Area Index](../)