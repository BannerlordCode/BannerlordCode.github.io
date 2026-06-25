---
title: "Highlights"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Highlights`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Highlights

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class Highlights`
**Base:** 无
**File:** `TaleWorlds.Engine/Highlights.cs`

## 概述

`Highlights` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OpenGroup
`public static void OpenGroup(string id)`

**用途 / Purpose:** 处理 `open group` 相关逻辑。

### CloseGroup
`public static void CloseGroup(string id, bool destroy = false)`

**用途 / Purpose:** 处理 `close group` 相关逻辑。

### SaveScreenshot
`public static void SaveScreenshot(string highlightId, string groupId)`

**用途 / Purpose:** 保存 `screenshot` 数据。

### SaveVideo
`public static void SaveVideo(string highlightId, string groupId, int startDelta, int endDelta)`

**用途 / Purpose:** 保存 `video` 数据。

### OpenSummary
`public static void OpenSummary(List<string> groups)`

**用途 / Purpose:** 处理 `open summary` 相关逻辑。

### AddHighlight
`public static void AddHighlight(string id, string name)`

**用途 / Purpose:** 向当前集合/状态中添加 `highlight`。

### RemoveHighlight
`public static void RemoveHighlight(string id)`

**用途 / Purpose:** 从当前集合/状态中移除 `highlight`。

## 使用示例

```csharp
Highlights.Initialize();
```

## 参见

- [完整类目录](../catalog)