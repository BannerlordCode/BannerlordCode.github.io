<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapParleyAnimationParentBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapParleyAnimationParentBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Parley
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapParleyAnimationParentBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Parley/MapParleyAnimationParentBrushWidget.cs`

## Overview

`MapParleyAnimationParentBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapParleyAnimationParentBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |

## Key Methods

### MapParleyAnimationParentBrushWidget
`public class MapParleyAnimationParentBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `map parley animation parent brush widget`.

## Usage Example

```csharp
var widget = new MapParleyAnimationParentBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)