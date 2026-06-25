---
title: "MessageContractHandler"
description: "Auto-generated class reference for MessageContractHandler."
---
# MessageContractHandler

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `internal class MessageContractHandler<T> : MessageContractHandler where T : MessageContract`
**Base:** `MessageContractHandler where T : MessageContract`
**File:** `TaleWorlds.Network/MessageContractHandler.2.cs`

## Overview

`MessageContractHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MessageContractHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Invoke
`public override void Invoke(MessageContract messageContract)`

**Purpose:** **Purpose:** Executes the Invoke logic.

```csharp
// Obtain an instance of MessageContractHandler from the subsystem API first
MessageContractHandler messageContractHandler = ...;
messageContractHandler.Invoke(messageContract);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MessageContractHandler>();
```

## See Also

- [Area Index](../)