---
title: "TooltipExtensionWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipExtensionWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TooltipExtensionWidget

**Namespace:** TaleWorlds.GauntletUI.TooltipExtensions
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TooltipExtensionWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.TooltipExtensions/TooltipExtensionWidget.cs`

## Overview

`TooltipExtensionWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TooltipExtensionWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TooltipWidget` | `public Widget TooltipWidget { get; }` |

## Usage Example

```csharp
var widget = new TooltipExtensionWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)