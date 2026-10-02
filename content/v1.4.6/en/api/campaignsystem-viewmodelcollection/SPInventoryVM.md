---
title: "SPInventoryVM"
description: "SPInventoryVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 198 exposed members (42 methods, 153 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventoryVM.cs."
---
# SPInventoryVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SPInventoryVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventoryVM.cs`

## Overview

SPInventoryVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventoryVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SPInventoryVM → ViewModel. It exposes 198 public/protected members: 42 methods, 153 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SPInventoryVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Inventory) the module directory; inheritance chain SPInventoryVM → ViewModel. The surface is property-led (properties 153/198, methods 42/198), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventoryVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SPInventoryVM` | `public SPInventoryVM(InventoryLogic inventoryLogic, bool isInCivilianModeByDefault, Func<WeaponComponentData, ItemObject.ItemUsageSetFlags>getItemUsageSetFlags)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RefreshCallbacks` | `public void RefreshCallbacks()` | method |
| `ExecuteShowRecap` | `public void ExecuteShowRecap()` | method |
| `ExecuteCancelRecap` | `public void ExecuteCancelRecap()` | method |
| `ExecuteRemoveZeroCounts` | `public void ExecuteRemoveZeroCounts()` | method |
| `ClosePreview` | `public void ClosePreview()` | method |
| `ProcessItemTooltip` | `public void ProcessItemTooltip(ItemVM item)` | method |
| `ResetSelectedItem` | `public void ResetSelectedItem()` | method |
| `RefreshComparedItem` | `public void RefreshComparedItem()` | method |
| `IsItemEquipmentPossible` | `public bool IsItemEquipmentPossible(SPItemVM itemVM)` | method |
| `RefreshEquipment` | `protected void RefreshEquipment(SPItemVM itemVM, EquipmentIndex itemType)` | method |
| `CompareNextItem` | `public void CompareNextItem()` | method |
| `ExecuteSelectItem` | `public void ExecuteSelectItem(ItemVM item)` | method |
| `ExecuteClearSelectedItem` | `public void ExecuteClearSelectedItem()` | method |
| `IsAnyEquippedItemSelected` | `public bool IsAnyEquippedItemSelected()` | method |
| `ExecuteSelectStealthOutfit` | `public void ExecuteSelectStealthOutfit()` | method |
| `ExecuteSelectBattleOutfit` | `public void ExecuteSelectBattleOutfit()` | method |
| `ExecuteSelectCivilianOutfit` | `public void ExecuteSelectCivilianOutfit()` | method |
| `ExecuteBuyAllItems` | `public void ExecuteBuyAllItems()` | method |
| `ExecuteSellAllItems` | `public void ExecuteSellAllItems()` | method |
| `ExecuteBuyItemTest` | `public void ExecuteBuyItemTest()` | method |
| `ExecuteResetTranstactions` | `public void ExecuteResetTranstactions()` | method |
| `ExecuteResetAndCompleteTranstactionsWithoutInquiry` | `public void ExecuteResetAndCompleteTranstactionsWithoutInquiry()` | method |
| `ExecuteResetAndCompleteTranstactions` | `public void ExecuteResetAndCompleteTranstactions(bool showCancelInquiry = false)` | method |
| `ExecuteCompleteTranstactions` | `public void ExecuteCompleteTranstactions()` | method |
| `ExecuteTransferWithParameters` | `public void ExecuteTransferWithParameters(SPItemVM item, int index, string targetTag)` | method |
| `ExecuteFilterNone` | `public void ExecuteFilterNone()` | method |
| `ExecuteFilterWeapons` | `public void ExecuteFilterWeapons()` | method |
| `ExecuteFilterArmors` | `public void ExecuteFilterArmors()` | method |
| `ExecuteFilterShieldsAndRanged` | `public void ExecuteFilterShieldsAndRanged()` | method |
| `ExecuteFilterMounts` | `public void ExecuteFilterMounts()` | method |
| `ExecuteFilterMisc` | `public void ExecuteFilterMisc()` | method |
| `CycleBetweenWeaponSlots` | `public void CycleBetweenWeaponSlots()` | method |
| `ResetHint` | `public HintViewModel ResetHint` | property |
| `LeftInventoryLabel` | `public string LeftInventoryLabel` | property |
| `RightInventoryLabel` | `public string RightInventoryLabel` | property |
| `DoneLbl` | `public string DoneLbl` | property |
| `IsDoneDisabled` | `public bool IsDoneDisabled` | property |
| `OtherSideHasCapacity` | `public bool OtherSideHasCapacity` | property |
| `IsSearchAvailable` | `public bool IsSearchAvailable` | property |
| `IsOtherInventoryGoldRelevant` | `public bool IsOtherInventoryGoldRelevant` | property |
| `CancelLbl` | `public string CancelLbl` | property |
| `ResetLbl` | `public string ResetLbl` | property |
| `TypeText` | `public string TypeText` | property |
| `NameText` | `public string NameText` | property |
| `QuantityText` | `public string QuantityText` | property |
| `CostText` | `public string CostText` | property |
| `SearchPlaceholderText` | `public string SearchPlaceholderText` | property |
| `ProductionTooltip` | `public BasicTooltipViewModel ProductionTooltip` | property |
| `InventoryCapacityHint` | `public BasicTooltipViewModel InventoryCapacityHint` | property |
| `LandCapacityHint` | `public BasicTooltipViewModel LandCapacityHint` | property |
| `SeaCapacityHint` | `public BasicTooltipViewModel SeaCapacityHint` | property |
| `TotalWeightCarriedHint` | `public BasicTooltipViewModel TotalWeightCarriedHint` | property |
| `LandWeightHint` | `public BasicTooltipViewModel LandWeightHint` | property |
| `SeaWeightHint` | `public BasicTooltipViewModel SeaWeightHint` | property |
| `CurrentCharacterSkillsTooltip` | `public BasicTooltipViewModel CurrentCharacterSkillsTooltip` | property |
| `NoSaddleHint` | `public HintViewModel NoSaddleHint` | property |
| `DonationLblHint` | `public HintViewModel DonationLblHint` | property |
| `ArmArmorHint` | `public HintViewModel ArmArmorHint` | property |
| `BodyArmorHint` | `public HintViewModel BodyArmorHint` | property |
| `HeadArmorHint` | `public HintViewModel HeadArmorHint` | property |
| `LegArmorHint` | `public HintViewModel LegArmorHint` | property |
| `HorseArmorHint` | `public HintViewModel HorseArmorHint` | property |
| `FilterAllHint` | `public HintViewModel FilterAllHint` | property |
| `FilterWeaponHint` | `public HintViewModel FilterWeaponHint` | property |
| `FilterArmorHint` | `public HintViewModel FilterArmorHint` | property |
| `FilterShieldAndRangedHint` | `public HintViewModel FilterShieldAndRangedHint` | property |
| `FilterMountAndHarnessHint` | `public HintViewModel FilterMountAndHarnessHint` | property |
| `FilterMiscHint` | `public HintViewModel FilterMiscHint` | property |
| `StealthOutfitHint` | `public HintViewModel StealthOutfitHint` | property |
| `CivilianOutfitHint` | `public HintViewModel CivilianOutfitHint` | property |
| `BattleOutfitHint` | `public HintViewModel BattleOutfitHint` | property |
| `EquipmentHelmSlotHint` | `public HintViewModel EquipmentHelmSlotHint` | property |
| `EquipmentArmorSlotHint` | `public HintViewModel EquipmentArmorSlotHint` | property |
| `EquipmentBootSlotHint` | `public HintViewModel EquipmentBootSlotHint` | property |
| `EquipmentCloakSlotHint` | `public HintViewModel EquipmentCloakSlotHint` | property |
| `EquipmentGloveSlotHint` | `public HintViewModel EquipmentGloveSlotHint` | property |
| `EquipmentHarnessSlotHint` | `public HintViewModel EquipmentHarnessSlotHint` | property |
| `EquipmentMountSlotHint` | `public HintViewModel EquipmentMountSlotHint` | property |
| `EquipmentWeaponSlotHint` | `public HintViewModel EquipmentWeaponSlotHint` | property |
| `EquipmentBannerSlotHint` | `public HintViewModel EquipmentBannerSlotHint` | property |
| `BuyAllHint` | `public BasicTooltipViewModel BuyAllHint` | property |
| `SellAllHint` | `public BasicTooltipViewModel SellAllHint` | property |
| `PreviousCharacterHint` | `public BasicTooltipViewModel PreviousCharacterHint` | property |
| `NextCharacterHint` | `public BasicTooltipViewModel NextCharacterHint` | property |
| `WeightHint` | `public HintViewModel WeightHint` | property |
| `PreviewHint` | `public HintViewModel PreviewHint` | property |
| `EquipHint` | `public HintViewModel EquipHint` | property |
| `UnequipHint` | `public HintViewModel UnequipHint` | property |
| `SellHint` | `public HintViewModel SellHint` | property |
| `PlayerSideCapacityExceededHint` | `public HintViewModel PlayerSideCapacityExceededHint` | property |
| `MainPartyLandCapacityExceededHint` | `public HintViewModel MainPartyLandCapacityExceededHint` | property |
| `MainPartySeaCapacityExceededHint` | `public HintViewModel MainPartySeaCapacityExceededHint` | property |
| `OtherSideCapacityExceededHint` | `public HintViewModel OtherSideCapacityExceededHint` | property |
| `SelectorVM` | `public SelectorVM<InventoryCharacterSelectorItemVM>CharacterList` | property |
| `PlayerInventorySortController` | `public SPInventorySortControllerVM PlayerInventorySortController` | property |
| `OtherInventorySortController` | `public SPInventorySortControllerVM OtherInventorySortController` | property |
| `ItemPreview` | `public ItemPreviewVM ItemPreview` | property |
| `ActiveFilterIndex` | `public int ActiveFilterIndex` | property |
| `CompanionExists` | `public bool CompanionExists` | property |
| `IsTradingWithSettlement` | `public bool IsTradingWithSettlement` | property |
| `EquipmentMode` | `public int EquipmentMode` | property |
| `IsMicsFilterHighlightEnabled` | `public bool IsMicsFilterHighlightEnabled` | property |
| `IsEquipmentSetFiltersHighlighted` | `public bool IsEquipmentSetFiltersHighlighted` | property |
| `ItemMenu` | `public ItemMenuVM ItemMenu` | property |
| `PlayerSideCapacityExceededText` | `public string PlayerSideCapacityExceededText` | property |
| `MainPartyLandCapacityExceededText` | `public string MainPartyLandCapacityExceededText` | property |
| `MainPartySeaCapacityExceededText` | `public string MainPartySeaCapacityExceededText` | property |
| `SeparatorText` | `public string SeparatorText` | property |
| `OtherSideCapacityExceededText` | `public string OtherSideCapacityExceededText` | property |
| `LeftSearchText` | `public string LeftSearchText` | property |
| `RightSearchText` | `public string RightSearchText` | property |
| `HasGainedExperience` | `public bool HasGainedExperience` | property |
| `IsDonationXpGainExceedsMax` | `public bool IsDonationXpGainExceedsMax` | property |
| `NoSaddleWarned` | `public bool NoSaddleWarned` | property |
| `ShowMainPartyLandCapacityTexts` | `public bool ShowMainPartyLandCapacityTexts` | property |
| `ShowMainPartySeaCapacityTexts` | `public bool ShowMainPartySeaCapacityTexts` | property |
| `PlayerEquipmentCountWarned` | `public bool PlayerEquipmentCountWarned` | property |
| `IsMainPartyLandCapacityWarned` | `public bool IsMainPartyLandCapacityWarned` | property |
| `IsMainPartySeaCapacityWarned` | `public bool IsMainPartySeaCapacityWarned` | property |
| `ShowMainPartyLandCapacityWarning` | `public bool ShowMainPartyLandCapacityWarning` | property |
| `ShowMainPartySeaCapacityWarning` | `public bool ShowMainPartySeaCapacityWarning` | property |
| `OtherEquipmentCountWarned` | `public bool OtherEquipmentCountWarned` | property |
| `OtherEquipmentCapacityExceededWarning` | `public bool OtherEquipmentCapacityExceededWarning` | property |
| `OtherEquipmentCountText` | `public string OtherEquipmentCountText` | property |
| `MainPartyTotalWeightCarriedText` | `public string MainPartyTotalWeightCarriedText` | property |
| `MainPartyLandWeightText` | `public string MainPartyLandWeightText` | property |
| `MainPartySeaWeightText` | `public string MainPartySeaWeightText` | property |
| `MainPartyInventoryCapacityText` | `public string MainPartyInventoryCapacityText` | property |
| `MainPartyLandCapacityText` | `public string MainPartyLandCapacityText` | property |
| `MainPartySeaCapacityText` | `public string MainPartySeaCapacityText` | property |
| `NoSaddleText` | `public string NoSaddleText` | property |
| `TargetEquipmentIndex` | `public int TargetEquipmentIndex` | property |
| `TargetEquipmentType` | `public EquipmentIndex TargetEquipmentType` | property |
| `TransactionCount` | `public int TransactionCount` | property |
| `IsTrading` | `public bool IsTrading` | property |
| `EquipAfterBuy` | `public bool EquipAfterBuy` | property |
| `TradeLbl` | `public string TradeLbl` | property |
| `ExperienceLbl` | `public string ExperienceLbl` | property |
| `CurrentCharacterName` | `public string CurrentCharacterName` | property |
| `RightInventoryOwnerName` | `public string RightInventoryOwnerName` | property |
| `LeftInventoryOwnerName` | `public string LeftInventoryOwnerName` | property |
| `RightInventoryOwnerGold` | `public int RightInventoryOwnerGold` | property |
| `LeftInventoryOwnerGold` | `public int LeftInventoryOwnerGold` | property |
| `ItemCountToBuy` | `public int ItemCountToBuy` | property |
| `CurrentCharacterTotalEncumbrance` | `public string CurrentCharacterTotalEncumbrance` | property |
| `CurrentCharacterLegArmor` | `public float CurrentCharacterLegArmor` | property |
| `CurrentCharacterHeadArmor` | `public float CurrentCharacterHeadArmor` | property |
| `CurrentCharacterBodyArmor` | `public float CurrentCharacterBodyArmor` | property |
| `CurrentCharacterArmArmor` | `public float CurrentCharacterArmArmor` | property |
| `CurrentCharacterHorseArmor` | `public float CurrentCharacterHorseArmor` | property |
| `IsRefreshed` | `public bool IsRefreshed` | property |
| `IsExtendedEquipmentControlsEnabled` | `public bool IsExtendedEquipmentControlsEnabled` | property |
| `IsFocusedOnItemList` | `public bool IsFocusedOnItemList` | property |
| `CurrentFocusedItem` | `public SPItemVM CurrentFocusedItem` | property |
| `CharacterHelmSlot` | `public SPItemVM CharacterHelmSlot` | property |
| `CharacterCloakSlot` | `public SPItemVM CharacterCloakSlot` | property |
| `CharacterTorsoSlot` | `public SPItemVM CharacterTorsoSlot` | property |
| `CharacterGloveSlot` | `public SPItemVM CharacterGloveSlot` | property |
| `CharacterBootSlot` | `public SPItemVM CharacterBootSlot` | property |
| `CharacterMountSlot` | `public SPItemVM CharacterMountSlot` | property |
| `CharacterMountArmorSlot` | `public SPItemVM CharacterMountArmorSlot` | property |
| `CharacterWeapon1Slot` | `public SPItemVM CharacterWeapon1Slot` | property |
| `CharacterWeapon2Slot` | `public SPItemVM CharacterWeapon2Slot` | property |
| `CharacterWeapon3Slot` | `public SPItemVM CharacterWeapon3Slot` | property |
| `CharacterWeapon4Slot` | `public SPItemVM CharacterWeapon4Slot` | property |
| `CharacterBannerSlot` | `public SPItemVM CharacterBannerSlot` | property |
| `MainCharacter` | `public HeroViewModel MainCharacter` | property |
| `MBBindingList` | `public MBBindingList<SPItemVM>RightItemListVM` | property |
| `MBBindingList` | `public MBBindingList<SPItemVM>LeftItemListVM` | property |
| `IsBannerItemsHighlightApplied` | `public bool IsBannerItemsHighlightApplied` | property |
| `BannerTypeName` | `public string BannerTypeName` | property |
| `ScrollToItem` | `public bool ScrollToItem` | property |
| `ScrollItemId` | `public string ScrollItemId` | property |
| `IsCivilianMode` | `public bool IsCivilianMode` | property |
| `IsBattleMode` | `public bool IsBattleMode` | property |
| `IsStealthMode` | `public bool IsStealthMode` | property |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey gameKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `SetPreviousCharacterInputKey` | `public void SetPreviousCharacterInputKey(HotKey hotKey)` | method |
| `SetNextCharacterInputKey` | `public void SetNextCharacterInputKey(HotKey hotKey)` | method |
| `SetBuyAllInputKey` | `public void SetBuyAllInputKey(HotKey hotKey)` | method |
| `SetSellAllInputKey` | `public void SetSellAllInputKey(HotKey hotKey)` | method |
| `SetGetKeyTextFromKeyIDFunc` | `public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject>getKeyTextFromKeyId)` | method |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `PreviousCharacterInputKey` | `public InputKeyItemVM PreviousCharacterInputKey` | property |
| `NextCharacterInputKey` | `public InputKeyItemVM NextCharacterInputKey` | property |
| `BuyAllInputKey` | `public InputKeyItemVM BuyAllInputKey` | property |
| `SellAllInputKey` | `public InputKeyItemVM SellAllInputKey` | property |
| `EquipmentModes` | `public enum EquipmentModes` | property |
| `Filters` | `public enum Filters` | property |
| `EquipmentModes` | `public enum EquipmentModes` | nested type |
| `Filters` | `public enum Filters` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent)
- [same namespace InventoryFilterChangedEvent](../InventoryFilterChangedEvent)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent)
