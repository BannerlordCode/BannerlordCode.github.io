---
title: "RefinementVM"
description: "Auto-generated class reference for RefinementVM."
---
# RefinementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RefinementVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement/RefinementVM.cs`

## Overview

`RefinementVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentSelectedAction` | `public RefinementActionItemVM CurrentSelectedAction { get; set; }` |
| `IsValidRefinementActionSelected` | `public bool IsValidRefinementActionSelected { get; set; }` |
| `AvailableRefinementActions` | `public MBBindingList<RefinementActionItemVM> AvailableRefinementActions { get; set; }` |
| `RefinementText` | `public string RefinementText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of RefinementVM from the subsystem API first
RefinementVM refinementVM = ...;
refinementVM.RefreshValues();
```

### ExecuteSelectedRefinement
`public void ExecuteSelectedRefinement(Hero currentCraftingHero)`

**Purpose:** Runs the operation or workflow associated with `selected refinement`.

```csharp
// Obtain an instance of RefinementVM from the subsystem API first
RefinementVM refinementVM = ...;
refinementVM.ExecuteSelectedRefinement(currentCraftingHero);
```

### RefreshRefinementActionsList
`public void RefreshRefinementActionsList(Hero craftingHero)`

**Purpose:** Keeps the display or cache of `refinement actions list` in sync with the underlying state.

```csharp
// Obtain an instance of RefinementVM from the subsystem API first
RefinementVM refinementVM = ...;
refinementVM.RefreshRefinementActionsList(craftingHero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RefinementVM refinementVM = ...;
refinementVM.RefreshValues();
```

## See Also

- [Area Index](../)