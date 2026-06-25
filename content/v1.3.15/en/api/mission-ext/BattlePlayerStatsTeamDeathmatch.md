---
title: "BattlePlayerStatsTeamDeathmatch"
description: "Auto-generated class reference for BattlePlayerStatsTeamDeathmatch."
---
# BattlePlayerStatsTeamDeathmatch

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePlayerStatsTeamDeathmatch : BattlePlayerStatsBase`
**Base:** `BattlePlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/BattlePlayerStatsTeamDeathmatch.cs`

## Overview

`BattlePlayerStatsTeamDeathmatch` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
BattlePlayerStatsTeamDeathmatch instance = ...;
```

## See Also

- [Area Index](../)