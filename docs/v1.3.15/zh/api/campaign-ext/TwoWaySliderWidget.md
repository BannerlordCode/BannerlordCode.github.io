<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TwoWaySliderWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoWaySliderWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TwoWaySliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/TwoWaySliderWidget.cs`

## 概述

`TwoWaySliderWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `ChangeFillWidget` | `public BrushWidget ChangeFillWidget { get { return this._changeFillWidget; }` |
| `BaseValueInt` | `public int BaseValueInt { get { return this._baseValueInt; }` |

## 使用示例

```csharp
// TwoWaySliderWidget (Widget) 的典型用法
// 声明/访问一个 TwoWaySliderWidget
var widget = root.GetChild("twoWaySliderWidget");;
```

## 参见

- [完整类目录](../catalog)