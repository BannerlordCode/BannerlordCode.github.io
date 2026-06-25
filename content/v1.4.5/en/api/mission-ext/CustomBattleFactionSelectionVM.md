---
title: "CustomBattleFactionSelectionVM"
description: "Auto-generated class reference for CustomBattleFactionSelectionVM."
---
# CustomBattleFactionSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleFactionSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem/CustomBattleFactionSelectionVM.cs`

## Overview

`CustomBattleFactionSelectionVM` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Factions` | `public MBBindingList<FactionItemVM> Factions { get; set; }` |
| `SelectedFactionName` | `public string SelectedFactionName { get; set; }` |
| `SelectedItem` | `public FactionItemVM SelectedItem { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of CustomBattleFactionSelectionVM from the subsystem API first
CustomBattleFactionSelectionVM customBattleFactionSelectionVM = ...;
customBattleFactionSelectionVM.RefreshValues();
```

### SelectFaction
`public void SelectFaction(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CustomBattleFactionSelectionVM from the subsystem API first
CustomBattleFactionSelectionVM customBattleFactionSelectionVM = ...;
customBattleFactionSelectionVM.SelectFaction(0);
```

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** Runs the operation or workflow associated with `randomize`.

```csharp
// Obtain an instance of CustomBattleFactionSelectionVM from the subsystem API first
CustomBattleFactionSelectionVM customBattleFactionSelectionVM = ...;
customBattleFactionSelectionVM.ExecuteRandomize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleFactionSelectionVM customBattleFactionSelectionVM = ...;
customBattleFactionSelectionVM.RefreshValues();
```

## See Also

- [Area Index](../)