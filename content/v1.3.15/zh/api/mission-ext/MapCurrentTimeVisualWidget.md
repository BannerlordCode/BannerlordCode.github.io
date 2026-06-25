---
title: "MapCurrentTimeVisualWidget"
description: "MapCurrentTimeVisualWidget 的自动生成类参考。"
---
# MapCurrentTimeVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapCurrentTimeVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapCurrentTimeVisualWidget.cs`

## 概述

`MapCurrentTimeVisualWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MapCurrentTimeVisualWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentTimeState` | `public int CurrentTimeState { get; set; }` |
| `FastForwardButton` | `public ButtonWidget FastForwardButton { get; set; }` |
| `PlayButton` | `public ButtonWidget PlayButton { get; set; }` |
| `PauseButton` | `public ButtonWidget PauseButton { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MapCurrentTimeVisualWidget widget = ...;
```

## 参见

- [本区域目录](../)