---
title: "EncyclopediaUnitTreeNodeItemBrushWidget"
description: "EncyclopediaUnitTreeNodeItemBrushWidget 的自动生成类参考。"
---
# EncyclopediaUnitTreeNodeItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaUnitTreeNodeItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia/EncyclopediaUnitTreeNodeItemBrushWidget.cs`

## 概述

`EncyclopediaUnitTreeNodeItemBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `EncyclopediaUnitTreeNodeItemBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAlternativeUpgrade` | `public bool IsAlternativeUpgrade { get; set; }` |
| `ChildContainer` | `public ListPanel ChildContainer { get; set; }` |
| `LineContainer` | `public Widget LineContainer { get; set; }` |
| `LineBrush` | `public Brush LineBrush { get; set; }` |
| `AlternateLineBrush` | `public Brush AlternateLineBrush { get; set; }` |

## 主要方法

### OnListItemAdded
`public void OnListItemAdded(Widget parentWidget, Widget addedWidget)`

**用途 / Purpose:** 在 「list item added」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EncyclopediaUnitTreeNodeItemBrushWidget 实例
EncyclopediaUnitTreeNodeItemBrushWidget encyclopediaUnitTreeNodeItemBrushWidget = ...;
encyclopediaUnitTreeNodeItemBrushWidget.OnListItemAdded(parentWidget, addedWidget);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
EncyclopediaUnitTreeNodeItemBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)