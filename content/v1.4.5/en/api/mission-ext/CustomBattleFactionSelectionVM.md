---
title: "CustomBattleFactionSelectionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleFactionSelectionVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleFactionSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleFactionSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem/CustomBattleFactionSelectionVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### SelectFaction
`public void SelectFaction(int index)`

**Purpose:** Handles logic related to `select faction`.

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** Executes the `randomize` operation or workflow.

## Usage Example

```csharp
var value = new CustomBattleFactionSelectionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)