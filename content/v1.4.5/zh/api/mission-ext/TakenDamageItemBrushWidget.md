---
title: "TakenDamageItemBrushWidget"
description: "TakenDamageItemBrushWidget 的自动生成类参考。"
---
# TakenDamageItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TakenDamageItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/TakenDamageItemBrushWidget.cs`

## 概述

`TakenDamageItemBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TakenDamageItemBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `VerticalWidth` | `public float VerticalWidth { get; set; }` |
| `VerticalHeight` | `public float VerticalHeight { get; set; }` |
| `HorizontalWidth` | `public float HorizontalWidth { get; set; }` |
| `HorizontalHeight` | `public float HorizontalHeight { get; set; }` |
| `RangedOnScreenStayTime` | `public float RangedOnScreenStayTime { get; set; }` |
| `MeleeOnScreenStayTime` | `public float MeleeOnScreenStayTime { get; set; }` |
| `DamageAmount` | `public int DamageAmount { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsRanged` | `public bool IsRanged { get; set; }` |
| `ScreenPosOfAffectorAgent` | `public Vec2 ScreenPosOfAffectorAgent { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
TakenDamageItemBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)