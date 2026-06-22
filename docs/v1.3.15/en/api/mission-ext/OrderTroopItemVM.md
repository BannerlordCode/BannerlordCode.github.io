<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderTroopItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderTroopItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `OrderTroopItemVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Order` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ContainsDeadTroop` | `public bool ContainsDeadTroop { get; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `FormationIndex` | `public int FormationIndex { get; set; }` |
| `CurrentMemberCount` | `public int CurrentMemberCount { get; set; }` |
| `Morale` | `public int Morale { get; set; }` |
| `AmmoPercentage` | `public float AmmoPercentage { get; set; }` |
| `IsAmmoAvailable` | `public bool IsAmmoAvailable { get; set; }` |
| `HaveTroops` | `public bool HaveTroops { get; set; }` |
| `HasTarget` | `public bool HasTarget { get; set; }` |
| `IsTargetRelevant` | `public bool IsTargetRelevant { get; set; }` |
| `HasCaptain` | `public bool HasCaptain { get; set; }` |
| `CurrentOrderIconId` | `public string CurrentOrderIconId { get; set; }` |
| `CurrentTargetFormationType` | `public string CurrentTargetFormationType { get; set; }` |
| `FormationName` | `public string FormationName { get; set; }` |
| `CaptainImageIdentifier` | `public CharacterImageIdentifierVM CaptainImageIdentifier { get; set; }` |
| `ActiveFormationClasses` | `public MBBindingList<OrderTroopItemFormationClassVM> ActiveFormationClasses { get; set; }` |
| `ActiveFilters` | `public MBBindingList<OrderTroopItemFilterVM> ActiveFilters { get; set; }` |


## Key Methods

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnFormationAgentRemoved

```csharp
public void OnFormationAgentRemoved(Agent agent)
```

### UpdateVisuals

```csharp
public virtual void UpdateVisuals()
```

### Update

```csharp
public virtual void Update()
```

### UpdateSelectionKeyInfo

```csharp
public void UpdateSelectionKeyInfo()
```

### SetFormationClassFromFormation

```csharp
public bool SetFormationClassFromFormation(Formation formation)
```

### UpdateFilterData

```csharp
public void UpdateFilterData(List<FormationFilterType> usedFilters)
```

### ExecuteAction

```csharp
public void ExecuteAction()
```

### RefreshTargetedOrderVisual

```csharp
public virtual void RefreshTargetedOrderVisual()
```

### GetVisibleNameOfFormationForMessage

```csharp
public virtual TextObject GetVisibleNameOfFormationForMessage()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)