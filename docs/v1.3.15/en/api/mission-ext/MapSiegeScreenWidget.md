<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSiegeScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `MapSiegeScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DeployableSiegeMachinesPopup` | `public Widget DeployableSiegeMachinesPopup { get; set; }` |

## Key Methods

### SetCurrentButton
`public void SetCurrentButton(MapSiegeMachineButtonWidget button)`

**Purpose:** Sets the value or state of `current button`.

## Usage Example

```csharp
var widget = new MapSiegeScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)