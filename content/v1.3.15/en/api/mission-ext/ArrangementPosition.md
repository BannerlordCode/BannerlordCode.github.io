---
title: "ArrangementPosition"
description: "Auto-generated class reference for ArrangementPosition."
---
# ArrangementPosition

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ArrangementPosition`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/FormationArrangementModel.cs`

## Overview

`ArrangementPosition` lives in `TaleWorlds.MountAndBlade.ComponentInterfaces` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ComponentInterfaces` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Invalid` | `public static FormationArrangementModel.ArrangementPosition Invalid { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ArrangementPosition instance = ...;
```

## See Also

- [Area Index](../)