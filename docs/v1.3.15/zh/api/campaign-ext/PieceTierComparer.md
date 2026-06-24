<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PieceTierComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PieceTierComparer

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class PieceTierComparer : IComparer<CraftingPieceVM>`
**Base:** `IComparer<CraftingPieceVM>`
**领域:** campaign-ext

## 概述

`PieceTierComparer` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
// 先从游戏状态中拿到一个 PieceTierComparer 实例，再调用它的公开方法
var value = new PieceTierComparer();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
