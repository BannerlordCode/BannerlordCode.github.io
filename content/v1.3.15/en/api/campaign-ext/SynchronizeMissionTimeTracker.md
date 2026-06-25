---
title: "SynchronizeMissionTimeTracker"
description: "Auto-generated class reference for SynchronizeMissionTimeTracker."
---
# SynchronizeMissionTimeTracker

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class SynchronizeMissionTimeTracker : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/SynchronizeMissionTimeTracker.cs`

## Overview

`SynchronizeMissionTimeTracker` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentTime` | `public float CurrentTime { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SynchronizeMissionTimeTracker instance = ...;
```

## See Also

- [Area Index](../)