<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SocketMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SocketMessage

**Namespace:** TaleWorlds.Diamond.Socket
**Module:** TaleWorlds.Diamond
**Type:** `public class SocketMessage : MessageContract`
**Base:** `MessageContract`
**File:** `TaleWorlds.Diamond/Socket/SocketMessage.cs`

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

**Purpose:** Handles logic related to `serialize to network message`.

### DeserializeFromNetworkMessage
`public override void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)`

**Purpose:** Handles logic related to `deserialize from network message`.

## Usage Example

```csharp
var value = new SocketMessage();
value.SerializeToNetworkMessage(networkMessage);
```

## See Also

- [Complete Class Catalog](../catalog)