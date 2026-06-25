---
title: "SpawnPointUnits"
description: "Auto-generated class reference for SpawnPointUnits."
---
# SpawnPointUnits

**Namespace:** SandBox.View.Missions.SandBox
**Module:** SandBox.View
**Type:** `public class SpawnPointUnits`
**Base:** none
**File:** `SandBox.View/Missions/SandBox/SpawnPointUnits.cs`

## Overview

`SpawnPointUnits` lives in `SandBox.View.Missions.SandBox` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Missions.SandBox` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpName` | `public string SpName { get; }` |
| `Place` | `public SpawnPointUnits.SceneType Place { get; }` |
| `MinCount` | `public int MinCount { get; }` |
| `MaxCount` | `public int MaxCount { get; }` |
| `Type` | `public string Type { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SpawnPointUnits instance = ...;
```

## See Also

- [Area Index](../)