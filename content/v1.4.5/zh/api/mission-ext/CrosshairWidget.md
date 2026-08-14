---
title: "CrosshairWidget"
description: "CrosshairWidget 的自动生成类参考。"
---
# CrosshairWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CrosshairWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs`

## 概述

`CrosshairWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CrosshairWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TopArrowOpacity` | `public double TopArrowOpacity { get; set; }` |
| `BottomArrowOpacity` | `public double BottomArrowOpacity { get; set; }` |
| `RightArrowOpacity` | `public double RightArrowOpacity { get; set; }` |
| `LeftArrowOpacity` | `public double LeftArrowOpacity { get; set; }` |
| `IsTargetInvalid` | `public bool IsTargetInvalid { get; set; }` |
| `CrosshairAccuracy` | `public double CrosshairAccuracy { get; set; }` |
| `CrosshairScale` | `public double CrosshairScale { get; set; }` |
| `IsVictimDead` | `public bool IsVictimDead { get; set; }` |
| `IsHumanoidHeadshot` | `public bool IsHumanoidHeadshot { get; set; }` |
| `ShowHitMarker` | `public bool ShowHitMarker { get; set; }` |
| `LeftArrow` | `public BrushWidget LeftArrow { get; set; }` |
| `RightArrow` | `public BrushWidget RightArrow { get; set; }` |
| `TopArrow` | `public BrushWidget TopArrow { get; set; }` |
| `BottomArrow` | `public BrushWidget BottomArrow { get; set; }` |
| `HitMarker` | `public BrushWidget HitMarker { get; set; }` |
| `HeadshotMarker` | `public BrushWidget HeadshotMarker { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CrosshairWidget widget = ...;
```

## 参见

- [本区域目录](../)