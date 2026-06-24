<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSiegeConstructionControllerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapSiegeConstructionControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegeConstructionControllerWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege/MapSiegeConstructionControllerWidget.cs`

## Overview

`MapSiegeConstructionControllerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapSiegeConstructionControllerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetCurrentPOIWidget
`public void SetCurrentPOIWidget(MapSiegePOIBrushWidget widget)`

**Purpose:** Sets the value or state of `current p o i widget`.

## Usage Example

```csharp
var widget = new MapSiegeConstructionControllerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)