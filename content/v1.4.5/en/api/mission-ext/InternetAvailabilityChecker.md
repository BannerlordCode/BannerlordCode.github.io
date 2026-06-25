---
title: "InternetAvailabilityChecker"
description: "Auto-generated class reference for InternetAvailabilityChecker."
---
# InternetAvailabilityChecker

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class InternetAvailabilityChecker`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/InternetAvailabilityChecker.cs`

## Overview

`InternetAvailabilityChecker` lives in `TaleWorlds.MountAndBlade.Multiplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InternetConnectionAvailable` | `public static bool InternetConnectionAvailable { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
InternetAvailabilityChecker instance = ...;
```

## See Also

- [Area Index](../)