---
title: "MissionMultiplayerHUDExtensionUIHandler"
description: "Auto-generated class reference for MissionMultiplayerHUDExtensionUIHandler."
---
# MissionMultiplayerHUDExtensionUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerHUDExtensionUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MissionMultiplayerHUDExtensionUIHandler.cs`

## Overview

`MissionMultiplayerHUDExtensionUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionMultiplayerHUDExtensionUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionMultiplayerHUDExtensionUIHandler>();
```

## See Also

- [Area Index](../)