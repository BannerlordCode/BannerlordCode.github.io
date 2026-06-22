<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScrollbarWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScrollbarWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollbarWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollbarWidget.cs`

## Overview

`ScrollbarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDiscrete` | `public bool IsDiscrete { get { return this._isDiscrete; }` |
| `Locked` | `public bool Locked { get { return this._locked; }` |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis { get; set; }` |
| `ReverseDirection` | `public bool ReverseDirection { get; set; }` |
| `ValueFloat` | `public float ValueFloat { get { return this._valueFloat; }` |
| `ValueInt` | `public int ValueInt { get { return MathF.Round(this.ValueFloat); }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize { get; set; }` |
| `Handle` | `public Widget Handle { get { return this._handle; }` |
| `ScrollbarArea` | `public Widget ScrollbarArea { get; set; }` |

## Key Methods

### SetValueForced
```csharp
public void SetValueForced(float value)
```

## Usage Example

```csharp
// Typical usage of ScrollbarWidget (Widget)
// 声明/访问一个 ScrollbarWidget
var widget = root.GetChild("scrollbarWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)