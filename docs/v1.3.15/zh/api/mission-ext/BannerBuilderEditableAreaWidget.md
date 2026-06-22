<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerBuilderEditableAreaWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerBuilderEditableAreaWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderEditableAreaWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BannerBuilder/BannerBuilderEditableAreaWidget.cs`

## 概述

`BannerBuilderEditableAreaWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

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
// BannerBuilderEditableAreaWidget (Widget) 的典型用法
// 声明/访问一个 BannerBuilderEditableAreaWidget
var widget = root.GetChild("bannerBuilderEditableAreaWidget");;
```

## 参见

- [完整类目录](../catalog)