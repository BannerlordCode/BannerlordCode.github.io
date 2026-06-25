---
title: "WeaponComponentMissionExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponComponentMissionExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponComponentMissionExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class WeaponComponentMissionExtensions`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WeaponComponentMissionExtensions.cs`

## 概述

`WeaponComponentMissionExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetItemUsageIndex
`public static int GetItemUsageIndex(this WeaponComponentData weaponComponentData)`

**用途 / Purpose:** 获取 `item usage index` 的当前值。

### GetWeaponCenterOfMass
`public static Vec3 GetWeaponCenterOfMass(this PhysicsShape body)`

**用途 / Purpose:** 获取 `weapon center of mass` 的当前值。

## 使用示例

```csharp
WeaponComponentMissionExtensions.GetItemUsageIndex(weaponComponentData);
```

## 参见

- [完整类目录](../catalog)