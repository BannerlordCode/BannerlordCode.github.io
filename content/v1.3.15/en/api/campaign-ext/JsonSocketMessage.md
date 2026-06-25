---
title: "JsonSocketMessage"
description: "Auto-generated class reference for JsonSocketMessage."
---
# JsonSocketMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class JsonSocketMessage`
**Base:** none
**File:** `TaleWorlds.Network/JsonSocketMessage.cs`

## Overview

`JsonSocketMessage` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MessageInfo` | `public MessageInfo MessageInfo { get; }` |
| `SocketMessageTypeId` | `public string SocketMessageTypeId { get; }` |

## Key Methods

### GetTypeId
`public static string GetTypeId(Type messageType)`

**Purpose:** Reads and returns the `type id` value held by the current object.

```csharp
// Static call; no instance required
JsonSocketMessage.GetTypeId(messageType);
```

### GetMessageDictionary
`public static Dictionary<string, Type> GetMessageDictionary()`

**Purpose:** Reads and returns the `message dictionary` value held by the current object.

```csharp
// Static call; no instance required
JsonSocketMessage.GetMessageDictionary();
```

## Usage Example

```csharp
JsonSocketMessage.GetTypeId(messageType);
```

## See Also

- [Area Index](../)