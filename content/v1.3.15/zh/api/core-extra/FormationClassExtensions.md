---
title: "FormationClassExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationClassExtensions`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationClassExtensions

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public static class FormationClassExtensions`
**领域:** core-extra

## 概述

`FormationClassExtensions` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetName
`public static string GetName(this FormationClass formationClass)`

**用途 / Purpose:** 获取 `name` 的当前值。

### GetLocalizedName
`public static TextObject GetLocalizedName(this FormationClass formationClass)`

**用途 / Purpose:** 获取 `localized name` 的当前值。

### GetTroopUsageFlags
`public static TroopUsageFlags GetTroopUsageFlags(this FormationClass troopClass)`

**用途 / Purpose:** 获取 `troop usage flags` 的当前值。

### GetTroopTypeForRegularFormation
`public static TroopType GetTroopTypeForRegularFormation(this FormationClass formationClass)`

**用途 / Purpose:** 获取 `troop type for regular formation` 的当前值。

### IsDefaultFormationClass
`public static bool IsDefaultFormationClass(this FormationClass formationClass)`

**用途 / Purpose:** 处理 `is default formation class` 相关逻辑。

### IsRegularFormationClass
`public static bool IsRegularFormationClass(this FormationClass formationClass)`

**用途 / Purpose:** 处理 `is regular formation class` 相关逻辑。

### FallbackClass
`public static FormationClass FallbackClass(this FormationClass formationClass)`

**用途 / Purpose:** 处理 `fallback class` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
FormationClassExtensions.GetName(formationClass);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
