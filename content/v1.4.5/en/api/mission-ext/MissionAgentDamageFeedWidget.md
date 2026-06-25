---
title: "MissionAgentDamageFeedWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentDamageFeedWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentDamageFeedWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentDamageFeedWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.DamageFeed/MissionAgentDamageFeedWidget.cs`

## Overview

`MissionAgentDamageFeedWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MissionAgentDamageFeedWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var widget = new MissionAgentDamageFeedWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)