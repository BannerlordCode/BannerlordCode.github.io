<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerItemTabButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerItemTabButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerItemTabButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerItemTabButtonWidget.cs`

## Overview

`MultiplayerItemTabButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemType` | `public string ItemType { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerItemTabButtonWidget (Widget)
// 声明/访问一个 MultiplayerItemTabButtonWidget
var widget = root.GetChild("multiplayerItemTabButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)