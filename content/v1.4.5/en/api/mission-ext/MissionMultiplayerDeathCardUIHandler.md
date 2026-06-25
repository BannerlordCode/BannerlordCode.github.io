---
title: "MissionMultiplayerDeathCardUIHandler"
description: "Auto-generated class reference for MissionMultiplayerDeathCardUIHandler."
---
# MissionMultiplayerDeathCardUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerDeathCardUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MissionMultiplayerDeathCardUIHandler.cs`

## Overview

`MissionMultiplayerDeathCardUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionMultiplayerDeathCardUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionMultiplayerDeathCardUIHandler>();
```

## See Also

- [Area Index](../)