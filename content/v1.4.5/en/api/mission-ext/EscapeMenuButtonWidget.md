---
title: "EscapeMenuButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EscapeMenuButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EscapeMenuButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.EscapeMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EscapeMenuButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.EscapeMenu/EscapeMenuButtonWidget.cs`

## Overview

`EscapeMenuButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EscapeMenuButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPositiveBehaviored` | `public bool IsPositiveBehaviored { get; set; }` |
| `PositiveBehaviorBrush` | `public Brush PositiveBehaviorBrush { get; set; }` |

## Usage Example

```csharp
var widget = new EscapeMenuButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)