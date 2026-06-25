---
title: "MissionMultiplayerServerStatusUIHandler"
description: "Auto-generated class reference for MissionMultiplayerServerStatusUIHandler."
---
# MissionMultiplayerServerStatusUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerServerStatusUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MissionMultiplayerServerStatusUIHandler.cs`

## Overview

`MissionMultiplayerServerStatusUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionMultiplayerServerStatusUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionMultiplayerServerStatusUIHandler>();
```

## See Also

- [Area Index](../)