---
title: "MBReadOnlyDictionary<TKey,TValue>"
description: "MBReadOnlyDictionary<TKey,TValue>：TaleWorlds.Library 的 public 类，继承 ICollection、IEnumerable；公开成员 11 个（方法 5、属性 5、字段 0）。源文件 TaleWorlds.Library/MBReadOnlyDictionary.cs。"
---
# MBReadOnlyDictionary<TKey,TValue>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBReadOnlyDictionary<TKey, TValue>: ICollection, IEnumerable, IReadOnlyDictionary<TKey, TValue>, IEnumerable<KeyValuePair<TKey, TValue>>, IReadOnlyCollection<KeyValuePair<TKey, TValue>>`
**File:** `TaleWorlds.Library/MBReadOnlyDictionary.cs`

## 概述

MBReadOnlyDictionary<TKey,TValue> 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/MBReadOnlyDictionary.cs。它是一个 public 类，实现/继承 ICollection、IEnumerable、IReadOnlyDictionary<TKey, TValue>、IEnumerable<KeyValuePair<TKey, TValue>>、IReadOnlyCollection<KeyValuePair<TKey, TValue>>，继承链为 MBReadOnlyDictionary → ICollection。public/protected 成员共 11 个：5 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBReadOnlyDictionary<TKey,TValue> 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 MBReadOnlyDictionary → ICollection。成员构成以方法为主（方法 5/11，属性 5/11），对外主要以操作入口暴露。继承链上的 ICollection 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/MBReadOnlyDictionary.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyDictionary` | `public MBReadOnlyDictionary(Dictionary<TKey, TValue>dictionary)` | 构造函数 |
| `Count` | `public int Count` | 属性 |
| `IsSynchronized` | `public bool IsSynchronized` | 属性 |
| `SyncRoot` | `public object SyncRoot` | 属性 |
| `GetEnumerator` | `public Dictionary<TKey, TValue>.Enumerator GetEnumerator()` | 方法 |
| `ContainsKey` | `public bool ContainsKey(TKey key)` | 方法 |
| `TryGetValue` | `public bool TryGetValue(TKey key, out TValue value)` | 方法 |
| `this[...]` | `public TValue this[TKey key]` | 索引器 |
| `IEnumerable` | `public IEnumerable<TKey>Keys` | 属性 |
| `IEnumerable` | `public IEnumerable<TValue>Values` | 属性 |
| `CopyTo` | `public void CopyTo(Array array, int index)` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
