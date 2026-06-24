<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattlePlayerStatsBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattlePlayerStatsBase

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePlayerStatsBase`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/BattlePlayerStatsBase.cs`

## Overview

`BattlePlayerStatsBase` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameType` | `public string GameType { get; set; }` |
| `Kills` | `public int Kills { get; set; }` |
| `Assists` | `public int Assists { get; set; }` |
| `Deaths` | `public int Deaths { get; set; }` |
| `PlayTime` | `public int PlayTime { get; set; }` |

## Usage Example

```csharp
var value = new BattlePlayerStatsBase();
```

## See Also

- [Complete Class Catalog](../catalog)