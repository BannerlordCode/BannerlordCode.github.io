<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StringBasedVisibilityWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StringBasedVisibilityWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StringBasedVisibilityWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/StringBasedVisibilityWidget.cs`

## Overview

`StringBasedVisibilityWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `StringBasedVisibilityWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WatchType` | `public StringBasedVisibilityWidget.WatchTypes WatchType { get; set; }` |
| `FirstString` | `public string FirstString { get; set; }` |
| `SecondString` | `public string SecondString { get; set; }` |

## Usage Example

```csharp
var widget = new StringBasedVisibilityWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)