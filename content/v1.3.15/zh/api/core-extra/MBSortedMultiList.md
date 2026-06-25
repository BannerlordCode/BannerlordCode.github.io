---
title: "MBSortedMultiList"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSortedMultiList`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSortedMultiList

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBSortedMultiList<TKey, TValue> : IReadOnlyList<TValue>, IEnumerable<TValue>, IEnumerable, IReadOnlyCollection<TValue>, IMBCollection where TKey : IComparable<TKey>`
**Base:** `IReadOnlyList<TValue>`
**File:** `TaleWorlds.Library/MBSortedMultiList.cs`

## 概述

`MBSortedMultiList` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Comparer` | `public MBSortedMultiList<TKey, TValue>.ComparerType Comparer { get; }` |
| `Count` | `public int Count { get; }` |
| `this` | `public TValue this { get; }` |
| `FirstValue` | `public TValue FirstValue { get; }` |
| `LastValue` | `public TValue LastValue { get; }` |
| `Current` | `public TValue Current { get; }` |
| `Current` | `public TValue Current { get; }` |

## 主要方法

### Contains
`public bool Contains(TKey key)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### Contains
`public bool Contains(TKey key, TValue value)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### Get
`public KeyValuePair<TKey, TValue> Get(int index)`

**用途 / Purpose:** 获取 `get` 的当前值。

### FirstIndexOf
`public int FirstIndexOf(TKey key)`

**用途 / Purpose:** 处理 `first index of` 相关逻辑。

### FirstIndexOf
`public int FirstIndexOf(TKey key, TValue value)`

**用途 / Purpose:** 处理 `first index of` 相关逻辑。

### LastIndexOf
`public int LastIndexOf(TKey key)`

**用途 / Purpose:** 处理 `last index of` 相关逻辑。

### LastIndexOf
`public int LastIndexOf(TKey key, TValue value)`

**用途 / Purpose:** 处理 `last index of` 相关逻辑。

### All
`public bool All(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**用途 / Purpose:** 处理 `all` 相关逻辑。

### Any
`public bool Any(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**用途 / Purpose:** 处理 `any` 相关逻辑。

### GetValues
`public IEnumerator<TValue> GetValues(TKey key)`

**用途 / Purpose:** 获取 `values` 的当前值。

### Find
`public bool Find(Predicate<KeyValuePair<TKey, TValue>> predicate, out KeyValuePair<TKey, TValue> found, bool searchForward = true)`

**用途 / Purpose:** 处理 `find` 相关逻辑。

### FindIndex
`public int FindIndex(Predicate<KeyValuePair<TKey, TValue>> predicate, bool searchForward = true)`

**用途 / Purpose:** 处理 `find index` 相关逻辑。

### FindAll
`public MBList<KeyValuePair<TKey, TValue>> FindAll(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**用途 / Purpose:** 处理 `find all` 相关逻辑。

### Add
`public void Add(TKey key, TValue value)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### AddRange
`public void AddRange(IEnumerable<KeyValuePair<TKey, TValue>> items)`

**用途 / Purpose:** 向当前集合/状态中添加 `range`。

### Remove
`public bool Remove(TKey key, TValue value)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### Remove
`public bool Remove(TKey key)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### RemoveAll
`public int RemoveAll(Predicate<KeyValuePair<TKey, TValue>> predicate)`

**用途 / Purpose:** 从当前集合/状态中移除 `all`。

### RemoveAt
`public void RemoveAt(int index)`

**用途 / Purpose:** 从当前集合/状态中移除 `at`。

### RemoveLast
`public void RemoveLast()`

**用途 / Purpose:** 从当前集合/状态中移除 `last`。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### SetCustomComparer
`public void SetCustomComparer(IComparer<TKey> customComparer)`

**用途 / Purpose:** 设置 `custom comparer` 的值或状态。

### SetDefaultComparer
`public void SetDefaultComparer(bool isAscending = true)`

**用途 / Purpose:** 设置 `default comparer` 的值或状态。

### Reverse
`public void Reverse()`

**用途 / Purpose:** 处理 `reverse` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### GetEnumerator
`public IEnumerator<TValue> GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### MoveNext
`public bool MoveNext()`

**用途 / Purpose:** 处理 `move next` 相关逻辑。

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### MoveNext
`public bool MoveNext()`

**用途 / Purpose:** 处理 `move next` 相关逻辑。

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

## 使用示例

```csharp
MBSortedMultiList example = MBSortedMultiList.Comparer;
```

## 参见

- [完整类目录](../catalog)