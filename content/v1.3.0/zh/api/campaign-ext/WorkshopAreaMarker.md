---
title: "WorkshopAreaMarker"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WorkshopAreaMarker`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WorkshopAreaMarker

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class WorkshopAreaMarker : AreaMarker`
**Base:** `AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/WorkshopAreaMarker.cs`

## 概述

`WorkshopAreaMarker` 位于 `SandBox.Objects.AreaMarkers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.AreaMarkers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Tag` | `public override string Tag { get; }` |

## 主要方法

### GetWorkshop
`public Workshop GetWorkshop()`

**用途 / Purpose:** 获取 `workshop` 的当前值。

### GetWorkshopType
`public WorkshopType GetWorkshopType()`

**用途 / Purpose:** 获取 `workshop type` 的当前值。

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

## 使用示例

```csharp
var value = new WorkshopAreaMarker();
value.GetWorkshop();
```

## 参见

- [完整类目录](../catalog)