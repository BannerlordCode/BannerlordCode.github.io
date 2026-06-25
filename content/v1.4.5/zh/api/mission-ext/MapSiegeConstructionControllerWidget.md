---
title: "MapSiegeConstructionControllerWidget"
description: "MapSiegeConstructionControllerWidget 的自动生成类参考。"
---
# MapSiegeConstructionControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegeConstructionControllerWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege/MapSiegeConstructionControllerWidget.cs`

## 概述

`MapSiegeConstructionControllerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MapSiegeConstructionControllerWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetCurrentPOIWidget
`public void SetCurrentPOIWidget(MapSiegePOIBrushWidget widget)`

**用途 / Purpose:** 为 current p o i widget 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MapSiegeConstructionControllerWidget 实例
MapSiegeConstructionControllerWidget mapSiegeConstructionControllerWidget = ...;
mapSiegeConstructionControllerWidget.SetCurrentPOIWidget(widget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MapSiegeConstructionControllerWidget widget = ...;
```

## 参见

- [本区域目录](../)