---
title: "SettlementNameplateItemWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementNameplateItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementNameplateItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementNameplateItemWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate/SettlementNameplateItemWidget.cs`

## Overview

`SettlementNameplateItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SettlementNameplateItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsOverWidget` | `public bool IsOverWidget { get; }` |
| `QuestType` | `public int QuestType { get; set; }` |
| `IssueType` | `public int IssueType { get; set; }` |
| `InspectedIconWidget` | `public Widget InspectedIconWidget { get; set; }` |
| `PortIconWidget` | `public Widget PortIconWidget { get; set; }` |
| `SettlementPartiesGridWidget` | `public GridWidget SettlementPartiesGridWidget { get; set; }` |
| `MapEventVisualWidget` | `public MapEventVisualBrushWidget MapEventVisualWidget { get; set; }` |
| `WidgetToShow` | `public Widget WidgetToShow { get; set; }` |
| `SettlementBannerWidget` | `public MaskedTextureWidget SettlementBannerWidget { get; set; }` |
| `SettlementNameTextWidget` | `public TextWidget SettlementNameTextWidget { get; set; }` |
| `ParleyIconWidget` | `public Widget ParleyIconWidget { get; set; }` |

## Key Methods

### ParallelUpdate
`public void ParallelUpdate(float dt)`

**Purpose:** Handles logic related to `parallel update`.

## Usage Example

```csharp
var widget = new SettlementNameplateItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)