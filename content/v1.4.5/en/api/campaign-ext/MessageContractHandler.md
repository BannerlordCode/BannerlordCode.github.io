---
title: "MessageContractHandler"
description: "Auto-generated class reference for MessageContractHandler."
---
# MessageContractHandler

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `internal abstract class MessageContractHandler`
**Base:** none
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/MessageContractHandler.cs`

## Overview

`MessageContractHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MessageContractHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Invoke
`public abstract void Invoke(MessageContract messageContract)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MessageContractHandler from the subsystem API first
MessageContractHandler messageContractHandler = ...;
messageContractHandler.Invoke(messageContract);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MessageContractHandler instance = ...;
```

## See Also

- [Area Index](../)