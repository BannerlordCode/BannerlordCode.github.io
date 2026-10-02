---
title: "MBArrayList<T>"
description: "MBArrayList<T>: a public class in TaleWorlds.Library, inheriting IMBCollection, ICollection; 17 exposed members (9 methods, 5 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/MBArrayList.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBArrayList<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBArrayList<T>: IMBCollection, ICollection, IEnumerable, IEnumerable<T>`
**File:** `TaleWorlds.Library/MBArrayList.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

MBArrayList<T> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBArrayList.cs. It is a public class, implementing/inheriting IMBCollection, ICollection, IEnumerable, IEnumerable<T>; the inheritance chain is MBArrayList → IMBCollection. It exposes 17 public/protected members: 9 methods, 5 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBArrayList<T> lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain MBArrayList → IMBCollection. The surface is method-led (methods 9/17, properties 5/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBArrayList.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Count` | `public int Count` | property |
| `Capacity` | `public int Capacity` | property |
| `MBArrayList` | `public MBArrayList()` | constructor |
| `MBArrayList` | `public MBArrayList(List<T>list)` | constructor |
| `MBArrayList` | `public MBArrayList(IEnumerable<T>list)` | constructor |
| `T[]RawArray` | `public T[]RawArray` | property |
| `IsSynchronized` | `public bool IsSynchronized` | property |
| `SyncRoot` | `public object SyncRoot` | property |
| `this[...]` | `public T this[int index]` | indexer |
| `IndexOf` | `public int IndexOf(T item)` | method |
| `Contains` | `public bool Contains(T item)` | method |
| `IEnumerator` | `public IEnumerator<T>GetEnumerator()` | method |
| `Clear` | `public void Clear()` | method |
| `Add` | `public void Add(T item)` | method |
| `AddRange` | `public void AddRange(IEnumerable<T>list)` | method |
| `Remove` | `public bool Remove(T item)` | method |
| `CopyTo` | `public void CopyTo(Array array, int index)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMBCollection](../IMBCollection/)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
