<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FillBarVerticalClipWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FillBarVerticalClipWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarVerticalClipWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs`

## Overview

`FillBarVerticalClipWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `FillBarVerticalClipWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDirectionUpward` | `public bool IsDirectionUpward { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `MaxAmount` | `public int MaxAmount { get; set; }` |
| `InitialAmount` | `public int InitialAmount { get; set; }` |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat { get; set; }` |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat { get; set; }` |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat { get; set; }` |
| `FillWidget` | `public Widget FillWidget { get; set; }` |
| `ChangeWidget` | `public Widget ChangeWidget { get; set; }` |
| `DividerWidget` | `public Widget DividerWidget { get; set; }` |
| `ContainerWidget` | `public Widget ContainerWidget { get; set; }` |
| `ClipWidget` | `public Widget ClipWidget { get; set; }` |

## Usage Example

```csharp
var widget = new FillBarVerticalClipWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)