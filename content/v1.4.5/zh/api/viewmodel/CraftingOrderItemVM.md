---
title: "CraftingOrderItemVM"
description: "CraftingOrderItemVM 的自动生成类参考。"
---
# CraftingOrderItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrderItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order/CraftingOrderItemVM.cs`

## 概述

`CraftingOrderItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CraftingOrder` | `public CraftingOrder CraftingOrder { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasAvailableHeroes` | `public bool HasAvailableHeroes { get; set; }` |
| `IsDifficultySuitableForHero` | `public bool IsDifficultySuitableForHero { get; set; }` |
| `IsQuestOrder` | `public bool IsQuestOrder { get; set; }` |
| `OrderPrice` | `public int OrderPrice { get; set; }` |
| `OrderDifficultyLabelText` | `public string OrderDifficultyLabelText { get; set; }` |
| `OrderDifficultyValueText` | `public string OrderDifficultyValueText { get; set; }` |
| `OrderNumberText` | `public string OrderNumberText { get; set; }` |
| `OrderWeaponType` | `public string OrderWeaponType { get; set; }` |
| `OrderWeaponTypeCode` | `public string OrderWeaponTypeCode { get; set; }` |
| `OrderOwnerData` | `public HeroVM OrderOwnerData { get; set; }` |
| `DisabledReasonHint` | `public BasicTooltipViewModel DisabledReasonHint { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `WeaponAttributes` | `public MBBindingList<WeaponAttributeVM> WeaponAttributes { get; set; }` |

## 主要方法

### RefreshStats
`public void RefreshStats()`

**用途 / Purpose:** 使 「stats」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CraftingOrderItemVM 实例
CraftingOrderItemVM craftingOrderItemVM = ...;
craftingOrderItemVM.RefreshStats();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CraftingOrderItemVM 实例
CraftingOrderItemVM craftingOrderItemVM = ...;
craftingOrderItemVM.RefreshValues();
```

### ExecuteSelectOrder
`public void ExecuteSelectOrder()`

**用途 / Purpose:** 执行 「select order」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingOrderItemVM 实例
CraftingOrderItemVM craftingOrderItemVM = ...;
craftingOrderItemVM.ExecuteSelectOrder();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CraftingOrderItemVM craftingOrderItemVM = ...;
craftingOrderItemVM.RefreshStats();
```

## 参见

- [本区域目录](../)