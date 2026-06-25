---
title: "ItemHelper"
description: "ItemHelper 的自动生成类参考。"
---
# ItemHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class ItemHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/ItemHelper.cs`

## 概述

`ItemHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `ItemHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsWeaponComparableWithUsage
`public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId)`

**用途 / Purpose:** 判断当前对象是否处于 「weapon comparable with usage」 状态或条件。

```csharp
// 静态调用，不需要实例
ItemHelper.IsWeaponComparableWithUsage(item, "example");
```

### IsWeaponComparableWithUsage
`public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId, out int comparableUsageIndex)`

**用途 / Purpose:** 判断当前对象是否处于 「weapon comparable with usage」 状态或条件。

```csharp
// 静态调用，不需要实例
ItemHelper.IsWeaponComparableWithUsage(item, "example", comparableUsageIndex);
```

### CheckComparability
`public static bool CheckComparability(ItemObject item, ItemObject comparedItem)`

**用途 / Purpose:** 检查「comparability」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
ItemHelper.CheckComparability(item, comparedItem);
```

### CheckComparability
`public static bool CheckComparability(ItemObject item, ItemObject comparedItem, int usageIndex)`

**用途 / Purpose:** 检查「comparability」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
ItemHelper.CheckComparability(item, comparedItem, 0);
```

### GetSwingDamageText
`public static TextObject GetSwingDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「swing damage text」 的结果。

```csharp
// 静态调用，不需要实例
ItemHelper.GetSwingDamageText(weapon, itemModifier);
```

### GetMissileDamageText
`public static TextObject GetMissileDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「missile damage text」 的结果。

```csharp
// 静态调用，不需要实例
ItemHelper.GetMissileDamageText(weapon, itemModifier);
```

### GetThrustDamageText
`public static TextObject GetThrustDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「thrust damage text」 的结果。

```csharp
// 静态调用，不需要实例
ItemHelper.GetThrustDamageText(weapon, itemModifier);
```

### NumberOfItems
`public static TextObject NumberOfItems(int number, ItemObject item)`

**用途 / Purpose:** 处理与 「number of items」 相关的逻辑。

```csharp
// 静态调用，不需要实例
ItemHelper.NumberOfItems(0, item);
```

## 使用示例

```csharp
ItemHelper.Initialize();
```

## 参见

- [本区域目录](../)