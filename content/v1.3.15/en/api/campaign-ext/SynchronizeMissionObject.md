---
title: "SynchronizeMissionObject"
description: "Auto-generated class reference for SynchronizeMissionObject."
---
# SynchronizeMissionObject

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class SynchronizeMissionObject : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/SynchronizeMissionObject.cs`

## Overview

`SynchronizeMissionObject` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MissionObjectId` | `public MissionObjectId MissionObjectId { get; }` |
| `RecordTypeIndex` | `public int RecordTypeIndex { get; }` |
| `RecordPair` | `public ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> RecordPair { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SynchronizeMissionObject instance = ...;
```

## See Also

- [Area Index](../)