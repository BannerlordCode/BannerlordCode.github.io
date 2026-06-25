---
title: "AvailableCustomGames"
description: "Auto-generated class reference for AvailableCustomGames."
---
# AvailableCustomGames

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AvailableCustomGames`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/AvailableCustomGames.cs`

## Overview

`AvailableCustomGames` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomGameServerInfos` | `public List<GameServerEntry> CustomGameServerInfos { get; }` |

## Key Methods

### GetCustomGamesByPermission
`public AvailableCustomGames GetCustomGamesByPermission(int playerPermission)`

**Purpose:** Reads and returns the custom games by permission value held by the this instance.

```csharp
// Obtain an instance of AvailableCustomGames from the subsystem API first
AvailableCustomGames availableCustomGames = ...;
var result = availableCustomGames.GetCustomGamesByPermission(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AvailableCustomGames availableCustomGames = ...;
availableCustomGames.GetCustomGamesByPermission(0);
```

## See Also

- [Area Index](../)