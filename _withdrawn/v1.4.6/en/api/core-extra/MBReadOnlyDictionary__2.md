---
title: "MBReadOnlyDictionary<TKey,TValue>"
description: "MBReadOnlyDictionary<TKey,TValue>: a public class in TaleWorlds.Library, inheriting ICollection, IEnumerable; 11 exposed members (5 methods, 5 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/MBReadOnlyDictionary.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBReadOnlyDictionary<TKey,TValue>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBReadOnlyDictionary<TKey, TValue>: ICollection, IEnumerable, IReadOnlyDictionary<TKey, TValue>, IEnumerable<KeyValuePair<TKey, TValue>>, IReadOnlyCollection<KeyValuePair<TKey, TValue>>`
**File:** `TaleWorlds.Library/MBReadOnlyDictionary.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

MBReadOnlyDictionary<TKey,TValue> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBReadOnlyDictionary.cs. It is a public class, implementing/inheriting ICollection, IEnumerable, IReadOnlyDictionary<TKey, TValue>, IEnumerable<KeyValuePair<TKey, TValue>>, IReadOnlyCollection<KeyValuePair<TKey, TValue>>; the inheritance chain is MBReadOnlyDictionary → ICollection. It exposes 11 public/protected members: 5 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBReadOnlyDictionary<TKey,TValue> lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain MBReadOnlyDictionary → ICollection. The surface is method-led (methods 5/11, properties 5/11), so it mostly exposes operations. ICollection on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBReadOnlyDictionary.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyDictionary` | `public MBReadOnlyDictionary(Dictionary<TKey, TValue>dictionary)` | constructor |
| `Count` | `public int Count` | property |
| `IsSynchronized` | `public bool IsSynchronized` | property |
| `SyncRoot` | `public object SyncRoot` | property |
| `GetEnumerator` | `public Dictionary<TKey, TValue>.Enumerator GetEnumerator()` | method |
| `ContainsKey` | `public bool ContainsKey(TKey key)` | method |
| `TryGetValue` | `public bool TryGetValue(TKey key, out TValue value)` | method |
| `this[...]` | `public TValue this[TKey key]` | indexer |
| `IEnumerable` | `public IEnumerable<TKey>Keys` | property |
| `IEnumerable` | `public IEnumerable<TValue>Values` | property |
| `CopyTo` | `public void CopyTo(Array array, int index)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
