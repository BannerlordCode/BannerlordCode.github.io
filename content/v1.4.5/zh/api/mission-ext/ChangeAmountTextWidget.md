---
title: "ChangeAmountTextWidget"
description: "ChangeAmountTextWidget 的自动生成类参考。"
---
# ChangeAmountTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChangeAmountTextWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs`

## 概述

`ChangeAmountTextWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ChangeAmountTextWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Amount` | `public int Amount { get; set; }` |
| `UseParentheses` | `public bool UseParentheses { get; set; }` |
| `ShouldBeVisible` | `public bool ShouldBeVisible { get; set; }` |
| `NegativeBrushName` | `public string NegativeBrushName { get; set; }` |
| `PositiveBrushName` | `public string PositiveBrushName { get; set; }` |

## 主要方法

### ChangeAmountTextWidget
`public class ChangeAmountTextWidget(UIContext context)`

**用途 / Purpose:** 调用 ChangeAmountTextWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 ChangeAmountTextWidget 实例
ChangeAmountTextWidget changeAmountTextWidget = ...;
var result = changeAmountTextWidget.ChangeAmountTextWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ChangeAmountTextWidget widget = ...;
```

## 参见

- [本区域目录](../)