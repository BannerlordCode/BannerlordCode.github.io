---
title: "MapInfoBarWidget"
description: "MapInfoBarWidget 的自动生成类参考。"
---
# MapInfoBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapInfoBarWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapInfoBarWidget.cs`

## 概述

`MapInfoBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MapInfoBarWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ExtendButtonWidget` | `public ButtonWidget ExtendButtonWidget { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |

## 主要方法

### MapBarExtendStateChangeEvent
`public delegate void MapBarExtendStateChangeEvent(bool newState)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MapInfoBarWidget 实例
MapInfoBarWidget mapInfoBarWidget = ...;
mapInfoBarWidget.MapBarExtendStateChangeEvent(false);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MapInfoBarWidget widget = ...;
```

## 参见

- [本区域目录](../)