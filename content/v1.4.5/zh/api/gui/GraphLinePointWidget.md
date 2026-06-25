---
title: "GraphLinePointWidget"
description: "GraphLinePointWidget 的自动生成类参考。"
---
# GraphLinePointWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets.Graph
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GraphLinePointWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets.Graph/GraphLinePointWidget.cs`

## 概述

`GraphLinePointWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `GraphLinePointWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HorizontalValue` | `public float HorizontalValue { get; set; }` |
| `VerticalValue` | `public float VerticalValue { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
GraphLinePointWidget widget = ...;
```

## 参见

- [本区域目录](../)