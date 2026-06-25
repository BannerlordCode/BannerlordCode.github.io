---
title: "WeaponComponentMissionExtensions"
description: "WeaponComponentMissionExtensions 的自动生成类参考。"
---
# WeaponComponentMissionExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class WeaponComponentMissionExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/WeaponComponentMissionExtensions.cs`

## 概述

`WeaponComponentMissionExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetItemUsageIndex
`public static int GetItemUsageIndex(this WeaponComponentData weaponComponentData)`

**用途 / Purpose:** 读取并返回当前对象中 「item usage index」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentMissionExtensions.GetItemUsageIndex(weaponComponentData);
```

### GetWeaponCenterOfMass
`public static Vec3 GetWeaponCenterOfMass(this PhysicsShape body)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon center of mass」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentMissionExtensions.GetWeaponCenterOfMass(body);
```

## 使用示例

```csharp
WeaponComponentMissionExtensions.GetItemUsageIndex(weaponComponentData);
```

## 参见

- [本区域目录](../)