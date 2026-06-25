---
title: "Intersection"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Intersection`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Intersection

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct Intersection`
**Base:** 无
**File:** `TaleWorlds.Engine/Intersection.cs`

## 概述

`Intersection` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### DoSegmentsIntersect
`public static bool DoSegmentsIntersect(Vec2 line1Start, Vec2 line1Direction, Vec2 line2Start, Vec2 line2Direction, ref Vec2 intersectionPoint)`

**用途 / Purpose:** 处理 `do segments intersect` 相关逻辑。

## 使用示例

```csharp
Intersection.DoSegmentsIntersect(line1Start, line1Direction, line2Start, line2Direction, intersectionPoint);
```

## 参见

- [完整类目录](../catalog)