---
title: "EncyclopediaListItemButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaListItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs`

## Overview

`EncyclopediaListItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EncyclopediaListItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ListItemNameTextWidget` | `public TextWidget ListItemNameTextWidget { get; set; }` |
| `ListComparedValueTextWidget` | `public TextWidget ListComparedValueTextWidget { get; set; }` |
| `InfoAvailableItemNameBrush` | `public Brush InfoAvailableItemNameBrush { get; set; }` |
| `InfoUnvailableItemNameBrush` | `public Brush InfoUnvailableItemNameBrush { get; set; }` |
| `IsInfoAvailable` | `public bool IsInfoAvailable { get; set; }` |
| `ListItemId` | `public string ListItemId { get; set; }` |

## Key Methods

### OnThisLateUpdate
`public void OnThisLateUpdate(float dt)`

**Purpose:** Called when the `this late update` event is raised.

## Usage Example

```csharp
var widget = new EncyclopediaListItemButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)