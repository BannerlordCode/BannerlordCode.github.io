---
title: "WeaponDesignVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponDesignVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponDesignVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponDesignVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs`

## Overview

`WeaponDesignVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TierFilters` | `public MBBindingList<TierFilterTypeVM> TierFilters { get; set; }` |
| `CurrentCraftedWeaponTemplateId` | `public string CurrentCraftedWeaponTemplateId { get; set; }` |
| `ChooseOrderText` | `public string ChooseOrderText { get; set; }` |
| `ChooseWeaponTypeText` | `public string ChooseWeaponTypeText { get; set; }` |
| `CurrentCraftedWeaponTypeText` | `public string CurrentCraftedWeaponTypeText { get; set; }` |
| `PieceLists` | `public MBBindingList<CraftingPieceListVM> PieceLists { get; set; }` |
| `SelectedPieceTypeIndex` | `public int SelectedPieceTypeIndex { get; set; }` |
| `ShowOnlyUnlockedPieces` | `public bool ShowOnlyUnlockedPieces { get; set; }` |
| `MissingPropertyWarningText` | `public string MissingPropertyWarningText { get; set; }` |
| `CraftingResultPopup` | `public WeaponDesignResultPopupVM CraftingResultPopup { get; set; }` |
| `IsOrderButtonActive` | `public bool IsOrderButtonActive { get; set; }` |
| `IsInOrderMode` | `public bool IsInOrderMode { get; set; }` |
| `IsInFreeMode` | `public bool IsInFreeMode { get; set; }` |
| `FreeModeButtonText` | `public string FreeModeButtonText { get; set; }` |
| `ActiveCraftingOrder` | `public CraftingOrderItemVM ActiveCraftingOrder { get; set; }` |
| `CraftingOrderPopup` | `public CraftingOrderPopupVM CraftingOrderPopup { get; set; }` |
| `WeaponClassSelectionPopup` | `public WeaponClassSelectionPopupVM WeaponClassSelectionPopup { get; set; }` |
| `PrimaryPropertyList` | `public MBBindingList<CraftingListPropertyItem> PrimaryPropertyList { get; set; }` |
| `DesignResultPropertyList` | `public MBBindingList<WeaponDesignResultPropertyItemVM> DesignResultPropertyList { get; set; }` |
| `SecondaryUsageSelector` | `public SelectorVM<CraftingSecondaryUsageItemVM> SecondaryUsageSelector { get; set; }` |
| `CraftedItemVisual` | `public ItemCollectionElementViewModel CraftedItemVisual { get; set; }` |
| `IsInFinalCraftingStage` | `public bool IsInFinalCraftingStage { get; set; }` |
| `ItemName` | `public string ItemName { get; set; }` |
| `IsScabbardVisible` | `public bool IsScabbardVisible { get; set; }` |
| `CurrentWeaponHasScabbard` | `public bool CurrentWeaponHasScabbard { get; set; }` |
| `CurrentDifficulty` | `public int CurrentDifficulty { get; set; }` |
| `CurrentOrderDifficulty` | `public int CurrentOrderDifficulty { get; set; }` |
| `MaxDifficulty` | `public int MaxDifficulty { get; set; }` |
| `IsCurrentHeroAtMaxCraftingSkill` | `public bool IsCurrentHeroAtMaxCraftingSkill { get; set; }` |
| `CurrentHeroCraftingSkill` | `public int CurrentHeroCraftingSkill { get; set; }` |
| `CurrentDifficultyText` | `public string CurrentDifficultyText { get; set; }` |
| `CurrentOrderDifficultyText` | `public string CurrentOrderDifficultyText { get; set; }` |
| `CurrentCraftingSkillValueText` | `public string CurrentCraftingSkillValueText { get; set; }` |
| `DifficultyText` | `public string DifficultyText { get; set; }` |
| `DefaultUsageText` | `public string DefaultUsageText { get; set; }` |
| `AlternativeUsageText` | `public string AlternativeUsageText { get; set; }` |
| `OrderDisabledReasonHint` | `public BasicTooltipViewModel OrderDisabledReasonHint { get; set; }` |
| `ShowOnlyUnlockedPiecesHint` | `public HintViewModel ShowOnlyUnlockedPiecesHint { get; set; }` |
| `ActivePieceList` | `public CraftingPieceListVM ActivePieceList { get; set; }` |
| `BladePieceList` | `public CraftingPieceListVM BladePieceList { get; set; }` |
| `GuardPieceList` | `public CraftingPieceListVM GuardPieceList { get; set; }` |
| `HandlePieceList` | `public CraftingPieceListVM HandlePieceList { get; set; }` |
| `PommelPieceList` | `public CraftingPieceListVM PommelPieceList { get; set; }` |
| `SelectedBladePiece` | `public CraftingPieceVM SelectedBladePiece { get; set; }` |
| `SelectedGuardPiece` | `public CraftingPieceVM SelectedGuardPiece { get; set; }` |
| `SelectedHandlePiece` | `public CraftingPieceVM SelectedHandlePiece { get; set; }` |
| `SelectedPommelPiece` | `public CraftingPieceVM SelectedPommelPiece { get; set; }` |
| `ActivePieceSize` | `public int ActivePieceSize { get; }` |
| `BladeSize` | `public int BladeSize { get; set; }` |
| `GuardSize` | `public int GuardSize { get; set; }` |
| `HandleSize` | `public int HandleSize { get; set; }` |
| `PommelSize` | `public int PommelSize { get; set; }` |
| `ComponentSizeLbl` | `public string ComponentSizeLbl { get; set; }` |
| `IsWeaponCivilian` | `public bool IsWeaponCivilian { get; set; }` |
| `ScabbardHint` | `public HintViewModel ScabbardHint { get; set; }` |
| `RandomizeHint` | `public HintViewModel RandomizeHint { get; set; }` |
| `UndoHint` | `public HintViewModel UndoHint { get; set; }` |
| `RedoHint` | `public HintViewModel RedoHint { get; set; }` |
| `WeaponFlagIconsList` | `public MBBindingList<ItemFlagVM> WeaponFlagIconsList { get; set; }` |
| `CraftingHistory` | `public CraftingHistoryVM CraftingHistory { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetPieceNewlyUnlocked
`public void SetPieceNewlyUnlocked(CraftingPiece piece)`

**Purpose:** Sets the value or state of `piece newly unlocked`.

### SelectPrimaryWeaponClass
`public void SelectPrimaryWeaponClass(CraftingTemplate template)`

**Purpose:** Handles logic related to `select primary weapon class`.

### ExecuteOpenOrderPopup
`public void ExecuteOpenOrderPopup()`

**Purpose:** Executes the `open order popup` operation or workflow.

### ExecuteCloseOrderPopup
`public void ExecuteCloseOrderPopup()`

**Purpose:** Executes the `close order popup` operation or workflow.

### ExecuteOpenOrdersTab
`public void ExecuteOpenOrdersTab()`

**Purpose:** Executes the `open orders tab` operation or workflow.

### ExecuteOpenWeaponClassSelectionPopup
`public void ExecuteOpenWeaponClassSelectionPopup()`

**Purpose:** Executes the `open weapon class selection popup` operation or workflow.

### ExecuteOpenFreeBuildTab
`public void ExecuteOpenFreeBuildTab()`

**Purpose:** Executes the `open free build tab` operation or workflow.

### CreateCraftingResultPopup
`public void CreateCraftingResultPopup()`

**Purpose:** Creates a new `crafting result popup` instance or object.

### ExecuteToggleShowOnlyUnlockedPieces
`public void ExecuteToggleShowOnlyUnlockedPieces()`

**Purpose:** Executes the `toggle show only unlocked pieces` operation or workflow.

### ExecuteUndo
`public void ExecuteUndo()`

**Purpose:** Executes the `undo` operation or workflow.

### ExecuteRedo
`public void ExecuteRedo()`

**Purpose:** Executes the `redo` operation or workflow.

### ChangeModeIfHeroIsUnavailable
`public void ChangeModeIfHeroIsUnavailable()`

**Purpose:** Handles logic related to `change mode if hero is unavailable`.

### ExecuteBeginHeroHint
`public void ExecuteBeginHeroHint()`

**Purpose:** Executes the `begin hero hint` operation or workflow.

### ExecuteEndHeroHint
`public void ExecuteEndHeroHint()`

**Purpose:** Executes the `end hero hint` operation or workflow.

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** Executes the `randomize` operation or workflow.

### ExecuteChangeScabbardVisibility
`public void ExecuteChangeScabbardVisibility()`

**Purpose:** Executes the `change scabbard visibility` operation or workflow.

### SelectWeapon
`public void SelectWeapon(ItemObject itemObject)`

**Purpose:** Handles logic related to `select weapon`.

### CanCompleteOrder
`public bool CanCompleteOrder()`

**Purpose:** Checks whether the current object can `complete order`.

### ExecuteFinalizeCrafting
`public void ExecuteFinalizeCrafting()`

**Purpose:** Executes the `finalize crafting` operation or workflow.

### RefreshItem
`public void RefreshItem()`

**Purpose:** Refreshes the display or cache of `item`.

### HaveUnlockedAllSelectedPieces
`public bool HaveUnlockedAllSelectedPieces()`

**Purpose:** Handles logic related to `have unlocked all selected pieces`.

### SwitchToPiece
`public void SwitchToPiece(WeaponDesignElement usedPiece)`

**Purpose:** Handles logic related to `switch to piece`.

### Compare
`public int Compare(CraftingPieceVM x, CraftingPieceVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public int Compare(CraftingTemplate x, CraftingTemplate y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public int Compare(CraftingListPropertyItem x, CraftingListPropertyItem y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new WeaponDesignVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)