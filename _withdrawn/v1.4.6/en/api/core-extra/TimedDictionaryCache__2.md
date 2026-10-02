---
title: "TimedDictionaryCache<TKey,TValue>"
description: "TimedDictionaryCache<TKey,TValue>: a public class in TaleWorlds.Library; 9 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/TimedDictionaryCache.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TimedDictionaryCache<TKey,TValue>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class TimedDictionaryCache<TKey, TValue>`
**File:** `TaleWorlds.Library/TimedDictionaryCache.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

TimedDictionaryCache<TKey,TValue> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/TimedDictionaryCache.cs. It is a public class; the inheritance chain is TimedDictionaryCache. It exposes 9 public/protected members: 7 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TimedDictionaryCache<TKey,TValue> lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain TimedDictionaryCache. The surface is method-led (methods 7/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/TimedDictionaryCache.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TimedDictionaryCache` | `public TimedDictionaryCache(long validMilliseconds)` | constructor |
| `TimedDictionaryCache` | `public TimedDictionaryCache(TimeSpan validTimeSpan) : this((long)validTimeSpan.TotalMilliseconds)` | constructor |
| `PruneExpiredItems` | `public void PruneExpiredItems()` | method |
| `Clear` | `public void Clear()` | method |
| `ContainsKey` | `public bool ContainsKey(TKey key)` | method |
| `Remove` | `public bool Remove(TKey key)` | method |
| `TryGetValue` | `public bool TryGetValue(TKey key, out TValue value)` | method |
| `this[...]` | `public TValue this[TKey key]` | indexer |
| `TValue>AsReadOnlyDictionary` | `public MBReadOnlyDictionary<TKey, TValue>AsReadOnlyDictionary()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
