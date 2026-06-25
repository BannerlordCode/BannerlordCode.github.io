---
title: "SPScoreboardShipVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPScoreboardShipVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SPScoreboardShipVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardShipVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardShipVM.cs`

## Overview

`SPScoreboardShipVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShipType` | `public string ShipType { get; set; }` |
| `IsPlayerTeam` | `public bool IsPlayerTeam { get; set; }` |
| `IsPlayerAllyTeam` | `public bool IsPlayerAllyTeam { get; set; }` |
| `IsEnemyTeam` | `public bool IsEnemyTeam { get; set; }` |
| `CurrentHealth` | `public float CurrentHealth { get; set; }` |
| `MaxHealth` | `public float MaxHealth { get; set; }` |
| `IsDestroyed` | `public bool IsDestroyed { get; set; }` |
| `IsInactive` | `public bool IsInactive { get; set; }` |
| `Tooltip` | `public BasicTooltipViewModel Tooltip { get; set; }` |

## Usage Example

```csharp
var example = new SPScoreboardShipVM();
```

## See Also

- [Complete Class Catalog](../catalog)