---
title: "DebugStatsVM"
description: "Auto-generated class reference for DebugStatsVM."
---
# DebugStatsVM

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class DebugStatsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/DebugStatsVM.cs`

## Overview

`DebugStatsVM` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameVersion` | `public string GameVersion { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DebugStatsVM instance = ...;
```

## See Also

- [Area Index](../)