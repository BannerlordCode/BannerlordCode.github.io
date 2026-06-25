---
title: "MessageContractCreator"
description: "Auto-generated class reference for MessageContractCreator."
---
# MessageContractCreator

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `internal abstract class MessageContractCreator`
**Base:** none
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/MessageContractCreator.cs`

## Overview

`MessageContractCreator` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Invoke
`public abstract MessageContract Invoke()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MessageContractCreator from the subsystem API first
MessageContractCreator messageContractCreator = ...;
var result = messageContractCreator.Invoke();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MessageContractCreator instance = ...;
```

## See Also

- [Area Index](../)