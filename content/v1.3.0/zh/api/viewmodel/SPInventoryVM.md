---
title: "SPInventoryVM"
description: "SPInventoryVM 的自动生成类参考。"
---
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
| `TotalWeightCarriedHint` | `public BasicTooltipViewModel TotalWeightCarriedHint { get; set; }` |
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
| `SeparatorText` | `public string SeparatorText { get; set; }` |
| `OtherSideCapacityExceededText` | `public string OtherSideCapacityExceededText { get; set; }` |
| `LeftSearchText` | `public string LeftSearchText { get; set; }` |
| `RightSearchText` | `public string RightSearchText { get; set; }` |
| `HasGainedExperience` | `public bool HasGainedExperience { get; set; }` |
| `IsDonationXpGainExceedsMax` | `public bool IsDonationXpGainExceedsMax { get; set; }` |
| `NoSaddleWarned` | `public bool NoSaddleWarned { get; set; }` |
| `PlayerEquipmentCountWarned` | `public bool PlayerEquipmentCountWarned { get; set; }` |
| `OtherEquipmentCountWarned` | `public bool OtherEquipmentCountWarned { get; set; }` |
| `OtherEquipmentCapacityExceededWarning` | `public bool OtherEquipmentCapacityExceededWarning { get; set; }` |
| `OtherEquipmentCountText` | `public string OtherEquipmentCountText { get; set; }` |
| `MainPartyTotalWeightCarriedText` | `public string MainPartyTotalWeightCarriedText { get; set; }` |
| `MainPartyInventoryCapacityText` | `public string MainPartyInventoryCapacityText { get; set; }` |
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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.OnFinalize();
```

### RefreshCallbacks
`public void RefreshCallbacks()`

**用途 / Purpose:** 使 「callbacks」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.RefreshCallbacks();
```

### ExecuteShowRecap
`public void ExecuteShowRecap()`

**用途 / Purpose:** 执行 「show recap」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteShowRecap();
```

### ExecuteCancelRecap
`public void ExecuteCancelRecap()`

**用途 / Purpose:** 执行 「cancel recap」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteCancelRecap();
```

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**用途 / Purpose:** 执行 「remove zero counts」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteRemoveZeroCounts();
```

### ClosePreview
`public void ClosePreview()`

**用途 / Purpose:** 关闭「preview」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ClosePreview();
```

### ProcessItemTooltip
`public void ProcessItemTooltip(ItemVM item)`

**用途 / Purpose:** 处理与 「process item tooltip」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ProcessItemTooltip(item);
```

### ResetSelectedItem
`public void ResetSelectedItem()`

**用途 / Purpose:** 将 「selected item」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ResetSelectedItem();
```

### RefreshComparedItem
`public void RefreshComparedItem()`

**用途 / Purpose:** 使 「compared item」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.RefreshComparedItem();
```

### IsItemEquipmentPossible
`public bool IsItemEquipmentPossible(SPItemVM itemVM)`

**用途 / Purpose:** 判断当前对象是否处于 「item equipment possible」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
var result = sPInventoryVM.IsItemEquipmentPossible(itemVM);
```

### CompareNextItem
`public void CompareNextItem()`

**用途 / Purpose:** 比较两个「next item」对象并返回大小/顺序结果。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.CompareNextItem();
```

### ExecuteSelectItem
`public void ExecuteSelectItem(ItemVM item)`

**用途 / Purpose:** 执行 「select item」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteSelectItem(item);
```

### ExecuteClearSelectedItem
`public void ExecuteClearSelectedItem()`

**用途 / Purpose:** 执行 「clear selected item」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteClearSelectedItem();
```

### IsAnyEquippedItemSelected
`public bool IsAnyEquippedItemSelected()`

**用途 / Purpose:** 判断当前对象是否处于 「any equipped item selected」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
var result = sPInventoryVM.IsAnyEquippedItemSelected();
```

### ExecuteSelectStealthOutfit
`public void ExecuteSelectStealthOutfit()`

**用途 / Purpose:** 执行 「select stealth outfit」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteSelectStealthOutfit();
```

### ExecuteSelectBattleOutfit
`public void ExecuteSelectBattleOutfit()`

**用途 / Purpose:** 执行 「select battle outfit」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteSelectBattleOutfit();
```

### ExecuteSelectCivilianOutfit
`public void ExecuteSelectCivilianOutfit()`

**用途 / Purpose:** 执行 「select civilian outfit」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteSelectCivilianOutfit();
```

### ExecuteBuyAllItems
`public void ExecuteBuyAllItems()`

**用途 / Purpose:** 执行 「buy all items」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteBuyAllItems();
```

### ExecuteSellAllItems
`public void ExecuteSellAllItems()`

**用途 / Purpose:** 执行 「sell all items」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteSellAllItems();
```

### ExecuteBuyItemTest
`public void ExecuteBuyItemTest()`

**用途 / Purpose:** 执行 「buy item test」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteBuyItemTest();
```

### ExecuteResetTranstactions
`public void ExecuteResetTranstactions()`

**用途 / Purpose:** 执行 「reset transtactions」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteResetTranstactions();
```

### ExecuteResetAndCompleteTranstactions
`public void ExecuteResetAndCompleteTranstactions()`

**用途 / Purpose:** 执行 「reset and complete transtactions」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteResetAndCompleteTranstactions();
```

### ExecuteCompleteTranstactions
`public void ExecuteCompleteTranstactions()`

**用途 / Purpose:** 执行 「complete transtactions」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteCompleteTranstactions();
```

### ExecuteTransferWithParameters
`public void ExecuteTransferWithParameters(SPItemVM item, int index, string targetTag)`

**用途 / Purpose:** 执行 「transfer with parameters」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteTransferWithParameters(item, 0, "example");
```

### ExecuteFilterNone
`public void ExecuteFilterNone()`

**用途 / Purpose:** 执行 「filter none」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteFilterNone();
```

### ExecuteFilterWeapons
`public void ExecuteFilterWeapons()`

**用途 / Purpose:** 执行 「filter weapons」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteFilterWeapons();
```

### ExecuteFilterArmors
`public void ExecuteFilterArmors()`

**用途 / Purpose:** 执行 「filter armors」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteFilterArmors();
```

### ExecuteFilterShieldsAndRanged
`public void ExecuteFilterShieldsAndRanged()`

**用途 / Purpose:** 执行 「filter shields and ranged」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteFilterShieldsAndRanged();
```

### ExecuteFilterMounts
`public void ExecuteFilterMounts()`

**用途 / Purpose:** 执行 「filter mounts」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteFilterMounts();
```

### ExecuteFilterMisc
`public void ExecuteFilterMisc()`

**用途 / Purpose:** 执行 「filter misc」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.ExecuteFilterMisc();
```

### CycleBetweenWeaponSlots
`public void CycleBetweenWeaponSlots()`

**用途 / Purpose:** 处理与 「cycle between weapon slots」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.CycleBetweenWeaponSlots();
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 「reset input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.SetResetInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey gameKey)`

**用途 / Purpose:** 为 「cancel input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.SetCancelInputKey(gameKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「done input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.SetDoneInputKey(hotKey);
```

### SetPreviousCharacterInputKey
`public void SetPreviousCharacterInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「previous character input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.SetPreviousCharacterInputKey(hotKey);
```

### SetNextCharacterInputKey
`public void SetNextCharacterInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「next character input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.SetNextCharacterInputKey(hotKey);
```

### SetBuyAllInputKey
`public void SetBuyAllInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「buy all input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.SetBuyAllInputKey(hotKey);
```

### SetSellAllInputKey
`public void SetSellAllInputKey(HotKey hotKey)`

**用途 / Purpose:** 为 「sell all input key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.SetSellAllInputKey(hotKey);
```

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**用途 / Purpose:** 为 「get key text from key i d func」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.SetGetKeyTextFromKeyIDFunc(func<string, getKeyTextFromKeyId);
```

### Compare
`public int Compare(SPItemVM x, SPItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPInventoryVM 实例
SPInventoryVM sPInventoryVM = ...;
var result = sPInventoryVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPInventoryVM sPInventoryVM = ...;
sPInventoryVM.RefreshValues();
```

## 参见

- [本区域目录](../)