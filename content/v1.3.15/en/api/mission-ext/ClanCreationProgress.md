---
title: "ClanCreationProgress"
description: "Auto-generated class reference for ClanCreationProgress."
---
# ClanCreationProgress

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanCreationProgress`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/ClanCreationProgress.cs`

## Overview

`ClanCreationProgress` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Progress` | `public Progress Progress { get; }` |
| `ClanCreationPlayerData` | `public ClanCreationPlayerData ClanCreationPlayerData { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ClanCreationProgress instance = ...;
```

## See Also

- [Area Index](../)