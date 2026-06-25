---
title: "MBArrayList"
description: "MBArrayList 的自动生成类参考。"
---
# MBArrayList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBArrayList<T> : IMBCollection, ICollection, IEnumerable, IEnumerable<T>`
**Base:** `IMBCollection`
**File:** `TaleWorlds.Library/MBArrayList.cs`

## 概述

`MBArrayList` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `Capacity` | `public int Capacity { get; }` |
| `RawArray` | `public T RawArray { get; set; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; set; }` |
| `SyncRoot` | `public object SyncRoot { get; set; }` |
| `this` | `public T this { get; set; }` |

## 主要方法

### IndexOf
`public int IndexOf(T item)`

**用途 / Purpose:** 查找指定内容在当前对象中的位置索引。

```csharp
// 先通过子系统 API 拿到 MBArrayList 实例
MBArrayList mBArrayList = ...;
var result = mBArrayList.IndexOf(item);
```

### Contains
`public bool Contains(T item)`

**用途 / Purpose:** 判断当前对象是否包含指定项。

```csharp
// 先通过子系统 API 拿到 MBArrayList 实例
MBArrayList mBArrayList = ...;
var result = mBArrayList.Contains(item);
```

### GetEnumerator
`public IEnumerator<T> GetEnumerator()`

**用途 / Purpose:** 读取并返回当前对象中 「enumerator」 的结果。

```csharp
// 先通过子系统 API 拿到 MBArrayList 实例
MBArrayList mBArrayList = ...;
var result = mBArrayList.GetEnumerator();
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 MBArrayList 实例
MBArrayList mBArrayList = ...;
mBArrayList.Clear();
```

### Add
`public void Add(T item)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 MBArrayList 实例
MBArrayList mBArrayList = ...;
mBArrayList.Add(item);
```

### AddRange
`public void AddRange(IEnumerable<T> list)`

**用途 / Purpose:** 将 「range」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBArrayList 实例
MBArrayList mBArrayList = ...;
mBArrayList.AddRange(list);
```

### Remove
`public bool Remove(T item)`

**用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 MBArrayList 实例
MBArrayList mBArrayList = ...;
var result = mBArrayList.Remove(item);
```

### CopyTo
`public void CopyTo(Array array, int index)`

**用途 / Purpose:** 把当前对象的「to」状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 MBArrayList 实例
MBArrayList mBArrayList = ...;
mBArrayList.CopyTo(array, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBArrayList mBArrayList = ...;
mBArrayList.IndexOf(item);
```

## 参见

- [本区域目录](../)