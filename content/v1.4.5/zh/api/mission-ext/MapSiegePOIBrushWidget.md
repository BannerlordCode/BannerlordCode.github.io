---
title: "MapSiegePOIBrushWidget"
description: "MapSiegePOIBrushWidget 的自动生成类参考。"
---
# MapSiegePOIBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegePOIBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs`

## 概述

`MapSiegePOIBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MapSiegePOIBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Slider` | `public SliderWidget Slider { get; set; }` |
| `ConstructionBrush` | `public Brush ConstructionBrush { get; set; }` |
| `NormalBrush` | `public Brush NormalBrush { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `ConstructionControllerWidget` | `public MapSiegeConstructionControllerWidget ConstructionControllerWidget { get; set; }` |
| `IsPlayerSidePOI` | `public bool IsPlayerSidePOI { get; set; }` |
| `IsInVisibleRange` | `public bool IsInVisibleRange { get; set; }` |
| `IsPOISelected` | `public bool IsPOISelected { get; set; }` |
| `IsConstructing` | `public bool IsConstructing { get; set; }` |
| `MachineType` | `public int MachineType { get; set; }` |
| `QueueIndex` | `public int QueueIndex { get; set; }` |
| `MachineTypeIconWidget` | `public Widget MachineTypeIconWidget { get; set; }` |
| `HammerAnimWidget` | `public BrushWidget HammerAnimWidget { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MapSiegePOIBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)