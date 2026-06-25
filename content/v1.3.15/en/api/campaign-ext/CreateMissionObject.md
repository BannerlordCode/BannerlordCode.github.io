---
title: "CreateMissionObject"
description: "Auto-generated class reference for CreateMissionObject."
---
# CreateMissionObject

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class CreateMissionObject : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/CreateMissionObject.cs`

## Overview

`CreateMissionObject` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ObjectId` | `public MissionObjectId ObjectId { get; }` |
| `Prefab` | `public string Prefab { get; }` |
| `Frame` | `public MatrixFrame Frame { get; }` |
| `ChildObjectIds` | `public List<MissionObjectId> ChildObjectIds { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CreateMissionObject instance = ...;
```

## See Also

- [Area Index](../)