<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TextWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextWidget.cs`

## Overview

`TextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `IntText` | `public int IntText { get; set; }` |
| `FloatText` | `public float FloatText { get; set; }` |
| `CanBreakWords` | `public bool CanBreakWords { get; set; }` |

## Usage Example

```csharp
var widget = new TextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)