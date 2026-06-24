<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OptionsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsItemWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options/OptionsItemWidget.cs`

## Overview

`OptionsItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OptionsItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BooleanOption` | `public Widget BooleanOption { get; set; }` |
| `NumericOption` | `public Widget NumericOption { get; set; }` |
| `StringOption` | `public Widget StringOption { get; set; }` |
| `GameKeyOption` | `public Widget GameKeyOption { get; set; }` |
| `ActionOption` | `public Widget ActionOption { get; set; }` |
| `InputOption` | `public Widget InputOption { get; set; }` |
| `DropdownWidget` | `public AnimatedDropdownWidget DropdownWidget { get; set; }` |
| `BooleanToggleButtonWidget` | `public ButtonWidget BooleanToggleButtonWidget { get; set; }` |
| `OptionTypeID` | `public int OptionTypeID { get; set; }` |
| `IsOptionEnabled` | `public bool IsOptionEnabled { get; set; }` |
| `OptionTitle` | `public string OptionTitle { get; set; }` |
| `ImageIDs` | `public string ImageIDs { get; set; }` |
| `OptionDescription` | `public string OptionDescription { get; set; }` |

## Key Methods

### SetCurrentScreenWidget
`public void SetCurrentScreenWidget(OptionsScreenWidget screenWidget)`

**Purpose:** Sets the value or state of `current screen widget`.

## Usage Example

```csharp
var widget = new OptionsItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)