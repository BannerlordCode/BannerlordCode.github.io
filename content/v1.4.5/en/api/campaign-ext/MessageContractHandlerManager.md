---
title: "MessageContractHandlerManager"
description: "Auto-generated class reference for MessageContractHandlerManager."
---
# MessageContractHandlerManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class MessageContractHandlerManager`
**Base:** none
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/MessageContractHandlerManager.cs`

## Overview

`MessageContractHandlerManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MessageContractHandlerManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### HandleMessage
`public void HandleMessage(MessageContract messageContract)`

**Purpose:** Executes the response logic associated with `message`.

```csharp
// Obtain an instance of MessageContractHandlerManager from the subsystem API first
MessageContractHandlerManager messageContractHandlerManager = ...;
messageContractHandlerManager.HandleMessage(messageContract);
```

### HandleNetworkMessage
`public void HandleNetworkMessage(NetworkMessage networkMessage)`

**Purpose:** Executes the response logic associated with `network message`.

```csharp
// Obtain an instance of MessageContractHandlerManager from the subsystem API first
MessageContractHandlerManager messageContractHandlerManager = ...;
messageContractHandlerManager.HandleNetworkMessage(networkMessage);
```

### ContainsMessageHandler
`public bool ContainsMessageHandler(byte id)`

**Purpose:** Indicates whether the current object contains `message handler`.

```csharp
// Obtain an instance of MessageContractHandlerManager from the subsystem API first
MessageContractHandlerManager messageContractHandlerManager = ...;
var result = messageContractHandlerManager.ContainsMessageHandler(0);
```

## Usage Example

```csharp
var manager = MessageContractHandlerManager.Current;
```

## See Also

- [Area Index](../)