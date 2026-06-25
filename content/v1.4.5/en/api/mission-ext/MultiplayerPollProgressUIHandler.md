---
title: "MultiplayerPollProgressUIHandler"
description: "Auto-generated class reference for MultiplayerPollProgressUIHandler."
---
# MultiplayerPollProgressUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPollProgressUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MultiplayerPollProgressUIHandler.cs`

## Overview

`MultiplayerPollProgressUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MultiplayerPollProgressUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MultiplayerPollProgressUIHandler>();
```

## See Also

- [Area Index](../)