---
title: "IParallelDriver"
description: "IParallelDriver: a public interface in TaleWorlds.Library; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/IParallelDriver.cs."
---
# IParallelDriver

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IParallelDriver`
**File:** `TaleWorlds.Library/IParallelDriver.cs`

## Overview

IParallelDriver lives in the TaleWorlds.Library module, source file TaleWorlds.Library/IParallelDriver.cs. It is a public interface; the inheritance chain is IParallelDriver. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IParallelDriver is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain IParallelDriver. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/IParallelDriver.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `For` | `void For(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize);` | method |
| `ForWithoutRenderThread` | `void ForWithoutRenderThread(int fromInclusive, int toExclusive, TWParallel.ParallelForAuxPredicate body, int grainSize);` | method |
| `ForWithoutRenderThreadDt` | `void ForWithoutRenderThreadDt(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize);` | method |
| `For` | `void For(int fromInclusive, int toExclusive, float deltaTime, TWParallel.ParallelForWithDtAuxPredicate body, int grainSize);` | method |
| `GetMainThreadId` | `ulong GetMainThreadId();` | method |
| `GetCurrentThreadId` | `ulong GetCurrentThreadId();` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
