<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingPieceListVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingPieceListVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingPieceListVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceListVM.cs`

## Overview

`CraftingPieceListVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasNewlyUnlockedPieces` | `public bool HasNewlyUnlockedPieces { get; set; }` |
| `Pieces` | `public MBBindingList<CraftingPieceVM> Pieces { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `SelectedPiece` | `public CraftingPieceVM SelectedPiece { get; set; }` |

## Key Methods

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Executes the `select` operation or workflow.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var value = new CraftingPieceListVM();
value.ExecuteSelect();
```

## See Also

- [Complete Class Catalog](../catalog)