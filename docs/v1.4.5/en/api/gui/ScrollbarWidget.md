<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScrollbarWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScrollbarWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollbarWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/ScrollbarWidget.cs`

## Overview

`ScrollbarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScrollbarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |
| `Locked` | `public bool Locked { get; set; }` |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis { get; set; }` |
| `ReverseDirection` | `public bool ReverseDirection { get; set; }` |
| `ValueFloat` | `public float ValueFloat { get; set; }` |
| `ValueInt` | `public int ValueInt { get; set; }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize { get; set; }` |
| `Handle` | `public Widget Handle { get; set; }` |
| `ScrollbarArea` | `public Widget ScrollbarArea { get; set; }` |

## Key Methods

### SetValueForced
`public void SetValueForced(float value)`

**Purpose:** Sets the value or state of `value forced`.

## Usage Example

```csharp
var widget = new ScrollbarWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)