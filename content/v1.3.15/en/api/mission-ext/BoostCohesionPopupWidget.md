---
title: "BoostCohesionPopupWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoostCohesionPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoostCohesionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoostCohesionPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostCohesionPopupWidget.cs`

## Overview

`BoostCohesionPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `BoostCohesionPopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClosePopupButton` | `public ButtonWidget ClosePopupButton { get; set; }` |

## Key Methods

### ClosePopup
`public void ClosePopup(Widget widget)`

**Purpose:** Handles logic related to `close popup`.

## Usage Example

```csharp
var widget = new BoostCohesionPopupWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)