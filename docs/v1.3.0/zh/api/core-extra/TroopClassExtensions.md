<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopClassExtensions`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TroopClassExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class TroopClassExtensions`
**Base:** 无
**File:** `TaleWorlds.Core/TroopClassExtensions.cs`

## 概述

`TroopClassExtensions` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsRanged
`public static bool IsRanged(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is ranged` 相关逻辑。

### IsMounted
`public static bool IsMounted(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is mounted` 相关逻辑。

### IsMeleeInfantry
`public static bool IsMeleeInfantry(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is melee infantry` 相关逻辑。

### IsMeleeCavalry
`public static bool IsMeleeCavalry(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is melee cavalry` 相关逻辑。

### DefaultClass
`public static FormationClass DefaultClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `default class` 相关逻辑。

### AlternativeClass
`public static FormationClass AlternativeClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `alternative class` 相关逻辑。

### DismountedClass
`public static FormationClass DismountedClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `dismounted class` 相关逻辑。

### IsDefaultTroopClass
`public static bool IsDefaultTroopClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is default troop class` 相关逻辑。

### IsRegularTroopClass
`public static bool IsRegularTroopClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理 `is regular troop class` 相关逻辑。

### GetNextSpawnPrioritizedClass
`public static FormationClass GetNextSpawnPrioritizedClass(this FormationClass troopClass)`

**用途 / Purpose:** 获取 `next spawn prioritized class` 的当前值。

## 使用示例

```csharp
TroopClassExtensions.IsRanged(troopClass);
```

## 参见

- [完整类目录](../catalog)