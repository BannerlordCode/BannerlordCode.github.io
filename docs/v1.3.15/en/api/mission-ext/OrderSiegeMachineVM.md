<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderSiegeMachineVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSiegeMachineVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `OrderSiegeMachineVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.Order` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint { get; }` |
| `SiegeWeapon` | `public SiegeWeapon SiegeWeapon { get; }` |
| `IsPrimarySiegeMachine` | `public bool IsPrimarySiegeMachine { get; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `CurrentHP` | `public double CurrentHP { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |


## Key Methods

### RefreshSiegeWeapon

```csharp
public void RefreshSiegeWeapon()
```

### GetSiegeType

```csharp
public static SiegeEngineType GetSiegeType(Type t, BattleSideEnum side)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)