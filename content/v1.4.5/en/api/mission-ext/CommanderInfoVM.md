---
title: "CommanderInfoVM"
description: "Auto-generated class reference for CommanderInfoVM."
---
# CommanderInfoVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommanderInfoVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/CommanderInfoVM.cs`

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

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of CommanderInfoVM from the subsystem API first
CommanderInfoVM commanderInfoVM = ...;
commanderInfoVM.OnFinalize();
```

### UpdateWarmupDependentFlags
`public void UpdateWarmupDependentFlags(bool isInWarmup)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of warmup dependent flags.

```csharp
// Obtain an instance of CommanderInfoVM from the subsystem API first
CommanderInfoVM commanderInfoVM = ...;
commanderInfoVM.UpdateWarmupDependentFlags(false);
```

### OnUpdateMorale
`public void OnUpdateMorale(BattleSideEnum side, float morale)`

**Purpose:** **Purpose:** Invoked when the update morale event is raised.

```csharp
// Obtain an instance of CommanderInfoVM from the subsystem API first
CommanderInfoVM commanderInfoVM = ...;
commanderInfoVM.OnUpdateMorale(side, 0);
```

### OnTeamChanged
`public void OnTeamChanged()`

**Purpose:** **Purpose:** Invoked when the team changed event is raised.

```csharp
// Obtain an instance of CommanderInfoVM from the subsystem API first
CommanderInfoVM commanderInfoVM = ...;
commanderInfoVM.OnTeamChanged();
```

### RefreshColors
`public void RefreshColors(string allyTeamColor, string allyTeamColorSecondary, string enemyTeamColor, string enemyTeamColorSecondary)`

**Purpose:** **Purpose:** Keeps the display or cache of colors in sync with the underlying state.

```csharp
// Obtain an instance of CommanderInfoVM from the subsystem API first
CommanderInfoVM commanderInfoVM = ...;
commanderInfoVM.RefreshColors("example", "example", "example", "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CommanderInfoVM commanderInfoVM = ...;
commanderInfoVM.OnFinalize();
```

## See Also

- [Area Index](../)