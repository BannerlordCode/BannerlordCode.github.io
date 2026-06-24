<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattlePlayerStatsDuel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattlePlayerStatsDuel

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePlayerStatsDuel : BattlePlayerStatsBase`
**Base:** `BattlePlayerStatsBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/BattlePlayerStatsDuel.cs`

## Overview

`BattlePlayerStatsDuel` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DuelsWon` | `public int DuelsWon { get; set; }` |
| `InfantryWins` | `public int InfantryWins { get; set; }` |
| `ArcherWins` | `public int ArcherWins { get; set; }` |
| `CavalryWins` | `public int CavalryWins { get; set; }` |

## Usage Example

```csharp
var example = new BattlePlayerStatsDuel();
```

## See Also

- [Complete Class Catalog](../catalog)