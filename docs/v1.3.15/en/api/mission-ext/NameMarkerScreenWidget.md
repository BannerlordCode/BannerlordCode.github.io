<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NameMarkerScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NameMarkerScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NameMarkerScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/NameMarkerScreenWidget.cs`

## Overview

`NameMarkerScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMarkersEnabled` | `public bool IsMarkersEnabled { get; set; }` |
| `TargetAlphaValue` | `public float TargetAlphaValue { get; set; }` |
| `MarkersContainer` | `public Widget MarkersContainer { get; set; }` |

## Usage Example

```csharp
// Typical usage of NameMarkerScreenWidget (Widget)
// 声明/访问一个 NameMarkerScreenWidget
var widget = root.GetChild("nameMarkerScreenWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)