---
title: "MBBindingList<T>"
description: "MBBindingList<T>：TaleWorlds.Library 的 public 类，继承 Collection<T>、IMBBindingList；公开成员 11 个（方法 9、属性 0、字段 0）。源文件 TaleWorlds.Library/MBBindingList.cs。"
---
# MBBindingList<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBBindingList<T>: Collection<T>, IMBBindingList, IList, ICollection, IEnumerable`
**File:** `TaleWorlds.Library/MBBindingList.cs`

## 概述

MBBindingList<T> 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/MBBindingList.cs。它是一个 public 类，实现/继承 Collection<T>、IMBBindingList、IList、ICollection、IEnumerable，继承链为 MBBindingList → Collection。public/protected 成员共 11 个：9 方法、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBBindingList<T> 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 MBBindingList → Collection。成员构成以方法为主（方法 9/11，属性 0/11），对外主要以操作入口暴露。继承链上的 Collection 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/MBBindingList.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBBindingList` | `public MBBindingList() : base(new List<T>(64))` | 构造函数 |
| `ListChanged` | `public event ListChangedEventHandler ListChanged` | 事件 |
| `ClearItems` | `protected override void ClearItems()` | 方法 |
| `InsertItem` | `protected override void InsertItem(int index, T item)` | 方法 |
| `RemoveItem` | `protected override void RemoveItem(int index)` | 方法 |
| `SetItem` | `protected override void SetItem(int index, T item)` | 方法 |
| `OnListChanged` | `protected virtual void OnListChanged(ListChangedEventArgs e)` | 方法 |
| `Sort` | `public void Sort()` | 方法 |
| `Sort` | `public void Sort(IComparer<T>comparer)` | 方法 |
| `IsOrdered` | `public bool IsOrdered(IComparer<T>comparer)` | 方法 |
| `ApplyActionOnAllItems` | `public void ApplyActionOnAllItems(Action<T>action)` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IMBBindingList](../IMBBindingList)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
