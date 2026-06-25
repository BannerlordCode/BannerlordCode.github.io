---
title: "ServersideSession"
description: "Auto-generated class reference for ServersideSession."
---
# ServersideSession

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class ServersideSession : NetworkSession`
**Base:** `NetworkSession`
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/ServersideSession.cs`

## Overview

`ServersideSession` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ServersideSession instance = ...;
```

## See Also

- [Area Index](../)