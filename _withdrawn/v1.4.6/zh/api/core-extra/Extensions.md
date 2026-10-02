---
title: "Extensions"
description: "Extensions：TaleWorlds.Core 的 public 类；公开成员 26 个（方法 26、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/Extensions.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Extensions

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class Extensions`
**File:** `TaleWorlds.Core/Extensions.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

Extensions 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/Extensions.cs。它是一个 public 类，继承链为 Extensions。public/protected 成员共 26 个：26 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Extensions 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 Extensions。成员构成以方法为主（方法 26/26，属性 0/26），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/Extensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ToHexadecimalString` | `public static string ToHexadecimalString(this uint number)` | 方法 |
| `Description` | `public static string Description(this Enum value)` | 方法 |
| `NextFloat` | `public static float NextFloat(this Random random)` | 方法 |
| `TKey>` | `public static TSource MaxBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>selector)` | 方法 |
| `TKey>` | `public static TSource MaxBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>selector, out TKey maxKey)` | 方法 |
| `TKey>` | `public static TSource MaxBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>selector, IComparer<TKey>comparer, out TKey maxKey)` | 方法 |
| `TKey>` | `public static TSource MinBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>selector)` | 方法 |
| `TKey>` | `public static TSource MinBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>selector, IComparer<TKey>comparer)` | 方法 |
| `TKey>` | `public static IEnumerable<TSource>DistinctBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>keySelector)` | 方法 |
| `TKey>` | `public static IEnumerable<TSource>DistinctBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>keySelector, IEqualityComparer<TKey>comparer)` | 方法 |
| `Add` | `public static string Add(this string str, string appendant, bool newLine = true)` | 方法 |
| `IEnumerable` | `public static IEnumerable<string>Split(this string str, int maxChunkSize)` | 方法 |
| `GetOppositeSide` | `public static BattleSideEnum GetOppositeSide(this BattleSideEnum side)` | 方法 |
| `IEnumerable` | `public static IEnumerable<IEnumerable<T>>Split<T>(this IEnumerable<T>source, int splitItemCount)` | 方法 |
| `IsEmpty` | `public static bool IsEmpty<T>(this IEnumerable<T>source)` | 方法 |
| `Shuffle` | `public static void Shuffle<T>(this IList<T>list)` | 方法 |
| `GetRandomElement` | `public static T GetRandomElement<T>(this IReadOnlyList<T>e)` | 方法 |
| `GetRandomElement` | `public static T GetRandomElement<T>(this MBReadOnlyList<T>e)` | 方法 |
| `GetRandomElement` | `public static T GetRandomElement<T>(this MBList<T>e)` | 方法 |
| `GetRandomElement` | `public static T GetRandomElement<T>(this T[]e)` | 方法 |
| `GetRandomElementInefficiently` | `public static T GetRandomElementInefficiently<T>(this IEnumerable<T>e)` | 方法 |
| `GetRandomElementWithPredicate` | `public static T GetRandomElementWithPredicate<T>(this T[]e, Func<T, bool>predicate)` | 方法 |
| `GetRandomElementWithPredicate` | `public static T GetRandomElementWithPredicate<T>(this MBReadOnlyList<T>e, Func<T, bool>predicate)` | 方法 |
| `GetRandomElementWithPredicate` | `public static T GetRandomElementWithPredicate<T>(this MBList<T>e, Func<T, bool>predicate)` | 方法 |
| `GetRandomElementWithPredicate` | `public static T GetRandomElementWithPredicate<T>(this IReadOnlyList<T>e, Func<T, bool>predicate)` | 方法 |
| `T2>` | `public static List<Tuple<T1, T2>>CombineWith<T1, T2>(this IEnumerable<T1>list1, IEnumerable<T2>list2)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
