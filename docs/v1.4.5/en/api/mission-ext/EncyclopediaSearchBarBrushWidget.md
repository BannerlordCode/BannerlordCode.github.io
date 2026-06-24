<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaSearchBarBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaSearchBarBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaSearchBarBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia/EncyclopediaSearchBarBrushWidget.cs`

## Overview

`EncyclopediaSearchBarBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EncyclopediaSearchBarBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShowResults` | `public bool ShowResults { get; set; }` |
| `SearchInputWidget` | `public EditableTextWidget SearchInputWidget { get; set; }` |
| `SearchResultPanel` | `public ScrollablePanel SearchResultPanel { get; set; }` |
| `MinCharAmountToShowResults` | `public int MinCharAmountToShowResults { get; set; }` |

## Usage Example

```csharp
var widget = new EncyclopediaSearchBarBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)