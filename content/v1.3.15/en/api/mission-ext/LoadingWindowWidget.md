---
title: "LoadingWindowWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadingWindowWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadingWindowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Loading
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LoadingWindowWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Loading/LoadingWindowWidget.cs`

## Overview

`LoadingWindowWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `LoadingWindowWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimWidget` | `public Widget AnimWidget { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |

## Usage Example

```csharp
var widget = new LoadingWindowWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)