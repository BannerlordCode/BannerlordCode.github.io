<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionOrderVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionOrderVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionOrderVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CursorState` | `public MissionOrderVM.CursorStates CursorState { get; }` |
| `Team` | `public Team Team { get; }` |
| `OrderController` | `public OrderController OrderController { get; set; }` |
| `IsTroopPlacingActive` | `public bool IsTroopPlacingActive { get; set; }` |
| `PlayerHasAnyTroopUnderThem` | `public bool PlayerHasAnyTroopUnderThem { get; }` |
| `SelectedOrderSet` | `public OrderSetVM SelectedOrderSet { get; }` |
| `DisplayedOrderMessageForLastOrder` | `public bool DisplayedOrderMessageForLastOrder { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `OrderSets` | `public MBBindingList<OrderSetVM> OrderSets { get; set; }` |
| `TroopController` | `public MissionOrderTroopControllerVM TroopController { get; set; }` |
| `DeploymentController` | `public MissionOrderDeploymentControllerVM DeploymentController { get; set; }` |
| `ActiveTargetState` | `public int ActiveTargetState { get; set; }` |
| `IsDeployment` | `public bool IsDeployment { get; set; }` |
| `HasAnyCascadingOrders` | `public bool HasAnyCascadingOrders { get; set; }` |
| `IsToggleOrderShown` | `public bool IsToggleOrderShown { get; set; }` |
| `IsTroopListShown` | `public bool IsTroopListShown { get; set; }` |
| `CanUseShortcuts` | `public bool CanUseShortcuts { get; set; }` |
| `IsHolding` | `public bool IsHolding { get; set; }` |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive { get; set; }` |
| `ReturnText` | `public string ReturnText { get; set; }` |


## 主要方法

### SetDeploymentParemeters

```csharp
public void SetDeploymentParemeters(Camera deploymentCamera, List<DeploymentPoint> deploymentPoints)
```

### SetCallbacks

```csharp
public void SetCallbacks(MissionOrderCallbacks callbacks)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnOrderExecuted

```csharp
public void OnOrderExecuted(OrderItemVM orderItem)
```

### OnOrderLayoutTypeChanged

```csharp
public virtual void OnOrderLayoutTypeChanged()
```

### OpenToggleOrder

```csharp
public void OpenToggleOrder(bool fromHold, bool displayMessage = true)
```

### TryCloseToggleOrder

```csharp
public bool TryCloseToggleOrder(bool applySelectedOrders = false)
```

### SetActiveOrders

```csharp
public void SetActiveOrders()
```

### SetFocusedFormations

```csharp
public void SetFocusedFormations(MBReadOnlyList<Formation> focusedFormationsCache)
```

### AfterInitialize

```csharp
public void AfterInitialize()
```

### Update

```csharp
public void Update()
```

### OnEscape

```csharp
public void OnEscape()
```

### ViewOrders

```csharp
public void ViewOrders()
```

### GetOrderSetAtIndex

```csharp
public OrderSetVM GetOrderSetAtIndex(int orderSetIndex)
```

### TrySelectOrderSet

```csharp
public bool TrySelectOrderSet(OrderSetVM orderSet)
```

### OnTroopFormationSelected

```csharp
public void OnTroopFormationSelected(int formationTroopIndex)
```

### ExecuteSelectHighlightedFormation

```csharp
public void ExecuteSelectHighlightedFormation()
```

### OnTroopHighlightSelection

```csharp
public void OnTroopHighlightSelection(bool isDirectionLeft)
```

### ExecuteToggleHighlightedFormation

```csharp
public void ExecuteToggleHighlightedFormation()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)