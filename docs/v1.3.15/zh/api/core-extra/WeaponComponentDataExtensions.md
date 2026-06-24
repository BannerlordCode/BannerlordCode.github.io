<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponComponentDataExtensions`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponComponentDataExtensions

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public static class WeaponComponentDataExtensions`
**领域:** core-extra

## 概述

`WeaponComponentDataExtensions` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetModifiedThrustDamage
`public static int GetModifiedThrustDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `modified thrust damage` 的当前值。

### GetModifiedSwingDamage
`public static int GetModifiedSwingDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `modified swing damage` 的当前值。

### GetModifiedMissileDamage
`public static int GetModifiedMissileDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `modified missile damage` 的当前值。

### GetModifiedThrustSpeed
`public static int GetModifiedThrustSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `modified thrust speed` 的当前值。

### GetModifiedSwingSpeed
`public static int GetModifiedSwingSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `modified swing speed` 的当前值。

### GetModifiedMissileSpeed
`public static int GetModifiedMissileSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `modified missile speed` 的当前值。

### GetModifiedHandling
`public static int GetModifiedHandling(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `modified handling` 的当前值。

### GetModifiedStackCount
`public static short GetModifiedStackCount(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `modified stack count` 的当前值。

### GetModifiedMaximumHitPoints
`public static short GetModifiedMaximumHitPoints(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `modified maximum hit points` 的当前值。

### GetModifiedArmor
`public static int GetModifiedArmor(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 获取 `modified armor` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
WeaponComponentDataExtensions.GetModifiedThrustDamage(componentData, itemModifier);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
