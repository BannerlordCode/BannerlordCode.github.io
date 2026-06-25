---
title: "RemoveMissionObjectBodyFlags"
description: "Auto-generated class reference for RemoveMissionObjectBodyFlags."
---
# RemoveMissionObjectBodyFlags

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class RemoveMissionObjectBodyFlags : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/RemoveMissionObjectBodyFlags.cs`

## Overview

`RemoveMissionObjectBodyFlags` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MissionObjectId` | `public MissionObjectId MissionObjectId { get; }` |
| `BodyFlags` | `public BodyFlags BodyFlags { get; }` |
| `ApplyToChildren` | `public bool ApplyToChildren { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
RemoveMissionObjectBodyFlags instance = ...;
```

## See Also

- [Area Index](../)