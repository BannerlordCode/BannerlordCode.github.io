---
title: "NumericUpDownWidget"
description: "NumericUpDownWidget 的自动生成类参考。"
---
# NumericUpDownWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NumericUpDownWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/NumericUpDownWidget.cs`

## 概述

`NumericUpDownWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `NumericUpDownWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShowOneAdded` | `public bool ShowOneAdded { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `Value` | `public float Value { get; set; }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `TextWidget` | `public TextWidget TextWidget { get; set; }` |
| `UpButton` | `public ButtonWidget UpButton { get; set; }` |
| `DownButton` | `public ButtonWidget DownButton { get; set; }` |

## 主要方法

### NumericUpDownWidget
`public class NumericUpDownWidget(UIContext context)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 NumericUpDownWidget 实例
NumericUpDownWidget numericUpDownWidget = ...;
var result = numericUpDownWidget.NumericUpDownWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
NumericUpDownWidget widget = ...;
```

## 参见

- [本区域目录](../)