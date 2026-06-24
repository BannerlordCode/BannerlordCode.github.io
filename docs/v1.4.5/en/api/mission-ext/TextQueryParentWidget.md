<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextQueryParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TextQueryParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Popup
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TextQueryParentWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Popup/TextQueryParentWidget.cs`

## Overview

`TextQueryParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TextQueryParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TextInputWidget` | `public EditableTextWidget TextInputWidget { get; set; }` |

## Usage Example

```csharp
var widget = new TextQueryParentWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)