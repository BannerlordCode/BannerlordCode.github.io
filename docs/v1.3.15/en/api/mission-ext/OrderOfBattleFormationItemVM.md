<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `OrderOfBattleFormationItemVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasFormation` | `public bool HasFormation { get; set; }` |
| `HasCaptain` | `public bool HasCaptain { get; set; }` |
| `HasHeroTroops` | `public bool HasHeroTroops { get; set; }` |
| `IsControlledByPlayer` | `public bool IsControlledByPlayer { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsAdjustable` | `public bool IsAdjustable { get; set; }` |
| `IsMarkerShown` | `public bool IsMarkerShown { get; set; }` |
| `IsBeingFocused` | `public bool IsBeingFocused { get; set; }` |
| `IsAcceptingCaptain` | `public bool IsAcceptingCaptain { get; set; }` |
| `IsAcceptingHeroTroops` | `public bool IsAcceptingHeroTroops { get; set; }` |
| `IsHeroTroopsOverflowing` | `public bool IsHeroTroopsOverflowing { get; set; }` |
| `IsClassSelectionActive` | `public bool IsClassSelectionActive { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `FormationIsEmptyText` | `public string FormationIsEmptyText { get; set; }` |
| `OverflowHeroTroopCountText` | `public string OverflowHeroTroopCountText { get; set; }` |
| `TroopCount` | `public int TroopCount { get; set; }` |
| `BannerBearerCount` | `public int BannerBearerCount { get; set; }` |
| `OrderOfBattleFormationClassInt` | `public int OrderOfBattleFormationClassInt { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### Tick

```csharp
public void Tick()
```

### RefreshFormation

```csharp
public void RefreshFormation(Formation formation, DeploymentFormationClass overriddenClass = DeploymentFormationClass.Unset, bool mustExist = false)
```

### MakeMarkerWorldPositionDirty

```csharp
public void MakeMarkerWorldPositionDirty()
```

### OnSizeChanged

```csharp
public void OnSizeChanged()
```

### GetOrderOfBattleClass

```csharp
public DeploymentFormationClass GetOrderOfBattleClass()
```

### UpdateAdjustable

```csharp
public void UpdateAdjustable()
```

### HasFilter

```csharp
public bool HasFilter(FormationFilterType filter)
```

### HasOnlyOneClass

```csharp
public bool HasOnlyOneClass()
```

### HasClass

```csharp
public bool HasClass(FormationClass formationClass)
```

### HasClasses

```csharp
public bool HasClasses(FormationClass formationClasses)
```

### UnassignCaptain

```csharp
public void UnassignCaptain()
```

### ExecuteAcceptCaptain

```csharp
public void ExecuteAcceptCaptain()
```

### ExecuteAcceptHeroTroops

```csharp
public void ExecuteAcceptHeroTroops()
```

### OnHeroSelectionUpdated

```csharp
public void OnHeroSelectionUpdated(int selectedHeroCount, bool hasOwnHeroTroopInSelection)
```

### AddHeroTroop

```csharp
public void AddHeroTroop(OrderOfBattleHeroItemVM heroItem)
```

### RemoveHeroTroop

```csharp
public void RemoveHeroTroop(OrderOfBattleHeroItemVM heroItem)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)