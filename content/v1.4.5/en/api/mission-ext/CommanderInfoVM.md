---
title: "CommanderInfoVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CommanderInfoVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CommanderInfoVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommanderInfoVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/CommanderInfoVM.cs`

## Overview

`CommanderInfoVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AllyControlPoints` | `public MBBindingList<CapturePointVM> AllyControlPoints { get; set; }` |
| `NeutralControlPoints` | `public MBBindingList<CapturePointVM> NeutralControlPoints { get; set; }` |
| `EnemyControlPoints` | `public MBBindingList<CapturePointVM> EnemyControlPoints { get; set; }` |
| `AllyTeamColor` | `public string AllyTeamColor { get; set; }` |
| `AllyTeamColorSecondary` | `public string AllyTeamColorSecondary { get; set; }` |
| `EnemyTeamColor` | `public string EnemyTeamColor { get; set; }` |
| `EnemyTeamColorSecondary` | `public string EnemyTeamColorSecondary { get; set; }` |
| `AllyMoraleIncreaseLevel` | `public int AllyMoraleIncreaseLevel { get; set; }` |
| `EnemyMoraleIncreaseLevel` | `public int EnemyMoraleIncreaseLevel { get; set; }` |
| `AllyMoralePercentage` | `public int AllyMoralePercentage { get; set; }` |
| `EnemyMoralePercentage` | `public int EnemyMoralePercentage { get; set; }` |
| `AllyMemberCount` | `public int AllyMemberCount { get; set; }` |
| `EnemyMemberCount` | `public int EnemyMemberCount { get; set; }` |
| `PowerLevelComparer` | `public PowerLevelComparer PowerLevelComparer { get; set; }` |
| `UsePowerComparer` | `public bool UsePowerComparer { get; set; }` |
| `UseMoraleComparer` | `public bool UseMoraleComparer { get; set; }` |
| `ShowTacticalInfo` | `public bool ShowTacticalInfo { get; set; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; set; }` |
| `ShowControlPointStatus` | `public bool ShowControlPointStatus { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### UpdateWarmupDependentFlags
`public void UpdateWarmupDependentFlags(bool isInWarmup)`

**Purpose:** Updates the state or data of `warmup dependent flags`.

### OnUpdateMorale
`public void OnUpdateMorale(BattleSideEnum side, float morale)`

**Purpose:** Called when the `update morale` event is raised.

### OnTeamChanged
`public void OnTeamChanged()`

**Purpose:** Called when the `team changed` event is raised.

### RefreshColors
`public void RefreshColors(string allyTeamColor, string allyTeamColorSecondary, string enemyTeamColor, string enemyTeamColorSecondary)`

**Purpose:** Refreshes the display or cache of `colors`.

## Usage Example

```csharp
var value = new CommanderInfoVM();
value.OnFinalize();
```

## See Also

- [Complete Class Catalog](../catalog)