---
title: "MBSortedMultiList<TKey,TValue>"
description: "MBSortedMultiList<TKey,TValue>：TaleWorlds.Library 的 public 类，继承 IReadOnlyList<TValue>、IEnumerable<TValue>；公开成员 35 个（方法 27、属性 5、字段 0）。源文件 TaleWorlds.Library/MBSortedMultiList.cs。"
---
# MBSortedMultiList<TKey,TValue>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBSortedMultiList<TKey, TValue>: IReadOnlyList<TValue>, IEnumerable<TValue>, IEnumerable, IReadOnlyCollection<TValue>, IMBCollection where TKey : IComparable<TKey>`
**File:** `TaleWorlds.Library/MBSortedMultiList.cs`

## 概述

MBSortedMultiList<TKey,TValue> 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/MBSortedMultiList.cs。它是一个 public 类，实现/继承 IReadOnlyList<TValue>、IEnumerable<TValue>、IEnumerable、IReadOnlyCollection<TValue>、IMBCollection，继承链为 MBSortedMultiList → IReadOnlyList。public/protected 成员共 35 个：27 方法、5 属性、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBSortedMultiList<TKey,TValue> 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 MBSortedMultiList → IReadOnlyList。成员构成以方法为主（方法 27/35，属性 5/35），对外主要以操作入口暴露。继承链上的 IReadOnlyList 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/MBSortedMultiList.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Comparer` | `public MBSortedMultiList<TKey, TValue>.ComparerType Comparer` | 属性 |
| `Count` | `public int Count` | 属性 |
| `this[...]` | `public TValue this[int index]` | 索引器 |
| `FirstValue` | `public TValue FirstValue` | 属性 |
| `LastValue` | `public TValue LastValue` | 属性 |
| `MBSortedMultiList` | `public MBSortedMultiList(IComparer<TKey>customComparer)` | 构造函数 |
| `MBSortedMultiList` | `public MBSortedMultiList(bool isAscending = true)` | 构造函数 |
| `Contains` | `public bool Contains(TKey key)` | 方法 |
| `Contains` | `public bool Contains(TKey key, TValue value)` | 方法 |
| `TValue>Get` | `public KeyValuePair<TKey, TValue>Get(int index)` | 方法 |
| `FirstIndexOf` | `public int FirstIndexOf(TKey key)` | 方法 |
| `FirstIndexOf` | `public int FirstIndexOf(TKey key, TValue value)` | 方法 |
| `LastIndexOf` | `public int LastIndexOf(TKey key)` | 方法 |
| `LastIndexOf` | `public int LastIndexOf(TKey key, TValue value)` | 方法 |
| `All` | `public bool All(Predicate<KeyValuePair<TKey, TValue>>predicate)` | 方法 |
| `Any` | `public bool Any(Predicate<KeyValuePair<TKey, TValue>>predicate)` | 方法 |
| `IEnumerator` | `public IEnumerator<TValue>GetValues(TKey key)` | 方法 |
| `Find` | `public bool Find(Predicate<KeyValuePair<TKey, TValue>>predicate, out KeyValuePair<TKey, TValue>found, bool searchForward = true)` | 方法 |
| `FindIndex` | `public int FindIndex(Predicate<KeyValuePair<TKey, TValue>>predicate, bool searchForward = true)` | 方法 |
| `TValue>>FindAll` | `public MBList<KeyValuePair<TKey, TValue>>FindAll(Predicate<KeyValuePair<TKey, TValue>>predicate)` | 方法 |
| `Add` | `public void Add(TKey key, TValue value)` | 方法 |
| `AddRange` | `public void AddRange(IEnumerable<KeyValuePair<TKey, TValue>>items)` | 方法 |
| `Remove` | `public bool Remove(TKey key, TValue value)` | 方法 |
| `Remove` | `public bool Remove(TKey key)` | 方法 |
| `RemoveAll` | `public int RemoveAll(Predicate<KeyValuePair<TKey, TValue>>predicate)` | 方法 |
| `RemoveAt` | `public void RemoveAt(int index)` | 方法 |
| `RemoveLast` | `public void RemoveLast()` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `SetCustomComparer` | `public void SetCustomComparer(IComparer<TKey>customComparer)` | 方法 |
| `SetDefaultComparer` | `public void SetDefaultComparer(bool isAscending = true)` | 方法 |
| `Reverse` | `public void Reverse()` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `IEnumerator` | `public IEnumerator<TValue>GetEnumerator()` | 方法 |
| `ComparerType` | `public enum ComparerType` | 属性 |
| `ComparerType` | `public enum ComparerType` | 嵌套类型 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IMBCollection](../IMBCollection)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
