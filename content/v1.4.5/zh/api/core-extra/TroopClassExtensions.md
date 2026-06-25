---
title: "TroopClassExtensions"
description: "TroopClassExtensions 的自动生成类参考。"
---
# TroopClassExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class TroopClassExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/TroopClassExtensions.cs`

## 概述

`TroopClassExtensions` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsRanged
`public static bool IsRanged(this FormationClass troopClass)`

**用途 / Purpose:** 判断当前对象是否处于 「ranged」 状态或条件。

```csharp
// 静态调用，不需要实例
TroopClassExtensions.IsRanged(troopClass);
```

### IsMounted
`public static bool IsMounted(this FormationClass troopClass)`

**用途 / Purpose:** 判断当前对象是否处于 「mounted」 状态或条件。

```csharp
// 静态调用，不需要实例
TroopClassExtensions.IsMounted(troopClass);
```

### IsMeleeInfantry
`public static bool IsMeleeInfantry(this FormationClass troopClass)`

**用途 / Purpose:** 判断当前对象是否处于 「melee infantry」 状态或条件。

```csharp
// 静态调用，不需要实例
TroopClassExtensions.IsMeleeInfantry(troopClass);
```

### IsMeleeCavalry
`public static bool IsMeleeCavalry(this FormationClass troopClass)`

**用途 / Purpose:** 判断当前对象是否处于 「melee cavalry」 状态或条件。

```csharp
// 静态调用，不需要实例
TroopClassExtensions.IsMeleeCavalry(troopClass);
```

### DefaultClass
`public static FormationClass DefaultClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理与 「default class」 相关的逻辑。

```csharp
// 静态调用，不需要实例
TroopClassExtensions.DefaultClass(troopClass);
```

### AlternativeClass
`public static FormationClass AlternativeClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理与 「alternative class」 相关的逻辑。

```csharp
// 静态调用，不需要实例
TroopClassExtensions.AlternativeClass(troopClass);
```

### DismountedClass
`public static FormationClass DismountedClass(this FormationClass troopClass)`

**用途 / Purpose:** 处理与 「dismounted class」 相关的逻辑。

```csharp
// 静态调用，不需要实例
TroopClassExtensions.DismountedClass(troopClass);
```

### IsDefaultTroopClass
`public static bool IsDefaultTroopClass(this FormationClass troopClass)`

**用途 / Purpose:** 判断当前对象是否处于 「default troop class」 状态或条件。

```csharp
// 静态调用，不需要实例
TroopClassExtensions.IsDefaultTroopClass(troopClass);
```

### IsRegularTroopClass
`public static bool IsRegularTroopClass(this FormationClass troopClass)`

**用途 / Purpose:** 判断当前对象是否处于 「regular troop class」 状态或条件。

```csharp
// 静态调用，不需要实例
TroopClassExtensions.IsRegularTroopClass(troopClass);
```

### GetNextSpawnPrioritizedClass
`public static FormationClass GetNextSpawnPrioritizedClass(this FormationClass troopClass)`

**用途 / Purpose:** 读取并返回当前对象中 「next spawn prioritized class」 的结果。

```csharp
// 静态调用，不需要实例
TroopClassExtensions.GetNextSpawnPrioritizedClass(troopClass);
```

## 使用示例

```csharp
TroopClassExtensions.IsRanged(troopClass);
```

## 参见

- [本区域目录](../)