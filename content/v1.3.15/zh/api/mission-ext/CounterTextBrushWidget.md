---
title: "CounterTextBrushWidget"
description: "CounterTextBrushWidget 的自动生成类参考。"
---
# CounterTextBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CounterTextBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CounterTextBrushWidget.cs`

## 概述

`CounterTextBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CounterTextBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CounterTime` | `public float CounterTime { get; set; }` |
| `IntTarget` | `public int IntTarget { get; set; }` |
| `FloatTarget` | `public float FloatTarget { get; set; }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `ShowSign` | `public bool ShowSign { get; set; }` |
| `Clamped` | `public bool Clamped { get; set; }` |
| `ShowFloatingPoint` | `public bool ShowFloatingPoint { get; set; }` |

## 主要方法

### SetInitialValue
`public void SetInitialValue(float value)`

**用途 / Purpose:** 为 initial value 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CounterTextBrushWidget 实例
CounterTextBrushWidget counterTextBrushWidget = ...;
counterTextBrushWidget.SetInitialValue(0);
```

### ForceSetValue
`public void ForceSetValue(float value)`

**用途 / Purpose:** 调用 ForceSetValue 对应的操作。

```csharp
// 先通过子系统 API 拿到 CounterTextBrushWidget 实例
CounterTextBrushWidget counterTextBrushWidget = ...;
counterTextBrushWidget.ForceSetValue(0);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CounterTextBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)