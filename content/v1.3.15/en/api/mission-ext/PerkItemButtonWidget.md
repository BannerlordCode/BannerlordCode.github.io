---
title: "PerkItemButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PerkItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkItemButtonWidget.cs`

## Overview

`PerkItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PerkItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotEarnedPerkBrush` | `public Brush NotEarnedPerkBrush { get; set; }` |
| `EarnedNotSelectedPerkBrush` | `public Brush EarnedNotSelectedPerkBrush { get; set; }` |
| `InSelectionPerkBrush` | `public Brush InSelectionPerkBrush { get; set; }` |
| `EarnedActivePerkBrush` | `public Brush EarnedActivePerkBrush { get; set; }` |
| `EarnedNotActivePerkBrush` | `public Brush EarnedNotActivePerkBrush { get; set; }` |
| `EarnedPreviousPerkNotSelectedPerkBrush` | `public Brush EarnedPreviousPerkNotSelectedPerkBrush { get; set; }` |
| `PerkVisualWidgetParent` | `public BrushWidget PerkVisualWidgetParent { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `PerkVisualWidget` | `public Widget PerkVisualWidget { get; set; }` |
| `PerkState` | `public int PerkState { get; set; }` |
| `AlternativeType` | `public int AlternativeType { get; set; }` |

## Usage Example

```csharp
var widget = new PerkItemButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)