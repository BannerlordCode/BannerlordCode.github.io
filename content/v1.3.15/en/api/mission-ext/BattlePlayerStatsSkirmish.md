---
title: "BattlePlayerStatsSkirmish"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattlePlayerStatsSkirmish`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattlePlayerStatsSkirmish

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePlayerStatsSkirmish : BattlePlayerStatsBase`
**Base:** `BattlePlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/BattlePlayerStatsSkirmish.cs`

## Overview

`BattlePlayerStatsSkirmish` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MVPs` | `public int MVPs { get; set; }` |
| `Score` | `public int Score { get; set; }` |

## Usage Example

```csharp
var value = new BattlePlayerStatsSkirmish();
```

## See Also

- [Complete Class Catalog](../catalog)