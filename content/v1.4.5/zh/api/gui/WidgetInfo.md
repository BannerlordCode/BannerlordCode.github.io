---
title: "WidgetInfo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetInfo`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetInfo

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetInfo`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/WidgetInfo.cs`

## 概述

`WidgetInfo` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Type` | `public Type Type { get; }` |
| `GotCustomUpdate` | `public bool GotCustomUpdate { get; }` |
| `GotCustomLateUpdate` | `public bool GotCustomLateUpdate { get; }` |
| `GotCustomParallelUpdate` | `public bool GotCustomParallelUpdate { get; }` |
| `GotUpdateBrushes` | `public bool GotUpdateBrushes { get; }` |

## 主要方法

### Refresh
`public static void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### GetWidgetInfo
`public static WidgetInfo GetWidgetInfo(Type type)`

**用途 / Purpose:** 获取 `widget info` 的当前值。

### GetWidgetInfos
`public static WidgetInfo GetWidgetInfos()`

**用途 / Purpose:** 获取 `widget infos` 的当前值。

## 使用示例

```csharp
WidgetInfo.Refresh();
```

## 参见

- [完整类目录](../catalog)