---
title: "TWParallel"
description: "TWParallel: a public class in TaleWorlds.Library; 13 exposed members (11 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/TWParallel.cs."
---
# TWParallel

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class TWParallel`
**File:** `TaleWorlds.Library/TWParallel.cs`

## Overview

TWParallel lives in the TaleWorlds.Library module, source file TaleWorlds.Library/TWParallel.cs. It is a public class; the inheritance chain is TWParallel. It exposes 13 public/protected members: 11 methods, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TWParallel is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain TWParallel. The surface is method-led (methods 11/13, properties 0/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/TWParallel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitializeAndSetImplementation` | `public static void InitializeAndSetImplementation(IParallelDriver parallelDriver)` | method |
| `ForEach` | `public static ParallelLoopResult ForEach<TSource>(IEnumerable<TSource>source, Action<TSource>body)` | method |
| `ForEach` | `public static void ForEach<TSource>(IList<TSource>source, Action<TSource>body)` | method |
| `For` | `public static void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)` | method |
| `ForWithoutRenderThread` | `public static void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize = 16)` | method |
| `ForWithoutRenderThreadDt` | `public static void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize = 16)` | method |
| `For` | `public static void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize = 16)` | method |
| `AssertIsMainThread` | `public static void AssertIsMainThread()` | method |
| `IsMainThread` | `public static bool IsMainThread()` | method |
| `ParallelForAuxPredicate` | `public delegate void ParallelForAuxPredicate(int localStartIndex, int localEndIndex);` | method |
| `ParallelForWithDtAuxPredicate` | `public delegate void ParallelForWithDtAuxPredicate(int localStartIndex, int localEndIndex, float dt);` | method |
| `ParallelForAuxPredicate` | `public delegate void ParallelForAuxPredicate(int localStartIndex, int localEndIndex)` | nested type |
| `ParallelForWithDtAuxPredicate` | `public delegate void ParallelForWithDtAuxPredicate(int localStartIndex, int localEndIndex, float dt)` | nested type |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
