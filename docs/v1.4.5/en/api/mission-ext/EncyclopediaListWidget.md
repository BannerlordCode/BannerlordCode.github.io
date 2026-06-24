<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaListWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia/EncyclopediaListWidget.cs`

## Overview

`EncyclopediaListWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EncyclopediaListWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LastSelectedItemId` | `public string LastSelectedItemId { get; set; }` |
| `ItemList` | `public ListPanel ItemList { get; set; }` |
| `ItemListScroll` | `public ScrollbarWidget ItemListScroll { get; set; }` |

## Usage Example

```csharp
var widget = new EncyclopediaListWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)