<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPInventoryVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPInventoryVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SPInventoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventoryVM.cs`

## Overview

`SPInventoryVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `LeftInventoryLabel` | `public string LeftInventoryLabel { get; set; }` |
| `RightInventoryLabel` | `public string RightInventoryLabel { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `IsDoneDisabled` | `public bool IsDoneDisabled { get; set; }` |
| `OtherSideHasCapacity` | `public bool OtherSideHasCapacity { get; set; }` |
| `IsSearchAvailable` | `public bool IsSearchAvailable { get; set; }` |
| `IsOtherInventoryGoldRelevant` | `public bool IsOtherInventoryGoldRelevant { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `QuantityText` | `public string QuantityText { get; set; }` |
| `CostText` | `public string CostText { get; set; }` |
| `SearchPlaceholderText` | `public string SearchPlaceholderText { get; set; }` |
| `ProductionTooltip` | `public BasicTooltipViewModel ProductionTooltip { get; set; }` |
| `InventoryCapacityHint` | `public BasicTooltipViewModel InventoryCapacityHint { get; set; }` |
| `LandCapacityHint` | `public BasicTooltipViewModel LandCapacityHint { get; set; }` |
| `SeaCapacityHint` | `public BasicTooltipViewModel SeaCapacityHint { get; set; }` |
| `TotalWeightCarriedHint` | `public BasicTooltipViewModel TotalWeightCarriedHint { get; set; }` |
| `LandWeightHint` | `public BasicTooltipViewModel LandWeightHint { get; set; }` |
| `SeaWeightHint` | `public BasicTooltipViewModel SeaWeightHint { get; set; }` |
| `CurrentCharacterSkillsTooltip` | `public BasicTooltipViewModel CurrentCharacterSkillsTooltip { get; set; }` |
| `NoSaddleHint` | `public HintViewModel NoSaddleHint { get; set; }` |
| `DonationLblHint` | `public HintViewModel DonationLblHint { get; set; }` |
| `ArmArmorHint` | `public HintViewModel ArmArmorHint { get; set; }` |
| `BodyArmorHint` | `public HintViewModel BodyArmorHint { get; set; }` |
| `HeadArmorHint` | `public HintViewModel HeadArmorHint { get; set; }` |
| `LegArmorHint` | `public HintViewModel LegArmorHint { get; set; }` |
| `HorseArmorHint` | `public HintViewModel HorseArmorHint { get; set; }` |
| `FilterAllHint` | `public HintViewModel FilterAllHint { get; set; }` |
| `FilterWeaponHint` | `public HintViewModel FilterWeaponHint { get; set; }` |
| `FilterArmorHint` | `public HintViewModel FilterArmorHint { get; set; }` |
| `FilterShieldAndRangedHint` | `public HintViewModel FilterShieldAndRangedHint { get; set; }` |
| `FilterMountAndHarnessHint` | `public HintViewModel FilterMountAndHarnessHint { get; set; }` |
| `FilterMiscHint` | `public HintViewModel FilterMiscHint { get; set; }` |
| `StealthOutfitHint` | `public HintViewModel StealthOutfitHint { get; set; }` |
| `CivilianOutfitHint` | `public HintViewModel CivilianOutfitHint { get; set; }` |
| `BattleOutfitHint` | `public HintViewModel BattleOutfitHint { get; set; }` |
| `EquipmentHelmSlotHint` | `public HintViewModel EquipmentHelmSlotHint { get; set; }` |
| `EquipmentArmorSlotHint` | `public HintViewModel EquipmentArmorSlotHint { get; set; }` |
| `EquipmentBootSlotHint` | `public HintViewModel EquipmentBootSlotHint { get; set; }` |
| `EquipmentCloakSlotHint` | `public HintViewModel EquipmentCloakSlotHint { get; set; }` |
| `EquipmentGloveSlotHint` | `public HintViewModel EquipmentGloveSlotHint { get; set; }` |
| `EquipmentHarnessSlotHint` | `public HintViewModel EquipmentHarnessSlotHint { get; set; }` |
| `EquipmentMountSlotHint` | `public HintViewModel EquipmentMountSlotHint { get; set; }` |
| `EquipmentWeaponSlotHint` | `public HintViewModel EquipmentWeaponSlotHint { get; set; }` |
| `EquipmentBannerSlotHint` | `public HintViewModel EquipmentBannerSlotHint { get; set; }` |
| `BuyAllHint` | `public BasicTooltipViewModel BuyAllHint { get; set; }` |
| `SellAllHint` | `public BasicTooltipViewModel SellAllHint { get; set; }` |
| `PreviousCharacterHint` | `public BasicTooltipViewModel PreviousCharacterHint { get; set; }` |
| `NextCharacterHint` | `public BasicTooltipViewModel NextCharacterHint { get; set; }` |
| `WeightHint` | `public HintViewModel WeightHint { get; set; }` |
| `PreviewHint` | `public HintViewModel PreviewHint { get; set; }` |
| `EquipHint` | `public HintViewModel EquipHint { get; set; }` |
| `UnequipHint` | `public HintViewModel UnequipHint { get; set; }` |
| `SellHint` | `public HintViewModel SellHint { get; set; }` |
| `PlayerSideCapacityExceededHint` | `public HintViewModel PlayerSideCapacityExceededHint { get; set; }` |
| `MainPartyLandCapacityExceededHint` | `public HintViewModel MainPartyLandCapacityExceededHint { get; set; }` |
| `MainPartySeaCapacityExceededHint` | `public HintViewModel MainPartySeaCapacityExceededHint { get; set; }` |
| `OtherSideCapacityExceededHint` | `public HintViewModel OtherSideCapacityExceededHint { get; set; }` |
| `CharacterList` | `public SelectorVM<InventoryCharacterSelectorItemVM> CharacterList { get; set; }` |
| `PlayerInventorySortController` | `public SPInventorySortControllerVM PlayerInventorySortController { get; set; }` |
| `OtherInventorySortController` | `public SPInventorySortControllerVM OtherInventorySortController { get; set; }` |
| `ItemPreview` | `public ItemPreviewVM ItemPreview { get; set; }` |
| `ActiveFilterIndex` | `public int ActiveFilterIndex { get; set; }` |
| `CompanionExists` | `public bool CompanionExists { get; set; }` |
| `IsTradingWithSettlement` | `public bool IsTradingWithSettlement { get; set; }` |
| `EquipmentMode` | `public int EquipmentMode { get; set; }` |
| `IsMicsFilterHighlightEnabled` | `public bool IsMicsFilterHighlightEnabled { get; set; }` |
| `IsEquipmentSetFiltersHighlighted` | `public bool IsEquipmentSetFiltersHighlighted { get; set; }` |
| `ItemMenu` | `public ItemMenuVM ItemMenu { get; set; }` |
| `PlayerSideCapacityExceededText` | `public string PlayerSideCapacityExceededText { get; set; }` |
| `MainPartyLandCapacityExceededText` | `public string MainPartyLandCapacityExceededText { get; set; }` |
| `MainPartySeaCapacityExceededText` | `public string MainPartySeaCapacityExceededText { get; set; }` |
| `SeparatorText` | `public string SeparatorText { get; set; }` |
| `OtherSideCapacityExceededText` | `public string OtherSideCapacityExceededText { get; set; }` |
| `LeftSearchText` | `public string LeftSearchText { get; set; }` |
| `RightSearchText` | `public string RightSearchText { get; set; }` |
| `HasGainedExperience` | `public bool HasGainedExperience { get; set; }` |
| `IsDonationXpGainExceedsMax` | `public bool IsDonationXpGainExceedsMax { get; set; }` |
| `NoSaddleWarned` | `public bool NoSaddleWarned { get; set; }` |
| `ShowMainPartyLandCapacityTexts` | `public bool ShowMainPartyLandCapacityTexts { get; set; }` |
| `ShowMainPartySeaCapacityTexts` | `public bool ShowMainPartySeaCapacityTexts { get; set; }` |
| `PlayerEquipmentCountWarned` | `public bool PlayerEquipmentCountWarned { get; set; }` |
| `IsMainPartyLandCapacityWarned` | `public bool IsMainPartyLandCapacityWarned { get; set; }` |
| `IsMainPartySeaCapacityWarned` | `public bool IsMainPartySeaCapacityWarned { get; set; }` |
| `ShowMainPartyLandCapacityWarning` | `public bool ShowMainPartyLandCapacityWarning { get; set; }` |
| `ShowMainPartySeaCapacityWarning` | `public bool ShowMainPartySeaCapacityWarning { get; set; }` |
| `OtherEquipmentCountWarned` | `public bool OtherEquipmentCountWarned { get; set; }` |
| `OtherEquipmentCapacityExceededWarning` | `public bool OtherEquipmentCapacityExceededWarning { get; set; }` |
| `OtherEquipmentCountText` | `public string OtherEquipmentCountText { get; set; }` |
| `MainPartyTotalWeightCarriedText` | `public string MainPartyTotalWeightCarriedText { get; set; }` |
| `MainPartyLandWeightText` | `public string MainPartyLandWeightText { get; set; }` |
| `MainPartySeaWeightText` | `public string MainPartySeaWeightText { get; set; }` |
| `MainPartyInventoryCapacityText` | `public string MainPartyInventoryCapacityText { get; set; }` |
| `MainPartyLandCapacityText` | `public string MainPartyLandCapacityText { get; set; }` |
| `MainPartySeaCapacityText` | `public string MainPartySeaCapacityText { get; set; }` |
| `NoSaddleText` | `public string NoSaddleText { get; set; }` |
| `TargetEquipmentIndex` | `public int TargetEquipmentIndex { get; set; }` |
| `TargetEquipmentType` | `public EquipmentIndex TargetEquipmentType { get; set; }` |
| `TransactionCount` | `public int TransactionCount { get; set; }` |
| `IsTrading` | `public bool IsTrading { get; set; }` |
| `EquipAfterBuy` | `public bool EquipAfterBuy { get; set; }` |
| `TradeLbl` | `public string TradeLbl { get; set; }` |
| `ExperienceLbl` | `public string ExperienceLbl { get; set; }` |
| `CurrentCharacterName` | `public string CurrentCharacterName { get; set; }` |
| `RightInventoryOwnerName` | `public string RightInventoryOwnerName { get; set; }` |
| `LeftInventoryOwnerName` | `public string LeftInventoryOwnerName { get; set; }` |
| `RightInventoryOwnerGold` | `public int RightInventoryOwnerGold { get; set; }` |
| `LeftInventoryOwnerGold` | `public int LeftInventoryOwnerGold { get; set; }` |
| `ItemCountToBuy` | `public int ItemCountToBuy { get; set; }` |
| `CurrentCharacterTotalEncumbrance` | `public string CurrentCharacterTotalEncumbrance { get; set; }` |
| `CurrentCharacterLegArmor` | `public float CurrentCharacterLegArmor { get; set; }` |
| `CurrentCharacterHeadArmor` | `public float CurrentCharacterHeadArmor { get; set; }` |
| `CurrentCharacterBodyArmor` | `public float CurrentCharacterBodyArmor { get; set; }` |
| `CurrentCharacterArmArmor` | `public float CurrentCharacterArmArmor { get; set; }` |
| `CurrentCharacterHorseArmor` | `public float CurrentCharacterHorseArmor { get; set; }` |
| `IsRefreshed` | `public bool IsRefreshed { get; set; }` |
| `IsExtendedEquipmentControlsEnabled` | `public bool IsExtendedEquipmentControlsEnabled { get; set; }` |
| `IsFocusedOnItemList` | `public bool IsFocusedOnItemList { get; set; }` |
| `CurrentFocusedItem` | `public SPItemVM CurrentFocusedItem { get; set; }` |
| `CharacterHelmSlot` | `public SPItemVM CharacterHelmSlot { get; set; }` |
| `CharacterCloakSlot` | `public SPItemVM CharacterCloakSlot { get; set; }` |
| `CharacterTorsoSlot` | `public SPItemVM CharacterTorsoSlot { get; set; }` |
| `CharacterGloveSlot` | `public SPItemVM CharacterGloveSlot { get; set; }` |
| `CharacterBootSlot` | `public SPItemVM CharacterBootSlot { get; set; }` |
| `CharacterMountSlot` | `public SPItemVM CharacterMountSlot { get; set; }` |
| `CharacterMountArmorSlot` | `public SPItemVM CharacterMountArmorSlot { get; set; }` |
| `CharacterWeapon1Slot` | `public SPItemVM CharacterWeapon1Slot { get; set; }` |
| `CharacterWeapon2Slot` | `public SPItemVM CharacterWeapon2Slot { get; set; }` |
| `CharacterWeapon3Slot` | `public SPItemVM CharacterWeapon3Slot { get; set; }` |
| `CharacterWeapon4Slot` | `public SPItemVM CharacterWeapon4Slot { get; set; }` |
| `CharacterBannerSlot` | `public SPItemVM CharacterBannerSlot { get; set; }` |
| `MainCharacter` | `public HeroViewModel MainCharacter { get; set; }` |
| `RightItemListVM` | `public MBBindingList<SPItemVM> RightItemListVM { get; set; }` |
| `LeftItemListVM` | `public MBBindingList<SPItemVM> LeftItemListVM { get; set; }` |
| `IsBannerItemsHighlightApplied` | `public bool IsBannerItemsHighlightApplied { get; set; }` |
| `BannerTypeName` | `public string BannerTypeName { get; set; }` |
| `ScrollToItem` | `public bool ScrollToItem { get; set; }` |
| `ScrollItemId` | `public string ScrollItemId { get; set; }` |
| `IsCivilianMode` | `public bool IsCivilianMode { get; set; }` |
| `IsBattleMode` | `public bool IsBattleMode { get; set; }` |
| `IsStealthMode` | `public bool IsStealthMode { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `PreviousCharacterInputKey` | `public InputKeyItemVM PreviousCharacterInputKey { get; set; }` |
| `NextCharacterInputKey` | `public InputKeyItemVM NextCharacterInputKey { get; set; }` |
| `BuyAllInputKey` | `public InputKeyItemVM BuyAllInputKey { get; set; }` |
| `SellAllInputKey` | `public InputKeyItemVM SellAllInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### RefreshCallbacks
`public void RefreshCallbacks()`

**Purpose:** Refreshes the display or cache of `callbacks`.

### ExecuteShowRecap
`public void ExecuteShowRecap()`

**Purpose:** Executes the `show recap` operation or workflow.

### ExecuteCancelRecap
`public void ExecuteCancelRecap()`

**Purpose:** Executes the `cancel recap` operation or workflow.

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**Purpose:** Executes the `remove zero counts` operation or workflow.

### ClosePreview
`public void ClosePreview()`

**Purpose:** Handles logic related to `close preview`.

### ProcessItemTooltip
`public void ProcessItemTooltip(ItemVM item)`

**Purpose:** Handles logic related to `process item tooltip`.

### ResetSelectedItem
`public void ResetSelectedItem()`

**Purpose:** Resets `selected item` to its initial state.

### RefreshComparedItem
`public void RefreshComparedItem()`

**Purpose:** Refreshes the display or cache of `compared item`.

### IsItemEquipmentPossible
`public bool IsItemEquipmentPossible(SPItemVM itemVM)`

**Purpose:** Handles logic related to `is item equipment possible`.

### CompareNextItem
`public void CompareNextItem()`

**Purpose:** Handles logic related to `compare next item`.

### ExecuteSelectItem
`public void ExecuteSelectItem(ItemVM item)`

**Purpose:** Executes the `select item` operation or workflow.

### ExecuteClearSelectedItem
`public void ExecuteClearSelectedItem()`

**Purpose:** Executes the `clear selected item` operation or workflow.

### IsAnyEquippedItemSelected
`public bool IsAnyEquippedItemSelected()`

**Purpose:** Handles logic related to `is any equipped item selected`.

### ExecuteSelectStealthOutfit
`public void ExecuteSelectStealthOutfit()`

**Purpose:** Executes the `select stealth outfit` operation or workflow.

### ExecuteSelectBattleOutfit
`public void ExecuteSelectBattleOutfit()`

**Purpose:** Executes the `select battle outfit` operation or workflow.

### ExecuteSelectCivilianOutfit
`public void ExecuteSelectCivilianOutfit()`

**Purpose:** Executes the `select civilian outfit` operation or workflow.

### ExecuteBuyAllItems
`public void ExecuteBuyAllItems()`

**Purpose:** Executes the `buy all items` operation or workflow.

### ExecuteSellAllItems
`public void ExecuteSellAllItems()`

**Purpose:** Executes the `sell all items` operation or workflow.

### ExecuteBuyItemTest
`public void ExecuteBuyItemTest()`

**Purpose:** Executes the `buy item test` operation or workflow.

### ExecuteResetTranstactions
`public void ExecuteResetTranstactions()`

**Purpose:** Executes the `reset transtactions` operation or workflow.

### ExecuteResetAndCompleteTranstactions
`public void ExecuteResetAndCompleteTranstactions()`

**Purpose:** Executes the `reset and complete transtactions` operation or workflow.

### ExecuteCompleteTranstactions
`public void ExecuteCompleteTranstactions()`

**Purpose:** Executes the `complete transtactions` operation or workflow.

### ExecuteTransferWithParameters
`public void ExecuteTransferWithParameters(SPItemVM item, int index, string targetTag)`

**Purpose:** Executes the `transfer with parameters` operation or workflow.

### ExecuteFilterNone
`public void ExecuteFilterNone()`

**Purpose:** Executes the `filter none` operation or workflow.

### ExecuteFilterWeapons
`public void ExecuteFilterWeapons()`

**Purpose:** Executes the `filter weapons` operation or workflow.

### ExecuteFilterArmors
`public void ExecuteFilterArmors()`

**Purpose:** Executes the `filter armors` operation or workflow.

### ExecuteFilterShieldsAndRanged
`public void ExecuteFilterShieldsAndRanged()`

**Purpose:** Executes the `filter shields and ranged` operation or workflow.

### ExecuteFilterMounts
`public void ExecuteFilterMounts()`

**Purpose:** Executes the `filter mounts` operation or workflow.

### ExecuteFilterMisc
`public void ExecuteFilterMisc()`

**Purpose:** Executes the `filter misc` operation or workflow.

### CycleBetweenWeaponSlots
`public void CycleBetweenWeaponSlots()`

**Purpose:** Handles logic related to `cycle between weapon slots`.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `reset input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey gameKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

### SetPreviousCharacterInputKey
`public void SetPreviousCharacterInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `previous character input key`.

### SetNextCharacterInputKey
`public void SetNextCharacterInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `next character input key`.

### SetBuyAllInputKey
`public void SetBuyAllInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `buy all input key`.

### SetSellAllInputKey
`public void SetSellAllInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `sell all input key`.

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**Purpose:** Sets the value or state of `get key text from key i d func`.

### Compare
`public int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new SPInventoryVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)