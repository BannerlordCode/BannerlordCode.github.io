---
title: "CosmeticsManagerHelper"
description: "CosmeticsManagerHelper 的自动生成类参考。"
---
# CosmeticsManagerHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManagerHelper`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs`

## 概述

`CosmeticsManagerHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CosmeticsManagerHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetUsedIndicesFromIds
`public static Dictionary<int, List<int>> GetUsedIndicesFromIds(Dictionary<string, List<string>> usedCosmetics)`

**用途 / Purpose:** 读取并返回当前对象中 used indices from ids 的结果。

```csharp
// 静态调用，不需要实例
CosmeticsManagerHelper.GetUsedIndicesFromIds(dictionary<string, usedCosmetics);
```

### GetSuitableTauntAction
`public static ActionIndexCache GetSuitableTauntAction(Agent agent, int tauntIndex)`

**用途 / Purpose:** 读取并返回当前对象中 suitable taunt action 的结果。

```csharp
// 静态调用，不需要实例
CosmeticsManagerHelper.GetSuitableTauntAction(agent, 0);
```

### GetActionNotUsableReason
`public static TauntUsageManager.TauntUsage.TauntUsageFlag GetActionNotUsableReason(Agent agent, int tauntIndex)`

**用途 / Purpose:** 读取并返回当前对象中 action not usable reason 的结果。

```csharp
// 静态调用，不需要实例
CosmeticsManagerHelper.GetActionNotUsableReason(agent, 0);
```

### GetSuitableTauntActionForEquipment
`public static string GetSuitableTauntActionForEquipment(Equipment equipment, TauntCosmeticElement taunt)`

**用途 / Purpose:** 读取并返回当前对象中 suitable taunt action for equipment 的结果。

```csharp
// 静态调用，不需要实例
CosmeticsManagerHelper.GetSuitableTauntActionForEquipment(equipment, taunt);
```

### IsWeaponClassOneHanded
`public static bool IsWeaponClassOneHanded(WeaponClass weaponClass)`

**用途 / Purpose:** 判断当前对象是否处于 weapon class one handed 状态或条件。

```csharp
// 静态调用，不需要实例
CosmeticsManagerHelper.IsWeaponClassOneHanded(weaponClass);
```

### IsWeaponClassTwoHanded
`public static bool IsWeaponClassTwoHanded(WeaponClass weaponClass)`

**用途 / Purpose:** 判断当前对象是否处于 weapon class two handed 状态或条件。

```csharp
// 静态调用，不需要实例
CosmeticsManagerHelper.IsWeaponClassTwoHanded(weaponClass);
```

### IsWeaponClassShield
`public static bool IsWeaponClassShield(WeaponClass weaponClass)`

**用途 / Purpose:** 判断当前对象是否处于 weapon class shield 状态或条件。

```csharp
// 静态调用，不需要实例
CosmeticsManagerHelper.IsWeaponClassShield(weaponClass);
```

### IsWeaponClassBow
`public static bool IsWeaponClassBow(WeaponClass weaponClass)`

**用途 / Purpose:** 判断当前对象是否处于 weapon class bow 状态或条件。

```csharp
// 静态调用，不需要实例
CosmeticsManagerHelper.IsWeaponClassBow(weaponClass);
```

### IsWeaponClassCrossbow
`public static bool IsWeaponClassCrossbow(WeaponClass weaponClass)`

**用途 / Purpose:** 判断当前对象是否处于 weapon class crossbow 状态或条件。

```csharp
// 静态调用，不需要实例
CosmeticsManagerHelper.IsWeaponClassCrossbow(weaponClass);
```

### GetComplimentaryWeaponClasses
`public static WeaponClass GetComplimentaryWeaponClasses(WeaponClass weaponClass)`

**用途 / Purpose:** 读取并返回当前对象中 complimentary weapon classes 的结果。

```csharp
// 静态调用，不需要实例
CosmeticsManagerHelper.GetComplimentaryWeaponClasses(weaponClass);
```

## 使用示例

```csharp
CosmeticsManagerHelper.Initialize();
```

## 参见

- [本区域目录](../)