---
title: "GameTypeSelectionGroupVM"
description: "Auto-generated class reference for GameTypeSelectionGroupVM."
---
# GameTypeSelectionGroupVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameTypeSelectionGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/GameTypeSelectionGroupVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of GameTypeSelectionGroupVM from the subsystem API first
GameTypeSelectionGroupVM gameTypeSelectionGroupVM = ...;
gameTypeSelectionGroupVM.RefreshValues();
```

### RandomizeAll
`public void RandomizeAll()`

**Purpose:** Executes the RandomizeAll logic.

```csharp
// Obtain an instance of GameTypeSelectionGroupVM from the subsystem API first
GameTypeSelectionGroupVM gameTypeSelectionGroupVM = ...;
gameTypeSelectionGroupVM.RandomizeAll();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameTypeSelectionGroupVM gameTypeSelectionGroupVM = ...;
gameTypeSelectionGroupVM.RefreshValues();
```

## See Also

- [Area Index](../)