---
title: "OrderOfBattleFormationExtensions"
description: "OrderOfBattleFormationExtensions 的自动生成类参考。"
---
# OrderOfBattleFormationExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class OrderOfBattleFormationExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/OrderOfBattleFormationExtensions.cs`

## 概述

`OrderOfBattleFormationExtensions` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Refresh
`public unsafe static void Refresh(this Formation formation)`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 静态调用，不需要实例
OrderOfBattleFormationExtensions.Refresh(formation);
```

### GetOrderOfBattleFormationClass
`public static DeploymentFormationClass GetOrderOfBattleFormationClass(this FormationClass formationClass)`

**用途 / Purpose:** 读取并返回当前对象中 order of battle formation class 的结果。

```csharp
// 静态调用，不需要实例
OrderOfBattleFormationExtensions.GetOrderOfBattleFormationClass(formationClass);
```

### GetFormationClasses
`public static List<FormationClass> GetFormationClasses(this DeploymentFormationClass orderOfBattleFormationClass)`

**用途 / Purpose:** 读取并返回当前对象中 formation classes 的结果。

```csharp
// 静态调用，不需要实例
OrderOfBattleFormationExtensions.GetFormationClasses(orderOfBattleFormationClass);
```

### GetFilterName
`public static TextObject GetFilterName(this FormationFilterType filterType)`

**用途 / Purpose:** 读取并返回当前对象中 filter name 的结果。

```csharp
// 静态调用，不需要实例
OrderOfBattleFormationExtensions.GetFilterName(filterType);
```

### GetFilterDescription
`public static TextObject GetFilterDescription(this FormationFilterType filterType)`

**用途 / Purpose:** 读取并返回当前对象中 filter description 的结果。

```csharp
// 静态调用，不需要实例
OrderOfBattleFormationExtensions.GetFilterDescription(filterType);
```

### GetClassName
`public static TextObject GetClassName(this DeploymentFormationClass formationClass)`

**用途 / Purpose:** 读取并返回当前对象中 class name 的结果。

```csharp
// 静态调用，不需要实例
OrderOfBattleFormationExtensions.GetClassName(formationClass);
```

### GetHeroAgents
`public static List<Agent> GetHeroAgents(this Team team)`

**用途 / Purpose:** 读取并返回当前对象中 hero agents 的结果。

```csharp
// 静态调用，不需要实例
OrderOfBattleFormationExtensions.GetHeroAgents(team);
```

## 使用示例

```csharp
OrderOfBattleFormationExtensions.Refresh(formation);
```

## 参见

- [本区域目录](../)