---
title: "MessageProxy"
description: "Auto-generated class reference for MessageProxy."
---
# MessageProxy

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageProxy`
**Base:** none
**File:** `TaleWorlds.Network/MessageProxy.cs`

## Overview

`MessageProxy` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Invoke
`public abstract Task Invoke(string methodName, params object args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MessageProxy from the subsystem API first
MessageProxy messageProxy = ...;
var result = messageProxy.Invoke("example", args);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MessageProxy instance = ...;
```

## See Also

- [Area Index](../)