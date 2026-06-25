---
title: "CraftingPieceTypeSelectorButtonWidget"
description: "CraftingPieceTypeSelectorButtonWidget 的自动生成类参考。"
---
# CraftingPieceTypeSelectorButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceTypeSelectorButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceTypeSelectorButtonWidget.cs`

## 概述

`CraftingPieceTypeSelectorButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CraftingPieceTypeSelectorButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `VisualsWidget` | `public Widget VisualsWidget { get; set; }` |

## 主要方法

### SetState
`public override void SetState(string stateName)`

**用途 / Purpose:** **用途 / Purpose:** 为 state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CraftingPieceTypeSelectorButtonWidget 实例
CraftingPieceTypeSelectorButtonWidget craftingPieceTypeSelectorButtonWidget = ...;
craftingPieceTypeSelectorButtonWidget.SetState("example");
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CraftingPieceTypeSelectorButtonWidget widget = ...;
```

## 参见

- [本区域目录](../)