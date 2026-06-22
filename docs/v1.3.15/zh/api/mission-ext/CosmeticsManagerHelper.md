<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CosmeticsManagerHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CosmeticsManagerHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManagerHelper`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs`

## 概述

`CosmeticsManagerHelper` 是一个静态工具类，提供辅助方法。

## 主要方法

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

## 使用示例

```csharp
// CosmeticsManagerHelper (Helper) 的典型用法
CosmeticsManagerHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)