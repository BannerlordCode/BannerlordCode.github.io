---
title: "MouseWidget"
description: "MouseWidget 的自动生成类参考。"
---
# MouseWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class MouseWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs`

## 概述

`MouseWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MouseWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LeftMouseButton` | `public Widget LeftMouseButton { get; set; }` |
| `RightMouseButton` | `public Widget RightMouseButton { get; set; }` |
| `MiddleMouseButton` | `public Widget MiddleMouseButton { get; set; }` |
| `MouseX1Button` | `public Widget MouseX1Button { get; set; }` |
| `MouseX2Button` | `public Widget MouseX2Button { get; set; }` |
| `MouseScrollUp` | `public Widget MouseScrollUp { get; set; }` |
| `MouseScrollDown` | `public Widget MouseScrollDown { get; set; }` |
| `KeyboardKeys` | `public TextWidget KeyboardKeys { get; set; }` |

## 主要方法

### UpdatePressedKeys
`public void UpdatePressedKeys()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 pressed keys 的最新表示。

```csharp
// 先通过子系统 API 拿到 MouseWidget 实例
MouseWidget mouseWidget = ...;
mouseWidget.UpdatePressedKeys();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MouseWidget widget = ...;
```

## 参见

- [本区域目录](../)