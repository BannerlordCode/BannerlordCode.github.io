<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBReadOnlyDictionary`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBReadOnlyDictionary

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MBReadOnlyDictionary` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public Dictionary<TKey, TValue>.Enumerator GetEnumerator()
```

### ContainsKey

```csharp
public bool ContainsKey(TKey key)
```

### TryGetValue

```csharp
public bool TryGetValue(TKey key, out TValue value)
```

### CopyTo

```csharp
public void CopyTo(Array array, int index)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)