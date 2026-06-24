<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RefinementVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RefinementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RefinementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Refinement/RefinementVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSelectedRefinement
`public void ExecuteSelectedRefinement(Hero currentCraftingHero)`

**Purpose:** Executes the `selected refinement` operation or workflow.

### RefreshRefinementActionsList
`public void RefreshRefinementActionsList(Hero craftingHero)`

**Purpose:** Refreshes the display or cache of `refinement actions list`.

## Usage Example

```csharp
var value = new RefinementVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)