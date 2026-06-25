---
title: "BattlePlayerEntry"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattlePlayerEntry`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattlePlayerEntry

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePlayerEntry`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/BattlePlayerEntry.cs`

## Overview

`BattlePlayerEntry` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `TeamNo` | `public int TeamNo { get; set; }` |
| `Party` | `public Guid Party { get; set; }` |
| `PlayerStats` | `public BattlePlayerStatsBase PlayerStats { get; set; }` |
| `PlayTime` | `public int PlayTime { get; set; }` |
| `LastJoinTime` | `public DateTime LastJoinTime { get; set; }` |
| `Disconnected` | `public bool Disconnected { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |
| `Won` | `public bool Won { get; set; }` |
| `BattleJoinType` | `public BattleJoinType BattleJoinType { get; set; }` |

## Usage Example

```csharp
var value = new BattlePlayerEntry();
```

## See Also

- [Complete Class Catalog](../catalog)