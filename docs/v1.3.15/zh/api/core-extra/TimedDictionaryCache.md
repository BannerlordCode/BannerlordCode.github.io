<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TimedDictionaryCache`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TimedDictionaryCache

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TimedDictionaryCache<TKey, TValue>`
**Base:** 无
**File:** `TaleWorlds.Library/TimedDictionaryCache.cs`

## 概述

> TODO: 从开发者角度补充本类的职责与典型用例。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public TValue this { get; set; }` |

## 主要方法

### PruneExpiredItems
```csharp
public void PruneExpiredItems()
```

### Clear
```csharp
public void Clear()
```

### ContainsKey
```csharp
public bool ContainsKey(TKey key)
```

### Remove
```csharp
public bool Remove(TKey key)
```

### TryGetValue
```csharp
public bool TryGetValue(TKey key, out TValue value)
```

### AsReadOnlyDictionary
```csharp
public MBReadOnlyDictionary<TKey, TValue> AsReadOnlyDictionary()
```

## 使用示例

```csharp
// TODO: 补充典型用例
```

## 参见

- [完整类目录](../catalog)