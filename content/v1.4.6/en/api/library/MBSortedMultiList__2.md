---
title: "MBSortedMultiList<TKey,TValue>"
description: "MBSortedMultiList<TKey,TValue>: a public class in TaleWorlds.Library, inheriting IReadOnlyList<TValue>, IEnumerable<TValue>; 35 exposed members (27 methods, 5 properties, 0 fields). Source: TaleWorlds.Library/MBSortedMultiList.cs."
---
# MBSortedMultiList<TKey,TValue>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBSortedMultiList<TKey, TValue>: IReadOnlyList<TValue>, IEnumerable<TValue>, IEnumerable, IReadOnlyCollection<TValue>, IMBCollection where TKey : IComparable<TKey>`
**File:** `TaleWorlds.Library/MBSortedMultiList.cs`

## Overview

MBSortedMultiList<TKey,TValue> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBSortedMultiList.cs. It is a public class, implementing/inheriting IReadOnlyList<TValue>, IEnumerable<TValue>, IEnumerable, IReadOnlyCollection<TValue>, IMBCollection; the inheritance chain is MBSortedMultiList → IReadOnlyList. It exposes 35 public/protected members: 27 methods, 5 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBSortedMultiList<TKey,TValue> is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain MBSortedMultiList → IReadOnlyList. The surface is method-led (methods 27/35, properties 5/35), so it mostly exposes operations. IReadOnlyList on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBSortedMultiList.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Comparer` | `public MBSortedMultiList<TKey, TValue>.ComparerType Comparer` | property |
| `Count` | `public int Count` | property |
| `this[...]` | `public TValue this[int index]` | indexer |
| `FirstValue` | `public TValue FirstValue` | property |
| `LastValue` | `public TValue LastValue` | property |
| `MBSortedMultiList` | `public MBSortedMultiList(IComparer<TKey>customComparer)` | constructor |
| `MBSortedMultiList` | `public MBSortedMultiList(bool isAscending = true)` | constructor |
| `Contains` | `public bool Contains(TKey key)` | method |
| `Contains` | `public bool Contains(TKey key, TValue value)` | method |
| `TValue>Get` | `public KeyValuePair<TKey, TValue>Get(int index)` | method |
| `FirstIndexOf` | `public int FirstIndexOf(TKey key)` | method |
| `FirstIndexOf` | `public int FirstIndexOf(TKey key, TValue value)` | method |
| `LastIndexOf` | `public int LastIndexOf(TKey key)` | method |
| `LastIndexOf` | `public int LastIndexOf(TKey key, TValue value)` | method |
| `All` | `public bool All(Predicate<KeyValuePair<TKey, TValue>>predicate)` | method |
| `Any` | `public bool Any(Predicate<KeyValuePair<TKey, TValue>>predicate)` | method |
| `IEnumerator` | `public IEnumerator<TValue>GetValues(TKey key)` | method |
| `Find` | `public bool Find(Predicate<KeyValuePair<TKey, TValue>>predicate, out KeyValuePair<TKey, TValue>found, bool searchForward = true)` | method |
| `FindIndex` | `public int FindIndex(Predicate<KeyValuePair<TKey, TValue>>predicate, bool searchForward = true)` | method |
| `TValue>>FindAll` | `public MBList<KeyValuePair<TKey, TValue>>FindAll(Predicate<KeyValuePair<TKey, TValue>>predicate)` | method |
| `Add` | `public void Add(TKey key, TValue value)` | method |
| `AddRange` | `public void AddRange(IEnumerable<KeyValuePair<TKey, TValue>>items)` | method |
| `Remove` | `public bool Remove(TKey key, TValue value)` | method |
| `Remove` | `public bool Remove(TKey key)` | method |
| `RemoveAll` | `public int RemoveAll(Predicate<KeyValuePair<TKey, TValue>>predicate)` | method |
| `RemoveAt` | `public void RemoveAt(int index)` | method |
| `RemoveLast` | `public void RemoveLast()` | method |
| `Clear` | `public void Clear()` | method |
| `SetCustomComparer` | `public void SetCustomComparer(IComparer<TKey>customComparer)` | method |
| `SetDefaultComparer` | `public void SetDefaultComparer(bool isAscending = true)` | method |
| `Reverse` | `public void Reverse()` | method |
| `ToString` | `public override string ToString()` | method |
| `IEnumerator` | `public IEnumerator<TValue>GetEnumerator()` | method |
| `ComparerType` | `public enum ComparerType` | property |
| `ComparerType` | `public enum ComparerType` | nested type |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMBCollection](../IMBCollection)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
