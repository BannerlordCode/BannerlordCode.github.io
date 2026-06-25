---
title: "SliderWidget"
description: "SliderWidget 的自动生成类参考。"
---
# SliderWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SliderWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/SliderWidget.cs`

## 概述

`SliderWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `SliderWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `UpdateValueOnScroll` | `public bool UpdateValueOnScroll { get; set; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |
| `Locked` | `public bool Locked { get; set; }` |
| `UpdateValueOnRelease` | `public bool UpdateValueOnRelease { get; set; }` |
| `UpdateValueContinuously` | `public bool UpdateValueContinuously { get; set; }` |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis { get; set; }` |
| `ReverseDirection` | `public bool ReverseDirection { get; set; }` |
| `Filler` | `public Widget Filler { get; set; }` |
| `HandleExtension` | `public Widget HandleExtension { get; set; }` |
| `ValueFloat` | `public float ValueFloat { get; set; }` |
| `ValueInt` | `public int ValueInt { get; set; }` |
| `MinValueFloat` | `public float MinValueFloat { get; set; }` |
| `MaxValueFloat` | `public float MaxValueFloat { get; set; }` |
| `MinValueInt` | `public int MinValueInt { get; set; }` |
| `MaxValueInt` | `public int MaxValueInt { get; set; }` |
| `DiscreteIncrementInterval` | `public int DiscreteIncrementInterval { get; set; }` |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize { get; set; }` |
| `Handle` | `public Widget Handle { get; set; }` |
| `SliderArea` | `public Widget SliderArea { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
SliderWidget widget = ...;
```

## 参见

- [本区域目录](../)