---
title: "CircleActionSelectorWidget"
description: "CircleActionSelectorWidget 的自动生成类参考。"
---
# CircleActionSelectorWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CircleActionSelectorWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs`

## 概述

`CircleActionSelectorWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CircleActionSelectorWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AllowInvalidSelection` | `public bool AllowInvalidSelection { get; set; }` |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController { get; set; }` |
| `IsCircularInputEnabled` | `public bool IsCircularInputEnabled { get; set; }` |
| `IsCircularInputDisabled` | `public bool IsCircularInputDisabled { get; set; }` |
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier { get; set; }` |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier { get; set; }` |
| `DirectionWidget` | `public Widget DirectionWidget { get; set; }` |

## 主要方法

### AnimateDistanceFromCenterTo
`public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)`

**用途 / Purpose:** 处理与 「animate distance from center to」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 CircleActionSelectorWidget 实例
CircleActionSelectorWidget circleActionSelectorWidget = ...;
circleActionSelectorWidget.AnimateDistanceFromCenterTo(0, 0);
```

### TrySetSelectedIndex
`public bool TrySetSelectedIndex(int index)`

**用途 / Purpose:** 尝试获取 「set selected index」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 CircleActionSelectorWidget 实例
CircleActionSelectorWidget circleActionSelectorWidget = ...;
var result = circleActionSelectorWidget.TrySetSelectedIndex(0);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CircleActionSelectorWidget widget = ...;
```

## 参见

- [本区域目录](../)