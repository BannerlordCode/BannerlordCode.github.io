<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QuestMarkerBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestMarkerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QuestMarkerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestMarkerBrushWidget.cs`

## Overview

`QuestMarkerBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `QuestMarkerType` | `public int QuestMarkerType { get; set; }` |

## Usage Example

```csharp
// Typical usage of QuestMarkerBrushWidget (Widget)
// 声明/访问一个 QuestMarkerBrushWidget
var widget = root.GetChild("questMarkerBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)