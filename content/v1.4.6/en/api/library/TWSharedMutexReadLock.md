---
title: "TWSharedMutexReadLock"
description: "TWSharedMutexReadLock: a public struct in TaleWorlds.Library, inheriting IDisposable; 2 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/TWSharedMutexReadLock.cs."
---
# TWSharedMutexReadLock

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct TWSharedMutexReadLock : IDisposable`
**File:** `TaleWorlds.Library/TWSharedMutexReadLock.cs`

## Overview

TWSharedMutexReadLock lives in the TaleWorlds.Library module, source file TaleWorlds.Library/TWSharedMutexReadLock.cs. It is a public struct, implementing/inheriting IDisposable; the inheritance chain is TWSharedMutexReadLock → IDisposable. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TWSharedMutexReadLock is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain TWSharedMutexReadLock → IDisposable. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. IDisposable on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/TWSharedMutexReadLock.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TWSharedMutexReadLock` | `public TWSharedMutexReadLock(TWSharedMutex mtx)` | constructor |
| `Dispose` | `public void Dispose()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
