---
title: "WeaponDesignResultPopupVM"
description: "WeaponDesignResultPopupVM 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 WeaponDesignResultPopupVM 实例
WeaponDesignResultPopupVM weaponDesignResultPopupVM = ...;
weaponDesignResultPopupVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WeaponDesignResultPopupVM 实例
WeaponDesignResultPopupVM weaponDesignResultPopupVM = ...;
weaponDesignResultPopupVM.OnFinalize();
```

### ExecuteFinalizeCrafting
`public void ExecuteFinalizeCrafting()`

**用途 / Purpose:** **用途 / Purpose:** 执行 finalize crafting 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 WeaponDesignResultPopupVM 实例
WeaponDesignResultPopupVM weaponDesignResultPopupVM = ...;
weaponDesignResultPopupVM.ExecuteFinalizeCrafting();
```

### ExecuteRandomCraftName
`public void ExecuteRandomCraftName()`

**用途 / Purpose:** **用途 / Purpose:** 执行 random craft name 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 WeaponDesignResultPopupVM 实例
WeaponDesignResultPopupVM weaponDesignResultPopupVM = ...;
weaponDesignResultPopupVM.ExecuteRandomCraftName();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeaponDesignResultPopupVM 实例
WeaponDesignResultPopupVM weaponDesignResultPopupVM = ...;
weaponDesignResultPopupVM.SetDoneInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WeaponDesignResultPopupVM weaponDesignResultPopupVM = ...;
weaponDesignResultPopupVM.RefreshValues();
```

## 参见

- [本区域目录](../)