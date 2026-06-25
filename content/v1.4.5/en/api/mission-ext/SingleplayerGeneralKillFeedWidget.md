---
title: "SingleplayerGeneralKillFeedWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleplayerGeneralKillFeedWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SingleplayerGeneralKillFeedWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleplayerGeneralKillFeedWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.General/SingleplayerGeneralKillFeedWidget.cs`

## Overview

`SingleplayerGeneralKillFeedWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SingleplayerGeneralKillFeedWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `VerticalPaddingAmount` | `public float VerticalPaddingAmount { get; set; }` |

## Usage Example

```csharp
var widget = new SingleplayerGeneralKillFeedWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)