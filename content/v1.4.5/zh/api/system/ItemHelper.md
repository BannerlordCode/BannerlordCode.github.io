---
title: "ItemHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class ItemHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/ItemHelper.cs`

## 概述

`ItemHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `ItemHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsWeaponComparableWithUsage
`public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId)`

**用途 / Purpose:** 处理 `is weapon comparable with usage` 相关逻辑。

### IsWeaponComparableWithUsage
`public static bool IsWeaponComparableWithUsage(ItemObject item, string comparedUsageId, out int comparableUsageIndex)`

**用途 / Purpose:** 处理 `is weapon comparable with usage` 相关逻辑。

### CheckComparability
`public static bool CheckComparability(ItemObject item, ItemObject comparedItem)`

**用途 / Purpose:** 处理 `check comparability` 相关逻辑。

### CheckComparability
`public static bool CheckComparability(ItemObject item, ItemObject comparedItem, int usageIndex)`

**用途 / Purpose:** 处理 `check comparability` 相关逻辑。

### GetSwingDamageText
`public static TextObject GetSwingDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `swing damage text` 的当前值。

### GetMissileDamageText
`public static TextObject GetMissileDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `missile damage text` 的当前值。

### GetThrustDamageText
`public static TextObject GetThrustDamageText(WeaponComponentData weapon, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `thrust damage text` 的当前值。

### NumberOfItems
`public static TextObject NumberOfItems(int number, ItemObject item)`

**用途 / Purpose:** 处理 `number of items` 相关逻辑。

## 使用示例

```csharp
ItemHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)