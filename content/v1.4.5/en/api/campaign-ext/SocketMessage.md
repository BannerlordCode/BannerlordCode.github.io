---
title: "SocketMessage"
description: "Auto-generated class reference for SocketMessage."
---
# SocketMessage

**Namespace:** TaleWorlds.Diamond.Socket
**Module:** TaleWorlds.Diamond
**Type:** `public class SocketMessage : MessageContract`
**Base:** `MessageContract`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Socket/SocketMessage.cs`

## Overview

`SocketMessage` lives in `TaleWorlds.Diamond.Socket` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Socket` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Message` | `public Message Message { get; }` |

## Key Methods

### SerializeToNetworkMessage
`public override void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)`

**Purpose:** Serializes to network message into a storable or transmittable format.

```csharp
// Obtain an instance of SocketMessage from the subsystem API first
SocketMessage socketMessage = ...;
socketMessage.SerializeToNetworkMessage(networkMessage);
```

### DeserializeFromNetworkMessage
`public override void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)`

**Purpose:** Restores from network message from serialized data.

```csharp
// Obtain an instance of SocketMessage from the subsystem API first
SocketMessage socketMessage = ...;
socketMessage.DeserializeFromNetworkMessage(networkMessage);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SocketMessage socketMessage = ...;
socketMessage.SerializeToNetworkMessage(networkMessage);
```

## See Also

- [Area Index](../)