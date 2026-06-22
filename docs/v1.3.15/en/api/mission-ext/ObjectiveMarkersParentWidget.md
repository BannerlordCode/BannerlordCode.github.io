<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ObjectiveMarkersParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ObjectiveMarkersParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ObjectiveMarkersParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkersParentWidget.cs`

## Overview

`ObjectiveMarkersParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinDistanceToFocus` | `public float MinDistanceToFocus { get; set; }` |
| `IsMarkersEnabled` | `public bool IsMarkersEnabled { get; set; }` |
| `TargetAlphaValue` | `public float TargetAlphaValue { get; set; }` |
| `MaxDistanceToCombineMarkers` | `public float MaxDistanceToCombineMarkers { get; set; }` |
| `MarkersContainer` | `public Widget MarkersContainer { get; set; }` |

## Key Methods

### Compare
```csharp
public int Compare(ObjectiveMarkerWidget x, ObjectiveMarkerWidget y)
```

### Compare
```csharp
public int Compare(Widget x, Widget y)
```

## Usage Example

```csharp
// Typical usage of ObjectiveMarkersParentWidget (Widget)
// 声明/访问一个 ObjectiveMarkersParentWidget
var widget = root.GetChild("objectiveMarkersParentWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)