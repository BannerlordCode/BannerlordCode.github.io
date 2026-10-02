---
title: "LinQuick"
description: "LinQuick：TaleWorlds.LinQuick 的 public 类；公开成员 90 个（方法 90、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.LinQuick/LinQuick.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LinQuick

**Namespace:** `TaleWorlds.LinQuick`
**Module:** `TaleWorlds.LinQuick`
**Type:** `public static class LinQuick`
**File:** `TaleWorlds.LinQuick/LinQuick.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.LinQuick)

## 概述

LinQuick 位于 TaleWorlds.LinQuick 模块，源文件 TaleWorlds.LinQuick/LinQuick.cs。它是一个 public 类，继承链为 LinQuick。public/protected 成员共 90 个：90 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LinQuick 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.LinQuick`），命名空间 `TaleWorlds.LinQuick`，继承链 LinQuick。成员构成以方法为主（方法 90/90，属性 0/90），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.LinQuick/LinQuick.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AllQ` | `public static bool AllQ<T>(this T[]source, Func<T, bool>predicate)` | 方法 |
| `AllQ` | `public static bool AllQ<T>(this List<T>source, Func<T, bool>predicate)` | 方法 |
| `AllQ` | `public static bool AllQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | 方法 |
| `AllQ` | `public static bool AllQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | 方法 |
| `AnyQ` | `public static bool AnyQ<T>(this T[]source, Func<T, bool>predicate)` | 方法 |
| `AnyQ` | `public static bool AnyQ<T>(this List<T>source)` | 方法 |
| `AnyQ` | `public static bool AnyQ<T>(this List<T>source, Func<T, bool>predicate)` | 方法 |
| `AnyQ` | `public static bool AnyQ<T>(this IReadOnlyList<T>source)` | 方法 |
| `AnyQ` | `public static bool AnyQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | 方法 |
| `AnyQ` | `public static bool AnyQ<T>(this IEnumerable<T>source)` | 方法 |
| `AnyQ` | `public static bool AnyQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | 方法 |
| `AverageQ` | `public static float AverageQ(this float[]source)` | 方法 |
| `AverageQ` | `public static float AverageQ(this IEnumerable<float>source)` | 方法 |
| `AverageQ` | `public static float AverageQ<T>(this T[]source, Func<T, float>selector)` | 方法 |
| `AverageQ` | `public static float AverageQ<T>(this List<T>source, Func<T, float>selector)` | 方法 |
| `AverageQ` | `public static float AverageQ<T>(this IReadOnlyList<T>source, Func<T, float>selector)` | 方法 |
| `AverageQ` | `public static float AverageQ<T>(this IEnumerable<T>source, Func<T, float>selector)` | 方法 |
| `ContainsQ` | `public static bool ContainsQ<T>(this T[]source, T value)` | 方法 |
| `ContainsQ` | `public static bool ContainsQ<T>(this List<T>source, T value)` | 方法 |
| `ContainsQ` | `public static bool ContainsQ<T>(this IReadOnlyList<T>source, T value)` | 方法 |
| `ContainsQ` | `public static bool ContainsQ<T>(this IEnumerable<T>source, T value)` | 方法 |
| `ContainsQ` | `public static bool ContainsQ<T>(this Queue<T>source, T value)` | 方法 |
| `ContainsQ` | `public static bool ContainsQ<T>(this T[]source, Func<T, bool>predicate)` | 方法 |
| `ContainsQ` | `public static bool ContainsQ<T>(this List<T>source, Func<T, bool>predicate)` | 方法 |
| `ContainsQ` | `public static bool ContainsQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | 方法 |
| `ContainsQ` | `public static bool ContainsQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | 方法 |
| `ContainsQ` | `public static bool ContainsQ<T>(this Queue<T>source, Func<T, bool>predicate)` | 方法 |
| `CountQ` | `public static int CountQ<T>(this T[]source, T value)` | 方法 |
| `CountQ` | `public static int CountQ<T>(this List<T>source, T value)` | 方法 |
| `CountQ` | `public static int CountQ<T>(this IReadOnlyList<T>source, T value)` | 方法 |
| `CountQ` | `public static int CountQ<T>(this T[]source, Func<T, bool>predicate)` | 方法 |
| `CountQ` | `public static int CountQ<T>(this List<T>source, Func<T, bool>predicate)` | 方法 |
| `CountQ` | `public static int CountQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | 方法 |
| `CountQ` | `public static int CountQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | 方法 |
| `CountQ` | `public static int CountQ<T>(this IEnumerable<T>source)` | 方法 |
| `FindIndexQ` | `public static int FindIndexQ<T>(this T[]source, T value)` | 方法 |
| `FindIndexQ` | `public static int FindIndexQ<T>(this List<T>source, T value)` | 方法 |
| `FindIndexQ` | `public static int FindIndexQ<T>(this IReadOnlyList<T>source, T value)` | 方法 |
| `FindIndexQ` | `public static int FindIndexQ<T>(this IEnumerable<T>source, T value)` | 方法 |
| `FindIndexQ` | `public static int FindIndexQ<T>(this T[]source, Func<T, bool>predicate)` | 方法 |
| `FindIndexQ` | `public static int FindIndexQ<T>(this List<T>source, Func<T, bool>predicate)` | 方法 |
| `FindIndexQ` | `public static int FindIndexQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | 方法 |
| `FindIndexQ` | `public static int FindIndexQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | 方法 |
| `FirstOrDefaultQ` | `public static T FirstOrDefaultQ<T>(this T[]source, Func<T, bool>predicate)` | 方法 |
| `FirstOrDefaultQ` | `public static T FirstOrDefaultQ<T>(this List<T>source, Func<T, bool>predicate)` | 方法 |
| `FirstOrDefaultQ` | `public static T FirstOrDefaultQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | 方法 |
| `FirstOrDefaultQ` | `public static T FirstOrDefaultQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | 方法 |
| `MaxQ` | `public static int MaxQ(this int[]source)` | 方法 |
| `MaxQ` | `public static int MaxQ(this List<int>source)` | 方法 |
| `MaxQ` | `public static T MaxQ<T>(this T[]source) where T : IComparable<T>` | 方法 |
| `MaxQ` | `public static T MaxQ<T>(this List<T>source) where T : IComparable<T>` | 方法 |
| `MaxQ` | `public static int MaxQ(this IReadOnlyList<int>source)` | 方法 |
| `MaxQ` | `public static T MaxQ<T>(this IReadOnlyList<T>source) where T : IComparable<T>` | 方法 |
| `MaxQ` | `public static float MaxQ<T>(this T[]source, Func<T, float>selector)` | 方法 |
| `MaxQ` | `public static int MaxQ<T>(this T[]source, Func<T, int>selector)` | 方法 |
| `MaxQ` | `public static float MaxQ<T>(this List<T>source, Func<T, float>selector)` | 方法 |
| `MaxQ` | `public static int MaxQ<T>(this List<T>source, Func<T, int>selector)` | 方法 |
| `MaxQ` | `public static float MaxQ<T>(this IReadOnlyList<T>source, Func<T, float>selector)` | 方法 |
| `MaxQ` | `public static int MaxQ<T>(this IReadOnlyList<T>source, Func<T, int>selector)` | 方法 |
| `MaxQ` | `public static float MaxQ<T>(this IEnumerable<T>source, Func<T, float>selector)` | 方法 |
| `MaxQ` | `public static int MaxQ<T>(this IEnumerable<T>source, Func<T, int>selector)` | 方法 |
| `T>MaxElements3` | `public static ValueTuple<T, T, T>MaxElements3<T>(this IEnumerable<T>collection, Func<T, float>func)` | 方法 |
| `S>` | `public static IOrderedEnumerable<T>OrderByQ<T, S>(this IEnumerable<T>source, Func<T, S>selector)` | 方法 |
| `TKey>` | `public static T[]OrderByQ<T, TKey>(this T[]source, Func<T, TKey>selector)` | 方法 |
| `TKey>` | `public static T[]OrderByQ<T, TKey>(this List<T>source, Func<T, TKey>selector)` | 方法 |
| `TKey>` | `public static T[]OrderByQ<T, TKey>(this IReadOnlyList<T>source, Func<T, TKey>selector)` | 方法 |
| `R>` | `public static IEnumerable<R>SelectQ<T, R>(this T[]source, Func<T, R>selector)` | 方法 |
| `R>` | `public static IEnumerable<R>SelectQ<T, R>(this List<T>source, Func<T, R>selector)` | 方法 |
| `R>` | `public static IEnumerable<R>SelectQ<T, R>(this IReadOnlyList<T>source, Func<T, R>selector)` | 方法 |
| `R>` | `public static IEnumerable<R>SelectQ<T, R>(this IEnumerable<T>source, Func<T, R>selector)` | 方法 |
| `SumQ` | `public static int SumQ<T>(this T[]source, Func<T, int>func)` | 方法 |
| `SumQ` | `public static float SumQ<T>(this T[]source, Func<T, float>func)` | 方法 |
| `SumQ` | `public static int SumQ<T>(this List<T>source, Func<T, int>func)` | 方法 |
| `SumQ` | `public static float SumQ<T>(this List<T>source, Func<T, float>func)` | 方法 |
| `SumQ` | `public static int SumQ<T>(this IReadOnlyList<T>source, Func<T, int>func)` | 方法 |
| `SumQ` | `public static float SumQ<T>(this IReadOnlyList<T>source, Func<T, float>func)` | 方法 |
| `SumQ` | `public static float SumQ<T>(this IEnumerable<T>source, Func<T, float>func)` | 方法 |
| `SumQ` | `public static int SumQ<T>(this IEnumerable<T>source, Func<T, int>func)` | 方法 |
| `T[]ToArrayQ` | `public static T[]ToArrayQ<T>(this T[]source)` | 方法 |
| `T[]ToArrayQ` | `public static T[]ToArrayQ<T>(this List<T>source)` | 方法 |
| `T[]ToArrayQ` | `public static T[]ToArrayQ<T>(this IReadOnlyList<T>source)` | 方法 |
| `T[]ToArrayQ` | `public static T[]ToArrayQ<T>(this IEnumerable<T>source)` | 方法 |
| `List` | `public static List<T>ToListQ<T>(this T[]source)` | 方法 |
| `List` | `public static List<T>ToListQ<T>(this List<T>source)` | 方法 |
| `List` | `public static List<T>ToListQ<T>(this IReadOnlyList<T>source)` | 方法 |
| `List` | `public static List<T>ToListQ<T>(this IEnumerable<T>source)` | 方法 |
| `IEnumerable` | `public static IEnumerable<T>WhereQ<T>(this T[]source, Func<T, bool>predicate)` | 方法 |
| `IEnumerable` | `public static IEnumerable<T>WhereQ<T>(this List<T>source, Func<T, bool>predicate)` | 方法 |
| `IEnumerable` | `public static IEnumerable<T>WhereQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | 方法 |
| `IEnumerable` | `public static IEnumerable<T>WhereQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Min](../Min/)
