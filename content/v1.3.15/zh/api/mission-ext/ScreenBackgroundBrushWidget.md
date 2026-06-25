---
title: "ScreenBackgroundBrushWidget"
description: "ScreenBackgroundBrushWidget 的自动生成类参考。"
---
# ScreenBackgroundBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScreenBackgroundBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ScreenBackgroundBrushWidget.cs`

## 概述

`ScreenBackgroundBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ScreenBackgroundBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsParticleVisible` | `public bool IsParticleVisible { get; set; }` |
| `IsSmokeVisible` | `public bool IsSmokeVisible { get; set; }` |
| `IsFullscreenImageEnabled` | `public bool IsFullscreenImageEnabled { get; set; }` |
| `AnimEnabled` | `public bool AnimEnabled { get; set; }` |
| `ParticleWidget1` | `public Widget ParticleWidget1 { get; set; }` |
| `ParticleWidget2` | `public Widget ParticleWidget2 { get; set; }` |
| `SmokeWidget1` | `public Widget SmokeWidget1 { get; set; }` |
| `SmokeWidget2` | `public Widget SmokeWidget2 { get; set; }` |
| `SmokeSpeedModifier` | `public float SmokeSpeedModifier { get; set; }` |
| `ParticleSpeedModifier` | `public float ParticleSpeedModifier { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ScreenBackgroundBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)