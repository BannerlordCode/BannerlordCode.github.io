---
title: "TutorialScreenWidget"
description: "TutorialScreenWidget 的自动生成类参考。"
---
# TutorialScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialScreenWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial/TutorialScreenWidget.cs`

## 概述

`TutorialScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `TutorialScreenWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LeftItem` | `public TutorialPanelImageWidget LeftItem { get; set; }` |
| `RightItem` | `public TutorialPanelImageWidget RightItem { get; set; }` |
| `BottomItem` | `public TutorialPanelImageWidget BottomItem { get; set; }` |
| `TopItem` | `public TutorialPanelImageWidget TopItem { get; set; }` |
| `LeftTopItem` | `public TutorialPanelImageWidget LeftTopItem { get; set; }` |
| `RightTopItem` | `public TutorialPanelImageWidget RightTopItem { get; set; }` |
| `LeftBottomItem` | `public TutorialPanelImageWidget LeftBottomItem { get; set; }` |
| `RightBottomItem` | `public TutorialPanelImageWidget RightBottomItem { get; set; }` |
| `CenterItem` | `public TutorialPanelImageWidget CenterItem { get; set; }` |
| `ArrowWidget` | `public TutorialArrowWidget ArrowWidget { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
TutorialScreenWidget widget = ...;
```

## 参见

- [本区域目录](../)