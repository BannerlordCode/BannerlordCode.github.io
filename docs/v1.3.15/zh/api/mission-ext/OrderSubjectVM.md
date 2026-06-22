<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderSubjectVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSubjectVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`OrderSubjectVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsSelectionHighlightActive` | `public bool IsSelectionHighlightActive { get; set; }` |
| `ShowSelectionInputs` | `public bool ShowSelectionInputs { get; set; }` |
| `BehaviorType` | `public int BehaviorType { get; set; }` |
| `UnderAttackOfType` | `public int UnderAttackOfType { get; set; }` |
| `SelectionText` | `public string SelectionText { get; set; }` |
| `ApplySelectionKey` | `public InputKeyItemVM ApplySelectionKey { get; set; }` |
| `ToggleSelectionKey` | `public InputKeyItemVM ToggleSelectionKey { get; set; }` |
| `ActiveOrders` | `public MBBindingList<OrderItemVM> ActiveOrders { get; set; }` |


## 主要方法

### AddActiveOrder

```csharp
public void AddActiveOrder(OrderItemVM order)
```

### RemoveActiveOrder

```csharp
public void RemoveActiveOrder(OrderItemVM order)
```

### ClearActiveOrders

```csharp
public void ClearActiveOrders()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)