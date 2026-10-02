---
title: "MBList<T>"
description: "MBList<T>: a public class in TaleWorlds.Library, inheriting MBReadOnlyList<T>; 4 exposed members (0 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/MBList.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBList<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBList<T>: MBReadOnlyList<T>`
**File:** `TaleWorlds.Library/MBList.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

MBList<T> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBList.cs. It is a public class, implementing/inheriting MBReadOnlyList<T>; the inheritance chain is MBList → MBReadOnlyList → List. It exposes 4 public/protected members: 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBList<T> lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain MBList → MBReadOnlyList → List. The surface is method-led (methods 0/4, properties 0/4), so it mostly exposes operations. List on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBList.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBList` | `public MBList()` | constructor |
| `MBList` | `public MBList(int capacity) : base(capacity)` | constructor |
| `MBList` | `public MBList(IEnumerable<T>collection) : base(collection)` | constructor |
| `MBList` | `public MBList(List<T>collection) : base(collection)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBReadOnlyList](../MBReadOnlyList__1/)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
