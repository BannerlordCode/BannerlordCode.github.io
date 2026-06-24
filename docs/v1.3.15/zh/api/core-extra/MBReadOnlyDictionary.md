<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBReadOnlyDictionary`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBReadOnlyDictionary

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBReadOnlyDictionary<TKey, TValue> : ICollection, IEnumerable, IReadOnlyDictionary<TKey, TValue>, IEnumerable<KeyValuePair<TKey, TValue>>, IReadOnlyCollection<KeyValuePair<TKey, TValue>>`
**Base:** `ICollection`
**File:** `TaleWorlds.Library/MBReadOnlyDictionary.cs`

## 概述

`MBReadOnlyDictionary` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; }` |
| `SyncRoot` | `public object SyncRoot { get; }` |
| `this` | `public TValue this { get; }` |
| `Keys` | `public IEnumerable<TKey> Keys { get; }` |
| `Values` | `public IEnumerable<TValue> Values { get; }` |

## 主要方法

### GetEnumerator
`public Dictionary<TKey, TValue>.Enumerator GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### ContainsKey
`public bool ContainsKey(TKey key)`

**用途 / Purpose:** 处理 `contains key` 相关逻辑。

### TryGetValue
`public bool TryGetValue(TKey key, out TValue value)`

**用途 / Purpose:** 尝试获取 `get value`，通常以 out 参数返回结果。

### CopyTo
`public void CopyTo(Array array, int index)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

## 使用示例

```csharp
MBReadOnlyDictionary example = MBReadOnlyDictionary.Count;
```

## 参见

- [完整类目录](../catalog)