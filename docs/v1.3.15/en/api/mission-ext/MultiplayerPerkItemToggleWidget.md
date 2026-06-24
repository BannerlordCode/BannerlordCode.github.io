<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPerkItemToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPerkItemToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkItemToggleWidget : ToggleButtonWidget`
**Base:** `ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkItemToggleWidget.cs`

## Overview

`MultiplayerPerkItemToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerPerkItemToggleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IconType` | `public string IconType { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `ContainerPanel` | `public MultiplayerPerkContainerPanelWidget ContainerPanel { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerPerkItemToggleWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)