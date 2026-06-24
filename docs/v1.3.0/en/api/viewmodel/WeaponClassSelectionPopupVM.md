<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponClassSelectionPopupVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponClassSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponClassSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassSelectionPopupVM.cs`

## Overview

`WeaponClassSelectionPopupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PopupHeader` | `public string PopupHeader { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `WeaponClasses` | `public MBBindingList<WeaponClassVM> WeaponClasses { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateNewlyUnlockedPiecesCount
`public void UpdateNewlyUnlockedPiecesCount(List<CraftingPiece> newlyUnlockedPieces)`

**Purpose:** Updates the state or data of `newly unlocked pieces count`.

### ExecuteSelectWeaponClass
`public void ExecuteSelectWeaponClass(int index)`

**Purpose:** Executes the `select weapon class` operation or workflow.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** Executes the `open popup` operation or workflow.

## Usage Example

```csharp
var value = new WeaponClassSelectionPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)