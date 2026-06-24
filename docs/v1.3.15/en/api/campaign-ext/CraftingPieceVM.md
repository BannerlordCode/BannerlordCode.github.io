<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingPieceVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPieceVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingPieceVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceVM.cs`

## Overview

`CraftingPieceVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFilteredOut` | `public bool IsFilteredOut { get; set; }` |
| `ItemAttributeIcons` | `public MBBindingList<CraftingItemFlagVM> ItemAttributeIcons { get; set; }` |
| `PlayerHasPiece` | `public bool PlayerHasPiece { get; set; }` |
| `IsEmpty` | `public bool IsEmpty { get; set; }` |
| `TierText` | `public string TierText { get; set; }` |
| `Tier` | `public int Tier { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ImageIdentifier` | `public CraftingPieceImageIdentifierVM ImageIdentifier { get; set; }` |
| `PieceType` | `public int PieceType { get; set; }` |
| `IsNewlyUnlocked` | `public bool IsNewlyUnlocked { get; set; }` |

## Key Methods

### RefreshFlagIcons
`public void RefreshFlagIcons()`

**Purpose:** Refreshes the display or cache of `flag icons`.

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**Purpose:** Executes the `open tooltip` operation or workflow.

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**Purpose:** Executes the `close tooltip` operation or workflow.

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Executes the `select` operation or workflow.

## Usage Example

```csharp
var value = new CraftingPieceVM();
value.RefreshFlagIcons();
```

## See Also

- [Complete Class Catalog](../catalog)