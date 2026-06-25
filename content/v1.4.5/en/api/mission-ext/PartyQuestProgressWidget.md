---
title: "PartyQuestProgressWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyQuestProgressWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyQuestProgressWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyQuestProgressWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyQuestProgressWidget.cs`

## Overview

`PartyQuestProgressWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PartyQuestProgressWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemCount` | `public int ItemCount { get; set; }` |
| `DividerContainer` | `public ListPanel DividerContainer { get; set; }` |
| `DividerBrush` | `public Brush DividerBrush { get; set; }` |

## Usage Example

```csharp
var widget = new PartyQuestProgressWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)