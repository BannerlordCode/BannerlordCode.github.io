---
title: "TacticOption"
description: "Auto-generated class reference for TacticOption."
---
# TacticOption

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `class TacticOption`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## Overview

`TacticOption` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Tactic` | `public Lazy<TacticComponent> Tactic { get; }` |
| `Weight` | `public float Weight { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
TacticOption instance = ...;
```

## See Also

- [Area Index](../)