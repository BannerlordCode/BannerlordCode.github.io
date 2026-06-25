---
title: "MPEndOfBattleVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPEndOfBattleVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPEndOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPEndOfBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MPEndOfBattleVM.cs`

## Overview

`MPEndOfBattleVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `CountdownTitle` | `public string CountdownTitle { get; set; }` |
| `Countdown` | `public int Countdown { get; set; }` |
| `Header` | `public string Header { get; set; }` |
| `BattleResult` | `public int BattleResult { get; set; }` |
| `ResultText` | `public string ResultText { get; set; }` |
| `AllySide` | `public MPEndOfBattleSideVM AllySide { get; set; }` |
| `EnemySide` | `public MPEndOfBattleSideVM EnemySide { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var value = new MPEndOfBattleVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)