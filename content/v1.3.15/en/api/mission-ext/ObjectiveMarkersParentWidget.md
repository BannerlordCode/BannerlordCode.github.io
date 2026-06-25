---
title: "ObjectiveMarkersParentWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ObjectiveMarkersParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `ObjectiveMarkersParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public int Compare(ObjectiveMarkerWidget x, ObjectiveMarkerWidget y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public int Compare(Widget x, Widget y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var widget = new ObjectiveMarkersParentWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)