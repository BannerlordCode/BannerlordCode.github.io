<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMainAgentEquipmentControllerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMainAgentEquipmentControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMainAgentEquipmentControllerVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsDropControllerActive` | `public bool IsDropControllerActive { get; set; }` |
| `IsEquipControllerActive` | `public bool IsEquipControllerActive { get; set; }` |
| `DropText` | `public string DropText { get; set; }` |
| `EquipText` | `public string EquipText { get; set; }` |
| `FocusedItemText` | `public string FocusedItemText { get; set; }` |
| `SelectedItemText` | `public string SelectedItemText { get; set; }` |
| `DropActions` | `public MBBindingList<EquipmentActionItemVM> DropActions { get; set; }` |
| `EquipActions` | `public MBBindingList<EquipmentActionItemVM> EquipActions { get; set; }` |


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnDropControllerToggle

```csharp
public void OnDropControllerToggle(bool isActive)
```

### SetCurrentFocusedWeaponEntity

```csharp
public void SetCurrentFocusedWeaponEntity(SpawnedItemEntity weaponEntity)
```

### OnEquipControllerToggle

```csharp
public void OnEquipControllerToggle(bool isActive)
```

### OnCancelEquipController

```csharp
public void OnCancelEquipController()
```

### OnCancelDropController

```csharp
public void OnCancelDropController()
```

### GetItemTypeAsString

```csharp
public static string GetItemTypeAsString(ItemObject item)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)