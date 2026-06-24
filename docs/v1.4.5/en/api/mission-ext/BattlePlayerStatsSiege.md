<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattlePlayerStatsSiege`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattlePlayerStatsSiege

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePlayerStatsSiege : BattlePlayerStatsBase`
**Base:** `BattlePlayerStatsBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/BattlePlayerStatsSiege.cs`

## Overview

`BattlePlayerStatsSiege` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WallsBreached` | `public int WallsBreached { get; set; }` |
| `SiegeEngineKills` | `public int SiegeEngineKills { get; set; }` |
| `SiegeEnginesDestroyed` | `public int SiegeEnginesDestroyed { get; set; }` |
| `ObjectiveGoldGained` | `public int ObjectiveGoldGained { get; set; }` |
| `Score` | `public int Score { get; set; }` |

## Usage Example

```csharp
var example = new BattlePlayerStatsSiege();
```

## See Also

- [Complete Class Catalog](../catalog)