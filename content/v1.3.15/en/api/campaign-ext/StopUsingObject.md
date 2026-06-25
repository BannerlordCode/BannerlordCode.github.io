---
title: "StopUsingObject"
description: "Auto-generated class reference for StopUsingObject."
---
# StopUsingObject

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class StopUsingObject : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/StopUsingObject.cs`

## Overview

`StopUsingObject` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentIndex` | `public int AgentIndex { get; }` |
| `IsSuccessful` | `public bool IsSuccessful { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
StopUsingObject instance = ...;
```

## See Also

- [Area Index](../)