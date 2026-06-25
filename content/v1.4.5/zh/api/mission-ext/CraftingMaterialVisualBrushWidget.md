---
title: "CraftingMaterialVisualBrushWidget"
description: "CraftingMaterialVisualBrushWidget 的自动生成类参考。"
---
# CraftingMaterialVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingMaterialVisualBrushWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingMaterialVisualBrushWidget.cs`

## 概述

`CraftingMaterialVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CraftingMaterialVisualBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaterialType` | `public string MaterialType { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## 主要方法

### CraftingMaterialVisualBrushWidget
`public class CraftingMaterialVisualBrushWidget(UIContext context)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CraftingMaterialVisualBrushWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 CraftingMaterialVisualBrushWidget 实例
CraftingMaterialVisualBrushWidget craftingMaterialVisualBrushWidget = ...;
var result = craftingMaterialVisualBrushWidget.CraftingMaterialVisualBrushWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CraftingMaterialVisualBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)