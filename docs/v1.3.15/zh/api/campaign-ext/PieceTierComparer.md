<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PieceTierComparer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PieceTierComparer

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PieceTierComparer` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetPieceNewlyUnlocked

```csharp
public void SetPieceNewlyUnlocked(CraftingPiece piece)
```

### SelectPrimaryWeaponClass

```csharp
public void SelectPrimaryWeaponClass(CraftingTemplate template)
```

### ExecuteOpenOrderPopup

```csharp
public void ExecuteOpenOrderPopup()
```

### ExecuteCloseOrderPopup

```csharp
public void ExecuteCloseOrderPopup()
```

### ExecuteOpenOrdersTab

```csharp
public void ExecuteOpenOrdersTab()
```

### ExecuteOpenWeaponClassSelectionPopup

```csharp
public void ExecuteOpenWeaponClassSelectionPopup()
```

### ExecuteOpenFreeBuildTab

```csharp
public void ExecuteOpenFreeBuildTab()
```

### CreateCraftingResultPopup

```csharp
public void CreateCraftingResultPopup()
```

### ExecuteToggleShowOnlyUnlockedPieces

```csharp
public void ExecuteToggleShowOnlyUnlockedPieces()
```

### ExecuteUndo

```csharp
public void ExecuteUndo()
```

### ExecuteRedo

```csharp
public void ExecuteRedo()
```

### ChangeModeIfHeroIsUnavailable

```csharp
public void ChangeModeIfHeroIsUnavailable()
```

### ExecuteBeginHeroHint

```csharp
public void ExecuteBeginHeroHint()
```

### ExecuteEndHeroHint

```csharp
public void ExecuteEndHeroHint()
```

### ExecuteRandomize

```csharp
public void ExecuteRandomize()
```

### ExecuteChangeScabbardVisibility

```csharp
public void ExecuteChangeScabbardVisibility()
```

### SelectWeapon

```csharp
public void SelectWeapon(ItemObject itemObject)
```

### CanCompleteOrder

```csharp
public bool CanCompleteOrder()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)