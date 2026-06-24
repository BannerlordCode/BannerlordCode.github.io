<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponDesignResultPopupVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponDesignResultPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponDesignResultPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPopupVM.cs`

## 概述

`WeaponDesignResultPopupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteFinalizeCrafting
`public void ExecuteFinalizeCrafting()`

**用途 / Purpose:** 执行 `finalize crafting` 操作或流程。

### ExecuteRandomCraftName
`public void ExecuteRandomCraftName()`

**用途 / Purpose:** 执行 `random craft name` 操作或流程。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

## 使用示例

```csharp
var value = new WeaponDesignResultPopupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)