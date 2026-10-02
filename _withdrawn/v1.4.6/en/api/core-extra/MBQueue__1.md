---
title: "MBQueue<T>"
description: "MBQueue<T>: a public class in TaleWorlds.Library, inheriting MBReadOnlyQueue<T>, IMBCollection; 5 exposed members (1 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/MBQueue.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBQueue<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBQueue<T>: MBReadOnlyQueue<T>, IMBCollection`
**File:** `TaleWorlds.Library/MBQueue.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

MBQueue<T> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBQueue.cs. It is a public class, implementing/inheriting MBReadOnlyQueue<T>, IMBCollection; the inheritance chain is MBQueue → MBReadOnlyQueue → Queue. It exposes 5 public/protected members: 1 methods, 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBQueue<T> lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain MBQueue → MBReadOnlyQueue → Queue. The surface is method-led (methods 1/5, properties 0/5), so it mostly exposes operations. Queue on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBQueue.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBQueue` | `public MBQueue()` | constructor |
| `MBQueue` | `public MBQueue(int capacity) : base(capacity)` | constructor |
| `MBQueue` | `public MBQueue(Queue<T>queue) : base(queue)` | constructor |
| `MBQueue` | `public MBQueue(IEnumerable<T>collection) : base(collection)` | constructor |
| `Remove` | `public bool Remove(T item)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBReadOnlyQueue](../MBReadOnlyQueue__1/)
- [base / interface IMBCollection](../IMBCollection/)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
