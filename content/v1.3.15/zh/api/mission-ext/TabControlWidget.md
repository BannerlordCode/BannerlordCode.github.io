---
title: "TabControlWidget"
description: "TabControlWidget 的自动生成类参考。"
---
# TabControlWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TabControlWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/TabControlWidget.cs`

## 概述

`TabControlWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TabControlWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FirstButton` | `public ButtonWidget FirstButton { get; set; }` |
| `SecondButton` | `public ButtonWidget SecondButton { get; set; }` |
| `SecondItem` | `public Widget SecondItem { get; set; }` |
| `FirstItem` | `public Widget FirstItem { get; set; }` |

## 主要方法

### OnFirstButtonClick
`public void OnFirstButtonClick(Widget widget)`

**用途 / Purpose:** 在 「first button click」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TabControlWidget 实例
TabControlWidget tabControlWidget = ...;
tabControlWidget.OnFirstButtonClick(widget);
```

### OnSecondButtonClick
`public void OnSecondButtonClick(Widget widget)`

**用途 / Purpose:** 在 「second button click」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TabControlWidget 实例
TabControlWidget tabControlWidget = ...;
tabControlWidget.OnSecondButtonClick(widget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
TabControlWidget widget = ...;
```

## 参见

- [本区域目录](../)