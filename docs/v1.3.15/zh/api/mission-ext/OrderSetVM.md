<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderSetVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSetVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`OrderSetVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `HasSingleOrder` | `public bool HasSingleOrder { get; }` |
| `OrderSet` | `public VisualOrderSet OrderSet { get; }` |
| `SelectedOrderText` | `public string SelectedOrderText { get; set; }` |
| `SoloOrder` | `public OrderItemVM SoloOrder { get; set; }` |
| `Orders` | `public MBBindingList<OrderItemVM> Orders { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### ExecuteSelect

```csharp
public void ExecuteSelect()
```

### ExecuteDeSelect

```csharp
public void ExecuteDeSelect()
```

### OnOrderExecuted

```csharp
public void OnOrderExecuted(OrderItemVM order)
```

### RefreshOrders

```csharp
public void RefreshOrders()
```

### RefreshOrderStates

```csharp
public void RefreshOrderStates()
```

### UpdateCanUseShortcuts

```csharp
public void UpdateCanUseShortcuts(bool value)
```

### OnOrderSetSelectionStateChangedDelegate

```csharp
public delegate void OnOrderSetSelectionStateChangedDelegate(OrderSetVM orderSet, bool isSelected)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)