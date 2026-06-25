---
title: "MBBoundaryCollection"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBBoundaryCollection`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBBoundaryCollection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBBoundaryCollection : IDictionary<string, ICollection<Vec2>>, ICollection<KeyValuePair<string, ICollection<Vec2>>>, IEnumerable<KeyValuePair<string, ICollection<Vec2>>>, IEnumerable, INotifyCollectionChanged`
**Base:** `IDictionary<string`
**File:** `TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`MBBoundaryCollection` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `IsReadOnly` | `public bool IsReadOnly { get; }` |
| `Keys` | `public ICollection<string> Keys { get; }` |
| `Values` | `public ICollection<ICollection<Vec2>> Values { get; }` |
| `this` | `public ICollection<Vec2> this { get; }` |

## 主要方法

### GetEnumerator
`public IEnumerator<KeyValuePair<string, ICollection<Vec2>>> GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### GetBoundaryRadius
`public float GetBoundaryRadius(string name)`

**用途 / Purpose:** 获取 `boundary radius` 的当前值。

### GetOrientedBoundariesBox
`public void GetOrientedBoundariesBox(out Vec2 boxMinimum, out Vec2 boxMaximum, float rotationInRadians = 0f)`

**用途 / Purpose:** 获取 `oriented boundaries box` 的当前值。

### Add
`public void Add(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### Contains
`public bool Contains(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### CopyTo
`public void CopyTo(KeyValuePair<string, ICollection<Vec2>> array, int arrayIndex)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### Remove
`public bool Remove(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### Add
`public void Add(string name, ICollection<Vec2> points)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Add
`public void Add(string name, ICollection<Vec2> points, bool isAllowanceInside)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### ContainsKey
`public bool ContainsKey(string name)`

**用途 / Purpose:** 处理 `contains key` 相关逻辑。

### Remove
`public bool Remove(string name)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### TryGetValue
`public bool TryGetValue(string name, out ICollection<Vec2> points)`

**用途 / Purpose:** 尝试获取 `get value`，通常以 out 参数返回结果。

## 使用示例

```csharp
MBBoundaryCollection example = MBBoundaryCollection.Count;
```

## 参见

- [完整类目录](../catalog)