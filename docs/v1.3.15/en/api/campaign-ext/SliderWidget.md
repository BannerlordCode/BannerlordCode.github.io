<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SliderWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SliderWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SliderWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SliderWidget.cs`

## Overview

`SliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

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

## Usage Example

```csharp
// Typical usage of SliderWidget (Widget)
// 声明/访问一个 SliderWidget
var widget = root.GetChild("sliderWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)