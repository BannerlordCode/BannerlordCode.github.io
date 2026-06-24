<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DuelArenaFlagVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DuelArenaFlagVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelArenaFlagVisualBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD/DuelArenaFlagVisualBrushWidget.cs`

## Overview

`DuelArenaFlagVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DuelArenaFlagVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ArenaType` | `public int ArenaType { get; set; }` |

## Key Methods

### DuelArenaFlagVisualBrushWidget
`public class DuelArenaFlagVisualBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `duel arena flag visual brush widget`.

## Usage Example

```csharp
var widget = new DuelArenaFlagVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)