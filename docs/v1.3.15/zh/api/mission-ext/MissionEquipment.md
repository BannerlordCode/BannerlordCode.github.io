<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionEquipment`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionEquipment

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionEquipment` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public MissionWeapon this { get; set; }` |
| `this` | `public MissionWeapon this { get; set; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)