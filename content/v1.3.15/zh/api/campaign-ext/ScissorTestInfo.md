---
title: "ScissorTestInfo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScissorTestInfo`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScissorTestInfo

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct ScissorTestInfo`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/ScissorTestInfo.cs`

## 概述

`ScissorTestInfo` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `X` | `public float X { get; }` |
| `X2` | `public float X2 { get; }` |
| `Y` | `public float Y { get; }` |
| `Y2` | `public float Y2 { get; }` |

## 主要方法

### ReduceToIntersection
`public void ReduceToIntersection(ScissorTestInfo other)`

**用途 / Purpose:** 处理 `reduce to intersection` 相关逻辑。

### GetSimpleRectangle
`public SimpleRectangle GetSimpleRectangle()`

**用途 / Purpose:** 获取 `simple rectangle` 的当前值。

### IsCollide
`public bool IsCollide(in Rectangle2D other)`

**用途 / Purpose:** 处理 `is collide` 相关逻辑。

## 使用示例

```csharp
var value = new ScissorTestInfo();
value.ReduceToIntersection(other);
```

## 参见

- [完整类目录](../catalog)