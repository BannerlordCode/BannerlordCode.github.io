---
title: "CraftingScreenWidget"
description: "CraftingScreenWidget 的自动生成类参考。"
---
# CraftingScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingScreenWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingScreenWidget.cs`

## 概述

`CraftingScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CraftingScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInCraftingMode` | `public bool IsInCraftingMode { get; set; }` |
| `IsInRefinementMode` | `public bool IsInRefinementMode { get; set; }` |
| `IsInSmeltingMode` | `public bool IsInSmeltingMode { get; set; }` |
| `MainActionButtonWidget` | `public ButtonWidget MainActionButtonWidget { get; set; }` |
| `FinalCraftButtonWidget` | `public ButtonWidget FinalCraftButtonWidget { get; set; }` |
| `NewCraftedWeaponPopupWidget` | `public Widget NewCraftedWeaponPopupWidget { get; set; }` |
| `CraftingOrderPopupWidget` | `public Widget CraftingOrderPopupWidget { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
CraftingScreenWidget widget = ...;
```

## 参见

- [本区域目录](../)