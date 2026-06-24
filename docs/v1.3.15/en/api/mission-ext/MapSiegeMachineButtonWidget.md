<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSiegeMachineButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapSiegeMachineButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapSiegeMachineButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeMachineButtonWidget.cs`

## Overview

`MapSiegeMachineButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapSiegeMachineButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ColoredImageWidget` | `public Widget ColoredImageWidget { get; set; }` |
| `IsDeploymentTarget` | `public bool IsDeploymentTarget { get; set; }` |
| `MachineID` | `public string MachineID { get; set; }` |

## Usage Example

```csharp
var widget = new MapSiegeMachineButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)