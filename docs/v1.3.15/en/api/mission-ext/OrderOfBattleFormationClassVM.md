<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationClassVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationClassVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `OrderOfBattleFormationClassVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Class` | `public FormationClass Class { get; set; }` |
| `PreviousWeight` | `public int PreviousWeight { get; }` |
| `IsAdjustable` | `public bool IsAdjustable { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `IsUnset` | `public bool IsUnset { get; set; }` |
| `Weight` | `public int Weight { get; set; }` |
| `ShownFormationClass` | `public int ShownFormationClass { get; set; }` |
| `TroopCountText` | `public string TroopCountText { get; set; }` |
| `LockWeightHint` | `public HintViewModel LockWeightHint { get; set; }` |
| `IsWeightHighlightActive` | `public bool IsWeightHighlightActive { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### UpdateTroopCountText

```csharp
public void UpdateTroopCountText()
```

### SetWeightAdjustmentLock

```csharp
public void SetWeightAdjustmentLock(bool isLocked)
```

### UpdateWeightAdjustable

```csharp
public void UpdateWeightAdjustable()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)