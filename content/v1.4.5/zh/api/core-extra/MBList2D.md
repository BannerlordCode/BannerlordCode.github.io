---
title: "MBList2D"
description: "MBList2D 的自动生成类参考。"
---
# MBList2D

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBList2D<T> : IMBCollection`
**Base:** `IMBCollection`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/MBList2D.cs`

## 概述

`MBList2D` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Count1` | `public int Count1 { get; }` |
| `Count2` | `public int Count2 { get; }` |
| `this` | `public T this { get; set; }` |

## 主要方法

### Contains
`public bool Contains(T item)`

**用途 / Purpose:** 判断当前对象是否包含指定项。

```csharp
// 先通过子系统 API 拿到 MBList2D 实例
MBList2D mBList2D = ...;
var result = mBList2D.Contains(item);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 MBList2D 实例
MBList2D mBList2D = ...;
mBList2D.Clear();
```

### ResetWithNewCount
`public void ResetWithNewCount(int newCount1, int newCount2)`

**用途 / Purpose:** 将 「with new count」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MBList2D 实例
MBList2D mBList2D = ...;
mBList2D.ResetWithNewCount(0, 0);
```

### CopyRowTo
`public void CopyRowTo(int sourceIndex1, int sourceIndex2, MBList2D<T> destination, int destinationIndex1, int destinationIndex2, int copyCount)`

**用途 / Purpose:** 把当前对象的「row to」状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 MBList2D 实例
MBList2D mBList2D = ...;
mBList2D.CopyRowTo(0, 0, destination, 0, 0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBList2D mBList2D = ...;
mBList2D.Contains(item);
```

## 参见

- [本区域目录](../)