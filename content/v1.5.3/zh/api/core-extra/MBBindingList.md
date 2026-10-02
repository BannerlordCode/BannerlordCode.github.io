---
title: "MBBindingList"
description: "MBBindingList 的自动生成类参考。"
---
# MBBindingList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBBindingList<T> : Collection<T>,IMBBindingList,IList,ICollection,IEnumerable `
**Base:** Collection<T>,IMBBindingList,IList,ICollection,IEnumerable
**Source:** TaleWorlds.Library/MBBindingList.cs

## 概述

`MBBindingList` 的自动生成类参考页面。声明来自 `TaleWorlds.Library/MBBindingList.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### ClearItems
`protected override void ClearItems() `

### InsertItem
`protected override void InsertItem(int index,T item) `

### RemoveItem
`protected override void RemoveItem(int index) `

### SetItem
`protected override void SetItem(int index,T item) `

### OnListChanged
`protected virtual void OnListChanged(ListChangedEventArgs e) `

### Sort
`public void Sort() `
`public void Sort(IComparer<T> comparer) `

### IsOrdered
`public bool IsOrdered(IComparer<T> comparer) `

### ApplyActionOnAllItems
`public void ApplyActionOnAllItems(Action<T> action) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
