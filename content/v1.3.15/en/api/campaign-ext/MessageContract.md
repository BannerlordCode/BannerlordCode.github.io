---
title: "MessageContract"
description: "Auto-generated class reference for MessageContract."
---
# MessageContract

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageContract`
**Base:** none
**File:** `TaleWorlds.Network/MessageContract.cs`

## Overview

`MessageContract` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MessageId` | `public byte MessageId { get; }` |

## Key Methods

### CreateMessageContract
`public static MessageContract CreateMessageContract(Type messageContractType)`

**Purpose:** Constructs a new `message contract` entity and returns it to the caller.

```csharp
// Static call; no instance required
MessageContract.CreateMessageContract(messageContractType);
```

### SerializeToNetworkMessage
`public abstract void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)`

**Purpose:** Serializes `to network message` into a storable or transmittable format.

```csharp
// Obtain an instance of MessageContract from the subsystem API first
MessageContract messageContract = ...;
messageContract.SerializeToNetworkMessage(networkMessage);
```

### DeserializeFromNetworkMessage
`public abstract void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)`

**Purpose:** Restores `from network message` from serialized data.

```csharp
// Obtain an instance of MessageContract from the subsystem API first
MessageContract messageContract = ...;
messageContract.DeserializeFromNetworkMessage(networkMessage);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MessageContract instance = ...;
```

## See Also

- [Area Index](../)