---
title: "FillBarVerticalClipTierColorsWidget"
description: "FillBarVerticalClipTierColorsWidget 的自动生成类参考。"
---
# FillBarVerticalClipTierColorsWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarVerticalClipTierColorsWidget`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs`

## 概述

`FillBarVerticalClipTierColorsWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `FillBarVerticalClipTierColorsWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxedColor` | `public string MaxedColor { get; set; }` |
| `HighColor` | `public string HighColor { get; set; }` |
| `MediumColor` | `public string MediumColor { get; set; }` |
| `LowColor` | `public string LowColor { get; set; }` |

## 主要方法

### FillBarVerticalClipTierColorsWidget
`public class FillBarVerticalClipTierColorsWidget(UIContext context)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 FillBarVerticalClipTierColorsWidget 实例
FillBarVerticalClipTierColorsWidget fillBarVerticalClipTierColorsWidget = ...;
var result = fillBarVerticalClipTierColorsWidget.FillBarVerticalClipTierColorsWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
FillBarVerticalClipTierColorsWidget widget = ...;
```

## 参见

- [本区域目录](../)