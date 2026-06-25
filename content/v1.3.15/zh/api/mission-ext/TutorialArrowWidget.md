---
title: "TutorialArrowWidget"
description: "TutorialArrowWidget 的自动生成类参考。"
---
# TutorialArrowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialArrowWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs`

## 概述

`TutorialArrowWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TutorialArrowWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsArrowEnabled` | `public bool IsArrowEnabled { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `BigCircleRadius` | `public float BigCircleRadius { get; set; }` |
| `SmallCircleRadius` | `public float SmallCircleRadius { get; set; }` |

## 主要方法

### SetArrowProperties
`public void SetArrowProperties(float width, float height, bool isDirectionDown, bool isDirectionRight)`

**用途 / Purpose:** **用途 / Purpose:** 为 arrow properties 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TutorialArrowWidget 实例
TutorialArrowWidget tutorialArrowWidget = ...;
tutorialArrowWidget.SetArrowProperties(0, 0, false, false);
```

### ResetFade
`public void ResetFade()`

**用途 / Purpose:** **用途 / Purpose:** 将 fade 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TutorialArrowWidget 实例
TutorialArrowWidget tutorialArrowWidget = ...;
tutorialArrowWidget.ResetFade();
```

### DisableFade
`public void DisableFade()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DisableFade 对应的操作。

```csharp
// 先通过子系统 API 拿到 TutorialArrowWidget 实例
TutorialArrowWidget tutorialArrowWidget = ...;
tutorialArrowWidget.DisableFade();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
TutorialArrowWidget widget = ...;
```

## 参见

- [本区域目录](../)