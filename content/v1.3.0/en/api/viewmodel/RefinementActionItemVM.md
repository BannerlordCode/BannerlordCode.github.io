---
title: "RefinementActionItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RefinementActionItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### RefreshDynamicProperties
`public void RefreshDynamicProperties()`

**Purpose:** Refreshes the display or cache of `dynamic properties`.

### ExecuteSelectAction
`public void ExecuteSelectAction()`

**Purpose:** Executes the `select action` operation or workflow.

## Usage Example

```csharp
var value = new RefinementActionItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)