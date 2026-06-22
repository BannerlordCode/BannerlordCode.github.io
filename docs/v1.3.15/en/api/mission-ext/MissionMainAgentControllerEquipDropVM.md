<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMainAgentControllerEquipDropVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMainAgentControllerEquipDropVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMainAgentControllerEquipDropVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `EquippedWeapons` | `public MBBindingList<ControllerEquippedItemVM> EquippedWeapons { get; set; }` |
| `EquippedExtraWeapon` | `public ControllerEquippedItemVM EquippedExtraWeapon { get; set; }` |
| `HoldToDropText` | `public string HoldToDropText { get; set; }` |
| `PressToEquipText` | `public string PressToEquipText { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HaveExtraWeapon` | `public bool HaveExtraWeapon { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### InitializeMainAgentPropterties

```csharp
public void InitializeMainAgentPropterties()
```

### OnToggle

```csharp
public void OnToggle(bool isEnabled)
```

### OnCancelHoldController

```csharp
public void OnCancelHoldController()
```

### OnWeaponDroppedAtIndex

```csharp
public void OnWeaponDroppedAtIndex(int droppedWeaponIndex)
```

### OnWeaponEquippedAtIndex

```csharp
public void OnWeaponEquippedAtIndex(int equippedWeaponIndex)
```

### SetDropProgressForIndex

```csharp
public void SetDropProgressForIndex(EquipmentIndex eqIndex, float progress)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnGamepadActiveChanged

```csharp
public void OnGamepadActiveChanged(bool isActive)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)