---
title: "SPInventoryVM"
description: "SPInventoryVM：TaleWorlds.CampaignSystem.ViewModelCollection.Inventory 的 public 类，继承 ViewModel；公开成员 198 个（方法 42、属性 153、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventoryVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SPInventoryVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SPInventoryVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventoryVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

SPInventoryVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventoryVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SPInventoryVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 198 个：42 方法、153 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SPInventoryVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`，继承链 SPInventoryVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 153/198，方法 42/198），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventoryVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPInventoryVM` | `public SPInventoryVM(InventoryLogic inventoryLogic, bool isInCivilianModeByDefault, Func<WeaponComponentData, ItemObject.ItemUsageSetFlags>getItemUsageSetFlags)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `RefreshCallbacks` | `public void RefreshCallbacks()` | 方法 |
| `ExecuteShowRecap` | `public void ExecuteShowRecap()` | 方法 |
| `ExecuteCancelRecap` | `public void ExecuteCancelRecap()` | 方法 |
| `ExecuteRemoveZeroCounts` | `public void ExecuteRemoveZeroCounts()` | 方法 |
| `ClosePreview` | `public void ClosePreview()` | 方法 |
| `ProcessItemTooltip` | `public void ProcessItemTooltip(ItemVM item)` | 方法 |
| `ResetSelectedItem` | `public void ResetSelectedItem()` | 方法 |
| `RefreshComparedItem` | `public void RefreshComparedItem()` | 方法 |
| `IsItemEquipmentPossible` | `public bool IsItemEquipmentPossible(SPItemVM itemVM)` | 方法 |
| `RefreshEquipment` | `protected void RefreshEquipment(SPItemVM itemVM, EquipmentIndex itemType)` | 方法 |
| `CompareNextItem` | `public void CompareNextItem()` | 方法 |
| `ExecuteSelectItem` | `public void ExecuteSelectItem(ItemVM item)` | 方法 |
| `ExecuteClearSelectedItem` | `public void ExecuteClearSelectedItem()` | 方法 |
| `IsAnyEquippedItemSelected` | `public bool IsAnyEquippedItemSelected()` | 方法 |
| `ExecuteSelectStealthOutfit` | `public void ExecuteSelectStealthOutfit()` | 方法 |
| `ExecuteSelectBattleOutfit` | `public void ExecuteSelectBattleOutfit()` | 方法 |
| `ExecuteSelectCivilianOutfit` | `public void ExecuteSelectCivilianOutfit()` | 方法 |
| `ExecuteBuyAllItems` | `public void ExecuteBuyAllItems()` | 方法 |
| `ExecuteSellAllItems` | `public void ExecuteSellAllItems()` | 方法 |
| `ExecuteBuyItemTest` | `public void ExecuteBuyItemTest()` | 方法 |
| `ExecuteResetTranstactions` | `public void ExecuteResetTranstactions()` | 方法 |
| `ExecuteResetAndCompleteTranstactionsWithoutInquiry` | `public void ExecuteResetAndCompleteTranstactionsWithoutInquiry()` | 方法 |
| `ExecuteResetAndCompleteTranstactions` | `public void ExecuteResetAndCompleteTranstactions(bool showCancelInquiry = false)` | 方法 |
| `ExecuteCompleteTranstactions` | `public void ExecuteCompleteTranstactions()` | 方法 |
| `ExecuteTransferWithParameters` | `public void ExecuteTransferWithParameters(SPItemVM item, int index, string targetTag)` | 方法 |
| `ExecuteFilterNone` | `public void ExecuteFilterNone()` | 方法 |
| `ExecuteFilterWeapons` | `public void ExecuteFilterWeapons()` | 方法 |
| `ExecuteFilterArmors` | `public void ExecuteFilterArmors()` | 方法 |
| `ExecuteFilterShieldsAndRanged` | `public void ExecuteFilterShieldsAndRanged()` | 方法 |
| `ExecuteFilterMounts` | `public void ExecuteFilterMounts()` | 方法 |
| `ExecuteFilterMisc` | `public void ExecuteFilterMisc()` | 方法 |
| `CycleBetweenWeaponSlots` | `public void CycleBetweenWeaponSlots()` | 方法 |
| `ResetHint` | `public HintViewModel ResetHint` | 属性 |
| `LeftInventoryLabel` | `public string LeftInventoryLabel` | 属性 |
| `RightInventoryLabel` | `public string RightInventoryLabel` | 属性 |
| `DoneLbl` | `public string DoneLbl` | 属性 |
| `IsDoneDisabled` | `public bool IsDoneDisabled` | 属性 |
| `OtherSideHasCapacity` | `public bool OtherSideHasCapacity` | 属性 |
| `IsSearchAvailable` | `public bool IsSearchAvailable` | 属性 |
| `IsOtherInventoryGoldRelevant` | `public bool IsOtherInventoryGoldRelevant` | 属性 |
| `CancelLbl` | `public string CancelLbl` | 属性 |
| `ResetLbl` | `public string ResetLbl` | 属性 |
| `TypeText` | `public string TypeText` | 属性 |
| `NameText` | `public string NameText` | 属性 |
| `QuantityText` | `public string QuantityText` | 属性 |
| `CostText` | `public string CostText` | 属性 |
| `SearchPlaceholderText` | `public string SearchPlaceholderText` | 属性 |
| `ProductionTooltip` | `public BasicTooltipViewModel ProductionTooltip` | 属性 |
| `InventoryCapacityHint` | `public BasicTooltipViewModel InventoryCapacityHint` | 属性 |
| `LandCapacityHint` | `public BasicTooltipViewModel LandCapacityHint` | 属性 |
| `SeaCapacityHint` | `public BasicTooltipViewModel SeaCapacityHint` | 属性 |
| `TotalWeightCarriedHint` | `public BasicTooltipViewModel TotalWeightCarriedHint` | 属性 |
| `LandWeightHint` | `public BasicTooltipViewModel LandWeightHint` | 属性 |
| `SeaWeightHint` | `public BasicTooltipViewModel SeaWeightHint` | 属性 |
| `CurrentCharacterSkillsTooltip` | `public BasicTooltipViewModel CurrentCharacterSkillsTooltip` | 属性 |
| `NoSaddleHint` | `public HintViewModel NoSaddleHint` | 属性 |
| `DonationLblHint` | `public HintViewModel DonationLblHint` | 属性 |
| `ArmArmorHint` | `public HintViewModel ArmArmorHint` | 属性 |
| `BodyArmorHint` | `public HintViewModel BodyArmorHint` | 属性 |
| `HeadArmorHint` | `public HintViewModel HeadArmorHint` | 属性 |
| `LegArmorHint` | `public HintViewModel LegArmorHint` | 属性 |
| `HorseArmorHint` | `public HintViewModel HorseArmorHint` | 属性 |
| `FilterAllHint` | `public HintViewModel FilterAllHint` | 属性 |
| `FilterWeaponHint` | `public HintViewModel FilterWeaponHint` | 属性 |
| `FilterArmorHint` | `public HintViewModel FilterArmorHint` | 属性 |
| `FilterShieldAndRangedHint` | `public HintViewModel FilterShieldAndRangedHint` | 属性 |
| `FilterMountAndHarnessHint` | `public HintViewModel FilterMountAndHarnessHint` | 属性 |
| `FilterMiscHint` | `public HintViewModel FilterMiscHint` | 属性 |
| `StealthOutfitHint` | `public HintViewModel StealthOutfitHint` | 属性 |
| `CivilianOutfitHint` | `public HintViewModel CivilianOutfitHint` | 属性 |
| `BattleOutfitHint` | `public HintViewModel BattleOutfitHint` | 属性 |
| `EquipmentHelmSlotHint` | `public HintViewModel EquipmentHelmSlotHint` | 属性 |
| `EquipmentArmorSlotHint` | `public HintViewModel EquipmentArmorSlotHint` | 属性 |
| `EquipmentBootSlotHint` | `public HintViewModel EquipmentBootSlotHint` | 属性 |
| `EquipmentCloakSlotHint` | `public HintViewModel EquipmentCloakSlotHint` | 属性 |
| `EquipmentGloveSlotHint` | `public HintViewModel EquipmentGloveSlotHint` | 属性 |
| `EquipmentHarnessSlotHint` | `public HintViewModel EquipmentHarnessSlotHint` | 属性 |
| `EquipmentMountSlotHint` | `public HintViewModel EquipmentMountSlotHint` | 属性 |
| `EquipmentWeaponSlotHint` | `public HintViewModel EquipmentWeaponSlotHint` | 属性 |
| `EquipmentBannerSlotHint` | `public HintViewModel EquipmentBannerSlotHint` | 属性 |
| `BuyAllHint` | `public BasicTooltipViewModel BuyAllHint` | 属性 |
| `SellAllHint` | `public BasicTooltipViewModel SellAllHint` | 属性 |
| `PreviousCharacterHint` | `public BasicTooltipViewModel PreviousCharacterHint` | 属性 |
| `NextCharacterHint` | `public BasicTooltipViewModel NextCharacterHint` | 属性 |
| `WeightHint` | `public HintViewModel WeightHint` | 属性 |
| `PreviewHint` | `public HintViewModel PreviewHint` | 属性 |
| `EquipHint` | `public HintViewModel EquipHint` | 属性 |
| `UnequipHint` | `public HintViewModel UnequipHint` | 属性 |
| `SellHint` | `public HintViewModel SellHint` | 属性 |
| `PlayerSideCapacityExceededHint` | `public HintViewModel PlayerSideCapacityExceededHint` | 属性 |
| `MainPartyLandCapacityExceededHint` | `public HintViewModel MainPartyLandCapacityExceededHint` | 属性 |
| `MainPartySeaCapacityExceededHint` | `public HintViewModel MainPartySeaCapacityExceededHint` | 属性 |
| `OtherSideCapacityExceededHint` | `public HintViewModel OtherSideCapacityExceededHint` | 属性 |
| `SelectorVM` | `public SelectorVM<InventoryCharacterSelectorItemVM>CharacterList` | 属性 |
| `PlayerInventorySortController` | `public SPInventorySortControllerVM PlayerInventorySortController` | 属性 |
| `OtherInventorySortController` | `public SPInventorySortControllerVM OtherInventorySortController` | 属性 |
| `ItemPreview` | `public ItemPreviewVM ItemPreview` | 属性 |
| `ActiveFilterIndex` | `public int ActiveFilterIndex` | 属性 |
| `CompanionExists` | `public bool CompanionExists` | 属性 |
| `IsTradingWithSettlement` | `public bool IsTradingWithSettlement` | 属性 |
| `EquipmentMode` | `public int EquipmentMode` | 属性 |
| `IsMicsFilterHighlightEnabled` | `public bool IsMicsFilterHighlightEnabled` | 属性 |
| `IsEquipmentSetFiltersHighlighted` | `public bool IsEquipmentSetFiltersHighlighted` | 属性 |
| `ItemMenu` | `public ItemMenuVM ItemMenu` | 属性 |
| `PlayerSideCapacityExceededText` | `public string PlayerSideCapacityExceededText` | 属性 |
| `MainPartyLandCapacityExceededText` | `public string MainPartyLandCapacityExceededText` | 属性 |
| `MainPartySeaCapacityExceededText` | `public string MainPartySeaCapacityExceededText` | 属性 |
| `SeparatorText` | `public string SeparatorText` | 属性 |
| `OtherSideCapacityExceededText` | `public string OtherSideCapacityExceededText` | 属性 |
| `LeftSearchText` | `public string LeftSearchText` | 属性 |
| `RightSearchText` | `public string RightSearchText` | 属性 |
| `HasGainedExperience` | `public bool HasGainedExperience` | 属性 |
| `IsDonationXpGainExceedsMax` | `public bool IsDonationXpGainExceedsMax` | 属性 |
| `NoSaddleWarned` | `public bool NoSaddleWarned` | 属性 |
| `ShowMainPartyLandCapacityTexts` | `public bool ShowMainPartyLandCapacityTexts` | 属性 |
| `ShowMainPartySeaCapacityTexts` | `public bool ShowMainPartySeaCapacityTexts` | 属性 |
| `PlayerEquipmentCountWarned` | `public bool PlayerEquipmentCountWarned` | 属性 |
| `IsMainPartyLandCapacityWarned` | `public bool IsMainPartyLandCapacityWarned` | 属性 |
| `IsMainPartySeaCapacityWarned` | `public bool IsMainPartySeaCapacityWarned` | 属性 |
| `ShowMainPartyLandCapacityWarning` | `public bool ShowMainPartyLandCapacityWarning` | 属性 |
| `ShowMainPartySeaCapacityWarning` | `public bool ShowMainPartySeaCapacityWarning` | 属性 |
| `OtherEquipmentCountWarned` | `public bool OtherEquipmentCountWarned` | 属性 |
| `OtherEquipmentCapacityExceededWarning` | `public bool OtherEquipmentCapacityExceededWarning` | 属性 |
| `OtherEquipmentCountText` | `public string OtherEquipmentCountText` | 属性 |
| `MainPartyTotalWeightCarriedText` | `public string MainPartyTotalWeightCarriedText` | 属性 |
| `MainPartyLandWeightText` | `public string MainPartyLandWeightText` | 属性 |
| `MainPartySeaWeightText` | `public string MainPartySeaWeightText` | 属性 |
| `MainPartyInventoryCapacityText` | `public string MainPartyInventoryCapacityText` | 属性 |
| `MainPartyLandCapacityText` | `public string MainPartyLandCapacityText` | 属性 |
| `MainPartySeaCapacityText` | `public string MainPartySeaCapacityText` | 属性 |
| `NoSaddleText` | `public string NoSaddleText` | 属性 |
| `TargetEquipmentIndex` | `public int TargetEquipmentIndex` | 属性 |
| `TargetEquipmentType` | `public EquipmentIndex TargetEquipmentType` | 属性 |
| `TransactionCount` | `public int TransactionCount` | 属性 |
| `IsTrading` | `public bool IsTrading` | 属性 |
| `EquipAfterBuy` | `public bool EquipAfterBuy` | 属性 |
| `TradeLbl` | `public string TradeLbl` | 属性 |
| `ExperienceLbl` | `public string ExperienceLbl` | 属性 |
| `CurrentCharacterName` | `public string CurrentCharacterName` | 属性 |
| `RightInventoryOwnerName` | `public string RightInventoryOwnerName` | 属性 |
| `LeftInventoryOwnerName` | `public string LeftInventoryOwnerName` | 属性 |
| `RightInventoryOwnerGold` | `public int RightInventoryOwnerGold` | 属性 |
| `LeftInventoryOwnerGold` | `public int LeftInventoryOwnerGold` | 属性 |
| `ItemCountToBuy` | `public int ItemCountToBuy` | 属性 |
| `CurrentCharacterTotalEncumbrance` | `public string CurrentCharacterTotalEncumbrance` | 属性 |
| `CurrentCharacterLegArmor` | `public float CurrentCharacterLegArmor` | 属性 |
| `CurrentCharacterHeadArmor` | `public float CurrentCharacterHeadArmor` | 属性 |
| `CurrentCharacterBodyArmor` | `public float CurrentCharacterBodyArmor` | 属性 |
| `CurrentCharacterArmArmor` | `public float CurrentCharacterArmArmor` | 属性 |
| `CurrentCharacterHorseArmor` | `public float CurrentCharacterHorseArmor` | 属性 |
| `IsRefreshed` | `public bool IsRefreshed` | 属性 |
| `IsExtendedEquipmentControlsEnabled` | `public bool IsExtendedEquipmentControlsEnabled` | 属性 |
| `IsFocusedOnItemList` | `public bool IsFocusedOnItemList` | 属性 |
| `CurrentFocusedItem` | `public SPItemVM CurrentFocusedItem` | 属性 |
| `CharacterHelmSlot` | `public SPItemVM CharacterHelmSlot` | 属性 |
| `CharacterCloakSlot` | `public SPItemVM CharacterCloakSlot` | 属性 |
| `CharacterTorsoSlot` | `public SPItemVM CharacterTorsoSlot` | 属性 |
| `CharacterGloveSlot` | `public SPItemVM CharacterGloveSlot` | 属性 |
| `CharacterBootSlot` | `public SPItemVM CharacterBootSlot` | 属性 |
| `CharacterMountSlot` | `public SPItemVM CharacterMountSlot` | 属性 |
| `CharacterMountArmorSlot` | `public SPItemVM CharacterMountArmorSlot` | 属性 |
| `CharacterWeapon1Slot` | `public SPItemVM CharacterWeapon1Slot` | 属性 |
| `CharacterWeapon2Slot` | `public SPItemVM CharacterWeapon2Slot` | 属性 |
| `CharacterWeapon3Slot` | `public SPItemVM CharacterWeapon3Slot` | 属性 |
| `CharacterWeapon4Slot` | `public SPItemVM CharacterWeapon4Slot` | 属性 |
| `CharacterBannerSlot` | `public SPItemVM CharacterBannerSlot` | 属性 |
| `MainCharacter` | `public HeroViewModel MainCharacter` | 属性 |
| `MBBindingList` | `public MBBindingList<SPItemVM>RightItemListVM` | 属性 |
| `MBBindingList` | `public MBBindingList<SPItemVM>LeftItemListVM` | 属性 |
| `IsBannerItemsHighlightApplied` | `public bool IsBannerItemsHighlightApplied` | 属性 |
| `BannerTypeName` | `public string BannerTypeName` | 属性 |
| `ScrollToItem` | `public bool ScrollToItem` | 属性 |
| `ScrollItemId` | `public string ScrollItemId` | 属性 |
| `IsCivilianMode` | `public bool IsCivilianMode` | 属性 |
| `IsBattleMode` | `public bool IsBattleMode` | 属性 |
| `IsStealthMode` | `public bool IsStealthMode` | 属性 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | 方法 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey gameKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `SetPreviousCharacterInputKey` | `public void SetPreviousCharacterInputKey(HotKey hotKey)` | 方法 |
| `SetNextCharacterInputKey` | `public void SetNextCharacterInputKey(HotKey hotKey)` | 方法 |
| `SetBuyAllInputKey` | `public void SetBuyAllInputKey(HotKey hotKey)` | 方法 |
| `SetSellAllInputKey` | `public void SetSellAllInputKey(HotKey hotKey)` | 方法 |
| `SetGetKeyTextFromKeyIDFunc` | `public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject>getKeyTextFromKeyId)` | 方法 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `PreviousCharacterInputKey` | `public InputKeyItemVM PreviousCharacterInputKey` | 属性 |
| `NextCharacterInputKey` | `public InputKeyItemVM NextCharacterInputKey` | 属性 |
| `BuyAllInputKey` | `public InputKeyItemVM BuyAllInputKey` | 属性 |
| `SellAllInputKey` | `public InputKeyItemVM SellAllInputKey` | 属性 |
| `EquipmentModes` | `public enum EquipmentModes` | 属性 |
| `Filters` | `public enum Filters` | 属性 |
| `EquipmentModes` | `public enum EquipmentModes` | 嵌套类型 |
| `Filters` | `public enum Filters` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM/)
- [同命名空间 InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent/)
- [同命名空间 InventoryFilterChangedEvent](../InventoryFilterChangedEvent/)
- [同命名空间 InventoryItemInspectedEvent](../InventoryItemInspectedEvent/)
