---
title: "RandomOwnerExtensions"
description: "RandomOwnerExtensions 的自动生成类参考。"
---
# RandomOwnerExtensions

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class RandomOwnerExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/RandomOwnerExtensions.cs`

## 概述

`RandomOwnerExtensions` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomIntWithSeed 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomIntWithSeed(obj, 0);
```

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed, int max)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomIntWithSeed 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomIntWithSeed(obj, 0, 0);
```

### RandomIntWithSeed
`public static int RandomIntWithSeed(this IRandomOwner obj, uint seed, int min, int max)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomIntWithSeed 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomIntWithSeed(obj, 0, 0, 0);
```

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomFloatWithSeed 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomFloatWithSeed(obj, 0);
```

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed, float max)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomFloatWithSeed 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomFloatWithSeed(obj, 0, 0);
```

### RandomFloatWithSeed
`public static float RandomFloatWithSeed(this IRandomOwner obj, uint seed, float min, float max)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomFloatWithSeed 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomFloatWithSeed(obj, 0, 0, 0);
```

### RandomInt
`public static int RandomInt(this IRandomOwner obj)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomInt 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomInt(obj);
```

### RandomInt
`public static int RandomInt(this IRandomOwner obj, int max)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomInt 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomInt(obj, 0);
```

### RandomInt
`public static int RandomInt(this IRandomOwner obj, int min, int max)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomInt 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomInt(obj, 0, 0);
```

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomFloat 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomFloat(obj);
```

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj, float max)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomFloat 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomFloat(obj, 0);
```

### RandomFloat
`public static float RandomFloat(this IRandomOwner obj, float min, float max)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RandomFloat 对应的操作。

```csharp
// 静态调用，不需要实例
RandomOwnerExtensions.RandomFloat(obj, 0, 0);
```

## 使用示例

```csharp
RandomOwnerExtensions.RandomIntWithSeed(obj, 0);
```

## 参见

- [本区域目录](../)