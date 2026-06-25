---
title: "MapEventVisualBrushWidget"
description: "MapEventVisualBrushWidget 的自动生成类参考。"
---
# MapEventVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapEventVisualBrushWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map/MapEventVisualBrushWidget.cs`

## 概述

`MapEventVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MapEventVisualBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapEventType` | `public int MapEventType { get; set; }` |

## 主要方法

### MapEventVisualBrushWidget
`public class MapEventVisualBrushWidget(UIContext context)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MapEventVisualBrushWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapEventVisualBrushWidget 实例
MapEventVisualBrushWidget mapEventVisualBrushWidget = ...;
var result = mapEventVisualBrushWidget.MapEventVisualBrushWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MapEventVisualBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)