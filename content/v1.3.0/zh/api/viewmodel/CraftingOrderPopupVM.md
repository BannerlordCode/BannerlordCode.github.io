---
title: "CraftingOrderPopupVM"
description: "CraftingOrderPopupVM 的自动生成类参考。"
---
# CraftingOrderPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrderPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderPopupVM.cs`

## 概述

`CraftingOrderPopupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasOrders` | `public bool HasOrders { get; }` |
| `HasEnabledOrders` | `public bool HasEnabledOrders { get; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `QuestType` | `public int QuestType { get; set; }` |
| `OrderCountText` | `public string OrderCountText { get; set; }` |
| `SelectedCraftingOrder` | `public CraftingOrderItemVM SelectedCraftingOrder { get; set; }` |
| `CraftingOrders` | `public MBBindingList<CraftingOrderItemVM> CraftingOrders { get; set; }` |

## 主要方法

### RefreshOrders
`public void RefreshOrders()`

**用途 / Purpose:** 使 「orders」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CraftingOrderPopupVM 实例
CraftingOrderPopupVM craftingOrderPopupVM = ...;
craftingOrderPopupVM.RefreshOrders();
```

### SelectOrder
`public void SelectOrder(CraftingOrderItemVM order)`

**用途 / Purpose:** 处理与 「select order」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CraftingOrderPopupVM 实例
CraftingOrderPopupVM craftingOrderPopupVM = ...;
craftingOrderPopupVM.SelectOrder(order);
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** 执行 「open popup」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingOrderPopupVM 实例
CraftingOrderPopupVM craftingOrderPopupVM = ...;
craftingOrderPopupVM.ExecuteOpenPopup();
```

### ExecuteCloseWithoutSelection
`public void ExecuteCloseWithoutSelection()`

**用途 / Purpose:** 执行 「close without selection」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingOrderPopupVM 实例
CraftingOrderPopupVM craftingOrderPopupVM = ...;
craftingOrderPopupVM.ExecuteCloseWithoutSelection();
```

### Compare
`public int Compare(CraftingOrder x, CraftingOrder y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 CraftingOrderPopupVM 实例
CraftingOrderPopupVM craftingOrderPopupVM = ...;
var result = craftingOrderPopupVM.Compare(x, y);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CraftingOrderPopupVM craftingOrderPopupVM = ...;
craftingOrderPopupVM.RefreshOrders();
```

## 参见

- [本区域目录](../)