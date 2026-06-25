---
title: "WeaponComponentDataExtensions"
description: "WeaponComponentDataExtensions 的自动生成类参考。"
---
# WeaponComponentDataExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class WeaponComponentDataExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/WeaponComponentDataExtensions.cs`

## 概述

`WeaponComponentDataExtensions` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetModifiedThrustDamage
`public static int GetModifiedThrustDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「modified thrust damage」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentDataExtensions.GetModifiedThrustDamage(componentData, itemModifier);
```

### GetModifiedSwingDamage
`public static int GetModifiedSwingDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「modified swing damage」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentDataExtensions.GetModifiedSwingDamage(componentData, itemModifier);
```

### GetModifiedMissileDamage
`public static int GetModifiedMissileDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「modified missile damage」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentDataExtensions.GetModifiedMissileDamage(componentData, itemModifier);
```

### GetModifiedThrustSpeed
`public static int GetModifiedThrustSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「modified thrust speed」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentDataExtensions.GetModifiedThrustSpeed(componentData, itemModifier);
```

### GetModifiedSwingSpeed
`public static int GetModifiedSwingSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「modified swing speed」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentDataExtensions.GetModifiedSwingSpeed(componentData, itemModifier);
```

### GetModifiedMissileSpeed
`public static int GetModifiedMissileSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「modified missile speed」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentDataExtensions.GetModifiedMissileSpeed(componentData, itemModifier);
```

### GetModifiedHandling
`public static int GetModifiedHandling(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「modified handling」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentDataExtensions.GetModifiedHandling(componentData, itemModifier);
```

### GetModifiedStackCount
`public static short GetModifiedStackCount(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「modified stack count」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentDataExtensions.GetModifiedStackCount(componentData, itemModifier);
```

### GetModifiedMaximumHitPoints
`public static short GetModifiedMaximumHitPoints(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「modified maximum hit points」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentDataExtensions.GetModifiedMaximumHitPoints(componentData, itemModifier);
```

### GetModifiedArmor
`public static int GetModifiedArmor(this WeaponComponentData componentData, ItemModifier itemModifier)`

**用途 / Purpose:** 读取并返回当前对象中 「modified armor」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentDataExtensions.GetModifiedArmor(componentData, itemModifier);
```

## 使用示例

```csharp
WeaponComponentDataExtensions.GetModifiedThrustDamage(componentData, itemModifier);
```

## 参见

- [本区域目录](../)