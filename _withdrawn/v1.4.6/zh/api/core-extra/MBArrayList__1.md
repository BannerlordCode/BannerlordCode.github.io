---
title: "MBArrayList<T>"
description: "MBArrayList<T>：TaleWorlds.Library 的 public 类，继承 IMBCollection、ICollection；公开成员 17 个（方法 9、属性 5、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/MBArrayList.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBArrayList<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBArrayList<T>: IMBCollection, ICollection, IEnumerable, IEnumerable<T>`
**File:** `TaleWorlds.Library/MBArrayList.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

MBArrayList<T> 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/MBArrayList.cs。它是一个 public 类，实现/继承 IMBCollection、ICollection、IEnumerable、IEnumerable<T>，继承链为 MBArrayList → IMBCollection。public/protected 成员共 17 个：9 方法、5 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBArrayList<T> 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 MBArrayList → IMBCollection。成员构成以方法为主（方法 9/17，属性 5/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/MBArrayList.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Count` | `public int Count` | 属性 |
| `Capacity` | `public int Capacity` | 属性 |
| `MBArrayList` | `public MBArrayList()` | 构造函数 |
| `MBArrayList` | `public MBArrayList(List<T>list)` | 构造函数 |
| `MBArrayList` | `public MBArrayList(IEnumerable<T>list)` | 构造函数 |
| `T[]RawArray` | `public T[]RawArray` | 属性 |
| `IsSynchronized` | `public bool IsSynchronized` | 属性 |
| `SyncRoot` | `public object SyncRoot` | 属性 |
| `this[...]` | `public T this[int index]` | 索引器 |
| `IndexOf` | `public int IndexOf(T item)` | 方法 |
| `Contains` | `public bool Contains(T item)` | 方法 |
| `IEnumerator` | `public IEnumerator<T>GetEnumerator()` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `Add` | `public void Add(T item)` | 方法 |
| `AddRange` | `public void AddRange(IEnumerable<T>list)` | 方法 |
| `Remove` | `public bool Remove(T item)` | 方法 |
| `CopyTo` | `public void CopyTo(Array array, int index)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IMBCollection](../IMBCollection/)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
