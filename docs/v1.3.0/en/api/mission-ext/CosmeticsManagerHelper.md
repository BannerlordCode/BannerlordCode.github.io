<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CosmeticsManagerHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CosmeticsManagerHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManagerHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs`

## Overview

`CosmeticsManagerHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `CosmeticsManagerHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetUsedIndicesFromIds
`public static Dictionary<int, List<int>> GetUsedIndicesFromIds(Dictionary<string, List<string>> usedCosmetics)`

**Purpose:** Gets the current value of `used indices from ids`.

### GetSuitableTauntAction
`public static ActionIndexCache GetSuitableTauntAction(Agent agent, int tauntIndex)`

**Purpose:** Gets the current value of `suitable taunt action`.

### GetActionNotUsableReason
`public static TauntUsageManager.TauntUsage.TauntUsageFlag GetActionNotUsableReason(Agent agent, int tauntIndex)`

**Purpose:** Gets the current value of `action not usable reason`.

### GetSuitableTauntActionForEquipment
`public static string GetSuitableTauntActionForEquipment(Equipment equipment, TauntCosmeticElement taunt)`

**Purpose:** Gets the current value of `suitable taunt action for equipment`.

### IsWeaponClassOneHanded
`public static bool IsWeaponClassOneHanded(WeaponClass weaponClass)`

**Purpose:** Handles logic related to `is weapon class one handed`.

### IsWeaponClassTwoHanded
`public static bool IsWeaponClassTwoHanded(WeaponClass weaponClass)`

**Purpose:** Handles logic related to `is weapon class two handed`.

### IsWeaponClassShield
`public static bool IsWeaponClassShield(WeaponClass weaponClass)`

**Purpose:** Handles logic related to `is weapon class shield`.

### IsWeaponClassBow
`public static bool IsWeaponClassBow(WeaponClass weaponClass)`

**Purpose:** Handles logic related to `is weapon class bow`.

### IsWeaponClassCrossbow
`public static bool IsWeaponClassCrossbow(WeaponClass weaponClass)`

**Purpose:** Handles logic related to `is weapon class crossbow`.

### GetComplimentaryWeaponClasses
`public static WeaponClass GetComplimentaryWeaponClasses(WeaponClass weaponClass)`

**Purpose:** Gets the current value of `complimentary weapon classes`.

## Usage Example

```csharp
CosmeticsManagerHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)