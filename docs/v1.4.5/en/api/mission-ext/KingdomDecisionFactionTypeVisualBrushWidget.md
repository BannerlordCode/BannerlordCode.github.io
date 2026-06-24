<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomDecisionFactionTypeVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomDecisionFactionTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KingdomDecisionFactionTypeVisualBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom/KingdomDecisionFactionTypeVisualBrushWidget.cs`

## Overview

`KingdomDecisionFactionTypeVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `KingdomDecisionFactionTypeVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FactionName` | `public string FactionName { get; set; }` |

## Key Methods

### KingdomDecisionFactionTypeVisualBrushWidget
`public class KingdomDecisionFactionTypeVisualBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `kingdom decision faction type visual brush widget`.

## Usage Example

```csharp
var widget = new KingdomDecisionFactionTypeVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)