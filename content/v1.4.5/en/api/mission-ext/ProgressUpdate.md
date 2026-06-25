---
title: "ProgressUpdate"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProgressUpdate`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ProgressUpdate

**Namespace:** TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ProgressUpdate`
**Base:** none
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper/ProgressUpdate.cs`

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
var value = new ProgressUpdate();
```

## See Also

- [Complete Class Catalog](../catalog)