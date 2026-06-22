<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoolStateChangerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoolStateChangerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoolStateChangerWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BoolStateChangerWidget.cs`

## Overview

`BoolStateChangerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `BooleanCheck` | `public bool BooleanCheck { get; set; }` |
| `TrueState` | `public string TrueState { get; set; }` |
| `FalseState` | `public string FalseState { get; set; }` |
| `TargetWidget` | `public Widget TargetWidget { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |

## Usage Example

```csharp
// Typical usage of BoolStateChangerWidget (Widget)
// 声明/访问一个 BoolStateChangerWidget
var widget = root.GetChild("boolStateChangerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)