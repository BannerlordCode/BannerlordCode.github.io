<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopTraitsMaskExtensions`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopTraitsMaskExtensions

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public static class TroopTraitsMaskExtensions`
**领域:** core-extra

## 概述

`TroopTraitsMaskExtensions` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
TroopTraitsMaskExtensions.HasMelee(troopTraitsMask);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
