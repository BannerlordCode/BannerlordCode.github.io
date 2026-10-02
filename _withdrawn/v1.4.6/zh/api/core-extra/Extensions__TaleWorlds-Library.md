---
title: "Extensions"
description: "Extensions：TaleWorlds.Library 的 public 类；公开成员 35 个（方法 35、属性 0、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/Extensions.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Extensions

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class Extensions`
**File:** `TaleWorlds.Library/Extensions.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

Extensions 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Extensions.cs。它是一个 public 类，继承链为 Extensions。public/protected 成员共 35 个：35 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Extensions 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 Extensions。成员构成以方法为主（方法 35/35，属性 0/35），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Extensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<Type>GetTypesSafe(this Assembly assembly, Func<Type, bool>func = null)` | 方法 |
| `Assembly[]GetReferencingAssembliesSafe` | `public static Assembly[]GetReferencingAssembliesSafe(this Assembly baseAssembly, Func<Assembly, bool>func = null)` | 方法 |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this Type type, Type attributeType, bool inherit)` | 方法 |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this Type type, bool inherit)` | 方法 |
| `IEnumerable` | `public static IEnumerable<Attribute>GetCustomAttributesSafe(this Type type, Type attributeType)` | 方法 |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this PropertyInfo property, Type attributeType, bool inherit)` | 方法 |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this PropertyInfo property, bool inherit)` | 方法 |
| `IEnumerable` | `public static IEnumerable<Attribute>GetCustomAttributesSafe(this PropertyInfo property, Type attributeType)` | 方法 |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this FieldInfo field, Type attributeType, bool inherit)` | 方法 |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this FieldInfo field, bool inherit)` | 方法 |
| `IEnumerable` | `public static IEnumerable<Attribute>GetCustomAttributesSafe(this FieldInfo field, Type attributeType)` | 方法 |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this MethodInfo method, Type attributeType, bool inherit)` | 方法 |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this MethodInfo method, bool inherit)` | 方法 |
| `IEnumerable` | `public static IEnumerable<Attribute>GetCustomAttributesSafe(this MethodInfo method, Type attributeType)` | 方法 |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this Assembly assembly, Type attributeType, bool inherit)` | 方法 |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this Assembly assembly, bool inherit)` | 方法 |
| `IEnumerable` | `public static IEnumerable<Attribute>GetCustomAttributesSafe(this Assembly assembly, Type attributeType)` | 方法 |
| `MBList` | `public static MBList<T>ToMBList<T>(this T[]source)` | 方法 |
| `MBList` | `public static MBList<T>ToMBList<T>(this List<T>source)` | 方法 |
| `MBList` | `public static MBList<T>ToMBList<T>(this IEnumerable<T>source)` | 方法 |
| `AppendList` | `public static void AppendList<T>(this List<T>list1, List<T>list2)` | 方法 |
| `TValue>` | `public static MBReadOnlyDictionary<TKey, TValue>GetReadOnlyDictionary<TKey, TValue>(this Dictionary<TKey, TValue>dictionary)` | 方法 |
| `HasAnyFlag` | `public static bool HasAnyFlag<T>(this T p1, T p2) where T : struct` | 方法 |
| `HasAllFlags` | `public static bool HasAllFlags<T>(this T p1, T p2) where T : struct` | 方法 |
| `GetDeterministicHashCode` | `public static int GetDeterministicHashCode(this string text)` | 方法 |
| `IndexOfMin` | `public static int IndexOfMin<TSource>(this IReadOnlyList<TSource>self, Func<TSource, int>func)` | 方法 |
| `IndexOfMin` | `public static int IndexOfMin<TSource>(this MBReadOnlyList<TSource>self, Func<TSource, int>func)` | 方法 |
| `IndexOfMax` | `public static int IndexOfMax<TSource>(this IReadOnlyList<TSource>self, Func<TSource, int>func)` | 方法 |
| `IndexOfMax` | `public static int IndexOfMax<TSource>(this MBReadOnlyList<TSource>self, Func<TSource, int>func)` | 方法 |
| `IndexOf` | `public static int IndexOf<TValue>(this TValue[]source, TValue item)` | 方法 |
| `FindIndex` | `public static int FindIndex<TValue>(this IReadOnlyList<TValue>source, Func<TValue, bool>predicate)` | 方法 |
| `FindIndex` | `public static int FindIndex<TValue>(this MBReadOnlyList<TValue>source, Func<TValue, bool>predicate)` | 方法 |
| `FindLastIndex` | `public static int FindLastIndex<TValue>(this IReadOnlyList<TValue>source, Func<TValue, bool>predicate)` | 方法 |
| `FindLastIndex` | `public static int FindLastIndex<TValue>(this MBReadOnlyList<TValue>source, Func<TValue, bool>predicate)` | 方法 |
| `Randomize` | `public static void Randomize<T>(this IList<T>array)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
