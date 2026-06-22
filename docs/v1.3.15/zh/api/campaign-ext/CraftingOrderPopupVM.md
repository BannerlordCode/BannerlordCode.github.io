<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingOrderPopupVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingOrderPopupVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CraftingOrderPopupVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void RefreshOrders()
```

### SelectOrder

```csharp
public void SelectOrder(CraftingOrderItemVM order)
```

### ExecuteOpenPopup

```csharp
public void ExecuteOpenPopup()
```

### ExecuteCloseWithoutSelection

```csharp
public void ExecuteCloseWithoutSelection()
```

### Compare

```csharp
public int Compare(CraftingOrder x, CraftingOrder y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)