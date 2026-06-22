<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapSiegeMachineButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `ColoredImageWidget` | `public Widget ColoredImageWidget { get; set; }` |
| `IsDeploymentTarget` | `public bool IsDeploymentTarget { get; set; }` |
| `MachineID` | `public string MachineID { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapSiegeMachineButtonWidget (Widget)
// 声明/访问一个 MapSiegeMachineButtonWidget
var widget = root.GetChild("mapSiegeMachineButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)