---
title: "CardSelectionPopupButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CardSelectionPopupButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CardSelectionPopupButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CardSelectionPopupButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CardSelectionPopupButtonWidget.cs`

## Overview

`CardSelectionPopupButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CardSelectionPopupButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertiesContainer` | `public CircularAutoScrollablePanelWidget PropertiesContainer { get; set; }` |

## Key Methods

### SetState
`public override void SetState(string stateName)`

**Purpose:** Sets the value or state of `state`.

## Usage Example

```csharp
var widget = new CardSelectionPopupButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)