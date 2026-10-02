---
title: "TWSharedMutex"
description: "TWSharedMutex: a public class in TaleWorlds.Library; 6 exposed members (4 methods, 2 properties, 0 fields). Source: TaleWorlds.Library/TWSharedMutex.cs."
---
# TWSharedMutex

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class TWSharedMutex`
**File:** `TaleWorlds.Library/TWSharedMutex.cs`

## Overview

TWSharedMutex lives in the TaleWorlds.Library module, source file TaleWorlds.Library/TWSharedMutex.cs. It is a public class; the inheritance chain is TWSharedMutex. It exposes 6 public/protected members: 4 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TWSharedMutex is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain TWSharedMutex. The surface is method-led (methods 4/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/TWSharedMutex.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EnterReadLock` | `public void EnterReadLock()` | method |
| `EnterWriteLock` | `public void EnterWriteLock()` | method |
| `ExitReadLock` | `public void ExitReadLock()` | method |
| `ExitWriteLock` | `public void ExitWriteLock()` | method |
| `IsReadLockHeld` | `public bool IsReadLockHeld` | property |
| `IsWriteLockHeld` | `public bool IsWriteLockHeld` | property |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
