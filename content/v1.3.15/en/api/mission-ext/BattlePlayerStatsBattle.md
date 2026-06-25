---
title: "BattlePlayerStatsBattle"
description: "Auto-generated class reference for BattlePlayerStatsBattle."
---
# BattlePlayerStatsBattle

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePlayerStatsBattle : BattlePlayerStatsBase`
**Base:** `BattlePlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/BattlePlayerStatsBattle.cs`

## Overview

`BattlePlayerStatsBattle` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RoundsWon` | `public int RoundsWon { get; set; }` |
| `RoundsLost` | `public int RoundsLost { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
BattlePlayerStatsBattle instance = ...;
```

## See Also

- [Area Index](../)