---
title: "MBReadOnlyQueue<T>"
description: "MBReadOnlyQueue<T>: a public class in TaleWorlds.Library, inheriting Queue<T>; 4 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/MBReadOnlyQueue.cs."
---
# MBReadOnlyQueue<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBReadOnlyQueue<T>: Queue<T>`
**File:** `TaleWorlds.Library/MBReadOnlyQueue.cs`

## Overview

MBReadOnlyQueue<T> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBReadOnlyQueue.cs. It is a public class, implementing/inheriting Queue<T>; the inheritance chain is MBReadOnlyQueue → Queue. It exposes 4 public/protected members: 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBReadOnlyQueue<T> is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain MBReadOnlyQueue → Queue. The surface is method-led (methods 0/4, properties 0/4), so it mostly exposes operations. Queue on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBReadOnlyQueue.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyQueue` | `public MBReadOnlyQueue()` | constructor |
| `MBReadOnlyQueue` | `public MBReadOnlyQueue(int capacity) : base(capacity)` | constructor |
| `MBReadOnlyQueue` | `public MBReadOnlyQueue(Queue<T>queue) : base(queue)` | constructor |
| `MBReadOnlyQueue` | `public MBReadOnlyQueue(IEnumerable<T>collection) : base(collection)` | constructor |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
