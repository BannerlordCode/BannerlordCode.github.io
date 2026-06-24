<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RichTextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RichTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class RichTextWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs`

## Overview

`RichTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `RichTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty { get; set; }` |
| `LinkHoverCursorState` | `public string LinkHoverCursorState { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `CanBreakWords` | `public bool CanBreakWords { get; set; }` |

## Key Methods

### OnBrushChanged
`public override void OnBrushChanged()`

**Purpose:** Called when the `brush changed` event is raised.

## Usage Example

```csharp
var widget = new RichTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)