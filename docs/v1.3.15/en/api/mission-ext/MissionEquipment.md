<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionEquipment`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionEquipment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionEquipment` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public MissionWeapon this { get; set; }` |
| `this` | `public MissionWeapon this { get; set; }` |


## Key Methods

### FillFrom

```csharp
public void FillFrom(MissionEquipment sourceEquipment)
```

### FillFrom

```csharp
public void FillFrom(Equipment sourceEquipment, Banner banner)
```

### GetTotalWeightOfWeapons

```csharp
public float GetTotalWeightOfWeapons()
```

### SelectWeaponPickUpSlot

```csharp
public static EquipmentIndex SelectWeaponPickUpSlot(Agent agentPickingUp, MissionWeapon weaponBeingPickedUp, bool isStuckMissile)
```

### HasAmmo

```csharp
public bool HasAmmo(EquipmentIndex equipmentIndex, out int rangedUsageIndex, out bool hasLoadedAmmo, out bool noAmmoInThisSlot)
```

### GetAmmoAmount

```csharp
public int GetAmmoAmount(EquipmentIndex weaponIndex)
```

### GetMaxAmmo

```csharp
public int GetMaxAmmo(EquipmentIndex weaponIndex)
```

### GetAmmoCountAndIndexOfType

```csharp
public void GetAmmoCountAndIndexOfType(ItemObject.ItemTypeEnum itemType, out int ammoCount, out EquipmentIndex eIndex, EquipmentIndex equippedIndex = EquipmentIndex.None)
```

### DoesWeaponFitToSlot

```csharp
public static bool DoesWeaponFitToSlot(EquipmentIndex slotIndex, MissionWeapon weapon)
```

### CheckLoadedAmmos

```csharp
public void CheckLoadedAmmos()
```

### SetUsageIndexOfSlot

```csharp
public void SetUsageIndexOfSlot(EquipmentIndex slotIndex, int usageIndex)
```

### SetReloadPhaseOfSlot

```csharp
public void SetReloadPhaseOfSlot(EquipmentIndex slotIndex, short reloadPhase)
```

### SetAmountOfSlot

```csharp
public void SetAmountOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxAmount = false)
```

### SetHitPointsOfSlot

```csharp
public void SetHitPointsOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxHitPoints = false)
```

### SetReloadedAmmoOfSlot

```csharp
public void SetReloadedAmmoOfSlot(EquipmentIndex slotIndex, EquipmentIndex ammoSlotIndex, short totalAmmo)
```

### SetConsumedAmmoOfSlot

```csharp
public void SetConsumedAmmoOfSlot(EquipmentIndex slotIndex, short count)
```

### AttachWeaponToWeaponInSlot

```csharp
public void AttachWeaponToWeaponInSlot(EquipmentIndex slotIndex, ref MissionWeapon weapon, ref MatrixFrame attachLocalFrame)
```

### HasShield

```csharp
public bool HasShield()
```

### HasAnyWeapon

```csharp
public bool HasAnyWeapon()
```

### HasAnyWeaponWithFlags

```csharp
public bool HasAnyWeaponWithFlags(WeaponFlags flags)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)