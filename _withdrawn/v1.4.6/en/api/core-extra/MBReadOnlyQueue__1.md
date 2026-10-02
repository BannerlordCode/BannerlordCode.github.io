---
title: "MBReadOnlyQueue<T>"
description: "MBReadOnlyQueue<T>: a public class in TaleWorlds.Library, inheriting Queue<T>; 4 exposed members (0 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/MBReadOnlyQueue.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBReadOnlyQueue<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBReadOnlyQueue<T>: Queue<T>`
**File:** `TaleWorlds.Library/MBReadOnlyQueue.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

MBReadOnlyQueue<T> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBReadOnlyQueue.cs. It is a public class, implementing/inheriting Queue<T>; the inheritance chain is MBReadOnlyQueue → Queue. It exposes 4 public/protected members: 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBReadOnlyQueue<T> lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain MBReadOnlyQueue → Queue. The surface is method-led (methods 0/4, properties 0/4), so it mostly exposes operations. Queue on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBReadOnlyQueue.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyQueue` | `public MBReadOnlyQueue()` | constructor |
| `MBReadOnlyQueue` | `public MBReadOnlyQueue(int capacity) : base(capacity)` | constructor |
| `MBReadOnlyQueue` | `public MBReadOnlyQueue(Queue<T>queue) : base(queue)` | constructor |
| `MBReadOnlyQueue` | `public MBReadOnlyQueue(IEnumerable<T>collection) : base(collection)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
