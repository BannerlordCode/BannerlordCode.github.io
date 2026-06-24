<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopTraitsMaskExtensions`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TroopTraitsMaskExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class TroopTraitsMaskExtensions`
**Base:** 无
**File:** `TaleWorlds.Core/TroopTraitsMaskExtensions.cs`

## 概述

`TroopTraitsMaskExtensions` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### HasMelee
`public static bool HasMelee(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `melee`。

### HasRanged
`public static bool HasRanged(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `ranged`。

### HasMount
`public static bool HasMount(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `mount`。

### HasArmor
`public static bool HasArmor(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `armor`。

### HasThrown
`public static bool HasThrown(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `thrown`。

### HasSpear
`public static bool HasSpear(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `spear`。

### HasShield
`public static bool HasShield(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `shield`。

### HasLowTier
`public static bool HasLowTier(this TroopTraitsMask troopFilterMask)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `low tier`。

### HasHighTier
`public static bool HasHighTier(this TroopTraitsMask troopFilterMask)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `high tier`。

### GetTroopTraitsText
`public static string GetTroopTraitsText(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 获取 `troop traits text` 的当前值。

### GetTraitsFilterText
`public static string GetTraitsFilterText(this TroopTraitsMask troopTraitsFilter)`

**用途 / Purpose:** 获取 `traits filter text` 的当前值。

### GetClassFilterText
`public static string GetClassFilterText(this TroopTraitsMask troopTraitsFilter)`

**用途 / Purpose:** 获取 `class filter text` 的当前值。

## 使用示例

```csharp
TroopTraitsMaskExtensions.HasMelee(troopTraitsMask);
```

## 参见

- [完整类目录](../catalog)