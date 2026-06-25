---
title: "CosmeticsManagerHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CosmeticsManagerHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CosmeticsManagerHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CosmeticsManagerHelper`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/CosmeticsManagerHelper.cs`

## 概述

`CosmeticsManagerHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `CosmeticsManagerHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetUsedIndicesFromIds
`public static Dictionary<int, List<int>> GetUsedIndicesFromIds(Dictionary<string, List<string>> usedCosmetics)`

**用途 / Purpose:** 获取 `used indices from ids` 的当前值。

### GetSuitableTauntAction
`public static ActionIndexCache GetSuitableTauntAction(Agent agent, int tauntIndex)`

**用途 / Purpose:** 获取 `suitable taunt action` 的当前值。

### GetActionNotUsableReason
`public static TauntUsageManager.TauntUsage.TauntUsageFlag GetActionNotUsableReason(Agent agent, int tauntIndex)`

**用途 / Purpose:** 获取 `action not usable reason` 的当前值。

### GetSuitableTauntActionForEquipment
`public static string GetSuitableTauntActionForEquipment(Equipment equipment, TauntCosmeticElement taunt)`

**用途 / Purpose:** 获取 `suitable taunt action for equipment` 的当前值。

### IsWeaponClassOneHanded
`public static bool IsWeaponClassOneHanded(WeaponClass weaponClass)`

**用途 / Purpose:** 处理 `is weapon class one handed` 相关逻辑。

### IsWeaponClassTwoHanded
`public static bool IsWeaponClassTwoHanded(WeaponClass weaponClass)`

**用途 / Purpose:** 处理 `is weapon class two handed` 相关逻辑。

### IsWeaponClassShield
`public static bool IsWeaponClassShield(WeaponClass weaponClass)`

**用途 / Purpose:** 处理 `is weapon class shield` 相关逻辑。

### IsWeaponClassBow
`public static bool IsWeaponClassBow(WeaponClass weaponClass)`

**用途 / Purpose:** 处理 `is weapon class bow` 相关逻辑。

### IsWeaponClassCrossbow
`public static bool IsWeaponClassCrossbow(WeaponClass weaponClass)`

**用途 / Purpose:** 处理 `is weapon class crossbow` 相关逻辑。

### GetComplimentaryWeaponClasses
`public static WeaponClass GetComplimentaryWeaponClasses(WeaponClass weaponClass)`

**用途 / Purpose:** 获取 `complimentary weapon classes` 的当前值。

## 使用示例

```csharp
CosmeticsManagerHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)