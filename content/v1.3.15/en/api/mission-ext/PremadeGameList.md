---
title: "PremadeGameList"
description: "Auto-generated class reference for PremadeGameList."
---
# PremadeGameList

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PremadeGameList`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/PremadeGameList.cs`

## Overview

`PremadeGameList` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Empty` | `public static PremadeGameList Empty { get; }` |
| `PremadeGameEntries` | `public PremadeGameEntry PremadeGameEntries { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
PremadeGameList instance = ...;
```

## See Also

- [Area Index](../)