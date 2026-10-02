---
title: "LinQuick"
description: "LinQuick: a public class in TaleWorlds.LinQuick; 90 exposed members (90 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.LinQuick/LinQuick.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LinQuick

**Namespace:** `TaleWorlds.LinQuick`
**Module:** `TaleWorlds.LinQuick`
**Type:** `public static class LinQuick`
**File:** `TaleWorlds.LinQuick/LinQuick.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.LinQuick)

## Overview

LinQuick lives in the TaleWorlds.LinQuick module, source file TaleWorlds.LinQuick/LinQuick.cs. It is a public class; the inheritance chain is LinQuick. It exposes 90 public/protected members: 90 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LinQuick lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.LinQuick`), namespace `TaleWorlds.LinQuick`, inheritance chain LinQuick. The surface is method-led (methods 90/90, properties 0/90), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.LinQuick/LinQuick.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AllQ` | `public static bool AllQ<T>(this T[]source, Func<T, bool>predicate)` | method |
| `AllQ` | `public static bool AllQ<T>(this List<T>source, Func<T, bool>predicate)` | method |
| `AllQ` | `public static bool AllQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | method |
| `AllQ` | `public static bool AllQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | method |
| `AnyQ` | `public static bool AnyQ<T>(this T[]source, Func<T, bool>predicate)` | method |
| `AnyQ` | `public static bool AnyQ<T>(this List<T>source)` | method |
| `AnyQ` | `public static bool AnyQ<T>(this List<T>source, Func<T, bool>predicate)` | method |
| `AnyQ` | `public static bool AnyQ<T>(this IReadOnlyList<T>source)` | method |
| `AnyQ` | `public static bool AnyQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | method |
| `AnyQ` | `public static bool AnyQ<T>(this IEnumerable<T>source)` | method |
| `AnyQ` | `public static bool AnyQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | method |
| `AverageQ` | `public static float AverageQ(this float[]source)` | method |
| `AverageQ` | `public static float AverageQ(this IEnumerable<float>source)` | method |
| `AverageQ` | `public static float AverageQ<T>(this T[]source, Func<T, float>selector)` | method |
| `AverageQ` | `public static float AverageQ<T>(this List<T>source, Func<T, float>selector)` | method |
| `AverageQ` | `public static float AverageQ<T>(this IReadOnlyList<T>source, Func<T, float>selector)` | method |
| `AverageQ` | `public static float AverageQ<T>(this IEnumerable<T>source, Func<T, float>selector)` | method |
| `ContainsQ` | `public static bool ContainsQ<T>(this T[]source, T value)` | method |
| `ContainsQ` | `public static bool ContainsQ<T>(this List<T>source, T value)` | method |
| `ContainsQ` | `public static bool ContainsQ<T>(this IReadOnlyList<T>source, T value)` | method |
| `ContainsQ` | `public static bool ContainsQ<T>(this IEnumerable<T>source, T value)` | method |
| `ContainsQ` | `public static bool ContainsQ<T>(this Queue<T>source, T value)` | method |
| `ContainsQ` | `public static bool ContainsQ<T>(this T[]source, Func<T, bool>predicate)` | method |
| `ContainsQ` | `public static bool ContainsQ<T>(this List<T>source, Func<T, bool>predicate)` | method |
| `ContainsQ` | `public static bool ContainsQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | method |
| `ContainsQ` | `public static bool ContainsQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | method |
| `ContainsQ` | `public static bool ContainsQ<T>(this Queue<T>source, Func<T, bool>predicate)` | method |
| `CountQ` | `public static int CountQ<T>(this T[]source, T value)` | method |
| `CountQ` | `public static int CountQ<T>(this List<T>source, T value)` | method |
| `CountQ` | `public static int CountQ<T>(this IReadOnlyList<T>source, T value)` | method |
| `CountQ` | `public static int CountQ<T>(this T[]source, Func<T, bool>predicate)` | method |
| `CountQ` | `public static int CountQ<T>(this List<T>source, Func<T, bool>predicate)` | method |
| `CountQ` | `public static int CountQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | method |
| `CountQ` | `public static int CountQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | method |
| `CountQ` | `public static int CountQ<T>(this IEnumerable<T>source)` | method |
| `FindIndexQ` | `public static int FindIndexQ<T>(this T[]source, T value)` | method |
| `FindIndexQ` | `public static int FindIndexQ<T>(this List<T>source, T value)` | method |
| `FindIndexQ` | `public static int FindIndexQ<T>(this IReadOnlyList<T>source, T value)` | method |
| `FindIndexQ` | `public static int FindIndexQ<T>(this IEnumerable<T>source, T value)` | method |
| `FindIndexQ` | `public static int FindIndexQ<T>(this T[]source, Func<T, bool>predicate)` | method |
| `FindIndexQ` | `public static int FindIndexQ<T>(this List<T>source, Func<T, bool>predicate)` | method |
| `FindIndexQ` | `public static int FindIndexQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | method |
| `FindIndexQ` | `public static int FindIndexQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | method |
| `FirstOrDefaultQ` | `public static T FirstOrDefaultQ<T>(this T[]source, Func<T, bool>predicate)` | method |
| `FirstOrDefaultQ` | `public static T FirstOrDefaultQ<T>(this List<T>source, Func<T, bool>predicate)` | method |
| `FirstOrDefaultQ` | `public static T FirstOrDefaultQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | method |
| `FirstOrDefaultQ` | `public static T FirstOrDefaultQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | method |
| `MaxQ` | `public static int MaxQ(this int[]source)` | method |
| `MaxQ` | `public static int MaxQ(this List<int>source)` | method |
| `MaxQ` | `public static T MaxQ<T>(this T[]source) where T : IComparable<T>` | method |
| `MaxQ` | `public static T MaxQ<T>(this List<T>source) where T : IComparable<T>` | method |
| `MaxQ` | `public static int MaxQ(this IReadOnlyList<int>source)` | method |
| `MaxQ` | `public static T MaxQ<T>(this IReadOnlyList<T>source) where T : IComparable<T>` | method |
| `MaxQ` | `public static float MaxQ<T>(this T[]source, Func<T, float>selector)` | method |
| `MaxQ` | `public static int MaxQ<T>(this T[]source, Func<T, int>selector)` | method |
| `MaxQ` | `public static float MaxQ<T>(this List<T>source, Func<T, float>selector)` | method |
| `MaxQ` | `public static int MaxQ<T>(this List<T>source, Func<T, int>selector)` | method |
| `MaxQ` | `public static float MaxQ<T>(this IReadOnlyList<T>source, Func<T, float>selector)` | method |
| `MaxQ` | `public static int MaxQ<T>(this IReadOnlyList<T>source, Func<T, int>selector)` | method |
| `MaxQ` | `public static float MaxQ<T>(this IEnumerable<T>source, Func<T, float>selector)` | method |
| `MaxQ` | `public static int MaxQ<T>(this IEnumerable<T>source, Func<T, int>selector)` | method |
| `T>MaxElements3` | `public static ValueTuple<T, T, T>MaxElements3<T>(this IEnumerable<T>collection, Func<T, float>func)` | method |
| `S>` | `public static IOrderedEnumerable<T>OrderByQ<T, S>(this IEnumerable<T>source, Func<T, S>selector)` | method |
| `TKey>` | `public static T[]OrderByQ<T, TKey>(this T[]source, Func<T, TKey>selector)` | method |
| `TKey>` | `public static T[]OrderByQ<T, TKey>(this List<T>source, Func<T, TKey>selector)` | method |
| `TKey>` | `public static T[]OrderByQ<T, TKey>(this IReadOnlyList<T>source, Func<T, TKey>selector)` | method |
| `R>` | `public static IEnumerable<R>SelectQ<T, R>(this T[]source, Func<T, R>selector)` | method |
| `R>` | `public static IEnumerable<R>SelectQ<T, R>(this List<T>source, Func<T, R>selector)` | method |
| `R>` | `public static IEnumerable<R>SelectQ<T, R>(this IReadOnlyList<T>source, Func<T, R>selector)` | method |
| `R>` | `public static IEnumerable<R>SelectQ<T, R>(this IEnumerable<T>source, Func<T, R>selector)` | method |
| `SumQ` | `public static int SumQ<T>(this T[]source, Func<T, int>func)` | method |
| `SumQ` | `public static float SumQ<T>(this T[]source, Func<T, float>func)` | method |
| `SumQ` | `public static int SumQ<T>(this List<T>source, Func<T, int>func)` | method |
| `SumQ` | `public static float SumQ<T>(this List<T>source, Func<T, float>func)` | method |
| `SumQ` | `public static int SumQ<T>(this IReadOnlyList<T>source, Func<T, int>func)` | method |
| `SumQ` | `public static float SumQ<T>(this IReadOnlyList<T>source, Func<T, float>func)` | method |
| `SumQ` | `public static float SumQ<T>(this IEnumerable<T>source, Func<T, float>func)` | method |
| `SumQ` | `public static int SumQ<T>(this IEnumerable<T>source, Func<T, int>func)` | method |
| `T[]ToArrayQ` | `public static T[]ToArrayQ<T>(this T[]source)` | method |
| `T[]ToArrayQ` | `public static T[]ToArrayQ<T>(this List<T>source)` | method |
| `T[]ToArrayQ` | `public static T[]ToArrayQ<T>(this IReadOnlyList<T>source)` | method |
| `T[]ToArrayQ` | `public static T[]ToArrayQ<T>(this IEnumerable<T>source)` | method |
| `List` | `public static List<T>ToListQ<T>(this T[]source)` | method |
| `List` | `public static List<T>ToListQ<T>(this List<T>source)` | method |
| `List` | `public static List<T>ToListQ<T>(this IReadOnlyList<T>source)` | method |
| `List` | `public static List<T>ToListQ<T>(this IEnumerable<T>source)` | method |
| `IEnumerable` | `public static IEnumerable<T>WhereQ<T>(this T[]source, Func<T, bool>predicate)` | method |
| `IEnumerable` | `public static IEnumerable<T>WhereQ<T>(this List<T>source, Func<T, bool>predicate)` | method |
| `IEnumerable` | `public static IEnumerable<T>WhereQ<T>(this IReadOnlyList<T>source, Func<T, bool>predicate)` | method |
| `IEnumerable` | `public static IEnumerable<T>WhereQ<T>(this IEnumerable<T>source, Func<T, bool>predicate)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Min](../Min/)
