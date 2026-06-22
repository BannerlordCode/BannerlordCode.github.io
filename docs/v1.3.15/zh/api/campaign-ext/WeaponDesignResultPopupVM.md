<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponDesignResultPopupVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponDesignResultPopupVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`WeaponDesignResultPopupVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `WeaponFlagIconsList` | `public MBBindingList<ItemFlagVM> WeaponFlagIconsList { get; set; }` |
| `IsInOrderMode` | `public bool IsInOrderMode { get; set; }` |
| `CraftedWeaponFinalWorth` | `public int CraftedWeaponFinalWorth { get; set; }` |
| `CraftedWeaponPriceDifference` | `public int CraftedWeaponPriceDifference { get; set; }` |
| `CraftedWeaponInitialWorth` | `public int CraftedWeaponInitialWorth { get; set; }` |
| `CraftedWeaponWorthText` | `public string CraftedWeaponWorthText { get; set; }` |
| `IsOrderSuccessful` | `public bool IsOrderSuccessful { get; set; }` |
| `CanConfirm` | `public bool CanConfirm { get; set; }` |
| `OrderResultText` | `public string OrderResultText { get; set; }` |
| `OrderOwnerRemarkText` | `public string OrderOwnerRemarkText { get; set; }` |
| `WeaponCraftedText` | `public string WeaponCraftedText { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `DesignResultPropertyList` | `public MBBindingList<WeaponDesignResultPropertyItemVM> DesignResultPropertyList { get; set; }` |
| `ItemName` | `public string ItemName { get; set; }` |
| `ItemVisualModel` | `public ItemCollectionElementViewModel ItemVisualModel { get; set; }` |
| `ConfirmDisabledReasonHint` | `public HintViewModel ConfirmDisabledReasonHint { get; set; }` |
| `SecondaryUsageSelector` | `public SelectorVM<CraftingSecondaryUsageItemVM> SecondaryUsageSelector { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### ExecuteFinalizeCrafting

```csharp
public void ExecuteFinalizeCrafting()
```

### ExecuteRandomCraftName

```csharp
public void ExecuteRandomCraftName()
```

### SetDoneInputKey

```csharp
public void SetDoneInputKey(HotKey hotkey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)