<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScrollingTextWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScrollingTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollingTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/ScrollingTextWidget.cs`

## Overview

`ScrollingTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScrollingTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActualText` | `public string ActualText { get; }` |
| `ScrollOnHoverWidget` | `public Widget ScrollOnHoverWidget { get; set; }` |
| `IsAutoScrolling` | `public bool IsAutoScrolling { get; set; }` |
| `ScrollPerTick` | `public float ScrollPerTick { get; set; }` |
| `InbetweenScrollDuration` | `public float InbetweenScrollDuration { get; set; }` |
| `DefaultTextHorizontalAlignment` | `public TextHorizontalAlignment DefaultTextHorizontalAlignment { get; set; }` |

## Key Methods

### OnBrushChanged
`public override void OnBrushChanged()`

**Purpose:** Called when the `brush changed` event is raised.

## Usage Example

```csharp
var widget = new ScrollingTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)