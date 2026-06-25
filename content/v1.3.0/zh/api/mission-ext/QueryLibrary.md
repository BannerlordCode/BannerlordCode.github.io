---
title: "QueryLibrary"
description: "QueryLibrary 的自动生成类参考。"
---
# QueryLibrary

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class QueryLibrary`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/QueryLibrary.cs`

## 概述

`QueryLibrary` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsInfantry
`public static bool IsInfantry(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 infantry 状态或条件。

```csharp
// 静态调用，不需要实例
QueryLibrary.IsInfantry(a);
```

### IsInfantryWithoutBanner
`public static bool IsInfantryWithoutBanner(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 infantry without banner 状态或条件。

```csharp
// 静态调用，不需要实例
QueryLibrary.IsInfantryWithoutBanner(a);
```

### HasShield
`public static bool HasShield(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 shield。

```csharp
// 静态调用，不需要实例
QueryLibrary.HasShield(a);
```

### IsRanged
`public static bool IsRanged(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 ranged 状态或条件。

```csharp
// 静态调用，不需要实例
QueryLibrary.IsRanged(a);
```

### IsRangedWithoutBanner
`public static bool IsRangedWithoutBanner(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 ranged without banner 状态或条件。

```csharp
// 静态调用，不需要实例
QueryLibrary.IsRangedWithoutBanner(a);
```

### IsCavalry
`public static bool IsCavalry(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 cavalry 状态或条件。

```csharp
// 静态调用，不需要实例
QueryLibrary.IsCavalry(a);
```

### IsCavalryWithoutBanner
`public static bool IsCavalryWithoutBanner(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 cavalry without banner 状态或条件。

```csharp
// 静态调用，不需要实例
QueryLibrary.IsCavalryWithoutBanner(a);
```

### IsRangedCavalry
`public static bool IsRangedCavalry(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 ranged cavalry 状态或条件。

```csharp
// 静态调用，不需要实例
QueryLibrary.IsRangedCavalry(a);
```

### IsRangedCavalryWithoutBanner
`public static bool IsRangedCavalryWithoutBanner(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 ranged cavalry without banner 状态或条件。

```csharp
// 静态调用，不需要实例
QueryLibrary.IsRangedCavalryWithoutBanner(a);
```

### HasSpear
`public static bool HasSpear(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 spear。

```csharp
// 静态调用，不需要实例
QueryLibrary.HasSpear(a);
```

### HasThrown
`public static bool HasThrown(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 thrown。

```csharp
// 静态调用，不需要实例
QueryLibrary.HasThrown(a);
```

### IsHeavy
`public static bool IsHeavy(Agent a)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 heavy 状态或条件。

```csharp
// 静态调用，不需要实例
QueryLibrary.IsHeavy(a);
```

## 使用示例

```csharp
QueryLibrary.IsInfantry(a);
```

## 参见

- [本区域目录](../)