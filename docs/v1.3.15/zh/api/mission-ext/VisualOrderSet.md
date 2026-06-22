<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualOrderSet`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualOrderSet

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`VisualOrderSet` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Orders` | `public MBReadOnlyList<VisualOrder> Orders { get; }` |
| `SoloOrder` | `public VisualOrder SoloOrder { get; }` |
| `IsSoloOrder` | `public abstract bool IsSoloOrder { get; }` |
| `StringId` | `public abstract string StringId { get; }` |
| `IconId` | `public abstract string IconId { get; }` |


## 主要方法

### GetName

```csharp
public abstract TextObject GetName(OrderController orderController)
```

### AddOrder

```csharp
public void AddOrder(VisualOrder order)
```

### RemoveOrder

```csharp
public void RemoveOrder(VisualOrder order)
```

### ClearOrders

```csharp
public void ClearOrders()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)