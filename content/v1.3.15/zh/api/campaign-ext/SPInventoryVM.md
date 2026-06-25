---
title: "SPInventoryVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPInventoryVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPInventoryVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SPInventoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventoryVM.cs`

## 概述

`SPInventoryVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### RefreshCallbacks
`public void RefreshCallbacks()`

**用途 / Purpose:** 刷新 `callbacks` 的显示或缓存。

### ExecuteShowRecap
`public void ExecuteShowRecap()`

**用途 / Purpose:** 执行 `show recap` 操作或流程。

### ExecuteCancelRecap
`public void ExecuteCancelRecap()`

**用途 / Purpose:** 执行 `cancel recap` 操作或流程。

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**用途 / Purpose:** 执行 `remove zero counts` 操作或流程。

### ClosePreview
`public void ClosePreview()`

**用途 / Purpose:** 处理 `close preview` 相关逻辑。

### ProcessItemTooltip
`public void ProcessItemTooltip(ItemVM item)`

**用途 / Purpose:** 处理 `process item tooltip` 相关逻辑。

### ResetSelectedItem
`public void ResetSelectedItem()`

**用途 / Purpose:** 将 `selected item` 重置为初始状态。

### RefreshComparedItem
`public void RefreshComparedItem()`

**用途 / Purpose:** 刷新 `compared item` 的显示或缓存。

### IsItemEquipmentPossible
`public bool IsItemEquipmentPossible(SPItemVM itemVM)`

**用途 / Purpose:** 处理 `is item equipment possible` 相关逻辑。

### CompareNextItem
`public void CompareNextItem()`

**用途 / Purpose:** 处理 `compare next item` 相关逻辑。

### ExecuteSelectItem
`public void ExecuteSelectItem(ItemVM item)`

**用途 / Purpose:** 执行 `select item` 操作或流程。

### ExecuteClearSelectedItem
`public void ExecuteClearSelectedItem()`

**用途 / Purpose:** 执行 `clear selected item` 操作或流程。

### IsAnyEquippedItemSelected
`public bool IsAnyEquippedItemSelected()`

**用途 / Purpose:** 处理 `is any equipped item selected` 相关逻辑。

### ExecuteSelectStealthOutfit
`public void ExecuteSelectStealthOutfit()`

**用途 / Purpose:** 执行 `select stealth outfit` 操作或流程。

### ExecuteSelectBattleOutfit
`public void ExecuteSelectBattleOutfit()`

**用途 / Purpose:** 执行 `select battle outfit` 操作或流程。

### ExecuteSelectCivilianOutfit
`public void ExecuteSelectCivilianOutfit()`

**用途 / Purpose:** 执行 `select civilian outfit` 操作或流程。

### ExecuteBuyAllItems
`public void ExecuteBuyAllItems()`

**用途 / Purpose:** 执行 `buy all items` 操作或流程。

### ExecuteSellAllItems
`public void ExecuteSellAllItems()`

**用途 / Purpose:** 执行 `sell all items` 操作或流程。

### ExecuteBuyItemTest
`public void ExecuteBuyItemTest()`

**用途 / Purpose:** 执行 `buy item test` 操作或流程。

### ExecuteResetTranstactions
`public void ExecuteResetTranstactions()`

**用途 / Purpose:** 执行 `reset transtactions` 操作或流程。

### ExecuteResetAndCompleteTranstactions
`public void ExecuteResetAndCompleteTranstactions()`

**用途 / Purpose:** 执行 `reset and complete transtactions` 操作或流程。

### ExecuteCompleteTranstactions
`public void ExecuteCompleteTranstactions()`

**用途 / Purpose:** 执行 `complete transtactions` 操作或流程。

### ExecuteTransferWithParameters
`public void ExecuteTransferWithParameters(SPItemVM item, int index, string targetTag)`

**用途 / Purpose:** 执行 `transfer with parameters` 操作或流程。

### ExecuteFilterNone
`public void ExecuteFilterNone()`

**用途 / Purpose:** 执行 `filter none` 操作或流程。

### ExecuteFilterWeapons
`public void ExecuteFilterWeapons()`

**用途 / Purpose:** 执行 `filter weapons` 操作或流程。

### ExecuteFilterArmors
`public void ExecuteFilterArmors()`

**用途 / Purpose:** 执行 `filter armors` 操作或流程。

### ExecuteFilterShieldsAndRanged
`public void ExecuteFilterShieldsAndRanged()`

**用途 / Purpose:** 执行 `filter shields and ranged` 操作或流程。

### ExecuteFilterMounts
`public void ExecuteFilterMounts()`

**用途 / Purpose:** 执行 `filter mounts` 操作或流程。

### ExecuteFilterMisc
`public void ExecuteFilterMisc()`

**用途 / Purpose:** 执行 `filter misc` 操作或流程。

### CycleBetweenWeaponSlots
`public void CycleBetweenWeaponSlots()`

**用途 / Purpose:** 处理 `cycle between weapon slots` 相关逻辑。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey gameKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetPreviousCharacterInputKey
`public void SetPreviousCharacterInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `previous character input key` 的值或状态。

### SetNextCharacterInputKey
`public void SetNextCharacterInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `next character input key` 的值或状态。

### SetBuyAllInputKey
`public void SetBuyAllInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `buy all input key` 的值或状态。

### SetSellAllInputKey
`public void SetSellAllInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `sell all input key` 的值或状态。

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**用途 / Purpose:** 设置 `get key text from key i d func` 的值或状态。

### Compare
`public int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var value = new SPInventoryVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)