---
title: "NativeParallelDriver"
description: "NativeParallelDriver: a public class in TaleWorlds.Engine, inheriting IParallelDriver; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/NativeParallelDriver.cs."
---
# NativeParallelDriver

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class NativeParallelDriver : IParallelDriver`
**File:** `TaleWorlds.Engine/NativeParallelDriver.cs`

## Overview

NativeParallelDriver lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/NativeParallelDriver.cs. It is a public class (sealed), implementing/inheriting IParallelDriver; the inheritance chain is NativeParallelDriver → IParallelDriver. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeParallelDriver is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain NativeParallelDriver → IParallelDriver. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. IParallelDriver on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/NativeParallelDriver.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `For` | `public void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)` | method |
| `ForWithoutRenderThread` | `public void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate loopBody, int grainSize)` | method |
| `ForWithoutRenderThreadDt` | `public void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate loopBody, int grainSize)` | method |
| `For` | `public void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate loopBody, int grainSize)` | method |
| `GetMainThreadId` | `public ulong GetMainThreadId()` | method |
| `GetCurrentThreadId` | `public ulong GetCurrentThreadId()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
