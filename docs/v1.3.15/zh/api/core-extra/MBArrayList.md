<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBArrayList`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBArrayList

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MBArrayList` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public int IndexOf(T item)
```

### Contains

```csharp
public bool Contains(T item)
```

### GetEnumerator

```csharp
public IEnumerator<T> GetEnumerator()
```

### Clear

```csharp
public void Clear()
```

### Add

```csharp
public void Add(T item)
```

### AddRange

```csharp
public void AddRange(IEnumerable<T> list)
```

### Remove

```csharp
public bool Remove(T item)
```

### CopyTo

```csharp
public void CopyTo(Array array, int index)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)