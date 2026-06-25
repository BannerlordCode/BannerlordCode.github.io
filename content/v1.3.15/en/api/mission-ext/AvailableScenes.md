---
title: "AvailableScenes"
description: "Auto-generated class reference for AvailableScenes."
---
# AvailableScenes

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AvailableScenes`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/AvailableScenes.cs`

## Overview

`AvailableScenes` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Empty` | `public static AvailableScenes Empty { get; }` |
| `ScenesByGameTypes` | `public Dictionary<string, string > ScenesByGameTypes { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
AvailableScenes instance = ...;
```

## See Also

- [Area Index](../)