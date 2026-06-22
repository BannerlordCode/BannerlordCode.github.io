<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionOrderTroopControllerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionOrderTroopControllerVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionOrderTroopControllerVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TroopList` | `public MBList<OrderTroopItemVM> TroopList { get; }` |
| `IsTransferActive` | `public bool IsTransferActive { get; set; }` |
| `IsTransferValid` | `public bool IsTransferValid { get; set; }` |
| `TransferTargetList` | `public MBBindingList<OrderTroopItemVM> TransferTargetList { get; set; }` |
| `TransferMaxValue` | `public int TransferMaxValue { get; set; }` |
| `TransferValue` | `public int TransferValue { get; set; }` |
| `TransferTitleText` | `public string TransferTitleText { get; set; }` |
| `AcceptText` | `public string AcceptText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `TroopItem0` | `public OrderTroopItemVM TroopItem0 { get; set; }` |
| `TroopItem1` | `public OrderTroopItemVM TroopItem1 { get; set; }` |
| `TroopItem2` | `public OrderTroopItemVM TroopItem2 { get; set; }` |
| `TroopItem3` | `public OrderTroopItemVM TroopItem3 { get; set; }` |
| `TroopItem4` | `public OrderTroopItemVM TroopItem4 { get; set; }` |
| `TroopItem5` | `public OrderTroopItemVM TroopItem5 { get; set; }` |
| `TroopItem6` | `public OrderTroopItemVM TroopItem6 { get; set; }` |
| `TroopItem7` | `public OrderTroopItemVM TroopItem7 { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### ExecuteSelectAll

```csharp
public void ExecuteSelectAll()
```

### ExecuteSelectTransferTroop

```csharp
public void ExecuteSelectTransferTroop(OrderTroopItemVM targetTroop)
```

### ExecuteConfirmTransfer

```csharp
public void ExecuteConfirmTransfer()
```

### ExecuteCancelTransfer

```csharp
public void ExecuteCancelTransfer()
```

### ExecuteReset

```csharp
public void ExecuteReset()
```

### SetTroopActiveOrders

```csharp
public void SetTroopActiveOrders(OrderTroopItemVM item)
```

### SelectAllFormations

```csharp
public virtual void SelectAllFormations(bool uiFeedback = true)
```

### AddSelectedFormation

```csharp
public virtual void AddSelectedFormation(OrderTroopItemVM item)
```

### SetSelectedFormation

```csharp
public void SetSelectedFormation(OrderTroopItemVM item)
```

### OnDeselectFormation

```csharp
public void OnDeselectFormation(int index)
```

### OnDeselectFormation

```csharp
public void OnDeselectFormation(OrderTroopItemVM item)
```

### OnSelectFormation

```csharp
public void OnSelectFormation(OrderTroopItemVM item)
```

### UpdateTroops

```csharp
public void UpdateTroops()
```

### AddTroops

```csharp
public void AddTroops(Agent agent)
```

### RemoveTroops

```csharp
public void RemoveTroops(Agent agent)
```

### OnTroopOrderIssued

```csharp
public void OnTroopOrderIssued(List<OrderTroopItemVM> selectedFormations, OrderItemVM orderItem)
```

### IntervalUpdate

```csharp
public void IntervalUpdate()
```

### RefreshTroopFormationTargetVisuals

```csharp
public void RefreshTroopFormationTargetVisuals()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)