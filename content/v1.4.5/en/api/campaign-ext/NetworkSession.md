---
title: "NetworkSession"
description: "Auto-generated class reference for NetworkSession."
---
# NetworkSession

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class NetworkSession`
**Base:** none
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/NetworkSession.cs`

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

**Purpose:** **Purpose:** Executes the ComponentMessageHandlerDelegate logic.

```csharp
// Obtain an instance of NetworkSession from the subsystem API first
NetworkSession networkSession = ...;
networkSession.ComponentMessageHandlerDelegate(networkMessage);
```

### SendDisconnectMessage
`public void SendDisconnectMessage()`

**Purpose:** **Purpose:** Executes the SendDisconnectMessage logic.

```csharp
// Obtain an instance of NetworkSession from the subsystem API first
NetworkSession networkSession = ...;
networkSession.SendDisconnectMessage();
```

### Tick
`public virtual void Tick()`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of NetworkSession from the subsystem API first
NetworkSession networkSession = ...;
networkSession.Tick();
```

### SendMessage
`public void SendMessage(MessageContract message)`

**Purpose:** **Purpose:** Executes the SendMessage logic.

```csharp
// Obtain an instance of NetworkSession from the subsystem API first
NetworkSession networkSession = ...;
networkSession.SendMessage(message);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
NetworkSession instance = ...;
```

## See Also

- [Area Index](../)