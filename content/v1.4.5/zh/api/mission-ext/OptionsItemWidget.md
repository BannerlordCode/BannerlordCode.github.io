---
title: "OptionsItemWidget"
description: "OptionsItemWidget 的自动生成类参考。"
---
# OptionsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsItemWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options/OptionsItemWidget.cs`

## 概述

`OptionsItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `OptionsItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BooleanOption` | `public Widget BooleanOption { get; set; }` |
| `NumericOption` | `public Widget NumericOption { get; set; }` |
| `StringOption` | `public Widget StringOption { get; set; }` |
| `GameKeyOption` | `public Widget GameKeyOption { get; set; }` |
| `ActionOption` | `public Widget ActionOption { get; set; }` |
| `InputOption` | `public Widget InputOption { get; set; }` |
| `DropdownWidget` | `public AnimatedDropdownWidget DropdownWidget { get; set; }` |
| `BooleanToggleButtonWidget` | `public ButtonWidget BooleanToggleButtonWidget { get; set; }` |
| `OptionTypeID` | `public int OptionTypeID { get; set; }` |
| `IsOptionEnabled` | `public bool IsOptionEnabled { get; set; }` |
| `OptionTitle` | `public string OptionTitle { get; set; }` |
| `ImageIDs` | `public string ImageIDs { get; set; }` |
| `OptionDescription` | `public string OptionDescription { get; set; }` |

## 主要方法

### SetCurrentScreenWidget
`public void SetCurrentScreenWidget(OptionsScreenWidget screenWidget)`

**用途 / Purpose:** 为 current screen widget 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OptionsItemWidget 实例
OptionsItemWidget optionsItemWidget = ...;
optionsItemWidget.SetCurrentScreenWidget(screenWidget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
OptionsItemWidget widget = ...;
```

## 参见

- [本区域目录](../)