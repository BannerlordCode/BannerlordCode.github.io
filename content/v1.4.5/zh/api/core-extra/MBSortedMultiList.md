---
title: "MBSortedMultiList"
description: "MBSortedMultiList 的自动生成类参考。"
---
# MBSortedMultiList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBSortedMultiList<TKey, TValue> : IReadOnlyList<TValue>, IEnumerable<TValue>, IEnumerable, IReadOnlyCollection<TValue>, IMBCollection where TKey : IComparable<TKey>`
**Base:** `IReadOnlyList<TValue>`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBSortedMultiList.cs`

## 概述

`MBSortedMultiList` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MoveNext
`public bool MoveNext()`

**用途 / Purpose:** **用途 / Purpose:** 移动next到新的位置或状态。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.MoveNext();
```

### Dispose
`public void Dispose()`

**用途 / Purpose:** **用途 / Purpose:** 释放当前对象占用的非托管资源。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Dispose();
```

### Reset
`public void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Reset();
```

### MoveNext
`public bool MoveNext()`

**用途 / Purpose:** **用途 / Purpose:** 移动next到新的位置或状态。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.MoveNext();
```

### Dispose
`public void Dispose()`

**用途 / Purpose:** **用途 / Purpose:** 释放当前对象占用的非托管资源。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Dispose();
```

### Reset
`public void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Reset();
```

### Contains
`public bool Contains(TKey key)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否包含指定项。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Contains(key);
```

### Contains
`public bool Contains(TKey key, TValue value)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否包含指定项。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Contains(key, value);
```

### Get
`public KeyValuePair<TKey, TValue> Get(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取当前对象的值或状态并返回。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Get(0);
```

### FirstIndexOf
`public int FirstIndexOf(TKey key)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FirstIndexOf 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.FirstIndexOf(key);
```

### FirstIndexOf
`public int FirstIndexOf(TKey key, TValue value)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FirstIndexOf 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.FirstIndexOf(key, value);
```

### LastIndexOf
`public int LastIndexOf(TKey key)`

**用途 / Purpose:** **用途 / Purpose:** 调用 LastIndexOf 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.LastIndexOf(key);
```

### LastIndexOf
`public int LastIndexOf(TKey key, TValue value)`

**用途 / Purpose:** **用途 / Purpose:** 调用 LastIndexOf 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.LastIndexOf(key, value);
```

### All
`public bool All(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**用途 / Purpose:** **用途 / Purpose:** 调用 All 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.All(predicate<KeyValuePair<TKey, predicate);
```

### Any
`public bool Any(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Any 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Any(predicate<KeyValuePair<TKey, predicate);
```

### GetValues
`public IEnumerator<TValue> GetValues(TKey key)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 values 的结果。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.GetValues(key);
```

### Find
`public bool Find(Predicate<KeyValuePair<TKey, TValue>> predicate, out KeyValuePair<TKey, TValue> found, bool searchForward = true)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找匹配项。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Find(predicate<KeyValuePair<TKey, predicate, keyValuePair<TKey, found, false);
```

### FindIndex
`public int FindIndex(Predicate<KeyValuePair<TKey, TValue>> predicate, bool searchForward = true)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的index。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.FindIndex(predicate<KeyValuePair<TKey, predicate, false);
```

### FindAll
`public MBList<KeyValuePair<TKey, TValue>> FindAll(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的all。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.FindAll(predicate<KeyValuePair<TKey, predicate);
```

### Add
`public void Add(TKey key, TValue value)`

**用途 / Purpose:** **用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Add(key, value);
```

### AddRange
`public void AddRange(IEnumerable<KeyValuePair<TKey, TValue>> items)`

**用途 / Purpose:** **用途 / Purpose:** 将 range 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.AddRange(iEnumerable<KeyValuePair<TKey, items);
```

### Remove
`public bool Remove(TKey key, TValue value)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Remove(key, value);
```

### Remove
`public bool Remove(TKey key)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.Remove(key);
```

### RemoveAll
`public int RemoveAll(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 all。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.RemoveAll(predicate<KeyValuePair<TKey, predicate);
```

### RemoveAt
`public void RemoveAt(int index)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 at。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.RemoveAt(0);
```

### RemoveLast
`public void RemoveLast()`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 last。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.RemoveLast();
```

### Clear
`public void Clear()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Clear();
```

### SetCustomComparer
`public void SetCustomComparer(IComparer<TKey> customComparer)`

**用途 / Purpose:** **用途 / Purpose:** 为 custom comparer 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.SetCustomComparer(customComparer);
```

### SetDefaultComparer
`public void SetDefaultComparer(bool isAscending = true)`

**用途 / Purpose:** **用途 / Purpose:** 为 default comparer 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.SetDefaultComparer(false);
```

### Reverse
`public void Reverse()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Reverse 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.Reverse();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.ToString();
```

### GetEnumerator
`public IEnumerator<TValue> GetEnumerator()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 enumerator 的结果。

```csharp
// 先通过子系统 API 拿到 MBSortedMultiList 实例
MBSortedMultiList mBSortedMultiList = ...;
var result = mBSortedMultiList.GetEnumerator();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBSortedMultiList mBSortedMultiList = ...;
mBSortedMultiList.MoveNext();
```

## 参见

- [本区域目录](../)