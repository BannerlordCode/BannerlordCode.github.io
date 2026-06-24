<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingOrderPopupVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingOrderPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrderPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order/CraftingOrderPopupVM.cs`

## 概述

`CraftingOrderPopupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `QuestType` | `public int QuestType { get; set; }` |
| `OrderCountText` | `public string OrderCountText { get; set; }` |
| `SelectedCraftingOrder` | `public CraftingOrderItemVM SelectedCraftingOrder { get; set; }` |
| `CraftingOrders` | `public MBBindingList<CraftingOrderItemVM> CraftingOrders { get; set; }` |

## 主要方法

### Compare
`public int Compare(CraftingOrder x, CraftingOrder y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshOrders
`public void RefreshOrders()`

**用途 / Purpose:** 刷新 `orders` 的显示或缓存。

### SelectOrder
`public void SelectOrder(CraftingOrderItemVM order)`

**用途 / Purpose:** 处理 `select order` 相关逻辑。

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**用途 / Purpose:** 执行 `open popup` 操作或流程。

### ExecuteCloseWithoutSelection
`public void ExecuteCloseWithoutSelection()`

**用途 / Purpose:** 执行 `close without selection` 操作或流程。

## 使用示例

```csharp
var value = new CraftingOrderPopupVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)