---
title: "Extensions"
description: "Extensions: a public class in TaleWorlds.Core; 26 exposed members (26 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/Extensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Extensions

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class Extensions`
**File:** `TaleWorlds.Core/Extensions.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

Extensions lives in the TaleWorlds.Core module, source file TaleWorlds.Core/Extensions.cs. It is a public class; the inheritance chain is Extensions. It exposes 26 public/protected members: 26 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Extensions lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain Extensions. The surface is method-led (methods 26/26, properties 0/26), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/Extensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ToHexadecimalString` | `public static string ToHexadecimalString(this uint number)` | method |
| `Description` | `public static string Description(this Enum value)` | method |
| `NextFloat` | `public static float NextFloat(this Random random)` | method |
| `TKey>` | `public static TSource MaxBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>selector)` | method |
| `TKey>` | `public static TSource MaxBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>selector, out TKey maxKey)` | method |
| `TKey>` | `public static TSource MaxBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>selector, IComparer<TKey>comparer, out TKey maxKey)` | method |
| `TKey>` | `public static TSource MinBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>selector)` | method |
| `TKey>` | `public static TSource MinBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>selector, IComparer<TKey>comparer)` | method |
| `TKey>` | `public static IEnumerable<TSource>DistinctBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>keySelector)` | method |
| `TKey>` | `public static IEnumerable<TSource>DistinctBy<TSource, TKey>(this IEnumerable<TSource>source, Func<TSource, TKey>keySelector, IEqualityComparer<TKey>comparer)` | method |
| `Add` | `public static string Add(this string str, string appendant, bool newLine = true)` | method |
| `IEnumerable` | `public static IEnumerable<string>Split(this string str, int maxChunkSize)` | method |
| `GetOppositeSide` | `public static BattleSideEnum GetOppositeSide(this BattleSideEnum side)` | method |
| `IEnumerable` | `public static IEnumerable<IEnumerable<T>>Split<T>(this IEnumerable<T>source, int splitItemCount)` | method |
| `IsEmpty` | `public static bool IsEmpty<T>(this IEnumerable<T>source)` | method |
| `Shuffle` | `public static void Shuffle<T>(this IList<T>list)` | method |
| `GetRandomElement` | `public static T GetRandomElement<T>(this IReadOnlyList<T>e)` | method |
| `GetRandomElement` | `public static T GetRandomElement<T>(this MBReadOnlyList<T>e)` | method |
| `GetRandomElement` | `public static T GetRandomElement<T>(this MBList<T>e)` | method |
| `GetRandomElement` | `public static T GetRandomElement<T>(this T[]e)` | method |
| `GetRandomElementInefficiently` | `public static T GetRandomElementInefficiently<T>(this IEnumerable<T>e)` | method |
| `GetRandomElementWithPredicate` | `public static T GetRandomElementWithPredicate<T>(this T[]e, Func<T, bool>predicate)` | method |
| `GetRandomElementWithPredicate` | `public static T GetRandomElementWithPredicate<T>(this MBReadOnlyList<T>e, Func<T, bool>predicate)` | method |
| `GetRandomElementWithPredicate` | `public static T GetRandomElementWithPredicate<T>(this MBList<T>e, Func<T, bool>predicate)` | method |
| `GetRandomElementWithPredicate` | `public static T GetRandomElementWithPredicate<T>(this IReadOnlyList<T>e, Func<T, bool>predicate)` | method |
| `T2>` | `public static List<Tuple<T1, T2>>CombineWith<T1, T2>(this IEnumerable<T1>list1, IEnumerable<T2>list2)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
