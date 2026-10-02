---
title: "TWSharedMutexWriteLock"
description: "TWSharedMutexWriteLock: a public struct in TaleWorlds.Library, inheriting IDisposable; 2 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/TWSharedMutexWriteLock.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TWSharedMutexWriteLock

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct TWSharedMutexWriteLock : IDisposable`
**File:** `TaleWorlds.Library/TWSharedMutexWriteLock.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

TWSharedMutexWriteLock lives in the TaleWorlds.Library module, source file TaleWorlds.Library/TWSharedMutexWriteLock.cs. It is a public struct, implementing/inheriting IDisposable; the inheritance chain is TWSharedMutexWriteLock → IDisposable. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TWSharedMutexWriteLock lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain TWSharedMutexWriteLock → IDisposable. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. IDisposable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/TWSharedMutexWriteLock.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TWSharedMutexWriteLock` | `public TWSharedMutexWriteLock(TWSharedMutex mtx)` | constructor |
| `Dispose` | `public void Dispose()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
