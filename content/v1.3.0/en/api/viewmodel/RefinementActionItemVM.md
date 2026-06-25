---
title: "RefinementActionItemVM"
description: "Auto-generated class reference for RefinementActionItemVM."
---
# RefinementActionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RefinementActionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementActionItemVM.cs`

## Overview

`RefinementActionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RefineFormula` | `public Crafting.RefiningFormula RefineFormula { get; }` |
| `InputMaterials` | `public MBBindingList<CraftingResourceItemVM> InputMaterials { get; set; }` |
| `OutputMaterials` | `public MBBindingList<CraftingResourceItemVM> OutputMaterials { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of RefinementActionItemVM from the subsystem API first
RefinementActionItemVM refinementActionItemVM = ...;
refinementActionItemVM.RefreshValues();
```

### RefreshDynamicProperties
`public void RefreshDynamicProperties()`

**Purpose:** **Purpose:** Keeps the display or cache of dynamic properties in sync with the underlying state.

```csharp
// Obtain an instance of RefinementActionItemVM from the subsystem API first
RefinementActionItemVM refinementActionItemVM = ...;
refinementActionItemVM.RefreshDynamicProperties();
```

### ExecuteSelectAction
`public void ExecuteSelectAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select action.

```csharp
// Obtain an instance of RefinementActionItemVM from the subsystem API first
RefinementActionItemVM refinementActionItemVM = ...;
refinementActionItemVM.ExecuteSelectAction();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RefinementActionItemVM refinementActionItemVM = ...;
refinementActionItemVM.RefreshValues();
```

## See Also

- [Area Index](../)