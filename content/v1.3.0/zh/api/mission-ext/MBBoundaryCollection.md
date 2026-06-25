---
title: "MBBoundaryCollection"
description: "MBBoundaryCollection 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 「enumerator」 的结果。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.GetEnumerator();
```

### GetBoundaryRadius
`public float GetBoundaryRadius(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「boundary radius」 的结果。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.GetBoundaryRadius("example");
```

### GetOrientedBoundariesBox
`public void GetOrientedBoundariesBox(out Vec2 boxMinimum, out Vec2 boxMaximum, float rotationInRadians = 0f)`

**用途 / Purpose:** 读取并返回当前对象中 「oriented boundaries box」 的结果。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.GetOrientedBoundariesBox(boxMinimum, boxMaximum, 0);
```

### Add
`public void Add(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.Add(keyValuePair<string, item);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.Clear();
```

### Contains
`public bool Contains(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 判断当前对象是否包含指定项。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.Contains(keyValuePair<string, item);
```

### CopyTo
`public void CopyTo(KeyValuePair<string, ICollection<Vec2>> array, int arrayIndex)`

**用途 / Purpose:** 把当前对象的「to」状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.CopyTo(keyValuePair<string, array, 0);
```

### Remove
`public bool Remove(KeyValuePair<string, ICollection<Vec2>> item)`

**用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.Remove(keyValuePair<string, item);
```

### Add
`public void Add(string name, ICollection<Vec2> points)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.Add("example", points);
```

### Add
`public void Add(string name, ICollection<Vec2> points, bool isAllowanceInside)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.Add("example", points, false);
```

### ContainsKey
`public bool ContainsKey(string name)`

**用途 / Purpose:** 判断当前对象是否包含「key」。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.ContainsKey("example");
```

### Remove
`public bool Remove(string name)`

**用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.Remove("example");
```

### TryGetValue
`public bool TryGetValue(string name, out ICollection<Vec2> points)`

**用途 / Purpose:** 尝试获取 「get value」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MBBoundaryCollection 实例
MBBoundaryCollection mBBoundaryCollection = ...;
var result = mBBoundaryCollection.TryGetValue("example", points);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBBoundaryCollection mBBoundaryCollection = ...;
mBBoundaryCollection.GetEnumerator();
```

## 参见

- [本区域目录](../)