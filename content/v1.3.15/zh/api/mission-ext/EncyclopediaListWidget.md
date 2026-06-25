---
title: "EncyclopediaListWidget"
description: "EncyclopediaListWidget 的自动生成类参考。"
---
# EncyclopediaListWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaListWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListWidget.cs`

## 概述

`EncyclopediaListWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `EncyclopediaListWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LastSelectedItemId` | `public string LastSelectedItemId { get; set; }` |
| `ItemList` | `public ListPanel ItemList { get; set; }` |
| `ItemListScroll` | `public ScrollbarWidget ItemListScroll { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
EncyclopediaListWidget widget = ...;
```

## 参见

- [本区域目录](../)