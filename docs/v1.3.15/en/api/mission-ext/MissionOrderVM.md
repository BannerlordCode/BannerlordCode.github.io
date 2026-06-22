<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionOrderVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionOrderVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionOrderVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Order` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)