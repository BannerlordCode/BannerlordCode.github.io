<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ObjectiveMarkerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ObjectiveMarkerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ObjectiveMarkerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/ObjectiveMarkerWidget.cs`

## Overview

`ObjectiveMarkerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCombinedWithOtherMarkers` | `public bool IsCombinedWithOtherMarkers { get; set; }` |
| `FarAlphaTarget` | `public float FarAlphaTarget { get; }` |
| `FarDistanceCutoff` | `public float FarDistanceCutoff { get; }` |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff { get; }` |
| `Rect` | `public MarkerRect Rect { get; }` |
| `IsInScreenBoundaries` | `public bool IsInScreenBoundaries { get; }` |
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `CombinationCountWidget` | `public TextWidget CombinationCountWidget { get; set; }` |
| `QuestIconWidget` | `public Widget QuestIconWidget { get; set; }` |
| `MainContainer` | `public Widget MainContainer { get; set; }` |
| `DistanceContainerWidget` | `public Widget DistanceContainerWidget { get; set; }` |
| `DistanceIconWidget` | `public Widget DistanceIconWidget { get; set; }` |
| `DistanceTextWidget` | `public Widget DistanceTextWidget { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `CombinedAveragePosition` | `public Vec2 CombinedAveragePosition { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `CombinedSiblingsCount` | `public int CombinedSiblingsCount { get; set; }` |
| `IsMainCombinationMarker` | `public bool IsMainCombinationMarker { get; set; }` |
| `IsDistanceRelevant` | `public bool IsDistanceRelevant { get; set; }` |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled { get; set; }` |
| `IsMarkerActive` | `public bool IsMarkerActive { get; set; }` |
| `IsFocused` | `public new bool IsFocused { get; set; }` |

## Key Methods

### Update
```csharp
public void Update(float dt)
```

### UpdateRectangle
```csharp
public void UpdateRectangle()
```

## Usage Example

```csharp
// Typical usage of ObjectiveMarkerWidget (Widget)
// 声明/访问一个 ObjectiveMarkerWidget
var widget = root.GetChild("objectiveMarkerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)