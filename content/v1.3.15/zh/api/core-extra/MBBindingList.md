---
title: "MBBindingList"
description: "MBBindingList 的自动生成类参考。"
---
# MBBindingList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBBindingList<T> : Collection<T>, IMBBindingList, IList, ICollection, IEnumerable`
**Base:** `Collection<T>`
**File:** `TaleWorlds.Library/MBBindingList.cs`

## 概述

`MBBindingList` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ListChanged` | `public event ListChangedEventHandler ListChanged { get; }` |

## 主要方法

### Sort
`public void Sort()`

**用途 / Purpose:** **用途 / Purpose:** 对当前对象中的内容进行排序。

```csharp
// 先通过子系统 API 拿到 MBBindingList 实例
MBBindingList mBBindingList = ...;
mBBindingList.Sort();
```

### Sort
`public void Sort(IComparer<T> comparer)`

**用途 / Purpose:** **用途 / Purpose:** 对当前对象中的内容进行排序。

```csharp
// 先通过子系统 API 拿到 MBBindingList 实例
MBBindingList mBBindingList = ...;
mBBindingList.Sort(comparer);
```

### IsOrdered
`public bool IsOrdered(IComparer<T> comparer)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 ordered 状态或条件。

```csharp
// 先通过子系统 API 拿到 MBBindingList 实例
MBBindingList mBBindingList = ...;
var result = mBBindingList.IsOrdered(comparer);
```

### ApplyActionOnAllItems
`public void ApplyActionOnAllItems(Action<T> action)`

**用途 / Purpose:** **用途 / Purpose:** 将 action on all items 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MBBindingList 实例
MBBindingList mBBindingList = ...;
mBBindingList.ApplyActionOnAllItems(action);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBBindingList mBBindingList = ...;
mBBindingList.Sort();
```

## 参见

- [本区域目录](../)