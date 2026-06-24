<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SimpleRectangle`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SimpleRectangle

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct SimpleRectangle`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/SimpleRectangle.cs`

## 概述

`SimpleRectangle` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Width` | `public float Width { get; }` |
| `Height` | `public float Height { get; }` |

## 主要方法

### IsCollide
`public bool IsCollide(SimpleRectangle other)`

**用途 / Purpose:** 处理 `is collide` 相关逻辑。

### GetCenter
`public Vector2 GetCenter()`

**用途 / Purpose:** 获取 `center` 的当前值。

### IsSubRectOf
`public bool IsSubRectOf(SimpleRectangle other)`

**用途 / Purpose:** 处理 `is sub rect of` 相关逻辑。

### IsValid
`public bool IsValid()`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

### IsPointInside
`public bool IsPointInside(Vector2 point)`

**用途 / Purpose:** 处理 `is point inside` 相关逻辑。

### ReduceToIntersection
`public void ReduceToIntersection(SimpleRectangle other)`

**用途 / Purpose:** 处理 `reduce to intersection` 相关逻辑。

### Lerp
`public static SimpleRectangle Lerp(SimpleRectangle from, SimpleRectangle to, float ratio)`

**用途 / Purpose:** 处理 `lerp` 相关逻辑。

## 使用示例

```csharp
var value = new SimpleRectangle();
value.IsCollide(other);
```

## 参见

- [完整类目录](../catalog)