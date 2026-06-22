<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingItemStatSliderWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingItemStatSliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingItemStatSliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingItemStatSliderWidget.cs`

## 概述

`CraftingItemStatSliderWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

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
// CraftingItemStatSliderWidget (Widget) 的典型用法
// 声明/访问一个 CraftingItemStatSliderWidget
var widget = root.GetChild("craftingItemStatSliderWidget");;
```

## 参见

- [完整类目录](../catalog)