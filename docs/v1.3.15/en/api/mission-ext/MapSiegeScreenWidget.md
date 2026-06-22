<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSiegeScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapSiegeScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegeScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeScreenWidget.cs`

## Overview

`MapSiegeScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeployableSiegeMachinesPopup` | `public Widget DeployableSiegeMachinesPopup { get; set; }` |

## Key Methods

### SetCurrentButton
```csharp
public void SetCurrentButton(MapSiegeMachineButtonWidget button)
```

## Usage Example

```csharp
// Typical usage of MapSiegeScreenWidget (Widget)
// 声明/访问一个 MapSiegeScreenWidget
var widget = root.GetChild("mapSiegeScreenWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)