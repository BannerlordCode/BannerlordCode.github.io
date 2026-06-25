---
title: "MarkerRect"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MarkerRect`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MarkerRect

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MarkerRect`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker/MarkerRect.cs`

## 概述

`MarkerRect` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Left` | `public float Left { get; }` |
| `Right` | `public float Right { get; }` |
| `Top` | `public float Top { get; }` |
| `Bottom` | `public float Bottom { get; }` |

## 主要方法

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### UpdatePoints
`public void UpdatePoints(float left, float right, float top, float bottom)`

**用途 / Purpose:** 更新 `points` 的状态或数据。

### IsOverlapping
`public bool IsOverlapping(MarkerRect other)`

**用途 / Purpose:** 处理 `is overlapping` 相关逻辑。

## 使用示例

```csharp
var value = new MarkerRect();
value.Reset();
```

## 参见

- [完整类目录](../catalog)