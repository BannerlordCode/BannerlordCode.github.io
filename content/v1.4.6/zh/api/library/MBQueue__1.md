---
title: "MBQueue<T>"
description: "MBQueue<T>：TaleWorlds.Library 的 public 类，继承 MBReadOnlyQueue<T>、IMBCollection；公开成员 5 个（方法 1、属性 0、字段 0）。源文件 TaleWorlds.Library/MBQueue.cs。"
---
# MBQueue<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBQueue<T>: MBReadOnlyQueue<T>, IMBCollection`
**File:** `TaleWorlds.Library/MBQueue.cs`

## 概述

MBQueue<T> 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/MBQueue.cs。它是一个 public 类，实现/继承 MBReadOnlyQueue<T>、IMBCollection，继承链为 MBQueue → MBReadOnlyQueue → Queue。public/protected 成员共 5 个：1 方法、4 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBQueue<T> 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 MBQueue → MBReadOnlyQueue → Queue。成员构成以方法为主（方法 1/5，属性 0/5），对外主要以操作入口暴露。继承链上的 Queue 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/MBQueue.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBQueue` | `public MBQueue()` | 构造函数 |
| `MBQueue` | `public MBQueue(int capacity) : base(capacity)` | 构造函数 |
| `MBQueue` | `public MBQueue(Queue<T>queue) : base(queue)` | 构造函数 |
| `MBQueue` | `public MBQueue(IEnumerable<T>collection) : base(collection)` | 构造函数 |
| `Remove` | `public bool Remove(T item)` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MBReadOnlyQueue](../MBReadOnlyQueue__1)
- [基类/接口 IMBCollection](../IMBCollection)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
