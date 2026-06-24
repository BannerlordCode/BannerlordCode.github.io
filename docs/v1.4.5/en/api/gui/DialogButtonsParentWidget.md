<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DialogButtonsParentWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DialogButtonsParentWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DialogButtonsParentWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/DialogButtonsParentWidget.cs`

## Overview

`DialogButtonsParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DialogButtonsParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelClickSound` | `public string CancelClickSound { get; set; }` |
| `ConfirmClickSound` | `public string ConfirmClickSound { get; set; }` |
| `ResetClickSound` | `public string ResetClickSound { get; set; }` |
| `CancelButton` | `public ButtonWidget CancelButton { get; set; }` |
| `ConfirmButton` | `public ButtonWidget ConfirmButton { get; set; }` |
| `ResetButton` | `public ButtonWidget ResetButton { get; set; }` |

## Usage Example

```csharp
var widget = new DialogButtonsParentWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)