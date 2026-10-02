---
title: "MBSortedMultiList"
description: "MBSortedMultiList 的自动生成类参考。"
---
# MBSortedMultiList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBSortedMultiList<TKey,TValue> : IReadOnlyList<TValue>,IEnumerable<TValue>,IEnumerable,IReadOnlyCollection<TValue>,IMBCollection where TKey : IComparable<TKey> `
**Base:** IReadOnlyList<TValue>,IEnumerable<TValue>,IEnumerable,IReadOnlyCollection<TValue>,IMBCollection
**Source:** TaleWorlds.Library/MBSortedMultiList.cs

## 概述

`MBSortedMultiList` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/MBSortedMultiList.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Contains
`public bool Contains(TKey key) `
`public bool Contains(TKey key,TValue value) `

### Get
`public KeyValuePair<TKey,TValue> Get(int index) `

### FirstIndexOf
`public int FirstIndexOf(TKey key) `
`public int FirstIndexOf(TKey key,TValue value) `

### LastIndexOf
`public int LastIndexOf(TKey key) `
`public int LastIndexOf(TKey key,TValue value) `

### All
`public bool All(Predicate<KeyValuePair<TKey,TValue>> predicate) `

### Any
`public bool Any(Predicate<KeyValuePair<TKey,TValue>> predicate) `

### GetValues
`public IEnumerator<TValue> GetValues(TKey key) `

### Find
`public bool Find(Predicate<KeyValuePair<TKey,TValue>> predicate,out KeyValuePair<TKey,TValue> found,bool searchForward = true) `

### FindIndex
`public int FindIndex(Predicate<KeyValuePair<TKey,TValue>> predicate,bool searchForward = true) `

### FindAll
`public MBList<KeyValuePair<TKey,TValue>> FindAll(Predicate<KeyValuePair<TKey,TValue>> predicate) `

### Add
`public void Add(TKey key,TValue value) `

### AddRange
`public void AddRange(IEnumerable<KeyValuePair<TKey,TValue>> items) `

### Remove
`public bool Remove(TKey key,TValue value) `
`public bool Remove(TKey key) `

### RemoveAll
`public int RemoveAll(Predicate<KeyValuePair<TKey,TValue>> predicate) `

### RemoveAt
`public void RemoveAt(int index) `

### RemoveLast
`public void RemoveLast() `

### Clear
`public void Clear() `

### SetCustomComparer
`public void SetCustomComparer(IComparer<TKey> customComparer) `

### SetDefaultComparer
`public void SetDefaultComparer(bool isAscending = true) `

### Reverse
`public void Reverse() `

### ToString
`public override string ToString() `

### GetEnumerator
`public IEnumerator<TValue> GetEnumerator() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
