---
title: "MissionSiegeEngineMarkerWidget"
description: "MissionSiegeEngineMarkerWidget 的自动生成类参考。"
---
# MissionSiegeEngineMarkerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEngineMarkerWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/MissionSiegeEngineMarkerWidget.cs`

## 概述

`MissionSiegeEngineMarkerWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MissionSiegeEngineMarkerWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Slider` | `public SliderWidget Slider { get; set; }` |
| `MachineIconParent` | `public BrushWidget MachineIconParent { get; set; }` |
| `EnemyBrush` | `public Brush EnemyBrush { get; set; }` |
| `AllyBrush` | `public Brush AllyBrush { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `EngineType` | `public string EngineType { get; set; }` |
| `MachineTypeIconWidget` | `public Widget MachineTypeIconWidget { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MissionSiegeEngineMarkerWidget widget = ...;
```

## 参见

- [本区域目录](../)