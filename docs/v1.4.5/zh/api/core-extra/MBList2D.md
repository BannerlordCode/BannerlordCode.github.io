<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBList2D`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBList2D

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class MBList2D<T> : IMBCollection`
**Base:** `IMBCollection`
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/MBList2D.cs`

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

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### ResetWithNewCount
`public void ResetWithNewCount(int newCount1, int newCount2)`

**用途 / Purpose:** 将 `with new count` 重置为初始状态。

### CopyRowTo
`public void CopyRowTo(int sourceIndex1, int sourceIndex2, MBList2D<T> destination, int destinationIndex1, int destinationIndex2, int copyCount)`

**用途 / Purpose:** 处理 `copy row to` 相关逻辑。

## 使用示例

```csharp
var value = new MBList2D();
value.Contains(item);
```

## 参见

- [完整类目录](../catalog)