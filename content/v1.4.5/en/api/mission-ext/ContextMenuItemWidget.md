---
title: "ContextMenuItemWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContextMenuItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ContextMenuItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContextMenuItemWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuItemWidget.cs`

## Overview

`ContextMenuItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ContextMenuItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TypeIconWidget` | `public Widget TypeIconWidget { get; set; }` |
| `ActionButtonWidget` | `public ButtonWidget ActionButtonWidget { get; set; }` |
| `TypeIconState` | `public string TypeIconState { get; set; }` |
| `CanBeUsed` | `public bool CanBeUsed { get; set; }` |

## Usage Example

```csharp
var widget = new ContextMenuItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)