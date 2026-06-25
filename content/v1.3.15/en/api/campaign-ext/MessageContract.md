---
title: "MessageContract"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MessageContract`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MessageContract

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageContract`
**Area:** campaign-ext

## Overview

`MessageContract` lives in `TaleWorlds.Network`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MessageId` | `public byte MessageId { get; }` |

## Key Methods

### CreateMessageContract
`public static MessageContract CreateMessageContract(Type messageContractType)`

**Purpose:** Creates a new `message contract` instance or object.

### SerializeToNetworkMessage
`public abstract void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)`

**Purpose:** Handles logic related to `serialize to network message`.

### DeserializeFromNetworkMessage
`public abstract void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)`

**Purpose:** Handles logic related to `deserialize from network message`.

## Usage Example

```csharp
var implementation = new CustomMessageContract();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
