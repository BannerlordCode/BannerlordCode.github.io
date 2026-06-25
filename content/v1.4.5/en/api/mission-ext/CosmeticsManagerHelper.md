---
title: "CosmeticsManagerHelper"
description: "Auto-generated class reference for CosmeticsManagerHelper."
---
# CosmeticsManagerHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManagerHelper`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs`

## Overview

`CosmeticsManagerHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CosmeticsManagerHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetUsedIndicesFromIds
`public static Dictionary<int, List<int>> GetUsedIndicesFromIds(Dictionary<string, List<string>> usedCosmetics)`

**Purpose:** Reads and returns the `used indices from ids` value held by the current object.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.GetUsedIndicesFromIds(dictionary<string, usedCosmetics);
```

### GetSuitableTauntAction
`public static ActionIndexCache GetSuitableTauntAction(Agent agent, int tauntIndex)`

**Purpose:** Reads and returns the `suitable taunt action` value held by the current object.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.GetSuitableTauntAction(agent, 0);
```

### GetActionNotUsableReason
`public static TauntUsageManager.TauntUsage.TauntUsageFlag GetActionNotUsableReason(Agent agent, int tauntIndex)`

**Purpose:** Reads and returns the `action not usable reason` value held by the current object.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.GetActionNotUsableReason(agent, 0);
```

### GetSuitableTauntActionForEquipment
`public static string GetSuitableTauntActionForEquipment(Equipment equipment, TauntCosmeticElement taunt)`

**Purpose:** Reads and returns the `suitable taunt action for equipment` value held by the current object.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.GetSuitableTauntActionForEquipment(equipment, taunt);
```

### IsWeaponClassOneHanded
`public static bool IsWeaponClassOneHanded(WeaponClass weaponClass)`

**Purpose:** Determines whether the current object is in the `weapon class one handed` state or condition.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.IsWeaponClassOneHanded(weaponClass);
```

### IsWeaponClassTwoHanded
`public static bool IsWeaponClassTwoHanded(WeaponClass weaponClass)`

**Purpose:** Determines whether the current object is in the `weapon class two handed` state or condition.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.IsWeaponClassTwoHanded(weaponClass);
```

### IsWeaponClassShield
`public static bool IsWeaponClassShield(WeaponClass weaponClass)`

**Purpose:** Determines whether the current object is in the `weapon class shield` state or condition.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.IsWeaponClassShield(weaponClass);
```

### IsWeaponClassBow
`public static bool IsWeaponClassBow(WeaponClass weaponClass)`

**Purpose:** Determines whether the current object is in the `weapon class bow` state or condition.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.IsWeaponClassBow(weaponClass);
```

### IsWeaponClassCrossbow
`public static bool IsWeaponClassCrossbow(WeaponClass weaponClass)`

**Purpose:** Determines whether the current object is in the `weapon class crossbow` state or condition.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.IsWeaponClassCrossbow(weaponClass);
```

### GetComplimentaryWeaponClasses
`public static WeaponClass GetComplimentaryWeaponClasses(WeaponClass weaponClass)`

**Purpose:** Reads and returns the `complimentary weapon classes` value held by the current object.

```csharp
// Static call; no instance required
CosmeticsManagerHelper.GetComplimentaryWeaponClasses(weaponClass);
```

## Usage Example

```csharp
CosmeticsManagerHelper.Initialize();
```

## See Also

- [Area Index](../)