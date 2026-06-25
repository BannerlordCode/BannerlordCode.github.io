---
title: "MapEventVisualItemWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEventVisualItemWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventVisualItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapEvents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapEventVisualItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapEvents/MapEventVisualItemWidget.cs`

## 概述

`MapEventVisualItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MapEventVisualItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |

## 使用示例

```csharp
var widget = new MapEventVisualItemWidget(context);
```

## 参见

- [完整类目录](../catalog)