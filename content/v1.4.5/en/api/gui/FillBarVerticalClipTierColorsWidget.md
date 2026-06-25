---
title: "FillBarVerticalClipTierColorsWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FillBarVerticalClipTierColorsWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FillBarVerticalClipTierColorsWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarVerticalClipTierColorsWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs`

## Overview

`FillBarVerticalClipTierColorsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `FillBarVerticalClipTierColorsWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxedColor` | `public string MaxedColor { get; set; }` |
| `HighColor` | `public string HighColor { get; set; }` |
| `MediumColor` | `public string MediumColor { get; set; }` |
| `LowColor` | `public string LowColor { get; set; }` |

## Key Methods

### FillBarVerticalClipTierColorsWidget
`public class FillBarVerticalClipTierColorsWidget(UIContext context)`

**Purpose:** Handles logic related to `fill bar vertical clip tier colors widget`.

## Usage Example

```csharp
var widget = new FillBarVerticalClipTierColorsWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)