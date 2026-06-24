<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TierFilterTypeVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TierFilterTypeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TierFilterTypeVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/TierFilterTypeVM.cs`

## Overview

`TierFilterTypeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FilterType` | `public WeaponDesignVM.CraftingPieceTierFilter FilterType { get; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `TierName` | `public string TierName { get; set; }` |

## Key Methods

### ExecuteSelectTier
`public void ExecuteSelectTier()`

**Purpose:** Executes the `select tier` operation or workflow.

## Usage Example

```csharp
var value = new TierFilterTypeVM();
value.ExecuteSelectTier();
```

## See Also

- [Complete Class Catalog](../catalog)