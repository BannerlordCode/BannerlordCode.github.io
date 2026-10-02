---
title: "MBList2D<T>"
description: "MBList2D<T>：TaleWorlds.Library 的 public 类，继承 IMBCollection；公开成员 9 个（方法 5、属性 3、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/MBList2D.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBList2D<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBList2D<T>: IMBCollection`
**File:** `TaleWorlds.Library/MBList2D.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

MBList2D<T> 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/MBList2D.cs。它是一个 public 类，实现/继承 IMBCollection，继承链为 MBList2D → IMBCollection。public/protected 成员共 9 个：5 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBList2D<T> 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 MBList2D → IMBCollection。成员构成以方法为主（方法 5/9，属性 3/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/MBList2D.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Count1` | `public int Count1` | 属性 |
| `Count2` | `public int Count2` | 属性 |
| `MBList2D` | `public MBList2D(int count1, int count2)` | 构造函数 |
| `T[]RawArray` | `public T[]RawArray` | 属性 |
| `this[...]` | `public T this[int index1, int index2]` | 索引器 |
| `Contains` | `public bool Contains(T item)` | 方法 |
| `Clear` | `public void Clear()` | 方法 |
| `ResetWithNewCount` | `public void ResetWithNewCount(int newCount1, int newCount2)` | 方法 |
| `CopyRowTo` | `public void CopyRowTo(int sourceIndex1, int sourceIndex2, MBList2D<T>destination, int destinationIndex1, int destinationIndex2, int copyCount)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IMBCollection](../IMBCollection/)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
