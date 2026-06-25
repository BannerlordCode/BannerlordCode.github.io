---
title: "MultiplayerGeneralKillFeedWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGeneralKillFeedWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerGeneralKillFeedWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGeneralKillFeedWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed/MultiplayerGeneralKillFeedWidget.cs`

## Overview

`MultiplayerGeneralKillFeedWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerGeneralKillFeedWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `VerticalPaddingAmount` | `public float VerticalPaddingAmount { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerGeneralKillFeedWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)