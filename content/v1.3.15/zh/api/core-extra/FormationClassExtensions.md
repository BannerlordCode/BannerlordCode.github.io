---
title: "FormationClassExtensions"
description: "FormationClassExtensions 的自动生成类参考。"
---
# FormationClassExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class FormationClassExtensions`
**Base:** 无
**File:** `TaleWorlds.Core/FormationClassExtensions.cs`

## 概述

`FormationClassExtensions` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetName
`public static string GetName(this FormationClass formationClass)`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 静态调用，不需要实例
FormationClassExtensions.GetName(formationClass);
```

### GetLocalizedName
`public static TextObject GetLocalizedName(this FormationClass formationClass)`

**用途 / Purpose:** 读取并返回当前对象中 「localized name」 的结果。

```csharp
// 静态调用，不需要实例
FormationClassExtensions.GetLocalizedName(formationClass);
```

### GetTroopUsageFlags
`public static TroopUsageFlags GetTroopUsageFlags(this FormationClass troopClass)`

**用途 / Purpose:** 读取并返回当前对象中 「troop usage flags」 的结果。

```csharp
// 静态调用，不需要实例
FormationClassExtensions.GetTroopUsageFlags(troopClass);
```

### GetTroopTypeForRegularFormation
`public static TroopType GetTroopTypeForRegularFormation(this FormationClass formationClass)`

**用途 / Purpose:** 读取并返回当前对象中 「troop type for regular formation」 的结果。

```csharp
// 静态调用，不需要实例
FormationClassExtensions.GetTroopTypeForRegularFormation(formationClass);
```

### IsDefaultFormationClass
`public static bool IsDefaultFormationClass(this FormationClass formationClass)`

**用途 / Purpose:** 判断当前对象是否处于 「default formation class」 状态或条件。

```csharp
// 静态调用，不需要实例
FormationClassExtensions.IsDefaultFormationClass(formationClass);
```

### IsRegularFormationClass
`public static bool IsRegularFormationClass(this FormationClass formationClass)`

**用途 / Purpose:** 判断当前对象是否处于 「regular formation class」 状态或条件。

```csharp
// 静态调用，不需要实例
FormationClassExtensions.IsRegularFormationClass(formationClass);
```

### FallbackClass
`public static FormationClass FallbackClass(this FormationClass formationClass)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
FormationClassExtensions.FallbackClass(formationClass);
```

## 使用示例

```csharp
FormationClassExtensions.GetName(formationClass);
```

## 参见

- [本区域目录](../)