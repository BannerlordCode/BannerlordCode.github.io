<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBSortedMultiList`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBSortedMultiList

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MBSortedMultiList` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public bool Contains(TKey key)
```

### Contains

```csharp
public bool Contains(TKey key, TValue value)
```

### Get

```csharp
public KeyValuePair<TKey, TValue> Get(int index)
```

### FirstIndexOf

```csharp
public int FirstIndexOf(TKey key)
```

### FirstIndexOf

```csharp
public int FirstIndexOf(TKey key, TValue value)
```

### LastIndexOf

```csharp
public int LastIndexOf(TKey key)
```

### LastIndexOf

```csharp
public int LastIndexOf(TKey key, TValue value)
```

### All

```csharp
public bool All(Predicate<KeyValuePair<TKey, TValue>> predicate)
```

### Any

```csharp
public bool Any(Predicate<KeyValuePair<TKey, TValue>> predicate)
```

### GetValues

```csharp
public IEnumerator<TValue> GetValues(TKey key)
```

### Find

```csharp
public bool Find(Predicate<KeyValuePair<TKey, TValue>> predicate, out KeyValuePair<TKey, TValue> found, bool searchForward = true)
```

### FindIndex

```csharp
public int FindIndex(Predicate<KeyValuePair<TKey, TValue>> predicate, bool searchForward = true)
```

### FindAll

```csharp
public MBList<KeyValuePair<TKey, TValue>> FindAll(Predicate<KeyValuePair<TKey, TValue>> predicate)
```

### Add

```csharp
public void Add(TKey key, TValue value)
```

### AddRange

```csharp
public void AddRange(IEnumerable<KeyValuePair<TKey, TValue>> items)
```

### Remove

```csharp
public bool Remove(TKey key, TValue value)
```

### Remove

```csharp
public bool Remove(TKey key)
```

### RemoveAll

```csharp
public int RemoveAll(Predicate<KeyValuePair<TKey, TValue>> predicate)
```

### RemoveAt

```csharp
public void RemoveAt(int index)
```

### RemoveLast

```csharp
public void RemoveLast()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)