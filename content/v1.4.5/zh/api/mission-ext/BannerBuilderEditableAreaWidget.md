---
title: "BannerBuilderEditableAreaWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerBuilderEditableAreaWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerBuilderEditableAreaWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderEditableAreaWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder/BannerBuilderEditableAreaWidget.cs`

## 概述

`BannerBuilderEditableAreaWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `BannerBuilderEditableAreaWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DragWidgetTopRight` | `public ButtonWidget DragWidgetTopRight { get; set; }` |
| `DragWidgetRight` | `public ButtonWidget DragWidgetRight { get; set; }` |
| `DragWidgetTop` | `public ButtonWidget DragWidgetTop { get; set; }` |
| `RotateWidget` | `public ButtonWidget RotateWidget { get; set; }` |
| `BannerTableauWidget` | `public BannerTableauWidget BannerTableauWidget { get; set; }` |
| `EditableAreaVisualWidget` | `public Widget EditableAreaVisualWidget { get; set; }` |
| `LayerIndex` | `public int LayerIndex { get; set; }` |
| `IsMirrorActive` | `public bool IsMirrorActive { get; set; }` |
| `IsLayerPattern` | `public bool IsLayerPattern { get; set; }` |
| `PositionValue` | `public Vec2 PositionValue { get; set; }` |
| `SizeValue` | `public Vec2 SizeValue { get; set; }` |
| `RotationValue` | `public float RotationValue { get; set; }` |
| `EditableAreaSize` | `public int EditableAreaSize { get; set; }` |
| `TotalAreaSize` | `public int TotalAreaSize { get; set; }` |

## 使用示例

```csharp
var widget = new BannerBuilderEditableAreaWidget(context);
```

## 参见

- [完整类目录](../catalog)