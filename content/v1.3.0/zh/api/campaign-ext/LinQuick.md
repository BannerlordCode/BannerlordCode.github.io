---
title: "LinQuick"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LinQuick`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LinQuick

**Namespace:** TaleWorlds.LinQuick
**Module:** TaleWorlds.LinQuick
**Type:** `public static class LinQuick`
**Base:** 无
**File:** `TaleWorlds.LinQuick/LinQuick.cs`

## 概述

`LinQuick` 位于 `TaleWorlds.LinQuick`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.LinQuick` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AverageQ
`public static float AverageQ(this float source)`

**用途 / Purpose:** 处理 `average q` 相关逻辑。

### AverageQ
`public static float AverageQ(this IEnumerable<float> source)`

**用途 / Purpose:** 处理 `average q` 相关逻辑。

### MaxQ
`public static int MaxQ(this int source)`

**用途 / Purpose:** 处理 `max q` 相关逻辑。

### MaxQ
`public static int MaxQ(this List<int> source)`

**用途 / Purpose:** 处理 `max q` 相关逻辑。

### MaxQ
`public static int MaxQ(this IReadOnlyList<int> source)`

**用途 / Purpose:** 处理 `max q` 相关逻辑。

## 使用示例

```csharp
LinQuick.AverageQ(source);
```

## 参见

- [完整类目录](../catalog)