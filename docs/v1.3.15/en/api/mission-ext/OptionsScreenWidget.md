<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs`

## Overview

`OptionsScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OptionsScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `VideoMemoryUsageWidget` | `public Widget VideoMemoryUsageWidget { get; set; }` |
| `CurrentOptionDescriptionWidget` | `public RichTextWidget CurrentOptionDescriptionWidget { get; set; }` |
| `CurrentOptionNameWidget` | `public RichTextWidget CurrentOptionNameWidget { get; set; }` |
| `CurrentOptionImageWidget` | `public Widget CurrentOptionImageWidget { get; set; }` |
| `PerformanceTabToggle` | `public TabToggleWidget PerformanceTabToggle { get; set; }` |

## Key Methods

### SetCurrentOption
`public void SetCurrentOption(Widget currentOptionWidget, Sprite newgraphicsSprite)`

**Purpose:** Sets the value or state of `current option`.

## Usage Example

```csharp
var widget = new OptionsScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)