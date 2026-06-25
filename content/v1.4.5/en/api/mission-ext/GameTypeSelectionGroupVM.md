---
title: "GameTypeSelectionGroupVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameTypeSelectionGroupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameTypeSelectionGroupVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameTypeSelectionGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/GameTypeSelectionGroupVM.cs`

## Overview

`GameTypeSelectionGroupVM` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedGameTypeString` | `public string SelectedGameTypeString { get; }` |
| `SelectedPlayerType` | `public CustomBattlePlayerType SelectedPlayerType { get; }` |
| `SelectedPlayerSide` | `public CustomBattlePlayerSide SelectedPlayerSide { get; }` |
| `GameTypeSelection` | `public SelectorVM<GameTypeItemVM> GameTypeSelection { get; set; }` |
| `PlayerTypeSelection` | `public SelectorVM<PlayerTypeItemVM> PlayerTypeSelection { get; set; }` |
| `PlayerSideSelection` | `public SelectorVM<PlayerSideItemVM> PlayerSideSelection { get; set; }` |
| `GameTypeText` | `public string GameTypeText { get; set; }` |
| `PlayerTypeText` | `public string PlayerTypeText { get; set; }` |
| `PlayerSideText` | `public string PlayerSideText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RandomizeAll
`public void RandomizeAll()`

**Purpose:** Handles logic related to `randomize all`.

## Usage Example

```csharp
var value = new GameTypeSelectionGroupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)