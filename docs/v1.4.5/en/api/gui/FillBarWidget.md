<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FillBarWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FillBarWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs`

## Overview

`FillBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `FillBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `MaxAmount` | `public int MaxAmount { get; set; }` |
| `InitialAmount` | `public int InitialAmount { get; set; }` |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat { get; set; }` |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat { get; set; }` |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat { get; set; }` |
| `CompletelyFillChange` | `public bool CompletelyFillChange { get; set; }` |
| `ShowNegativeChange` | `public bool ShowNegativeChange { get; set; }` |
| `CustomChangeColor` | `public bool CustomChangeColor { get; set; }` |
| `FillWidget` | `public Widget FillWidget { get; set; }` |
| `ChangeWidget` | `public Widget ChangeWidget { get; set; }` |
| `DividerWidget` | `public Widget DividerWidget { get; set; }` |

## Usage Example

```csharp
var widget = new FillBarWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)