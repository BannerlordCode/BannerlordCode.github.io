---
title: "NetworkMessageHandlerRegistererContainer"
description: "Auto-generated class reference for NetworkMessageHandlerRegistererContainer."
---
# NetworkMessageHandlerRegistererContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NetworkMessageHandlerRegistererContainer`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameNetwork.cs`

## Overview

`NetworkMessageHandlerRegistererContainer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterMessages
`public void RegisterMessages()`

**Purpose:** **Purpose:** Registers messages with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of NetworkMessageHandlerRegistererContainer from the subsystem API first
NetworkMessageHandlerRegistererContainer networkMessageHandlerRegistererContainer = ...;
networkMessageHandlerRegistererContainer.RegisterMessages();
```

### UnregisterMessages
`public void UnregisterMessages()`

**Purpose:** **Purpose:** Unregisters messages from the current system.

```csharp
// Obtain an instance of NetworkMessageHandlerRegistererContainer from the subsystem API first
NetworkMessageHandlerRegistererContainer networkMessageHandlerRegistererContainer = ...;
networkMessageHandlerRegistererContainer.UnregisterMessages();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NetworkMessageHandlerRegistererContainer networkMessageHandlerRegistererContainer = ...;
networkMessageHandlerRegistererContainer.RegisterMessages();
```

## See Also

- [Area Index](../)