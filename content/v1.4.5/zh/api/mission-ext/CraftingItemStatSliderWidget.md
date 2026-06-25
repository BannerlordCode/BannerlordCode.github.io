---
title: "CraftingItemStatSliderWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingItemStatSliderWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingItemStatSliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingItemStatSliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingItemStatSliderWidget.cs`

## 概述

`CraftingItemStatSliderWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `CraftingItemStatSliderWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ValueText` | `public TextWidget ValueText { get; set; }` |
| `LabelTextWidget` | `public TextWidget LabelTextWidget { get; set; }` |
| `HasValidTarget` | `public bool HasValidTarget { get; set; }` |
| `HasValidValue` | `public bool HasValidValue { get; set; }` |
| `IsExceedingBeneficial` | `public bool IsExceedingBeneficial { get; set; }` |
| `TargetValue` | `public float TargetValue { get; set; }` |
| `TargetFill` | `public BrushWidget TargetFill { get; set; }` |

## 使用示例

```csharp
var widget = new CraftingItemStatSliderWidget(context);
```

## 参见

- [完整类目录](../catalog)