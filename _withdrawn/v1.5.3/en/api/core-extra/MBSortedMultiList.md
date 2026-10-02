---
title: "MBSortedMultiList"
description: "Auto-generated class reference for MBSortedMultiList."
---
# MBSortedMultiList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBSortedMultiList<TKey,TValue> : IReadOnlyList<TValue>,IEnumerable<TValue>,IEnumerable,IReadOnlyCollection<TValue>,IMBCollection where TKey : IComparable<TKey> `
**Base:** IReadOnlyList<TValue>, IEnumerable<TValue>, IEnumerable, IReadOnlyCollection<TValue>, IMBCollection
**Source:** TaleWorlds.Library/MBSortedMultiList.cs

## Overview

Auto-generated stub for `MBSortedMultiList`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Contains
`public bool Contains(TKey key)`

### Get
`public KeyValuePair<TKey,TValue> Get(int index)`

### FirstIndexOf
`public int FirstIndexOf(TKey key)`

### LastIndexOf
`public int LastIndexOf(TKey key)`

### All
`public bool All(Predicate<KeyValuePair<TKey,TValue>> predicate)`

### Any
`public bool Any(Predicate<KeyValuePair<TKey,TValue>> predicate)`

### GetValues
`public IEnumerator<TValue> GetValues(TKey key)`

### Find
`public bool Find(Predicate<KeyValuePair<TKey,TValue>> predicate,out KeyValuePair<TKey,TValue> found,bool searchForward = true)`

### FindIndex
`public int FindIndex(Predicate<KeyValuePair<TKey,TValue>> predicate,bool searchForward = true)`

### FindAll
`public MBList<KeyValuePair<TKey,TValue>> FindAll(Predicate<KeyValuePair<TKey,TValue>> predicate)`

### Add
`public void Add(TKey key,TValue value)`

### AddRange
`public void AddRange(IEnumerable<KeyValuePair<TKey,TValue>> items)`

### Remove
`public bool Remove(TKey key,TValue value)`

### RemoveAll
`public int RemoveAll(Predicate<KeyValuePair<TKey,TValue>> predicate)`

### RemoveAt
`public void RemoveAt(int index)`

### RemoveLast
`public void RemoveLast()`

### Clear
`public void Clear()`

### SetCustomComparer
`public void SetCustomComparer(IComparer<TKey> customComparer)`

### SetDefaultComparer
`public void SetDefaultComparer(bool isAscending = true)`

### Reverse
`public void Reverse()`

### ToString
`public override string ToString()`

### GetEnumerator
`public IEnumerator<TValue> GetEnumerator()`

## See Also

- [Section index](../)
