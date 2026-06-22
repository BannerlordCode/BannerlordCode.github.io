<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SliderWidget`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SliderWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SliderWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SliderWidget.cs`

## 概述

`SliderWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `UpdateValueOnScroll` | `public bool UpdateValueOnScroll { get; set; }` |
| `IsDiscrete` | `public bool IsDiscrete { get { return this._isDiscrete; }` |
| `Locked` | `public bool Locked { get { return this._locked; }` |
| `UpdateValueOnRelease` | `public bool UpdateValueOnRelease { get { return this._updateValueOnRelease; }` |
| `UpdateValueContinuously` | `public bool UpdateValueContinuously { get { return !this._updateValueOnRelease; }` |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis { get; set; }` |
| `ReverseDirection` | `public bool ReverseDirection { get; set; }` |
| `Filler` | `public Widget Filler { get; set; }` |
| `HandleExtension` | `public Widget HandleExtension { get; set; }` |
| `ValueFloat` | `public float ValueFloat { get { return this._valueFloat; }` |
| `ValueInt` | `public int ValueInt { get { return MathF.Round(this.ValueFloat); }` |
| `MinValueFloat` | `public float MinValueFloat { get; set; }` |
| `MaxValueFloat` | `public float MaxValueFloat { get; set; }` |
| `MinValueInt` | `public int MinValueInt { get { return MathF.Round(this.MinValueFloat); }` |
| `MaxValueInt` | `public int MaxValueInt { get { return MathF.Round(this.MaxValueFloat); }` |
| `DiscreteIncrementInterval` | `public int DiscreteIncrementInterval { get; set; }` |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize { get; set; }` |
| `Handle` | `public Widget Handle { get { return this._handle; }` |
| `SliderArea` | `public Widget SliderArea { get; set; }` |

## 使用示例

```csharp
// SliderWidget (Widget) 的典型用法
// 声明/访问一个 SliderWidget
var widget = root.GetChild("sliderWidget");;
```

## 参见

- [完整类目录](../catalog)