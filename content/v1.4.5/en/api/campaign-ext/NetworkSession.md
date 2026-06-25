---
title: "NetworkSession"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NetworkSession`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NetworkSession

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class NetworkSession`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/NetworkSession.cs`

## Overview

`NetworkSession` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsConnected` | `public bool IsConnected { get; }` |

## Key Methods

### ComponentMessageHandlerDelegate
`public delegate void ComponentMessageHandlerDelegate(NetworkMessage networkMessage)`

**Purpose:** Handles logic related to `component message handler delegate`.

### SendDisconnectMessage
`public void SendDisconnectMessage()`

**Purpose:** Handles logic related to `send disconnect message`.

### Tick
`public virtual void Tick()`

**Purpose:** Handles logic related to `tick`.

### SendMessage
`public void SendMessage(MessageContract message)`

**Purpose:** Handles logic related to `send message`.

## Usage Example

```csharp
var implementation = new CustomNetworkSession();
```

## See Also

- [Complete Class Catalog](../catalog)