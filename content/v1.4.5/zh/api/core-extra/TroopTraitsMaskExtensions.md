---
title: "TroopTraitsMaskExtensions"
description: "TroopTraitsMaskExtensions 的自动生成类参考。"
---
# TroopTraitsMaskExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class TroopTraitsMaskExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/TroopTraitsMaskExtensions.cs`

## 概述

`TroopTraitsMaskExtensions` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### HasMelee
`public static bool HasMelee(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否已经持有 「melee」。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.HasMelee(troopTraitsMask);
```

### HasRanged
`public static bool HasRanged(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否已经持有 「ranged」。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.HasRanged(troopTraitsMask);
```

### HasMount
`public static bool HasMount(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否已经持有 「mount」。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.HasMount(troopTraitsMask);
```

### HasArmor
`public static bool HasArmor(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否已经持有 「armor」。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.HasArmor(troopTraitsMask);
```

### HasThrown
`public static bool HasThrown(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否已经持有 「thrown」。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.HasThrown(troopTraitsMask);
```

### HasSpear
`public static bool HasSpear(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否已经持有 「spear」。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.HasSpear(troopTraitsMask);
```

### HasShield
`public static bool HasShield(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 判断当前对象是否已经持有 「shield」。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.HasShield(troopTraitsMask);
```

### HasLowTier
`public static bool HasLowTier(this TroopTraitsMask troopFilterMask)`

**用途 / Purpose:** 判断当前对象是否已经持有 「low tier」。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.HasLowTier(troopFilterMask);
```

### HasHighTier
`public static bool HasHighTier(this TroopTraitsMask troopFilterMask)`

**用途 / Purpose:** 判断当前对象是否已经持有 「high tier」。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.HasHighTier(troopFilterMask);
```

### GetTroopTraitsText
`public static string GetTroopTraitsText(this TroopTraitsMask troopTraitsMask)`

**用途 / Purpose:** 读取并返回当前对象中 「troop traits text」 的结果。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.GetTroopTraitsText(troopTraitsMask);
```

### GetTraitsFilterText
`public static string GetTraitsFilterText(this TroopTraitsMask troopTraitsFilter)`

**用途 / Purpose:** 读取并返回当前对象中 「traits filter text」 的结果。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.GetTraitsFilterText(troopTraitsFilter);
```

### GetClassFilterText
`public static string GetClassFilterText(this TroopTraitsMask troopTraitsFilter)`

**用途 / Purpose:** 读取并返回当前对象中 「class filter text」 的结果。

```csharp
// 静态调用，不需要实例
TroopTraitsMaskExtensions.GetClassFilterText(troopTraitsFilter);
```

## 使用示例

```csharp
TroopTraitsMaskExtensions.HasMelee(troopTraitsMask);
```

## 参见

- [本区域目录](../)