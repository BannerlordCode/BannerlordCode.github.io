---
title: "Extensions"
description: "Extensions: a public class in TaleWorlds.Library; 35 exposed members (35 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Extensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Extensions

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class Extensions`
**File:** `TaleWorlds.Library/Extensions.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

Extensions lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Extensions.cs. It is a public class; the inheritance chain is Extensions. It exposes 35 public/protected members: 35 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Extensions lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain Extensions. The surface is method-led (methods 35/35, properties 0/35), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Extensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public static List<Type>GetTypesSafe(this Assembly assembly, Func<Type, bool>func = null)` | method |
| `Assembly[]GetReferencingAssembliesSafe` | `public static Assembly[]GetReferencingAssembliesSafe(this Assembly baseAssembly, Func<Assembly, bool>func = null)` | method |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this Type type, Type attributeType, bool inherit)` | method |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this Type type, bool inherit)` | method |
| `IEnumerable` | `public static IEnumerable<Attribute>GetCustomAttributesSafe(this Type type, Type attributeType)` | method |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this PropertyInfo property, Type attributeType, bool inherit)` | method |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this PropertyInfo property, bool inherit)` | method |
| `IEnumerable` | `public static IEnumerable<Attribute>GetCustomAttributesSafe(this PropertyInfo property, Type attributeType)` | method |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this FieldInfo field, Type attributeType, bool inherit)` | method |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this FieldInfo field, bool inherit)` | method |
| `IEnumerable` | `public static IEnumerable<Attribute>GetCustomAttributesSafe(this FieldInfo field, Type attributeType)` | method |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this MethodInfo method, Type attributeType, bool inherit)` | method |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this MethodInfo method, bool inherit)` | method |
| `IEnumerable` | `public static IEnumerable<Attribute>GetCustomAttributesSafe(this MethodInfo method, Type attributeType)` | method |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this Assembly assembly, Type attributeType, bool inherit)` | method |
| `object[]GetCustomAttributesSafe` | `public static object[]GetCustomAttributesSafe(this Assembly assembly, bool inherit)` | method |
| `IEnumerable` | `public static IEnumerable<Attribute>GetCustomAttributesSafe(this Assembly assembly, Type attributeType)` | method |
| `MBList` | `public static MBList<T>ToMBList<T>(this T[]source)` | method |
| `MBList` | `public static MBList<T>ToMBList<T>(this List<T>source)` | method |
| `MBList` | `public static MBList<T>ToMBList<T>(this IEnumerable<T>source)` | method |
| `AppendList` | `public static void AppendList<T>(this List<T>list1, List<T>list2)` | method |
| `TValue>` | `public static MBReadOnlyDictionary<TKey, TValue>GetReadOnlyDictionary<TKey, TValue>(this Dictionary<TKey, TValue>dictionary)` | method |
| `HasAnyFlag` | `public static bool HasAnyFlag<T>(this T p1, T p2) where T : struct` | method |
| `HasAllFlags` | `public static bool HasAllFlags<T>(this T p1, T p2) where T : struct` | method |
| `GetDeterministicHashCode` | `public static int GetDeterministicHashCode(this string text)` | method |
| `IndexOfMin` | `public static int IndexOfMin<TSource>(this IReadOnlyList<TSource>self, Func<TSource, int>func)` | method |
| `IndexOfMin` | `public static int IndexOfMin<TSource>(this MBReadOnlyList<TSource>self, Func<TSource, int>func)` | method |
| `IndexOfMax` | `public static int IndexOfMax<TSource>(this IReadOnlyList<TSource>self, Func<TSource, int>func)` | method |
| `IndexOfMax` | `public static int IndexOfMax<TSource>(this MBReadOnlyList<TSource>self, Func<TSource, int>func)` | method |
| `IndexOf` | `public static int IndexOf<TValue>(this TValue[]source, TValue item)` | method |
| `FindIndex` | `public static int FindIndex<TValue>(this IReadOnlyList<TValue>source, Func<TValue, bool>predicate)` | method |
| `FindIndex` | `public static int FindIndex<TValue>(this MBReadOnlyList<TValue>source, Func<TValue, bool>predicate)` | method |
| `FindLastIndex` | `public static int FindLastIndex<TValue>(this IReadOnlyList<TValue>source, Func<TValue, bool>predicate)` | method |
| `FindLastIndex` | `public static int FindLastIndex<TValue>(this MBReadOnlyList<TValue>source, Func<TValue, bool>predicate)` | method |
| `Randomize` | `public static void Randomize<T>(this IList<T>array)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
