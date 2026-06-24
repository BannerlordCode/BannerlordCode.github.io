<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattlePlayerStatsCaptain`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattlePlayerStatsCaptain

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePlayerStatsCaptain : BattlePlayerStatsBase`
**Base:** `BattlePlayerStatsBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/BattlePlayerStatsCaptain.cs`

## Overview

`BattlePlayerStatsCaptain` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptainsKilled` | `public int CaptainsKilled { get; set; }` |
| `MVPs` | `public int MVPs { get; set; }` |
| `Score` | `public int Score { get; set; }` |

## Usage Example

```csharp
var example = new BattlePlayerStatsCaptain();
```

## See Also

- [Complete Class Catalog](../catalog)