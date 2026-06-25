---
title: "ClanStats"
description: "Auto-generated class reference for ClanStats."
---
# ClanStats

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanStats`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ClanStats.cs`

## Overview

`ClanStats` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WinCount` | `public int WinCount { get; }` |
| `LossCount` | `public int LossCount { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ClanStats instance = ...;
```

## See Also

- [Area Index](../)