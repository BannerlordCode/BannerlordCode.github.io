---
title: "ProgressUpdate"
description: "Auto-generated class reference for ProgressUpdate."
---
# ProgressUpdate

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ProgressUpdate`
**Base:** none
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/ProgressUpdate.cs`

## Overview

`ProgressUpdate` lives in `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BytesRead` | `public long BytesRead { get; }` |
| `TotalBytes` | `public long TotalBytes { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ProgressUpdate instance = ...;
```

## See Also

- [Area Index](../)