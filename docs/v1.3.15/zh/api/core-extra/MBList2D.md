<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBList2D`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBList2D

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`MBList2D` 是 `TaleWorlds.Library` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Count1` | `public int Count1 { get; }` |
| `Count2` | `public int Count2 { get; }` |
| `RawArray` | `public T RawArray { get; set; }` |
| `this` | `public T this { get; set; }` |


## 主要方法

### Contains

```csharp
public bool Contains(T item)
```

### Clear

```csharp
public void Clear()
```

### ResetWithNewCount

```csharp
public void ResetWithNewCount(int newCount1, int newCount2)
```

### CopyRowTo

```csharp
public void CopyRowTo(int sourceIndex1, int sourceIndex2, MBList2D<T> destination, int destinationIndex1, int destinationIndex2, int copyCount)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)