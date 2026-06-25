---
title: "MBReadOnlyDictionary"
description: "MBReadOnlyDictionary 的自动生成类参考。"
---
# MBReadOnlyDictionary

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBReadOnlyDictionary<TKey, TValue> : ICollection, IEnumerable, IReadOnlyDictionary<TKey, TValue>, IEnumerable<KeyValuePair<TKey, TValue>>, IReadOnlyCollection<KeyValuePair<TKey, TValue>>`
**Base:** `ICollection`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBReadOnlyDictionary.cs`

## 概述

`MBReadOnlyDictionary` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetEnumerator
`public Dictionary<TKey, TValue>.Enumerator GetEnumerator()`

**用途 / Purpose:** 读取并返回当前对象中 「enumerator」 的结果。

```csharp
// 先通过子系统 API 拿到 MBReadOnlyDictionary 实例
MBReadOnlyDictionary mBReadOnlyDictionary = ...;
var result = mBReadOnlyDictionary.GetEnumerator();
```

### ContainsKey
`public bool ContainsKey(TKey key)`

**用途 / Purpose:** 判断当前对象是否包含「key」。

```csharp
// 先通过子系统 API 拿到 MBReadOnlyDictionary 实例
MBReadOnlyDictionary mBReadOnlyDictionary = ...;
var result = mBReadOnlyDictionary.ContainsKey(key);
```

### TryGetValue
`public bool TryGetValue(TKey key, out TValue value)`

**用途 / Purpose:** 尝试获取 「get value」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MBReadOnlyDictionary 实例
MBReadOnlyDictionary mBReadOnlyDictionary = ...;
var result = mBReadOnlyDictionary.TryGetValue(key, value);
```

### CopyTo
`public void CopyTo(Array array, int index)`

**用途 / Purpose:** 把当前对象的「to」状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 MBReadOnlyDictionary 实例
MBReadOnlyDictionary mBReadOnlyDictionary = ...;
mBReadOnlyDictionary.CopyTo(array, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBReadOnlyDictionary mBReadOnlyDictionary = ...;
mBReadOnlyDictionary.GetEnumerator();
```

## 参见

- [本区域目录](../)