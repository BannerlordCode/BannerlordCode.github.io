<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CosmeticsManagerHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CosmeticsManagerHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManagerHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs`

## Overview

`CosmeticsManagerHelper` is a static utility class providing helper methods.

## Key Methods

### GetUsedIndicesFromIds
```csharp
public static Dictionary<int, List<int>> GetUsedIndicesFromIds(Dictionary<string, List<string>> usedCosmetics)
```

### GetSuitableTauntAction
```csharp
public static ActionIndexCache GetSuitableTauntAction(Agent agent, int tauntIndex)
```

### GetActionNotUsableReason
```csharp
public static TauntUsageManager.TauntUsage.TauntUsageFlag GetActionNotUsableReason(Agent agent, int tauntIndex)
```

### GetSuitableTauntActionForEquipment
```csharp
public static string GetSuitableTauntActionForEquipment(Equipment equipment, TauntCosmeticElement taunt)
```

### IsWeaponClassOneHanded
```csharp
public static bool IsWeaponClassOneHanded(WeaponClass weaponClass)
```

### IsWeaponClassTwoHanded
```csharp
public static bool IsWeaponClassTwoHanded(WeaponClass weaponClass)
```

### IsWeaponClassShield
```csharp
public static bool IsWeaponClassShield(WeaponClass weaponClass)
```

### IsWeaponClassBow
```csharp
public static bool IsWeaponClassBow(WeaponClass weaponClass)
```

### IsWeaponClassCrossbow
```csharp
public static bool IsWeaponClassCrossbow(WeaponClass weaponClass)
```

### GetComplimentaryWeaponClasses
```csharp
public static WeaponClass GetComplimentaryWeaponClasses(WeaponClass weaponClass)
```

## Usage Example

```csharp
// Typical usage of CosmeticsManagerHelper (Helper)
CosmeticsManagerHelper./* static helper method */();;
```

## See Also

- [Complete Class Catalog](../catalog)