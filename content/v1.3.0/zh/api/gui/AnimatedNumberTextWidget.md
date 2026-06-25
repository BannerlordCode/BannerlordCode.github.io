---
title: "AnimatedNumberTextWidget"
description: "AnimatedNumberTextWidget 的自动生成类参考。"
---
# AnimatedNumberTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedNumberTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs`

## 概述

`AnimatedNumberTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `AnimatedNumberTextWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `ReferenceNumber` | `public int ReferenceNumber { get; set; }` |
| `Number` | `public int Number { get; set; }` |
| `AutoStart` | `public bool AutoStart { get; set; }` |

## 主要方法

### StartAnimation
`public void StartAnimation()`

**用途 / Purpose:** 启动animation流程或状态机。

```csharp
// 先通过子系统 API 拿到 AnimatedNumberTextWidget 实例
AnimatedNumberTextWidget animatedNumberTextWidget = ...;
animatedNumberTextWidget.StartAnimation();
```

### Reset
`public void Reset()`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 AnimatedNumberTextWidget 实例
AnimatedNumberTextWidget animatedNumberTextWidget = ...;
animatedNumberTextWidget.Reset();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
AnimatedNumberTextWidget widget = ...;
```

## 参见

- [本区域目录](../)