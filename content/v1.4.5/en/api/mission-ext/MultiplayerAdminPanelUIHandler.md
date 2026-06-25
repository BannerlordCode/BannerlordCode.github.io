---
title: "MultiplayerAdminPanelUIHandler"
description: "Auto-generated class reference for MultiplayerAdminPanelUIHandler."
---
# MultiplayerAdminPanelUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminPanelUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MultiplayerAdminPanelUIHandler.cs`

## Overview

`MultiplayerAdminPanelUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MultiplayerAdminPanelUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MultiplayerAdminPanelUIHandler>();
```

## See Also

- [Area Index](../)