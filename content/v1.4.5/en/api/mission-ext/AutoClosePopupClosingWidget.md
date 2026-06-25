---
title: "AutoClosePopupClosingWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AutoClosePopupClosingWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AutoClosePopupClosingWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoClosePopupClosingWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement/AutoClosePopupClosingWidget.cs`

## Overview

`AutoClosePopupClosingWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `AutoClosePopupClosingWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Target` | `public Widget Target { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |
| `IncludeTarget` | `public bool IncludeTarget { get; set; }` |

## Key Methods

### ShouldClosePopup
`public bool ShouldClosePopup()`

**Purpose:** Handles logic related to `should close popup`.

## Usage Example

```csharp
var widget = new AutoClosePopupClosingWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)