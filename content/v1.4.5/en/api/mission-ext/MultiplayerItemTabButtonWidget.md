---
title: "MultiplayerItemTabButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerItemTabButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerItemTabButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerItemTabButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer/MultiplayerItemTabButtonWidget.cs`

## Overview

`MultiplayerItemTabButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerItemTabButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemType` | `public string ItemType { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerItemTabButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)