---
title: "WeaponDesignVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponDesignVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponDesignVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponDesignVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignVM.cs`

## 概述

`WeaponDesignVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetPieceNewlyUnlocked
`public void SetPieceNewlyUnlocked(CraftingPiece piece)`

**用途 / Purpose:** 设置 `piece newly unlocked` 的值或状态。

### SelectPrimaryWeaponClass
`public void SelectPrimaryWeaponClass(CraftingTemplate template)`

**用途 / Purpose:** 处理 `select primary weapon class` 相关逻辑。

### ExecuteOpenOrderPopup
`public void ExecuteOpenOrderPopup()`

**用途 / Purpose:** 执行 `open order popup` 操作或流程。

### ExecuteCloseOrderPopup
`public void ExecuteCloseOrderPopup()`

**用途 / Purpose:** 执行 `close order popup` 操作或流程。

### ExecuteOpenOrdersTab
`public void ExecuteOpenOrdersTab()`

**用途 / Purpose:** 执行 `open orders tab` 操作或流程。

### ExecuteOpenWeaponClassSelectionPopup
`public void ExecuteOpenWeaponClassSelectionPopup()`

**用途 / Purpose:** 执行 `open weapon class selection popup` 操作或流程。

### ExecuteOpenFreeBuildTab
`public void ExecuteOpenFreeBuildTab()`

**用途 / Purpose:** 执行 `open free build tab` 操作或流程。

### CreateCraftingResultPopup
`public void CreateCraftingResultPopup()`

**用途 / Purpose:** 创建一个 `crafting result popup` 实例或对象。

### ExecuteToggleShowOnlyUnlockedPieces
`public void ExecuteToggleShowOnlyUnlockedPieces()`

**用途 / Purpose:** 执行 `toggle show only unlocked pieces` 操作或流程。

### ExecuteUndo
`public void ExecuteUndo()`

**用途 / Purpose:** 执行 `undo` 操作或流程。

### ExecuteRedo
`public void ExecuteRedo()`

**用途 / Purpose:** 执行 `redo` 操作或流程。

### ChangeModeIfHeroIsUnavailable
`public void ChangeModeIfHeroIsUnavailable()`

**用途 / Purpose:** 处理 `change mode if hero is unavailable` 相关逻辑。

### ExecuteBeginHeroHint
`public void ExecuteBeginHeroHint()`

**用途 / Purpose:** 执行 `begin hero hint` 操作或流程。

### ExecuteEndHeroHint
`public void ExecuteEndHeroHint()`

**用途 / Purpose:** 执行 `end hero hint` 操作或流程。

### ExecuteRandomize
`public void ExecuteRandomize()`

**用途 / Purpose:** 执行 `randomize` 操作或流程。

### ExecuteChangeScabbardVisibility
`public void ExecuteChangeScabbardVisibility()`

**用途 / Purpose:** 执行 `change scabbard visibility` 操作或流程。

### SelectWeapon
`public void SelectWeapon(ItemObject itemObject)`

**用途 / Purpose:** 处理 `select weapon` 相关逻辑。

### CanCompleteOrder
`public bool CanCompleteOrder()`

**用途 / Purpose:** 判断当前对象是否可以执行 `complete order`。

### ExecuteFinalizeCrafting
`public void ExecuteFinalizeCrafting()`

**用途 / Purpose:** 执行 `finalize crafting` 操作或流程。

### RefreshItem
`public void RefreshItem()`

**用途 / Purpose:** 刷新 `item` 的显示或缓存。

### HaveUnlockedAllSelectedPieces
`public bool HaveUnlockedAllSelectedPieces()`

**用途 / Purpose:** 处理 `have unlocked all selected pieces` 相关逻辑。

### SwitchToPiece
`public void SwitchToPiece(WeaponDesignElement usedPiece)`

**用途 / Purpose:** 处理 `switch to piece` 相关逻辑。

### Compare
`public int Compare(CraftingPieceVM x, CraftingPieceVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public int Compare(CraftingTemplate x, CraftingTemplate y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public int Compare(CraftingListPropertyItem x, CraftingListPropertyItem y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
var value = new WeaponDesignVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)