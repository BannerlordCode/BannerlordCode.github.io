<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScrollablePanelFixedHeaderWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScrollablePanelFixedHeaderWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollablePanelFixedHeaderWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/ScrollablePanelFixedHeaderWidget.cs`

## Overview

`ScrollablePanelFixedHeaderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScrollablePanelFixedHeaderWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FixedHeader` | `public Widget FixedHeader { get; set; }` |
| `TopOffset` | `public float TopOffset { get; set; }` |
| `BottomOffset` | `public float BottomOffset { get; set; }` |
| `HeaderHeight` | `public float HeaderHeight { get; set; }` |
| `AdditionalTopOffset` | `public float AdditionalTopOffset { get; set; }` |
| `AdditionalBottomOffset` | `public float AdditionalBottomOffset { get; set; }` |
| `IsRelevant` | `public bool IsRelevant { get; set; }` |

## Usage Example

```csharp
var widget = new ScrollablePanelFixedHeaderWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)