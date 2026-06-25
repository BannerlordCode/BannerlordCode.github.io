---
title: "SingleplayerPersonalKillFeedWidget"
description: "Auto-generated class reference for SingleplayerPersonalKillFeedWidget."
---
# SingleplayerPersonalKillFeedWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleplayerPersonalKillFeedWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.KillFeed.Personal/SingleplayerPersonalKillFeedWidget.cs`

## Overview

`SingleplayerPersonalKillFeedWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SingleplayerPersonalKillFeedWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SingleplayerPersonalKillFeedWidget
`public class SingleplayerPersonalKillFeedWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SingleplayerPersonalKillFeedWidget from the subsystem API first
SingleplayerPersonalKillFeedWidget singleplayerPersonalKillFeedWidget = ...;
var result = singleplayerPersonalKillFeedWidget.SingleplayerPersonalKillFeedWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SingleplayerPersonalKillFeedWidget widget = ...;
```

## See Also

- [Area Index](../)