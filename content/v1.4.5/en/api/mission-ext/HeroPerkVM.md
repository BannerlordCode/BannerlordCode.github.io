---
title: "HeroPerkVM"
description: "Auto-generated class reference for HeroPerkVM."
---
# HeroPerkVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HeroPerkVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/HeroPerkVM.cs`

## Overview

`HeroPerkVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedPerk` | `public IReadOnlyPerkObject SelectedPerk { get; }` |
| `SelectedPerkItem` | `public MPPerkVM SelectedPerkItem { get; }` |
| `PerkIndex` | `public int PerkIndex { get; set; }` |
| `CandidatePerks` | `public MBBindingList<MPPerkVM> CandidatePerks { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of HeroPerkVM from the subsystem API first
HeroPerkVM heroPerkVM = ...;
heroPerkVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeroPerkVM heroPerkVM = ...;
heroPerkVM.RefreshValues();
```

## See Also

- [Area Index](../)