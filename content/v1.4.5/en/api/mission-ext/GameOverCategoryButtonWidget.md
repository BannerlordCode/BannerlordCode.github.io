---
title: "GameOverCategoryButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverCategoryButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameOverCategoryButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameOverCategoryButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver/GameOverCategoryButtonWidget.cs`

## Overview

`GameOverCategoryButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GameOverCategoryButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CategoryID` | `public string CategoryID { get; set; }` |

## Usage Example

```csharp
var widget = new GameOverCategoryButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)