---
title: "DefaultParallelDriver"
description: "DefaultParallelDriver: a public class in TaleWorlds.Library, inheriting IParallelDriver; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/DefaultParallelDriver.cs."
---
# DefaultParallelDriver

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public sealed class DefaultParallelDriver : IParallelDriver`
**File:** `TaleWorlds.Library/DefaultParallelDriver.cs`

## Overview

DefaultParallelDriver lives in the TaleWorlds.Library module, source file TaleWorlds.Library/DefaultParallelDriver.cs. It is a public class (sealed), implementing/inheriting IParallelDriver; the inheritance chain is DefaultParallelDriver → IParallelDriver. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultParallelDriver is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain DefaultParallelDriver → IParallelDriver. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/DefaultParallelDriver.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `For` | `public void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize)` | method |
| `ForWithoutRenderThread` | `public void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize)` | method |
| `ForWithoutRenderThreadDt` | `public void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize)` | method |
| `For` | `public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize)` | method |
| `GetMainThreadId` | `public ulong GetMainThreadId()` | method |
| `GetCurrentThreadId` | `public ulong GetCurrentThreadId()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IParallelDriver](../IParallelDriver)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
