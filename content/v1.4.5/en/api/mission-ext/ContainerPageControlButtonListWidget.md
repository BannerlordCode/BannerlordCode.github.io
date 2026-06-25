---
title: "ContainerPageControlButtonListWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContainerPageControlButtonListWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ContainerPageControlButtonListWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContainerPageControlButtonListWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContainerPageControlButtonListWidget.cs`

## Overview

`ContainerPageControlButtonListWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ContainerPageControlButtonListWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PageButtonTemplate` | `public ButtonWidget PageButtonTemplate { get; set; }` |
| `FullButtonBrush` | `public string FullButtonBrush { get; set; }` |
| `EmptyButtonBrush` | `public string EmptyButtonBrush { get; set; }` |
| `PageButtonItemsListPanel` | `public ListPanel PageButtonItemsListPanel { get; set; }` |

## Key Methods

### ContainerPageControlButtonListWidget
`public class ContainerPageControlButtonListWidget(UIContext context)`

**Purpose:** Handles logic related to `container page control button list widget`.

## Usage Example

```csharp
var widget = new ContainerPageControlButtonListWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)