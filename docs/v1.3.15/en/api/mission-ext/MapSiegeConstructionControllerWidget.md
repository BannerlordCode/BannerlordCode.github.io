<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSiegeConstructionControllerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapSiegeConstructionControllerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegeConstructionControllerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeConstructionControllerWidget.cs`

## Overview

`MapSiegeConstructionControllerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Methods

### SetCurrentPOIWidget
```csharp
public void SetCurrentPOIWidget(MapSiegePOIBrushWidget widget)
```

## Usage Example

```csharp
// Typical usage of MapSiegeConstructionControllerWidget (Widget)
// 声明/访问一个 MapSiegeConstructionControllerWidget
var widget = root.GetChild("mapSiegeConstructionControllerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)