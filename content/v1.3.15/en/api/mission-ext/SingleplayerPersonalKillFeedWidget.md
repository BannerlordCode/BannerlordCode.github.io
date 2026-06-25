---
title: "SingleplayerPersonalKillFeedWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleplayerPersonalKillFeedWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SingleplayerPersonalKillFeedWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleplayerPersonalKillFeedWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/KillFeed/Personal/SingleplayerPersonalKillFeedWidget.cs`

## Overview

`SingleplayerPersonalKillFeedWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SingleplayerPersonalKillFeedWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var widget = new SingleplayerPersonalKillFeedWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)